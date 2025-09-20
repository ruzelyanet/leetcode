import { triangleType } from './index'

describe('unit - TriangleType', () => {
    it('1 - test', () => {
        expect(triangleType([3, 2, 1])).toStrictEqual('none')
    })
})