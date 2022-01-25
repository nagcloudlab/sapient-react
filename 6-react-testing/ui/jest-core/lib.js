export function fn1(arr, callback) {
    for (let item of arr) {
        callback(item)
    }
}