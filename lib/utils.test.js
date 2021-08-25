const utils = require("./utils")
// @ponicode
describe("utils.throwIfMissing", () => {
    test("0", () => {
        let callFunction = () => {
            utils.throwIfMissing()
        }
    
        expect(callFunction).not.toThrow()
    })
})
