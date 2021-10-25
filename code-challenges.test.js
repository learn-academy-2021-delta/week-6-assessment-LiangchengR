// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

//JEST TEST: test function occupation which will takes in an array of objects and returns an array with a string sentence about each person with their name capitalized.
describe("func occupation", () => {
  it("should take in an array of objects and return an array with a string sentence about each person with their name capitalized", () => {
    var people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]    
    expect(occupation(people)).toEqual(
      ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    )
  })
})
//test fails: ReferenceError: occupation is not defined 



// b) Create the function that makes the test pass.

//FOR LOOPS METHOD ==========================================================================================

//create func called occupation that takes in array param
// const occupation = (array) =>{
//   //create an empty array
//   let sentences = [];

//     //use for loop to iterate through array of objects
//     for(let i = 0; i < array.length; i++){
//       //(for readability) create var to reference object's value assigned to name and split into array by spaces 
//       let namesArray = array[i].name.split(" ");

//       //for loop to iterate through array namesArray
//       for(let j = 0; j < namesArray.length; j++){
//         //(for readability) create var to reference each part of name 
//         let name = namesArray[j];

//         //reassign each name element to a capitalized version of itself
//         namesArray[j] = name[0].toUpperCase() + name.slice(1, name.length);
//       }
//       //stores concatentation of joined array of names and occupation in var sentence
//       let sentence = namesArray.join(" ") + " is " + array[i].occupation + ".";
//       //push each sentence into array sentences
//       sentences.push(sentence);
//     }
//     return sentences;
// }

//originally failed because i noticed i was trying to reassign name when the rest of the function doesn't know what that is. After changing back to objectName[j], it passed.

//Refactor ==========================================================================================
//create func called occupation that takes in array param
const occupation = (objectArray) => {
  
  //return a .map function on the input array
  return objectArray.map(object =>{
    //create an array that takes the object name and splits it into array
    let namesArray = object.name.split(" ");

    //store another .map on the namesArray
    let capNames = namesArray.map(name =>{
      //.map should replace each item i the array with a capitalized version
      return name[0].toUpperCase() + name.substring(1);
    })

    //.map should return a string where capitalized names and occupation are concatenated
    return capNames.join(" ") + " is " + object.occupation + ".";
  })
}

//Refactor with online solutions ==========================================================================================
// const occupation = (objectArray) =>{
//   //map through array of objects
//   return objectArray.map(object =>{
//     //take each object name and use regex, when they find a match, uppercase the character and store in a var
//     // where / escapes to regex, g searches throughout the whole string, ^ indicates start of string, \w represents word, {1} is a quantifier meaning exactly 1 character and \s means space
//     // summarized: look for the first character of the first word of the string OR the first character of the first word of a string after a space
//     //when match, uppercase
//     let cap = object.name.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase())

//     //return the capitalized name concatenated with the occupation
//     return cap + " is " + object.occupation + ".";
//   }) 
// }
//enjoying regex little by little....test passed



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

//JEST TEST: test function moduloThree that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
describe("func moduloThree", () => {
  it("should take in array of mixed data and return array of only remainders of numbers divided by three", () => {
    var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]

    expect(moduloThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(moduloThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
//test failed: ReferenceError: moduloThree is not defined


// b) Create the function that makes the test pass.
//create func moduloThree that takes in array
// const moduloThree = (array) => {
//   //create empty array
//   let remainders = [];

//   //iterate through input array
//   for(let i = 0; i < array.length; i++){
//     //if typeof value === 'number' array.push(value%3)
//     typeof array[i] === 'number' && remainders.push(array[i]%3);
//   }
//   return remainders;
// }
//test passes!

//Refactor ==========================================================================================

const moduloThree = (array) => {
  //empty array for modulo remainders
  let remainders = [];
  //foreach on input array, if type of number then push remainder of mod 3
  array.forEach(value => typeof value === 'number' && remainders.push(value%3))
  return remainders
}
//tried to look into different highorder functions but nothing really interesting, different, or more efficient than just iterating through the array and throwing conditionals
//test passed!


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

//JEST TEST: test function cubeAndSum that takes in an array of numbers and returns the sum of all the numbers cubed.
describe("function cubeAndSum", () => {
  it("should take in an array of numbers and returns sum of all numbers cubed", () => {
    var cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    var cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125

    expect(cubeAndSum(cubeAndSum1)).toEqual(99)
    expect(cubeAndSum(cubeAndSum2)).toEqual(1125)
  })
})
//test fails: ReferenceError: cubeAndSum is not defined


// b) Create the function that makes the test pass.

//create func cubeAndSum that takes array param
// const cubeAndSum = (array) => {
//   //create sum variable
//   let sum = 0;

//   //iterate through array 
//   for(let i = 0; i<array.length; i++){
//     //add each cubed variable to the sum variable
//     sum += array[i]**3;
//   }
//   return sum;
// }
//test passed!

//Refactor ==========================================================================================
const cubeAndSum = (array) => {
  //use .reduce to iterate through array
  //reduce initializes a variable sum at 0 and adds each value cubed to sum
  return array.reduce((sum, a) => sum += a**3, 0)
}
//needed to look up reduce again, but I found some fun stuff
//cool use is pushing to empty arrays or objects
//.reduce (() => , []) or .reduce (() => , {}) 
//test passed!
