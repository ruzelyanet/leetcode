import { removeSubfolders } from './index.ts'

describe('unit - Remove sub folders', () => {
    it('1 - test', () => {
        expect(removeSubfolders(["/c/f", "/a/b", "/a/f/c", "/a/e/v", "/c/d", "/c/d/e", "/a"])).toStrictEqual(["/a","/c/d","/c/f"])
    })
})

