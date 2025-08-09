// Используем двойной указатель (left/right) и множество seen:
// •	Двигаем right, пока элементы уникальны
// •	Если встречаем дубликат — сдвигаем left, убирая элементы из окна и множества
// •	Всегда обновляем текущую сумму и максимальную

export function maximumUniqueSubarray(nums: number[]): number {
    const seen = new Set<number>()
    let left = 0
    let sum = 0
    let maxSum = 0

    for(let right = 0; right < nums.length; right++) {
        while(seen.has(nums[right])) {
            seen.delete(nums[left])
            sum -= nums[left]
            left++
        }

        seen.add(nums[right])
        sum += nums[right]
        maxSum = Math.max(maxSum, sum)
    }

    return maxSum
}

const nums = [4,2,4,5,6]

export default {
    render() {
        return `
            <section>
                <h1>Maximum Erasure Value</h1>
                ${ maximumUniqueSubarray(nums) }
            </section>
    `;
    }
}