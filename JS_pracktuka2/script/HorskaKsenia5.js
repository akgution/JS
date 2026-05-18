let grade = prompt("Введіть свою оцінку"), mes;
switch (grade) {
    case "1":
    case "2":
    case "3":
        mes = "Потрібно покращити знання";
        break;
    case "4":
    case "5":
    case "6":
        mes = "Задовільний результат"
        break;
    case "7":
    case "8":
    case "9":
        mes = "Добрий результат"
        break;
    case "10":
    case "11":
    case "12":
        mes = "Відмінний результат"
        break;
    default:
        mes = "Некоректна оцінка"
        break;
}
console.log(mes);
alert(mes);