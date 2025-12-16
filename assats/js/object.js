const object = {
    name:"sabbir", 
    age: 44,
    details:{
        job: "no",
        isMarrid: true,
    } 
}
// console.log(object.details.isMarrid);

const numbers =[1, 2, 3, 4, 5, 6];
const newArray = numbers.map(number => number +1);
// console.log(newArray);

const num1 = 10;
const num2 = "10"; 

if(num1 == num2){
    console.log("This Is Wqual Value");
}
else{
    console.log("This Is not Equal");
}

function sum( num1, num2){
    const sum = num1 + num2;
    return sum
}
 