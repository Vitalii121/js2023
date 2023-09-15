// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user = new User(1, 'roman', 'koks', 'fydgugwydg@Gmail.com')
let users = [
    new User(1, 'roman', 'koks', 'fydgugwydg@Gmail.com', '024-648-3804'),
    new User(2, 'petya', 'pupkin', 'as1d@asd.com', '024-648-3809'),
    new User(5, 'kolya', 'pupkin', 'asd2@asd.com', '024-648-3801'),
    new User(4, 'olya', 'pupkina', 'asd3@asd.com', '024-648-3802'),
    new User(3, 'max', 'pupkin', 'asd4@asd.com', '024-648-3803'),
    new User(6, 'oleg', 'pupkin', 'asd5@asd.com', '024-648-3805'),
    new User(7, 'vasya', 'pupok', 'asd6@asd.com', '024-648-3806'),
    new User(8, 'masha', 'pupkina', 'asd7@asd.com', '024-648-3807'),
    new User(9, 'andrey', 'pupkin', 'as8@asd.com', '024-648-3808'),
    new User(10, 'anya', 'pupkina', 'asd9@asd.com', '024-648-3899')
];
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let userFilter = users.filter((value) => !(value.id % 2));
console.log(userFilter);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let userSort = users.sort((a, b) => a.id - b.id);
console.log(userSort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, producer, year, maxSpeed, enginCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.enginCapacity = enginCapacity;
//     this.carDriver=null;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     };
//     this.info = function () {
//         for (const element in this) {
//             if (typeof this[element] === 'function') {
//                 continue;
//             }
//             console.log(`${element}  ${this[element]}`)
//         }
//     };
//     this.increaseMaxSpeed=function (newSpeed){
//         console.log(this.maxSpeed = this.maxSpeed + newSpeed);
//     };
//     this.changeYear =function (newValue){
//         console.log(this.year = newValue);
//     }
//     this.addDriver=function (driver){
//         this.carDriver=driver;
//     };
// }
//
// let car = new Car('BRZ', 'Японія', 2018, 230, '2.0');
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2020);
// car.addDriver('Roma');
// car.info();

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Car2 {
    constructor(model, producer, year, maxSpeed, enginCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.enginCapacity = enginCapacity;
        this.carDriver = null;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info() {
        for (const element in this) {
            if (typeof this[element] === 'function') {
                continue;
            }
            console.log(`${element}  ${this[element]}`)
        }
    };

    increaseMaxSpeed(newSpeed) {
        console.log(this.maxSpeed = this.maxSpeed + newSpeed);
    };

    changeYear(newValue) {
        console.log(this.year = newValue);
    };

    addDriver(driver) {
        this.carDriver = driver;
    };
}

let car2 = new Car2('M8', 'Germany', 2022, 305, '4.4');
car2.drive();
car2.info();
car2.increaseMaxSpeed(50);
car2.changeYear(2021);
car2.addDriver('Joy');
car2.info();
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.



class Popelushka{
    constructor(name,age,footSize) {
        this.name=name;
        this.age=age;
        this.footSize=footSize;
    }

}

let arr=[
    new Popelushka('Olivia',23,45),
    new Popelushka('Lida',26,43),
    new Popelushka('Olia',22,34),
    new Popelushka('Kvita',28,42),
    new Popelushka('Oksana',20,41),
    new Popelushka('Halia',34,40),
    new Popelushka('Natalia',33,38),
    new Popelushka('Sofia',27,36),
    new Popelushka('Petra',24,37),
    new Popelushka('Julia',39,39),
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Princ{
    constructor(name,age,shoesSize) {
        this.name=name;
        this.age=age;
        this.shoeSize=shoesSize;
    }
    findPopelushku(array){
        for (const arrayElement of array) {
            if(arrayElement.footSize===this.shoeSize){
                return arrayElement
            }
        }
    }
}
let princ = new Princ('Valentin', 40,36);

console.log(princ.findPopelushku(arr));

