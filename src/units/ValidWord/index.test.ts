import { isValid } from './index.ts'

describe('unit - isValid', () => {
    it('1 - test', () => {
        expect(isValid('234Adas')).toStrictEqual(true)
    })
})

