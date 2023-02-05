const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainslide = document.querySelector('.main-slide')
const slidesCount = mainslide.querySelectorAll('div').length
let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1)*100}vh`

upBtn.addEventListener('click', () => {
    changeSlides('up')
})
downBtn.addEventListener('click', () => {
    changeSlides('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlides('up')
    }else if (event.key === 'ArrowDown') {
        changeSlides('down')
    }
})

function changeSlides(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount)
        {
            activeSlideIndex = 0
        }
    } else if (direction === 'down'){
        activeSlideIndex--
        if (activeSlideIndex < 0){
            activeSlideIndex = slidesCount-1
        }
    }

    const height = container.clientHeight

    mainslide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}