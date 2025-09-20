import { getDecimalValue, ListNode } from './index'

let head = new ListNode(1, new ListNode(0, new ListNode(1)))

describe('unit - PascalsTriangle-118', () => {
    it('1 - test', () => {
        expect(getDecimalValue(head)).toStrictEqual(5)
    })
})