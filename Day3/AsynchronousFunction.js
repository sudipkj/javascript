
console.log('Step 1 is called')

async function asycnhronous(){

    setTimeout(()=> {
        console.log('asyn function called');
    }, 5000);
}
asycnhronous();

console.log('Step 2 is called')