import { maximumUniqueSubarray } from './index.ts'

describe('unit - Maximum Erasure Value', () => {
    it('Case - 1', () => {
        expect(maximumUniqueSubarray([4,2,4,5,6])).toEqual(17)
    })

    it('Case - 2', () => {
        expect(maximumUniqueSubarray([5,2,1,2,5,2,1,2,5])).toEqual(8)
    })

    it('Case - 3', () => {
        const nums = [187,470,25,436,538,809,441,167,477,110,275,133,666,345,411,459,490,266,987,965,429,166,809,340,467,318,125,165,809,610,31,585,970,306,42,189,169,743,78,810,70,382,367,490,787,670,476,278,775,673,299,19,893,817,971,458,409,886,434]
        expect(maximumUniqueSubarray(nums)).toEqual(16911)
    })
})