import { countHillValley } from './index'

describe('unit - PascalsTriangle-118', () => {
    it('1 - test', () => {
        expect(countHillValley([2,4,1,1,6,5])).toStrictEqual(3)
    })
})