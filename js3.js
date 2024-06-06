const obj = {
    name: 'John',
    age: 30,
    address: {
        city: "New York",
        country: {
            fullName: "United States",
            abbreviation: "US"
        }
    }
}

const keys = Object.keys( obj );
// console.log(keys);

const value = Object.values( obj );
// console.log(value);

const entries = Object.entries( obj );
console.log(entries)

// console.log(obj.address.country.abbreviation);
// console.log(obj['address']['country']['abbreviation']);

// const add = "abbreviation";

// console.log(obj['address']['country'][add]);

// function add1(firstNumber){
//     console.log("AGE", obj[firstNumber])
// }

// add1('address')

// string, number, boolean, object, array

const arr = [ 1,2,3,4,5,6,7,8,9,10 ];
const arr1 = ["string", "Suman", "Kumar"];
// const arrObj = [obj, obj, obj, obj]

const arrObj2 = [
    {
        name: "SUman",
        age: 20
    },
    {
        name: "Prem",
        age: 23
    },
    null,
    undefined,
    10,
    "sjkdkjasdhjkasdas"
];

function abc34(){
    console.log("Hello World")
}

// const bcd = abc34

// console.log(abc34, bcd())

// console.log(arrObj2);

const a = ["Pranav", "prem", "Suman Kumar", "Vikash Mahto", 'Ranjeet Singh']

// console.log(a[1])