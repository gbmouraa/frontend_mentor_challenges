const form = document.querySelector('#form')

const validateEmail = () => {
  const small = document.querySelector('#email-verification-msg')
  const regex = /\S+@\S+\.\S+/
  let email = document.querySelector('#input-email')

  small.classList.remove('opacity-0')
  small.classList.remove('text-light-red')

  function clearForm() {
    setTimeout(() => {
      small.classList.add('opacity-0')
      email.value = ''
    }, 2000)
  }

  if (regex.test(email.value)) {
    small.classList.add('text-green')
    small.textContent = 'Success'
    clearForm()
    return
  }

  small.classList.add('text-light-red')
  small.textContent = 'Please enter a valid email addres'
}

form.addEventListener('submit', e => {
  e.preventDefault()
  validateEmail()
})


