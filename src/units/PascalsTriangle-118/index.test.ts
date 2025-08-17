import { generate } from './index'

describe('unit - PascalsTriangle-118', () => {
    it('1 - test', () => {
        expect(generate(5)).toStrictEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]])
    })
})