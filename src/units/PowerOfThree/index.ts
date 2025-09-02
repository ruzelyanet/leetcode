export function isPowerOfFree(n: number): boolean {
    if (n < 1) return false;

    while (n % 3 === 0) {
        n = n / 3;
    }

    return n === 1;
};

export default {
    render() {
        return `
            <section>
                <h1>Power of Two</h1>
                <pre>${ isPowerOfFree(27) }</pre>
            </section>
    `;
    }
}