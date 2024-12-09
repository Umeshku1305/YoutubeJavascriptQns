// 1. program to remove the duplicate value from the array

// var arr = [1,1,1,1,1,2,2,2,2,23,23,23,23,3,3,3,3,3,3,3,4,4,3,3,4,5,5,5,6,6,6,7,7,8,8,1,10];

// var uniqueArr = [...new Set(arr)];

// console.log(uniqueArr);

// remove the duplicate value from the aray


  

//2.MAXIMUM & MINIMUM

//how to find max/min in a given array in javascript 

// var arrNumber = [1,23,34,26,90,555,1000,20000];
// var maxfunction = (arr) =>{
//     return arr.reduce(function(pre,cur){
//         return pre>cur?pre:cur
//     })
// }
// console.log(maxfunction(arrNumber));



//3. given a string ,reverse each word in the sentence,
//Ex-bhaiyo aaplog kaise ho()

// var str = "bhaiyo aaplog kaise ho";

// var savedstr = str.split(" ").map(function(word){
//     return word.split("").reverse("").join("");
// });

// console.log(savedstr.join(" "));






// 4. Imagine you have an array of objects where each object represents a person with properties for name and age. How can you use filter() to create an array that only includes people older than 18?


// ak samle array hai usme objects declare hai name or age me

// var people = [
//     {name: "umesh", age : 17},
//     {name: "jairam", age: 24},
//     {name: "sunil", age: 12},
//     {name: "binod", age: 27},
//     {name: "dinesh", age: 16},
// ];

//  var adults =  people.filter(person => person.age>18)

//   console.log(adults);




//5.How would you use filter() to create a new array containing only the odd numbers from an existing array of numbers?



// var numbers = [1,3,6,9,4,67,34,87,100,344,445,42];

// var onlyodd = numbers.filter(num => num%2 !== 0);

// console.log(onlyodd);



//6.write a javascript function that reverse a number.

// function reverseNumber(num){
//     num.toString().split("").reverse().join("");
// }

// console.log(reverseNumber(105));

//7.write a javascript funtion that checks whether a passed string is palindrome or not.

// function StringPalChecker(str){
// var reversed = str.split("").reverse().join("");
// return reversed === str;
// }
// console.log(StringPalChecker("lool"));
// console.log(StringPalChecker("loop"));


//8.write a javascript funtion that returns a passed string with letters in alphabetival orders.

// function StringAlphabeticalorder(str){
//      return str.split("").sort().join("");
// };

// console.log(StringAlphabeticalorder("UMESH"));
// console.log(StringAlphabeticalorder("kumar"));
// console.log(StringAlphabeticalorder("mahto"));
// console.log(StringAlphabeticalorder("zfedcba"));



//9.write a javascript funtion that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

// function capatalize(str){
//    var allwords = str.split(" ").map(function(word){
//     return word.charAt(0).toUpperCase() + word.substring(1);

//     })

//     return allwords.join(" ");
// }


// console.log(capatalize("bade bhaiyo kaise ho aaplog "));




//10.







//LOOPS QNS


//11. loop an array and add all members of it?


// var arr = [1,2,3,4,5,78,42,10,34,10];
// var sum = 0;

// arr.forEach(function(elem){
//     sum = sum + elem;
// });

// console.log(sum);




//12. In an array of numbers and strings ,only add those members which are not strings.

// var arr = [12,34,"umesh", 12,"kumar",false ,0 ,13,true];

// var sum = 0;
// arr.forEach(function(elem){
//     if(typeof elem === 'number'){
//         sum = sum + elem;
//     };
// });

// console.log(sum);



//13. loop and array of objects and remove all objects  which don't have gender value male.

// var arr = [
//    {name:"umesh" ,gender:"male" ,age:20},
//    {name:"sonam" ,gender:"female" ,age:25},
//    {name:"nilam" ,gender:"female" ,age:13},
//    {name:"jairam" ,gender:"male" ,age:23},
//    {name:"sunil" ,gender:"male" ,age:29},
//    {name:"nmita" ,gender:"female" ,age:26},
//    {name:"khushi" ,gender:"female" ,age:26},
// ]

// var ans = arr.filter(elem => elem.gender !== 'male');

// console.log(ans)



//14.write a javascript function to clone an array.

// function CloneArr(arr){
//     return [...arr];
// };

// var newArr = [1,2,3,4,5,];
// console.log(newArr);


//dusra tarika solve karne ka 

// function CloneArr(arr){
//     var newArr = [];
   
//     arr.forEach(function(e){
//         newArr.push(e);
//     })
//     return newArr;
// }
// var a = [1,2,3,4,5,6];

// console.log(CloneArr(a));


//15.write a javascript function to get first element of an array .passing a parameter 'n' will return the first 'n' elements of the array


// function indexnmbr(arr , n = 1){
//     if( n <= arr.length){
//         for(var i = 0; i<n; i++){
//             console.log(arr[i]);
//         }

//     }
//     else{
//         console.log(n  + " demand jyada hai");
//     }
// }
// indexnmbr([1,2,3,4,5,6] ,6);