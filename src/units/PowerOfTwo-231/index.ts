// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

export function isPowerOfTwo(n: number): boolean {
    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

export default {
    render() {
        return `
            <section>
                <h1>Power of Two</h1>
                <pre>${ isPowerOfTwo(16) }</pre>
            </section>
    `;
    }
}