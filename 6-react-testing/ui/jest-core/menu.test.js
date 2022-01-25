
import {getFood} from './menu'

jest.setTimeout(10000)

test("should return biryani",()=>{
    return getFood().then(food=>{
        expect(food).toBe('biryani');
    })
})