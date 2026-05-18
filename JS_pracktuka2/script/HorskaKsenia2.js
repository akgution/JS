let day = prompt("Введіть день тижня:"), price, mes;
switch (day) {
    case "понеділок":
    case "вівторок":
    case "середа":
        price = 150
        mes = "Вартість квитка складає 150 грн"
        break;
    case "четвер":
    case "п`ятниця":
        price = 200
        mes = "Вартість квитка складає 200 грн"
        break;
    case "субота":
    case "неділя":
        price = 250
        mes = "Вартість квитка складає 250 грн"
        break;
    default:
        mes = "Помилка введення дня тижня"
        break;
}
alert(mes)
console.log(mes)