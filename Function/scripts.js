// Задание 1
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
alert( `number ${i}!` );
}

let i = 0;

do{
    console.log(i);
    i += 1;
} while (i < 4)


// Задание 4
// Создайте функцию findPositiveNumbers()
// 1) Внутри функции должен определяться массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0] .
// Функция должна вывести в консоль все положительные числа по одному.
// 2) Функция должна не выводить числа в консоль, а составить из них новый массив. В самом конце тела функции - вывести новый массив в консоль.
// 3) Функция должна не выводить массив в консоль, а вернуть новый массив из положительных элементов arr.
// 4) Изначальный массив arr должен не описываться внутри функции, а поступать в нее как параметр.

let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];

function findPositiveNumbers(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(findPositiveNumbers(arr));


// Задание 5
// Напишите функцию, которая принимает два параметра: значение и количество элементов. Функция создает новый массив и заполняет его этим значением в указанном количестве.
// Например: из переданных значений ('a', 3) получаем массив ['a', 'a', 'a']

function makeNewMassiwe(count, content) {
    let newArr = [];
    for(let i = 0; i < count; i++){
        newArr.push(content)
    }
    return newArr;
}
console.log(makeNewMassiwe(4, 6));


// Задание 6
// Определите массив, например let arr = [5, 4, 3, 8, 0].
// Создайте функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значению переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// а запуск функции filterFor(arr, 10) дает результат []
// а запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

let arr = [5, 4, 3, 8, 0];
function filterFor(arr, a) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(filterFor(arr, 3));

// Задание 7
// Написать функцию вывода в консоль случайного цвета. Это будет строка вида "rgb(10,55,250)"
// Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// Подсказка: 
// Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. 
// Одна функция может вызывать другую функцию

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
    let newArr = [] 
    newArr.push(getRandomInteger(0, 255));
    return newArr;
}
console.log('rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ")");

// Задание 8
// Написать функцию pow(x, n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат (!!! решить без оператора **)


function exponentation(x, n) {
    let result = x
    for (let i = 1; i < n; i++) {
        result = result * x;
    }
    return result;
}
console.log(exponentation(2, 3));


// Задание 9
// Написать функцию isInteger(x), которая определяет, является ли число целым, и возвращает true либо false.

function isInteger(x){

    for (let i = 0; i < x; i++) {
        if (x % 1 == 0) {
            console.log('true');
        } else {console.log('false')}
    }
    return x;
}
console.log(isInteger(5));


// Задание 10
// Написать функцию, которая принимает целое число n.   
// Внутри функции запустить цикл от 1 до n с шагом 0,5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.
// Пример, при запуске функции с параметром 3:
// "1 integer"
// "1.5 decimal"
// "2 integer"
// "2.5 decimal"

function isInteger(n){
    if (n % 1 == 0){
        for (let i = 0; i < n; i += 0.5){
            if (i % 1 == 0){
                console.log('integer');
            } else {console.log('decimal')}
        }
    }
}
console.log(isInteger(4));