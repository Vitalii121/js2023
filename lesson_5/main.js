// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let ploschaPriam = (a, b) => a * b;
console.log(ploschaPriam(3, 2));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let ploschaKola = (r) => {
    const PI = 3.14;
    let radius = r ** 2;
    return PI * radius;
}
console.log(ploschaKola(4));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let ploschaCilindra = (h, r) => 2 * 3.14 * h * r;
console.log(ploschaCilindra(2, 2))
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
]

let lopper = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
lopper(users);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraf = (text) => document.write(`<p>${text}</p>`);
paragraf('qwerthbvg');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let listCreator = (text) => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
listCreator('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, eos!');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let creatorListtwo = (text, qwantity) => {
    document.write(`<ul>`);
    for (let i = 0; i < qwantity; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
creatorListtwo('lorem ipsum.', 4);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let creatorList = (arr) => {
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
}
creatorList(['JavaScript Complex', 'Java Complex', 'Python Complex', 'QA Complex', 'Fullstack', 'Frontend']);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let creatorDiv = (arr) => {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`);
    }
}
creatorDiv(users);
// - створити функцію яка повертає найменьше число з масиву
let minNamber = (arr) => {
    let min = arr[0];
    for (const arrElement of arr) {
        if (arrElement < min) {
            min = arrElement;
        }
    }
    return min;
}
console.log(minNamber([4, -332, 11, 3, 6, 8, 2, 987]));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumArr = (arr) => {
    let result = 0;
    for (const arrElement of arr) {
        result = result + arrElement;
    }
    return result;
}
console.log(sumArr([4, -332, 11, 3, 6, 8, 2, 987]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    let num = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num;
    return console.log(arr);
}
swap([11, 22, 33, 44], 0, 1)
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let result = 0;
    for (const exchangeCurElement of exchangeCurrency) {
        if (exchangeCurElement.currency === currencyValues) {
            return console.log(result = `${sumUAH / exchangeCurElement.value}  ${exchangeCurElement.currency}`);
        } else if (exchangeCurElement.currency !== currencyValues) {
            return console.log('Wrong');
        }
    }

}
(exchange(10000, 'USD', [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}]));


