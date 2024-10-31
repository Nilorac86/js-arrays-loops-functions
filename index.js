//const numbers = [46,34,10,77];
//console.log (numbers[0]);


// const colors = ["Red","Green","Blue","Pink"];
// console.log(colors.at(3));

// console.log(colors.at(-3));

// const colors = ["Red","Green","Blue","Pink"];
// colors[0]= "Yellow";
// colors [3]= "Purple";
// console.log(colors);

// const colors = ["Red","Green","Blue","Pink","Black"];

// const length= colors.length;
// console.log (length);

// const numbers = [1,2,3,4,5,6,7,8];
// 
// numbers.push(9);
// 
// numbers.push (10,11);
// 
// const newLength = numbers.push(12);
// 
// console.log (newLength);

// const cities= ["Stockholm", "Göteborg","Malmö","Lund"]

// cities.pop();
// console.log(cities);

// const cities= ["Stockholm", "Göteborg","Malmö","Lund"]
// cities.unshift("Landskrona");

// console.log(cities);

// const cities= ["Stockholm", "Göteborg","Malmö","Lund"]
// cities.shift();

// console.log(cities);

// const numbers = (1,4,6,8);

// if (numbers.includes(6)){
//     console.log ("6 finns");
// } else {
//     console.log("nej den finns inte");
// }

// const cities= ["Stockholm", "Göteborg","Malmö","Lund"]

// const citiesAsString= 
// const indexOfMalmo = cities.indexOf("Malmö");

// console.log(cities);
// console.log(indexOfMalmo);

// const cities= ["Stockholm", "Göteborg","Malmö","Lund"]
// const citiesAsString = (cities.join(" - "));
// console.log(citiesAsString);


// const cities= ["Stockholm", "Göteborg","Malmö","Lund", "Landskrona"];

// //cities.splice(1, 1,);
 
// cities.splice(1, 2)

// console.log(cities);

/* let count = 0;

do  {
    count++;
    console.log(count);
} while (count === 0);
   


console.log(`the count is now ${count} after it will be canceled`); */

/* const numbers = [5,2.10,15,27,99];

for (let i = 0;  i < numbers.length ; i++) {
    console.log(numbers[i]);
} */

/* const cars= ["Volvo", "Saab" , "Nissan", "Skoda"];

for (const car of cars){
    console.log(car);
} */


// function greeting (){
//     console.log("Hello there!");
// }

// function greetWithName (name){
//     console.log("Hello " + name + "!");

//     console.log(`Hello ${name}!`);
// }

// function addTwoNumbers(num1, num2){
//     const result = num1 * num2;
//     console.log(`The result is ${result}`);
// }

function divide (num1,num2){
    const result =  num1 / num2;
    return result;
}

const result = divide (10,2);