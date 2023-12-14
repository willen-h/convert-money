const buttonConvert = document.getElementById("button-convert")
const currencySelector = document.querySelector(".currency-select")
const currencyConvert = document.querySelector(".currency-select-convert")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-moeda").value
    const moedaAconverter = document.querySelector(".moeda-valor-convertida")//valor em real
    const moedaAconvertida = document.querySelector(".moeda-valor") // outras moedas

    const dolarToday = 4.9
    const euroToday = 5.2
    const leneToday = 29.3

    if (currencySelector.value == "Lene") {
        moedaAconvertida.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / leneToday)

    }

    if (currencySelector.value == "dolar") {
        moedaAconvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }
    if (currencySelector.value == "euro") {
        moedaAconvertida.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    moedaAconverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}
function changeMoeda() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelector.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
    }
    if (currencySelector.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro logo.png"

    }
    if (currencySelector.value == "Lene") {
        currencyName.innerHTML = "Lene"
        currencyImage.src = "./assets/bandeira-japao.jpeg"
    }


}
function changeConvert() {
    const convertImage = document.querySelector(".convert-img")
    const convertName = document.getElementById("convert-name")
    


    if (currencyConvert.value == "Real Brasileiro") {
        convertName.innerHTML = "Real Brasileiro"
        convertImage.src = "./assets/brasil 2.png"

    }
    if (currencyConvert.value == "Japao Lene") {
        convertName.innerHTML = "Lene"
        convertImage.src = "./assets/bandeira-japao.jpeg"
    }
    if (currencyConvert.value == "Euro") {
        convertName.innerHTML = "Euro"
        convertImage.src = "./assets/euro logo.png"

    }


    convertValues()
}
currencyConvert.addEventListener("change", changeConvert)
currencySelector.addEventListener("change", changeMoeda)
buttonConvert.addEventListener("click", convertValues)






