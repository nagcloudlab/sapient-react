import {fn1} from './lib'


test("fn1", () => {
    let arr = [10, 20, 30]
    const mockCallback = jest.fn(item => {});
    fn1(arr, mockCallback)
    expect(mockCallback.mock.calls.length).toBe(arr.length)
})