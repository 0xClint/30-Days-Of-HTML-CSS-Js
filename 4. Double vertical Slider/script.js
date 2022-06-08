const sliderContainer = document.querySelector(".container");
const slideRight = document.querySelector(".right-slider");
const slideLeft = document.querySelector(".left-slider");
const upButton = document.querySelector("#upper");
const downButton = document.querySelector("#lower");
// const slidesLength = slideRight.querySelectorAll('div').length
const slidesLength = 4;

const activeSlideIndex = 0 ;

// slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = container.clientHeight;

    if(direction == 'up') {
        activeSlideIndex++;
        if(activeSlideIndex > ( sliderHeight -1)) {
            activeSlideIndex = 0;
        }
    }
    else if(direction == 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength -1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}