const selectTheme = () => {
  const theme1 = document.querySelector('#theme-1')
  const theme2 = document.querySelector('#theme-2')
  const theme3 = document.querySelector('#theme-3')

  if (theme1.checked) {
    changeTheme(1)
    return
  }
  if (theme2.checked) {
    changeTheme(2)
    return
  }
  if (theme3.checked) {
    changeTheme(3)
    return
  }
}

const changeTheme = (theme) => {
  const elements = document.querySelectorAll('[theme]')

  if (theme === 1) {
    elements.forEach(el => {
      el.classList.add('theme-1')
      el.classList.remove('theme-2', 'theme-3')
    })
    return
  }

  if (theme === 2) {
    elements.forEach(el => {
      el.classList.add('theme-2')
      el.classList.remove('theme-1', 'theme-3')
    })
    return
  }

  if (theme === 3) {
    elements.forEach(el => {
      el.classList.add('theme-3')
      el.classList.remove('theme-2', 'theme-1')
    })
    return
  }
}

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

const inputTheme = document.querySelector('.input-theme')
inputTheme.addEventListener('click', selectTheme)

const initCalc = new Calculator()
initCalc.start()

