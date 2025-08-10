export function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
    let unplaced = 0

    for(let i = 0; i < fruits.length; i++) {
        const foundBasket: number | undefined = baskets.find(b => b >= fruits[i])

        if(!foundBasket) {
            unplaced++
        } else {
            baskets.splice(baskets.indexOf(foundBasket), 1)
        }
    }

    return unplaced
}

export default {
    render() {
        return `
            <section>
                <h1>3477. Fruits Into Baskets II</h1>
                <pre>${ numOfUnplacedFruits([4,2,5], [3,5,4]) }</pre>
            </section>
    `;
    }
}