// сумма всех симетричных цифр в диапазоне
// то есть сумма чисел или числа справа должна равне сумме чисел или числа слева

// Делим строку чисел на попалам, и сравниваем их между собой, размер строки должен быть четным

export function countSymmetricIntegers(low: number, high: number): number {
    let count = 0

    for(let i = high; i >= low; i--)  {
        const strNumb = `${i}`

        const size = strNumb.length
        const isValid = !(size % 2) && strNumb.length >= 2

        if(isValid) {
            const segment = size / 2

            let left = 0
            let right = 0

            for(let n = 0; n <= segment-1; n++) {
                left += +strNumb[n]
                right += +strNumb[(strNumb.length - 1) - n]
            }

            if(left === right) {
                count++
            }

        }
    }

    return count
};

// -> из начально была мысль идти от центра
// -> 1200 <- 1215 -> 1230

// ${countSymmetricIntegers(1200, 1230)}
// ${countSymmetricIntegers(1, 100)}
export default {
    render() {
        return `
            <section>
                <h1>Convert Binary Number in a Linked List to Integer</h1>

                ${countSymmetricIntegers(1, 100)}

            </section>
    `;
    }
}