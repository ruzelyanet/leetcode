import { numOfUnplacedFruits } from './index'

describe('unit - Fruits Into Baskets II', () => {
    it('1 - test', () => {
        expect(numOfUnplacedFruits([4,2,5], [3,5,4])).toStrictEqual(1)
    })
})