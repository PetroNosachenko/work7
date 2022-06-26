var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

// ----------------
window.addEventListener('load', Init);

function Init() {
    const leftArrow = document.getElementsByClassName('btn-control-left')[0];
    const rightArrow = document.getElementsByClassName('btn-control-right')[0];
    const slideWraper = document.getElementsByClassName('slide-wrapper')[0];

    leftArrow.addEventListener('click', () => OnMoveSliderLeft(slideWraper));
    rightArrow.addEventListener('click', () => OnMoveSliderRight(slideWraper));
}

function OnMoveSliderRight(wrapper) {
    const slidesArray = wrapper.querySelectorAll('.slide-content');

    slidesArray.forEach((slide, index) => {
        switch(index) {
            case 0:
                slide.classList.remove('left');
                break;
            case 1:
                slide.classList.remove('activ');
                slide.classList.add('left');
                break;
            case 2:
                slide.classList.add('activ');
                break;
        }
    });

    const firstSlide = slidesArray.item(0);

    wrapper.removeChild(firstSlide);
    wrapper.appendChild(firstSlide);
}

function OnMoveSliderLeft(wrapper) {
    const slidesArray = wrapper.querySelectorAll('.slide-content');

    slidesArray.forEach((slide, index) => {
        switch(index) {
            case 0:
                slide.classList.remove('left');
                slide.classList.add('activ')
                break;
            case 1:
                slide.classList.remove('activ');
                break;
            case 2:
                slide.classList.add('left');
                break;
        }
    });

    const firstSlide = slidesArray.item(0);
    const secondSlide = slidesArray.item(1);

    wrapper.removeChild(firstSlide);
    wrapper.removeChild(secondSlide);
    wrapper.appendChild(firstSlide);
    wrapper.appendChild(secondSlide);
}
