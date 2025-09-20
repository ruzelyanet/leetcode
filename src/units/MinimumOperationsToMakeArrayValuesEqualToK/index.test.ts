import { minOperations } from './index'

describe('unit - Minimum Operations to Make Array Values Equal to K', () => {
    it('1 - test', () => {
        expect(minOperations([5,2,5,4,1], 2)).toStrictEqual(-1)
    })
})