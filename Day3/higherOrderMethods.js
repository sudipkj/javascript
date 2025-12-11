// reduce with arrays

const arr = [10,4,5,71,35,16,11,32,47]

const sum = arr.reduce((acc, curr, index, array)=> {
    console.log(acc, curr, index)
    return acc+= curr
},0)
console.log(sum)