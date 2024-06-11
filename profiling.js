const data = [
    {
        name: "Pranav",
        marks: {
            sem1: {
                english: 20,
                math: 40
            },
            sem2: {
                english: 30,
                math: 40
            }
        },
        address:{
            city: 'Dumra',
            landmark: 'Near School'
        }
    },
    {
        name: "Prem",
        marks: {
            sem1: {
                english: 20,
                math: 40
            },
            sem2: {
                english: 80,
                math: 90
            }
        },
        address:{
            city: 'Dumra',
            landmark: 'Near School'
        }
    },
    {
        name: "Alok",
        marks: {
            sem1: {
                english: 33,
                math: 50
            },
            sem2: {
                english: 62,
                math: 67
            }
        },
        address:{
            city: 'Dumra',
            landmark: 'Near School'
        }
    },
    {
        name: "Raman",
        marks: {
            sem1: {
                english: 70,
                math: 60
            },
            sem2: {
                english: 50,
                math: 50
            }
        },
        address:{
            city: 'Dumra',
            landmark: 'Near School'
        }
    },
    {
        name: "Vikash",
        marks: {
            sem1: {
                english: 80,
                math: 10
            },
            sem2: {
                english: 90,
                math: 60
            }
        },
        address:{
            city: 'Dumra',
            landmark: 'Near School'
        }
    },
];

// each subject marks - 100
// 33 - fail.

// sem - 3

// const and let cannot be redeclare. But var can. SImply means we cannot create a const or let variable 2 times. 
// 

const abc = "Suman";
// const abc = "jsaskdj";
// abc = "skkasldkas"; //error

// console.log(abc)

let xyz = "Suman";
// let xyz = "Lok";
xyz = "Prem" // 

// console.log(xyz)

var m = "";
var m ="Suman"
m = "Ok" // 

// console.log('M', m)

function noOfStudentQualified(studentData){

}

noOfStudentQualified(data[1])





