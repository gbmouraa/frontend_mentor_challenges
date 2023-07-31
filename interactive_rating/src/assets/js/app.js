const form = document.querySelector('#form')
const thankUContainer = document.querySelector('#thank-u-container')
const ratingContainer = document.querySelector('#rating-container')

gsap.from(ratingContainer, {
    duration: .7,
    x: '-100%'
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const rating = document.querySelector('input:checked')
    if (rating) {
        const selectedRating = rating.value
        sendRating(selectedRating)
    }
    return
})

const sendRating = (rating) => {
    const ratingSend = document.querySelector('#rating-send')
    ratingSend.innerHTML = rating

    hideContainer(ratingContainer)
    showContainer(thankUContainer)
}

const showContainer = (container) => {
    gsap.to(container, {
        opacity : 1,
        duration: .7,
    })

    thankUContainer.classList.remove('hidden')
}

const hideContainer = (container) => {
    gsap.to(container, {
        duration: .7,
        opacity: 0,
        y: '100%',
        onComplete: () => {
            container.classList.add('hidden')
        }
    })
}
