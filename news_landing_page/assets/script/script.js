const open = document.querySelector('#open-menu')
const nav = document.querySelector('.nav-ul')
const body = document.querySelector('body')
const close = document.querySelector('#close-menu')
const main = document.querySelector('main')
const header = document.querySelector('header')

function showMenu() {
    open.classList.toggle('js-no-display')
    nav.classList.toggle('js-no-display')
    nav.classList.toggle('js-nav-active')
    body.classList.toggle('js-body-disfocus')
}

function hideMenu(){
    open.classList.remove('js-no-display')
    nav.classList.add('js-no-display')
    nav.classList.remove('js-nav-active')
    body.classList.remove('js-body-disfocus')
}