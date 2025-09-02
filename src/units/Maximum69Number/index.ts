export function maximum69Number (num: number): number {
    const numStr = `${num}`
    const indexFirtMinVal = numStr.indexOf('6')

    return ~indexFirtMinVal ? +(numStr.slice(0, indexFirtMinVal) + '9' + numStr.slice(indexFirtMinVal + 1)) : num
};

export default {
    render() {
        return `
            <section>
                <h1>Maximum 69 Number</h1>
                <pre>${ maximum69Number(9669) }</pre>
            </section>
    `;
    }
}