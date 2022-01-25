import * as calc from './calc'

// Test Fixture
describe("calc functions", () => {


    const data = {}

    beforeAll(() => {
        //.
    })

    afterAll(() => {
        //./
    })

    beforeEach(() => {
        // console.log("beforeEach()")
        data.n1 = 1
        data.n2 = 2;
    })
    afterEach(() => {
        // console.log("afterEach()")
        data.n1 = 0
        data.n2 = 0;
    })
    it("should return 3 on 1+2 ", () => {
        const actual = calc.add(data.n1, data.n2)
        const expected = 3;
        expect(actual).toBe(expected)
    })
    it("should return -1 on 1-2 ", () => {
        const n2 = 2;
        const actual = calc.sub(data.n1, data.n2)
        const expected = -1;
        expect(actual).toBe(expected)
    })

})