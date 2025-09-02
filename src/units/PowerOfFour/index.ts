export function isPowerOfFour(n: number): boolean {
    if (n < 1) return false;

    while (n % 4 === 0) {
        n = n / 4;
    }

    return n === 1;
};

export default {
    render() {
        return `
            <section>
                <h1>Power of Two</h1>
                <pre>${ isPowerOfFour(16) }</pre>
            </section>
    `;
    }
}