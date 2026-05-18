let genre = prompt("Вибери плейліст"), mes;
switch (genre) {
    case "rock":
        mes = "Увімкнено рок-плейлист"
        break;
    case "pop":
        mes = "Увімкнено поп-плейлист"
        break;
    case "jazz":
        mes = "Увімкнено джаз-плейлист"
        break;
    case "classical":
        mes = "Увімкнено класичну музику"
        break;
    default:
        mes = "Жанр не знайдено"
        break;
}
alert(mes)
console.log(mes);