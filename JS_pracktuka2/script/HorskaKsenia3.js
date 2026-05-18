let score = prompt("Введіть кількість балів"), homeworkDone = prompt("Чи виконані домашні завдання?") === "true", finalTestPassed = prompt("Чи пройдено фінальний тест?") === "true", mes;
if (score >= 70 && homeworkDone === true && finalTestPassed === true) {
    mes = "Сертифікат успішно отримано"
} else{
    mes = "Умови для отримання сертифіката не виконані"
}
alert(mes)
console.log(mes)