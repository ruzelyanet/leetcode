
// nums[i] // Текущая вершина
// От этой вершина нужно проверить левую сторону
// Двигаемся в право по условию, если правая сторона равна текущей, идем дальше и проверяем следующую
// Иначе если больше или меньне применяем уловие холм или долина

// Нужно определить начало группы и конец группы

export function countHillValley(nums: number[]): number {
    let left = 0, right = 2, count = 0
    while (right < nums.length) {
        if ((nums[left] < nums[right - 1] && nums[right] < nums[right - 1]) || (nums[left] > nums[right - 1] && nums[right] > nums[right - 1])) {
            left = right - 1
            count++
        }
        right++
    }
    return count
};

export default {
    render() {
        return `
            <section>
                <h1>2210. Count Hills and Valleys in an Array</h1>

                ${countHillValley([8,2,5,7,7,2,10,3,6,2])}

            </section>
    `;
    }
}