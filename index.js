//assignment 1

//part1:

//q1:

// let x="123";
// let num=Number(x) ;
// num+=7;
// console.log(num);

//q2:

// let x=0;
// if (x==true) {
//     console.log("valid");
// }
// else{console.log("invalid");
// }

//q3:

// for (let i = 1;i < 10;i++) {
// if (i%2==0) {
//     continue;
// }
//     console.log(i);
    
// }

//q4:

// const data=[1,2,3,4,5,6,7,8,9,10];
// const even=data.filter (num=>num%2==0);
// console.log(even);

//q5:

// const data1=[10,20,30]
// const data2=[40,50,60]
// const data=[...data1,...data2]
// console.log(data);

//q6:

// let num=1;
// let day;
// switch (num) {
//     case 1:day="sunday"
//         break;
//     case 2: day="monday"
//     break;

//     case 3:day="tuesday"
//     break;
    
//     case 4:day="wednesday"
//     break;

//     case 5:day="thursday"
//     break;

//     case 6:day="friday"
//     break;

//     case 7:day="saturday"
//     break;

//     default:day="not valid"
//         break;
// }

// console.log(day);

//q7:

// const data=["a","bc","def"]
// const result=data.map(data=>data.length);
// console.log(result);

//q8:

//  function check(n) {
//     if(n%3==0&&n%5==0){
//         return "Divisible by both";
//     }
//      else {return "Not divisible"};
// }
// console.log(check(15));

//q9:

// const square=(n)=>{
//     return n*n;
// }
// console.log(square(5));

//q10:

// function format ({name,age}){
// return `${name} is ${age} years old`;
// }
// const person={name:'Mohamed',age:'26'};
// console.log(format(person));

//q11:

// function sumOfNumbers(...nums) {
//     let sum=0;
//     for (let i= 0 ; i < nums.length ; i++) {
//         sum+=nums[i];
//     }
//     return sum;
// }
// console.log(sumOfNumbers(1,2,3,4,5));

//q12:

// function waitForSuccess() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Success");
//         }, 3000);
//     });
// }

// waitForSuccess().then(message => console.log(message));

//q13:

// function findLargestNumber(arr) {
//     let largest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// const numbers = [1, 3, 7, 2, 4];
// console.log(findLargestNumber(numbers)); 

//q14:

// function Keys(obj) {
//     return Object.keys(obj);
// }

// const person = { name: "Mohamed", age: 26 };
// console.log(Keys(person));

//q15:

// function split(str) {
//     return str.split(" ");
// }

// const sentence = "The quick brown fox";
// console.log(split(sentence)); 

//part2:

//q1:

//foreach:
//بنستخدمها مع ال array بس و مبنستخدمش فيها break or continue

//forof:
//ممكن استخدمها مع كذا حاجة arrays or strings or map or etc , ممكن نستخدم فيها continue or break و ممكن نستخدمها مع async with await



