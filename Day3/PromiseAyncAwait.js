
const promise = new Promise(function (resolve, reject) {
    console.log('Promise is called')
    setTimeout(() => {
        console.log("result arrived")
        resolve('Success')
    }, 5000)
})
promise.then((resolved) => {
    console.log(resolved)
}).catch((reject) => {
    console.log(reject)
})

async function test() {
    let result = await promise
    console.log(result);
}
test()
console.log('Last line');