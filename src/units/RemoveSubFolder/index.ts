
export function removeSubfolders(folder: string[]): string[] {
    folder.sort()
    const res = []

    for(const path of folder) {
        if (res.length === 0 || !path.startsWith(res[res.length - 1] + "/")) {
            res.push(path);
        }
    }

    return res
}

const folder = ["/c/f", "/a/b", "/a/f/c", "/a/e/v", "/c/d", "/c/d/e", "/a"]

export default {
    render() {
        return `
            <section>
                <h1>Remove sub folder</h1>
                ${ removeSubfolders(folder) }
            </section>
    `;
    }
}