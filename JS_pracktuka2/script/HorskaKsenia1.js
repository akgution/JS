let isAuthorized = prompt("ви авторизовані? ") === "true", internetSpeed = prompt("швидкість інтернету:"), isBanned = prompt("акаунт заблоковано?") === "true", mes;
if (isAuthorized === true && internetSpeed >=20 && isBanned !== true) {
    mes = "Ви уввійшли"
} else{
    mes = "Не уввійшли"
}
alert(mes);
console.log(mes);