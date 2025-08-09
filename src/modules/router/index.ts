export interface Component {
    render(params?: Record<string, string>, childContent?: string): string;
}

export interface Route {
    path: string;
    component?: Component | (() => Promise<{ default: Component }>); // поддержка lazy
    children?: Route[];
}

type Next = (path?: string | false) => void;

type Guard = (
    to: RouteLocation,
    from: RouteLocation,
    next: Next
) => void;

interface RouteLocation {
    path: string;
    params: Record<string, string>;
}

export class Router {
    private routes: Route[] = [];
    private root: HTMLElement | null = null;
    private beforeEachGuard: Guard | null = null;

    private currentPath: string = location.pathname;
    private currentParams: Record<string, string> = {};

    constructor(routes: Route[], rootSelector: string) {
        this.routes = routes;
        this.root = document.querySelector(rootSelector);

        window.addEventListener('popstate', () => this.navigate(location.pathname, false));
    }

    public init(): void {
        this.navigate(location.pathname, false);
        this.setupLinksInterceptor();
    }

    public push(path: string): void {
        this.navigate(path, true);
    }

    public beforeEach(guard: Guard): void {
        this.beforeEachGuard = guard;
    }

    private async navigate(path: string, pushState: boolean): Promise<void> {
        const matchResult = this.matchRoutes(path, this.routes);

        if (!matchResult) {
            this.root!.innerHTML = `<h1>404 Not Found</h1>`;
            return;
        }

        const to: RouteLocation = { path, params: matchResult.params };
        const from: RouteLocation = {
            path: this.currentPath,
            params: this.currentParams
        };

        const proceed = (finalPath?: string | false) => {
            if (finalPath === false) return;
            if (typeof finalPath === 'string' && finalPath !== path) {
                return this.push(finalPath);
            }

            if (pushState) {
                history.pushState({}, '', path);
            }

            this.currentPath = path;
            this.currentParams = matchResult.params;

            this.renderMatched(matchResult);
        };

        if (this.beforeEachGuard) {
            this.beforeEachGuard(to, from, proceed);
        } else {
            proceed();
        }
    }

    private async renderMatched(matchResult: {
        matched: Route;
        parent?: Route;
        params: Record<string, string>;
    }): Promise<void> {
        if (!this.root) return;

        const { matched, parent, params } = matchResult;

        const resolvedMatched = await this.resolveComponent(matched.component);
        const resolvedParent = parent
            ? await this.resolveComponent(parent.component)
            : null;

        const childHTML = resolvedMatched.render(params);

        this.root.innerHTML = resolvedParent
            ? resolvedParent.render(params, childHTML)
            : childHTML;

        this.scrollToTop();
    }

    private scrollToTop(): void {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    private async resolveComponent(component?: Route["component"]): Promise<Component> {
        if (!component) return { render: () => '' };

        if (typeof component === 'function') {
            const mod = await component();
            return mod.default;
        }

        return component;
    }

    private matchRoutes(path: string, routes: Route[], parent?: Route): {
        matched: Route;
        parent?: Route;
        params: Record<string, string>;
    } | null {
        for (const route of routes) {
            const paramNames: string[] = [];
            const regexPath = route.path.replace(/:([^/]+)/g, (_, name) => {
                paramNames.push(name);
                return '([^/]+)';
            });

            const regex = new RegExp(`^${regexPath}$`);
            const match = path.match(regex);

            if (match) {
                const params: Record<string, string> = {};
                paramNames.forEach((name, i) => {
                    params[name] = match[i + 1];
                });

                return { matched: route, parent, params };
            }

            if (route.children) {
                const childMatch = this.matchRoutes(path, route.children, route);
                if (childMatch) return childMatch;
            }
        }

        return null;
    }

    private setupLinksInterceptor(): void {
        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A') {
                const anchor = target as HTMLAnchorElement;
                const href = anchor.getAttribute('href');
                if (href && href.startsWith('/')) {
                    e.preventDefault();
                    this.push(href);
                }
            }
        });
    }
}