

// 1- // Write a program to display the city name if the string begins with "Los" or "New" otherwise return "The city name does not begin with Los or New".


let cityName="Berlin"; 
// cityName="Los Angelos"; 
// cityName="New York"

if (cityName.substring(0,3)==="Los" || cityName.substring(0,3)==="New"){
    console.log(cityName)
}else {
    console.log("The city name does not begin with Los or New")
}


//3-  Write a program to compute the sum of three elements of a given array of integers. The length of the array must be 3.

// Example
// [5, 10, 15] ➞ 30


let myArrayExam= [5, 10, 15]; 
console.log(myArrayExam)
let sumExam=0;

for (i=0; i<myArrayExam.length; i++){
   
    sumExam+=myArrayExam[i];
}
console.log(sumExam)


// 3- Given two strings, firstName and lastName, return a single string in the format "last, first".
// Examples
// "John", "Doe" ➞ "Doe, John"
// "Mary", "Jane" ➞ "Jane, Mary"

let firstName1="John"; 
let lastName1="Doe"; 
let firstName2="Mary"; 
let lastName2="Jane"
console.log(`${lastName1}, ${firstName1}`); 
console.log(lastName2, firstName2)


// 4- Write a program that takes an integer and returns true if it's divisible by 100, otherwise return false.
// Examples
// 1 ➞ false
// 1000 ➞ true
// 100 ➞ true

let integer=1; 
// integer=1000; 
// integer=100; 

if (integer%100===0){
   console.log(true); 
}else {
    console.log(false); 
}; 

console.log(integer); 


// 5- Write a program that adds a string ending to each item in an array.
// Examples & Expected output
// ["clever", "meek", "hurried", "nice"], "ly" ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// ["new", "pander", "scoop"], "er" ➞ ["newer", "panderer", "scooper"]
// ["bend", "sharpen", "mean"], "ing" ➞ ["bending", "sharpening", "meaning"]

let adjecktivArray= ["clever", "meek", "hurried", "nice"]; 
console.log(adjecktivArray);
let adjecktivEnding= "ly";
console.log(adjecktivEnding); 


for (let i=0; i<adjecktivArray.length; i++){
    adjecktivArray[i]+= adjecktivEnding; 
}
console.log(adjecktivArray)


// 6- Write a program that checks whether a number is even or odd and returns "even" for even numbers and "odd" for odd numbers.
// Examples & Expected Output
// 3 ➞ "3 is odd"
// 146 ➞ "146 is even"
// 19 ➞ "19 is odd"

let currentNumber=146;
currentNumber=3; 

for (i=0; i<currentNumber; i++){
    if (currentNumber%2===0){
        console.log(` ${currentNumber} is even number`)
    }else {
        console.log(`${currentNumber} is odd  `)
    }
}

console.log("another solution with for loop")
currentNumber=1; 
let endNumber=146; 

for (; currentNumber <= endNumber; currentNumber++) {
    if (currentNumber % 2 !== 0) {
        console.log(`${currentNumber} is and odd number`);
    } 
    else {
        console.log(`${currentNumber} is and even number`);
    }
}

// 7- You are given 2 out of 3 angles of a triangle, in degrees e.g. 29° and 59°. Write a program that classifies the missing angle (the third angle of a triangle) as either "acute", "right", or "obtuse" based on its degrees.
// Notes

// An acute angle is smaller than 90°.

// A right angle is exactly 90°.

// An obtuse angle is greater than 90° (but smaller than 180°).

// For example: 11°, 20° should return "obtuse", since the missing angle would be 149°, which makes it obtuse.

// Examples

// 27°, 59° ➞ Then the third angle is 92° so it is "obtuse"

// 135°, 11° ➞ The third angle is "acute"

// 45°, 45° ➞ The third angle is a "right angle"


let angle1= 45; 
let angle2=45; 
angle1=27; 
angle2=59; 

let angle3=180-(angle1+angle2); 
console.log(angle3); 

if (angle3<90 && angle3>0){
console.log(angle3, "angle 3 is right acute")
}else if (angle3===90){
    console.log(angle3, "angle 3 is right")
}else if (angle3>90 && angle3<180){
    console.log(angle3, "angle 3 is obtuse")
}else {
    console.log(angle3, "something is wrong ")
}



// 8-Make a variable with the string value of "maria jane jones". Convert each first letter to uppercase. Make sure your code works for any three names e.g. "john james smith".


let nameExam= "john james smith"
// nameExam="maria jane jones";  
console.log(nameExam.toUpperCase(" "))

arrayName=nameExam.split(" ")
console.log(arrayName); 

for (i=0; i<arrayName.length; i++){

    arrayName[i]=arrayName[i][0].toUpperCase()+ arrayName[i].substring(1,arrayName[i].length);
    console.log(arrayName);
}


// 9- Write a program that takes a string and returns the word count. The string will be a sentence.

// Examples Expected output
// "This is an example" ➞ 4
// "One more example for good measure" ➞ 6
// "JavaScript is fun, right?" ➞ 4

let arraySentence= "JavaScript is fun, right?"; 
console.log(arraySentence.length); 
let arrayLength= arraySentence.split(" ").length; 
console.log(arrayLength);


console.log("solution with function")
function wordCount(length){
    return arraySentence.split(" ").length;
}
console.log(wordCount(arraySentence)); 


// 10-Write a program to multiply each value in an array by the number of items in that array.
// Examples
// [2, 3, 1, 0] (2 * 4), (3 * 4), (1 * 4), (0 * 4) ➞ [8, 12, 4, 0]
// [4, 1, 1] ➞ [12, 3, 3]
// [1, 0, 3, 3, 7, 2, 1] ➞ [7, 0, 21, 21, 49, 14, 7]
// [0] ➞ [0]

let arrayValue= [2, 3, 1, 0]; 
console.log(arrayValue); 
let arrayValueLength= arrayValue.length; 
console.log(arrayValueLength); 


for (i=0; i<arrayValueLength; i++){
    arrayValue[i]= arrayValue[i]*arrayValueLength;  
    console.log(arrayValue)
}

console.log(arrayValue)


console.log("End")
