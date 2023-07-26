function validateEmail(e) {
    e.preventDefault()

    const emailInput = document.querySelector('#email')
    const email = emailInput.value
    const invalidEmail = document.querySelector('.invalid-email-msg')
    const userEmail = document.querySelector('.user-email')
    userEmail.innerHTML = email

    const regex = /\S+@\S+\.\S+/

    if (regex.test(email)) {
        successSignUp()
        invalidEmail.innerHTML = ''
        emailInput.classList.remove('invalid-state')
        emailInput.classList.add('normal-state')
    } else {
        invalidEmail.innerHTML = 'Valid email required'
        emailInput.classList.add('invalid-state')
        emailInput.classList.remove('normal-state')
    }
}

function successSignUp(){
    $('.successful-subscription').fadeIn()
    $('.card').css("display","none")
    $('#email').val('')
}

function returnToStart() {
    $('.card').fadeIn()
    $('.successful-subscription').css("display","none")
}