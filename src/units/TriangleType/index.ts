export function triangleType(nums: number[]): string {
    const [a, b, c] = nums

    if(!(a + b > c) || !(a + c > b) || !(b + c > a)) return 'none'

    const scales = new Set<number>(nums)

    const names: { [key: string]: string } = {
        1: 'equilateral', // равносторонний
        2: 'isosceles', // равнобедренный
        3: 'scalene' // разносторонний
    }

    return names[scales.size]
}

export default {
    render() {
        return `
            <section>
                <h1>3024. Type of Triangle</h1>
                ${triangleType([5,3,8])}
            </section>
    `;
    }
}