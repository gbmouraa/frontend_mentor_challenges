const inpCardName = document.querySelector('#name')
const inpCardNumber = document.querySelector('#number')
const inpCardMonth = document.querySelector('#month')
const inpCardYear = document.querySelector('#year')
const inpCardCvc = document.querySelector('#cvc')
const form = document.querySelector('form')

function addCardName() {
    const name = inpCardName.value
    const nameOnCard = document.querySelector('.cardholder-name')
    nameOnCard.innerHTML = name.toUpperCase()
}

function addCardExpirationDate() {
    const month = inpCardMonth.value
    const year = inpCardYear.value
    const monthOnCard = document.querySelector('.expiration-month')
    const yearOnCard = document.querySelector('.expiration-year')

    monthOnCard.innerHTML = month
    yearOnCard.innerHTML = year
}

function addCvc() {
    let cvc = inpCardCvc.value.toString()
    const cvcOnCard = document.querySelector('.cvc')

    if (cvc.length > 3) {
        cvc = cvc.slice(0, 3)
        document.querySelector('#cvc').value = cvc
    }

    cvcOnCard.innerHTML = cvc
}

function validateCardNumber() {
    let number = inpCardNumber.value.toString()
    const numberOnCard = document.querySelector('.span-number')

    if (number.length > 16) {
        number = number.slice(0, 16)
        document.querySelector('#number').value = number
    }

    numberOnCard.textContent = number.replace(/(.{4})/g, '$1 ')
}

function validate() {
    const inputs = document.querySelectorAll('input')
    let validator = true

    inputs.forEach(inp => {
        const parent = inp.parentElement
        const date = new Date()
        const currentYear = date.getFullYear()

        if (!inp.value) {
            inp.style.borderColor = '#ff5252'
            parent.querySelector('label').style.color = '#ff5252'
            parent.querySelector('small').innerText = `Can't be blank`
            validator = false
        } else if (inpCardNumber.value.toString().length !== 16) {
            inpCardNumber.parentElement.querySelector('label').style.color = '#ff5252'
            inpCardNumber.parentElement.querySelector('small').innerHTML = 'Invalid card number'
            validator = false
        } else if (inpCardMonth.value > 12 || inpCardMonth.value < 1) {
            inpCardMonth.parentElement.querySelector('label').style.color = '#ff5252'
            inpCardMonth.parentElement.querySelector('small').innerHTML = 'Invalid date'
            validator = false
        } else if (inpCardYear.value < currentYear || inpCardYear.value.toString().length !== 4) {
            inpCardYear.parentElement.querySelector('label').style.color = '#ff5252'
            inpCardYear.parentElement.querySelector('small').innerHTML = 'Ivalid date'
            validator = false
        }

    })
    return validator
}

function handleSubmit(e) {
    e.preventDefault()
    if (validate()) {
        $('.card-data').toggle()
        $('.success').fadeIn(600)
    }
}

function reload() {
    location.reload()
}

form.addEventListener('submit', handleSubmit)