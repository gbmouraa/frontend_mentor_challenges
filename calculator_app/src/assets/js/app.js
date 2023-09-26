document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme')
  if (theme){
    const input = document.querySelector(`#${theme}`)
    input.setAttribute('checked', 'true')
    changeTheme(theme)
  } 
})

const selectTheme = () => {
  const theme1 = document.querySelector('#theme-1')
  const theme2 = document.querySelector('#theme-2')
  const theme3 = document.querySelector('#theme-3')

  let theme = localStorage.getItem('theme')

  if (theme1.checked) {
    theme = 'theme-1'
  } else if (theme2.checked) {
    theme = 'theme-2'
  } else if (theme3.checked) {
    theme = 'theme-3'
  }

  changeTheme(theme)
  localStorage.setItem('theme', theme)
}

const changeTheme = (theme) => {
  const elements = document.querySelectorAll('[theme]')

  elements.forEach(el => {
    el.classList.remove('theme-1', 'theme-2', 'theme-3')
    el.classList.add(String(theme))
  })
}

const inputTheme = document.querySelector('.input-theme')
inputTheme.addEventListener('click', selectTheme)

function Calculator() {
  this.display = document.querySelector('#display')
  this.calculatorContainer = document.querySelector('.calculator-container')

  this.start = () => {
    this.display.focus()
    this.input()
    this.enter()
  }

  this.delete = () => {
    this.display.value = this.display.value.slice(0, -1)
    this.display.focus()
  }

  this.reset = () => {
    this.display.value = ''
    this.display.focus()
  }

  this.enter = () => {
    this.display.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) this.showResult()
    })
  }

  this.calc = () => {
    let text = this.display.value
    let toCalc = text.split('').map(item => {
      if (item === 'x') item = '*'
      return item
    }).join('')

    const result = eval(toCalc)

    if (result === Infinity) {
      this.display.value = 0
      this.display.focus()
      return
    }

    this.display.value = result
    this.display.focus()
  }

  this.showResult = () => {
    try {
      this.calc()
    } catch (e) {
      this.display.value = ''
    }
  }

  this.input = () => {
    this.calculatorContainer.addEventListener('click', (e) => {
      const el = e.target

      if (el.classList.contains('btn-num')) {
        this.display.value += el.innerText
        this.display.focus()
      }

      if (el.classList.contains('btn-del')) this.delete()
      if (el.classList.contains('btn-reset')) this.reset()
      if (el.classList.contains('btn-equal')) this.showResult()
    })
  }

}

const initCalc = new Calculator()
initCalc.start()

