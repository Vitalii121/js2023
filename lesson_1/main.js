// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let hello = 'hello';
console.log(hello);
let owu = 'owu';
console.log(owu);
let com = 'com';
console.log(com);
let ua = 'ua';
console.log(ua);
let one = 1;
console.log(one);
let ten = 10;
console.log(ten);
let number = -999;
console.log(number);
let ott = 123;
console.log(ott);
let pi = 3.14;
console.log(pi);
let float = 2.7;
console.log(float);
let sixteen = 16;
console.log(sixteen);
let bool_t = true;
console.log(bool_t);
let bool_f = false;
console.log(bool_f);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Vitalii';
let middleName = 'Petrovich';
let lastName = 'Parashchuk';
let person = firstName+' '+middleName+' '+lastName;
// let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let first_name=prompt('your first name');
let middle_name=prompt('your middle name');
let age = prompt('your age');
// let user = first_name + ' '+ middle_name+' '+ 'age' + ' ' +age;
let user = `${first_name} ${middle_name}, age ${age}`;
console.log(user);

