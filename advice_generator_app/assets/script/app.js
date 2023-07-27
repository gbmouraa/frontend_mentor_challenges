const API_LINK = 'https://api.adviceslip.com/advice'
const adviceID = document.querySelector('.advice-content__number')
const adviceQuote = document.querySelector('.advice-content__quote')
const fetchBtn = document.querySelector('.advice-generator__btn')

const fetchNewAdvice = async () => {
    const response = await fetch(API_LINK)
    const advice = response.json()
    return advice
}

const renderAdvice = (adviceObj) => {
    const { id, advice } = adviceObj
    adviceID.textContent = `ADVICE #${id}`
    adviceQuote.textContent = advice
}

const generateNewAdvice = async () => {
    const data = await fetchNewAdvice()
    const advice = data.slip

    renderAdvice(advice)
}

window.addEventListener('DOMContentLoaded', () => {
    fetchBtn.addEventListener('click', generateNewAdvice)
})