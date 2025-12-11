const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    }

    console.log()

// arr.forEach(ele, index,arr) =>  {
//     console.log(ele);
//  }


function * genertor(){

    yield 'Gen 1';
    yield 'Fen 2';
    yield 'Gen 3';

}
const gen = genertor();
console.log(gen.next().value);