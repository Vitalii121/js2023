// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function ploschaPrm(a, b) {
    return console.log(a * b);
}

ploschaPrm(2, 2)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function ploschaKola(r) {
    const PI = 3.14;
    let radius = r ** 2;
    return console.log(PI * radius);
}

ploschaKola(5);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function ploschaCilindr(h, r) {
    return console.log(2 * 3.14 * h * r);
}

ploschaCilindr(10, 10);

// - створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'olya', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: true}
];

function looper(arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}

looper(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraf(text) {
    document.write(`<p>${text}</p>`)
}

paragraf('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at eius nam natus numquam optio provident rerum sint unde velit!')
paragraf('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at eius nam natus numquam optio provident rerum sint unde velit!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listCreator(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

listCreator('Lorem ipsum.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function listCreator2(text, quantity) {
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${text}</li>`)
    }
}

listCreator2('Lorem ipsum dolor sit amet.', 9);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];

function list(element) {
    for (let i = 0; i < element.length; i++) {
        const elementElement = element[i];
        document.write(`<li>${elementElement}</li>`);
    }
}

list(coursesTitleArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function iteratorObj(array) {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</div>`);
    }
}

iteratorObj(users);


// - створити функцію яка повертає найменьше число з масиву
let arrNums = [6, 4, 2, 5,1];

// function minNumber(arr) {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return document.write(min);
// }
//
// minNumber(arrNums);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sumArr(arrSum) {
    let result = 0;
    for (let i = 0; i < arrSum.length; i++) {
        result = result + arrSum[i];
    }
    return console.log(result);
}

sumArr(arrNums);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
arrayNumbers=[11,22,33,44]
function swap(arr,index1,index2){
    let nums= arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=nums;
    return console.log(arr);
}
swap(arrayNumbers,0,1)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let arrExchange = [{currency:'USD',value:40},{currency:'EUR',value:42}];
function exchange(sumUAH,currencyValues,exchangeCurrency){
    let res=0;
    for (const currencyElement of exchangeCurrency) {
        if(currencyElement.currency === currencyValues){
            res= `${sumUAH/currencyElement.value}  ${currencyElement.currency}`
        }else if(currencyElement.currency !== currencyValues){
            res='wrong';
        }
    }
    return console.log(res);
}
exchange(10000, 'USD', arrExchange);

