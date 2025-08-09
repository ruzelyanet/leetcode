
// Найти два индекса, сумма которых равна target

export function twoSum(nums: number[], target: number): number[] {
    const seen = new Map<number, number>();

    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]

        if(seen.has(complement)) {
            return [seen.get(complement)!, i]
        }

        seen.set(nums[i], i)
    }

    return []
}

const nums: number[] = [-500000000,2,4,-500000000]
const target:  number = -1000000000

console.time('myFunctionTimer')

const ruz:number[] = twoSum(nums, target)

console.timeEnd('myFunctionTimer')

export default {
    render() {
        return `
            <section>
                <h1>Two sum</h1>
                <pre>${ ruz }</pre>
            </section>
    `;
    }
}