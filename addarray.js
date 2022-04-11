let numbers = [1, 2, 3, 4, 5, 6];
let sum = 0

function calculate(number){
    sum +=number
}
//Результат 21
numbers.forEach(calculate);
console.log(sum);