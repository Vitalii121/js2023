// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let textLenght = (text) => text.length;
// console.log(textLenght('hello world'));
// console.log(textLenght('lorem ipsum'));
// console.log(textLenght('javascript is cool'));
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let upperCase = (text) => text.toUpperCase();
// console.log(upperCase('hello world'));
// console.log(upperCase('lorem ipsum'));
// console.log(upperCase('javascript is cool'));
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let lowerCase = (text) => text.toLowerCase();
// console.log(lowerCase('HELLO WORLD'));
// console.log(lowerCase('LOREM IPSUM'));
// console.log(lowerCase('JAVASCRIPT IS COOL'));
// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// // let str = ' dirty string   ';
// // document.write(str.substring(0));
// // document.write(str.substring(13, 16));
//
// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// let stringToarray=(str)=>console.log(str.split(' '))
// stringToarray(str);
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arrStr = arr.map((x) => x.toString());
console.log(arrStr);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        return arr.sort((a, b) => a - b);
    }
    if (direction === 'descrnding') {
        return arr.sort((a, b) => b - a);
    }
}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descrnding'));
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter((element) => element.monthDuration > 5));
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let addID = coursesAndDurationArray.map((value, index) => {
    // return  {...value, id:index + 1};
    return {id: index + 1, title: value.title, monthDuration: value.monthDuration}
})
console.log(addID);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let suits = [
    {cardSuit: 'spade', color: 'black'},
    {cardSuit: 'clubs', color: 'black'},
    {cardSuit: 'diamond', color: 'red'},
    {cardSuit: 'heart', color: 'red'}
];
let nameCards = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king'];
let deck = [];
for (const suit of suits) {
    for (const nameCard of nameCards) {
        let card = {
            cardSuit: suit.cardSuit,
            value: nameCard,
            color: suit.color
        }
        deck.push(card);
    }
}
console.log(deck);
// - знайти піковий туз
let findAce = deck.filter((value => value.cardSuit === 'spade' && value.value === 'ace'));
console.log(findAce);
// - всі шістки
let findNumSix = deck.filter((value => value.value === 6));
console.log(findNumSix);
// - всі червоні карти
let findAllRed = deck.filter((value => value.color === 'red'));
console.log(findAllRed);
// - всі буби
let allDiamond = deck.filter((value => value.cardSuit === 'diamond'));
console.log(allDiamond);
// - всі трефи від 9 та більше
let findClubs = deck.filter(value => (value.cardSuit === 'clubs' && value.value >= 9) ||
    (value.cardSuit === 'clubs' && typeof value.value === 'string'));
console.log(findClubs);
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let cards = deck.reduce((acum, card) => {
    if (card.cardSuit === 'spade') {
        acum.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        acum.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        acum.hearts.push(card);
    } else if (card.cardSuit === 'club') {
        acum.clubs.push(card);
    }
    return acum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
})
console.log(cards);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass


let filter=coursesArray.filter((value) =>value.modules.find(value1 => value1==='sass') );
console.log(filter);

// --написати пошук всіх об'єктів, в який в modules є docker

let filterTwo=coursesArray.filter((value) =>value.modules.find(value1 => value1==='docker') );
console.log(filterTwo);

// =======================================================
// let serch=(arr,value)=>{
//     for (const coursesArrayElement of arr) {
//         for (const coursesArrayElemen of coursesArrayElement.modules) {
//             if (coursesArrayElemen===value){
//               console.log(coursesArrayElement)
//             }
//         }
//     }
// }
// serch(coursesArray, 'sass')
//=====================================================================

