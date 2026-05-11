// if (вираз){
//     [інструкції];
//     [інструкції];
// }

// 0n - великі числа
// "" -false
// null, 0 - false
// underfined - false
// NaN

//оператори порівняння

// let a =2, b = 3, c = "3";
// console.log(a == b);
// console.log(a != b);
// console.log(a > b); //< >= <=
//
// console.log(b === c);//!== stroga

// let a = 2, b = 3, c;

// if (a > b){
//     c = 'a > b'
// } else{
//     c = 'a < b'
// }
// console.log(c)

// if (a > b){
//     c = "a > b"
// } else{
//     if(a < b){
//         c = "a < b"
//     }
//     else{
//         c = "a === b"
//     }
// }

// if(a > b){
//     c = "a > b"
// }else if(a < b){
//     c = "a < b"
// }
// else{
//     c = "a === b"
// }

// if (a > b)c= "a > b";
// else if (a < b)c= "a < b";
// else c = "a === b"


//switch case

// let course, title;
// course = prompt("Введіть направлення яке ви хочете вивчити");
//
// switch (course) {
//     case "javascript":
//         title = "Мова програмування JavaScript";
//         break;
//     case "figma":
//     case "fgma":
//         title = "Основи FIGMA"
//         break;
//     case"Frontend":
//     case "HTML":
//     case "CSS":
//         title = "HTML + CSS"
//         break;
//     default:
//         title = "я НЕ ЗНАЮ, що ти хочеш";
//         break;
// }
// alert(title);

//логічні оператори

//ne
// let a = false;
// console.log(!a);
// let b = 'text';
// console.log(!!b);

//i
// let a = true, b = true, c = false;
// console.log(a && b);
// console.log(a && c);
//
// //abo
// console.log(a || b);

// let age = prompt("How old are you?"), info;
// if (age >= 18 && age <= 35){
//     info = "Користовачу від 18 до 35 років"
// }
// else if (age > 35){
//     info = "Користовачу більше 35 років"
// }
// else{
//     info = "Користовачу менше 18 років"
// }
// alert(info);

