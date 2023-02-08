// // program to check if a number is prime or not

// // take input from user
// let number = parseInt(prompt("Enter a number: "));
// let Prime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

    
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             Prime = false;
//             break;
//         }
//     }

//     if (Prime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }




// let num = 10;
// let primeNum = true;
// let a = 2;
//     while(a<num-1){
//         if(num%a==0){
//         primeNum = false;
//         break;
//     } a++
// }
// if(primeNum==true){
//     console.log("The number is a prime number")
// }else{
//     console.log("The number is not a prime number")
// }


function Prime(){
    let num = 7;
let primeNum = true;
let a = 2;
    while(a<num-1){
        if(num%a==0){
        primeNum = false;
        break;
    } a++
}
if(primeNum==true){
    console.log("The number is a prime number")
}else{
    console.log("The number is not a prime number")
}
}
Prime()