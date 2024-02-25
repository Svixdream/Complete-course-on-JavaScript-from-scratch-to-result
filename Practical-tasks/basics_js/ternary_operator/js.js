const age = 24

// age >= 18 ? console.log("Мне 18 и я могу выпить виски") : console.log("Пожалуй выпью сок")

const drink = age >= 18 ? "wine" : "juice"

console.log(drink)

let drink2
if (age >= 18) {
    drink2 = "wine"
}
else {
    drink2 = "juice"
}

console.log(drink2)

console.log(`Я люблю пить ${age >= 18 ? "wine" : "juice"}`)