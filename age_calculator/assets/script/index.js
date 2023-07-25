const dayInp = document.querySelector('#day')
const monthInp = document.querySelector('#month')
const yearInp = document.querySelector('#year')

const dayOtp = document.querySelector('#output-days')
const monthOtp = document.querySelector('#output-month')
const yearOtp = document.querySelector('#output-year')

const form = document.querySelector('form')

const date = new Date()
let day = date.getDate()
let month = 1 + date.getMonth();
let year = date.getFullYear()

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function validate() {
    const inputs = document.querySelectorAll('input')
    let validator = true;
    inputs.forEach(i => {
        const parent = i.parentElement
        if (!i.value) {
            i.style.borderColor = 'hsl(0, 100%, 67%)'
            parent.querySelector('label').style.color = 'hsl(0, 100%, 67%)'
            parent.querySelector('small').innerText = 'This field is required.'
            validator = false
        } else if (monthInp.value > 12) {
            monthInp.style.borderColor = 'hsl(0, 100%, 67%)'
            parent.querySelector('label').style.color = 'hsl(0, 100%, 67%)'
            monthInp.parentElement.querySelector('small').innerText = 'must be valid month.'
            validator = false
        } else if (dayInp.value > 31) {
            dayInp.style.borderColor = 'hsl(0, 100%, 67%)'
            parent.querySelector('label').style.color = 'hsl(0, 100%, 67%)'
            dayInp.parentElement.querySelector('small').innerText = 'must be valid day.'
            validator = false
        } else {
            i.style.borderColor = 'hsl(0, 0%, 8%)'
            parent.querySelector('label').style.color = 'hsl(0, 1%, 44%)'
            parent.querySelector('small').innerText = ''
            validator = true
        }
    })
    return validator
}

function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
        if (dayInp.value > day) {
            day = day + months[month - 1]
            month = month - 1;
        }
        if (monthInp.value > month) {
            month = month + 12
            year = year - 1
        }

        const d = day - dayInp.value
        const m = month - monthInp.value
        const y = year - yearInp.value

        dayOtp.innerHTML = d
        monthOtp.innerHTML = m
        yearOtp.innerHTML = y
    }
}

form.addEventListener("submit", handleSubmit)