let max = parseInt(prompt("Enter the maximum number!"));
while (!max){
    max = parseInt(prompt("Enter a vaild number!"));
}
const targetNum = Math.floor(Math.random() * max ) + 1;


let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1; 

while(guess !== targetNum){
    
    if(guess ==='q') break;

    attempts++;

    if(guess > targetNum){
        guess = parseInt(prompt("Too high! Enter a new guess :"));
    }else{
        guess = parseInt(prompt("Too low! Enter a new guess :"));
    }
}

if(guess ==='q'){
    console.log("OK, YOU QUIT!");
}else{
    console.log("CONGRATS YOU WIN!");
    console.log(`You got it! It took you ${attempts} guess`);
}