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

// for of example

for(element of 'String'){
    console.log('for .. of', element);
}

const obj = {
    name: 'Sudip',
    age : 21,
    domain : 'developer'
}

for(element in obj){
    console.log(obj[element])
}

// map method using array to transform 

const array = [10,20,40,15,36,17]

const newarray = array.map((ele)=> ele * 2).filter((ele)=> ele%10 == 0).sort((a,b)=> a-b);
console.log("map example ",newarray);

