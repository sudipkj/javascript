function callback() {
    console.log('First Customer');
}
function callback1() {
    console.log('Second Customer');
}

setTimeout(callback, 5000)
setTimeout(callback1, 1000)
setInterval(callback,1000)