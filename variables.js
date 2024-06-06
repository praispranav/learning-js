
const abc = [1,2,3,4,5,6]

// abc[0] = 10; // replace 1 with 10

// abc.push(100); // add new item in end


// abc.splice(3 , 1) // first param is index and second param is number of elements to remove
// abc.splice(3 , 1, 300 ) // 3rd params is the new element to add

const slicedArray = abc.slice(0, 3) // [ 1,2,3 ] // first param is start index and second param is end index

// console.log(abc.length)
// console.log(abc);

console.log("Sliced Array", slicedArray.length, slicedArray);

const slicedArray2 = abc.slice(1, 3) // [2,3]
const slicedArray3 = abc.slice(3, 4) // [4]
// console.log(slicedArray2, slicedArray3);

// arrow function
const fsum = (input1, input2) => {
    console.log("Sum")
}
fsum(10,20);

function fsum2(input1, input2){
    console.log("Sum")
}
fsum2(10, 20);