
export function minOperations(nums: number[], k: number): number {
    const st = new Set();
    for (const x of nums) {
        if (x < k) {
            return -1;
        } else if (x > k) {
            st.add(x);
        }
    }
    return st.size;
}


export default {
    render() {
        return `
            <section>
                <h1>Minimum Operations to Make Array Values Equal to K</h1>
                ${minOperations([5,2,5,4,1], 2)}
            </section>
    `;
    }
}