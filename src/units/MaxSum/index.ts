
// var maxSum = function (nums: number[]) {
//     const positiveNumsSet = new Set(nums.filter((num) => num > 0));
//     return positiveNumsSet.size === 0 ? Math.max(...nums) : [...positiveNumsSet].reduce((a, b) => a + b, 0)
// }


export function maxSum(nums: number[]) {
    let set:Set<number> = new Set()
    let max:number = nums[0]
    let res:number = 0

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > max) max = nums[i]

        if(nums[i] > 0 && !set.has(nums[i])) {
            set.add(nums[i])
            res += nums[i]
        }
    }

    return Math.max(res, max)
}

export default {
    render() {
        return `
            <section>
                <h1>Max sum</h1>

                ${maxSum([-100])}<br>
                ${maxSum([-20, 20])}

            </section>
    `;
    }
}