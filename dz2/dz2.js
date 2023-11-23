// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr1 = [3, 10, 49, 'Text', 'something', true, false, [1, 2, 3,], 9,'hello']
console.log(arr1[0])
console.log(arr1[1])
console.log(arr1[2])
console.log(arr1[3])
console.log(arr1[4])
console.log(arr1[5])
console.log(arr1[6])
console.log(arr1[7])
console.log(arr1[8])
console.log(arr1[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'nazwa1',
    pageCount:306,
    genre: 'roman'
}

let book2 = {
    title: 'nazwa2',
    pageCount:455,
    genre: 'nowel'
}

let book3 = {
    title: 'nazwa3',
    pageCount: 666,
    genre: 'horror'
}

    // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'nazwa1',
    pageCount:306,
    genre: 'roman',
    autor: [{name: 'Oleg', age: 35}]
}

let book5 = {
    title: 'nazwa2',
    pageCount:455,
    genre: 'nowel',
    autor: [{name: 'Anna', age: 21}]
}

let book6 = {
    title: 'nazwa3',
    pageCount: 666,
    genre: 'horror',
    autor: [{name: 'Andriy', age: 66}]
}

    // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users =[
    user1 = {
        name: 'Anton',
        username: 'Antoha',
        password: '12345678'
    },
    user2 = {
        name: 'Vika',
        username: 'Viikja',
        password: 'v23i34'
    },
    user3 = {
        name: 'Olena',
        username: 'Olenka',
        password: 'dhsdhjnk'
    },
    user4 = {
        name: 'Jura',
        username: 'Jurij',
        password: 'hjhjhj'
    },
    user5 = {
        name: 'Olga',
        username: 'Olja',
        password: 'ooooollllllaaaaaa'
    },
    user6 = {
        name: 'Julia',
        username: 'Julyasya',
        password: 'Julichka'
    },
    user7 = {
        name: 'Petro',
        username: 'Petro',
        password: '665765656858'
    },
    user8 = {
        name: 'Katerina',
        username: 'Katja',
        password: '77808066807'
    },
    user9 = {
        name: 'karolina',
        username: 'Kara',
        password: 'gcgcykgcygc'
    },
    user10 = {
        name: 'Andiy',
        username: 'Andryusha',
        password: 'DJNCJNdcjn;'
    }
]


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3
if(x!==0){
    console.log('Вірно')
}
else{
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 48
if (time>=0 && time<=15){
    console.log('перша чверть')
}
else if (time>15 && time<=30){
    console.log('друга чверть')
}
else if (time>30 && time<=45){
    console.log('третя чверть')
}if (time>45 && time<60){
    console.log('четверта чверть')
}
else{
    console.log('в годині нема стількох хвилин')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 12
switch (day){
    case day>=1 && day<=10:
        console.log('перша декада')
        break;
        case day>10 && day<=20:
        console.log('друга декада')
        break;
        case day>20 && day<=31:
        console.log('третя декада')
        break;
    default:
        console.log('в місяці нема стількох днів')
}

