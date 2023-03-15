const sliderItem = Array.from(document.getElementsByClassName('slider__item'));
const sliderPrev = document.querySelector(".slider__arrow_prev");
const sliderNext = document.querySelector(".slider__arrow_next");

const dots = Array.from(document.getElementsByClassName('slider__dot'));

function changeSlider(index) {
    const indexActiveSlider = sliderItem.findIndex(slider => slider.classList.contains('slider__item_active'));
    sliderItem[indexActiveSlider].classList.remove('slider__item_active');
    dots[indexActiveSlider].classList.remove('slider__dot_active');

    sliderItem[index].classList.add('slider__item_active');
    dots[index].classList.add('slider__dot_active');
}

document.addEventListener('wheel', (event) => {
    const indexActiveSlider = sliderItem.findIndex(slider => slider.classList.contains('slider__item_active'));
    event.deltaY < 0
        ? changeSlider(indexActiveSlider === sliderItem.length - 1 ? 0
            : indexActiveSlider + 1)
        : changeSlider(indexActiveSlider === 0
            ? sliderItem.length - 1 : indexActiveSlider - 1);
});

sliderPrev.addEventListener('click', () => {
    const indexActiveSlider = sliderItem.findIndex(slider =>
        slider.classList.contains('slider__item_active'));
    changeSlider(indexActiveSlider === 0
        ? sliderItem.length - 1 : indexActiveSlider - 1);
});

sliderNext.addEventListener('click', () => {
    const indexActiveSlider = sliderItem.findIndex(slider =>
        slider.classList.contains('slider__item_active'));
    changeSlider(indexActiveSlider === sliderItem.length - 1
        ? 0 : indexActiveSlider + 1);
});