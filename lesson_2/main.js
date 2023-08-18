// // Масиви та об'єкти:
// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let arr;
// arr = [4, 2, 1, 7, 'hello', 'red', 'LOL', true, false, 'pay'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);
//
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1 = {
//     title: 'White Noise',
//     pageCount: 384,
//     genre: 'non fiction'
// };
// let book2 = {
//     title: 'The War of the Worlds',
//     pageCount: 240,
//     genre: 'horror'
// };
// let book3 = {
//     title: 'The Invisible Man',
//     pageCount: 176,
//     genre: 'horror'
// };
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// let book4 = {
//     title: 'The Invisible Man',
//     pageCount: 176,
//     genre: 'horror',
//     authors: [{name: 'H. G. Wells', age: 45}]
// };
//
// let book5 = {
//     title: 'The War of the Worlds',
//     pageCount: 240,
//     genre: 'non fiction',
//     authors: [{name: 'H. G. Wells', age: 45}]
// };
//
// let book6 = {
//     title: 'Frankenstein',
//     pageCount: 280,
//     genre: 'horror',
//     authors: [{name: 'Mary Shelley', age: 39}]
// };
// // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// //
// let users = [
//     {name: 'Vasil', username: 'loshka', password: 'dtfsyhuh'},
//     {name: 'Oleg', username: 'lopata', password: 'ufyigh'},
//     {name: 'Dima', username: 'dima1', password: 'fwwlrfigh'},
//     {name: 'Olha', username: 'Olha1', password: 'utfvigh'},
//     {name: 'Monika', username: 'Monika1', password: 'uflkjhgf'},
//     {name: 'Olivia', username: 'Olivia', password: 'unbytvrc'},
//     {name: 'Roman', username: 'Roman', password: 'nkeeihf'},
//     {name: 'vlad', username: 'vlad1', password: 'ufyighjsew'},
//     {name: 'Lili', username: 'Lili1', password: 'wiuhdwmdh'},
//     {name: 'Joy', username: 'Joy1', password: 'wihhdduewwll'}
// ];
// console.log(users[0]['password']);
// console.log(users[1]['password']);
// console.log(users[2]['password']);
// console.log(users[3]['password']);
// console.log(users[4]['password']);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);
// //
// // Логічні розгалуження:
// //     - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = +prompt('number');
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }
// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
// let time = +prompt('enter number 0-59');
// if (time > 0 && time <= 15) {
//     console.log('в першу');
// } else if (time > 15 && time <= 30) {
//     console.log('в другу');
// } else if (time > 30 && time <= 45) {
//     console.log('в третю');
// } else if (time > 45 && time <= 59) {
//     console.log('в четверту');
// }
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt('number days 1-31');
// if (day > 0 && day <= 10) {
//     console.log('перша декада');
// } else if (day > 10 && day <= 20) {
//     console.log('друга декада');
// } else if (day > 20 && day <= 31) {
//     console.log('третя декада');
// }
//
// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
// // на цей день(можна замість плану на день, назву дня англійською).
// let numDay = +prompt('enter number day');
// switch (numDay) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
// }
//
// //     - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.
// let a = +prompt('first number');
// let b = +prompt('second number');
// if (a > b) {
//     console.log('this number is greater ' + a);
// } else if (a < b) {
//     console.log('this number is greater ' + b);
// } else if (a === b) {
//     console.log('these numbers are equal');
// }else{
//     console.log('error');
//}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x = 0;
if (x) {
    console.log(x);
} else {
    console.log("default");
}
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент
//     на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
} else {
    console.log('Теж супер');
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
} else {
    console.log('Теж супер');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
} else {
    console.log('Теж супер');
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
} else {
    console.log('Теж супер');
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
} else {
    console.log('Теж супер');
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
} else {
    console.log('Теж супер');
}



