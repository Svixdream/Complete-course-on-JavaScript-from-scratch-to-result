const firstName = prompt("Напишите первое имя"),
    secondName = prompt("Напишите второе имя")

const randomNumber = (Math.floor(Math.random() * 100))

if (randomNumber < 33) {
    alert(`Результат совместимости имён ${firstName} и ${secondName} равен ${randomNumber} Вам нужно поискать человека с другим именем`)
}
else if (randomNumber >= 33 && randomNumber < 66) {
    alert(`Результат совместимости имён ${firstName} и ${secondName} равен ${randomNumber} совместимость хорошая, но может быть и лучше`)
}
else if (randomNumber >= 66) {
    alert(`Результат совместимости имён ${firstName} и ${secondName} равен ${randomNumber} Вы идеально подходите друг другу`)
}
else {
    alert("Упс... Какое-то странное число получилось. Попробуйте ещё раз.")
}