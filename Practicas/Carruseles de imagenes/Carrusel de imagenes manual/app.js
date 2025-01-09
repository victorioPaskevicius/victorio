const btnRight = document.querySelector('.btn__right');
const btnLeft = document.querySelector('.btn__left');
const container = document.querySelector('.container');
const imgs = document.querySelectorAll('.container__img');

let isPaused = false;

btnLeft.addEventListener('click', moveToLeft);
btnRight.addEventListener('click', moveToRight);

btnLeft.addEventListener('click', togglePause);
btnRight.addEventListener('click', togglePause);

function moveToLeft() {
    if (!isPaused) {
        container.style.transition = 'transform 0.5s ease-in-out';
        container.style.transform = 'translateX(33.3%)';
    }
}

function moveToRight() {
    if (!isPaused) {
        container.style.transition = 'transform 0.5s ease-in-out';
        container.style.transform = 'translateX(-33.3%)';
    }
}

function togglePause() {
    isPaused = !isPaused;
    if (isPaused) {
        container.style.transition = 'none';
    } else {
        container.style.transition = 'transform 0.5s ease-in-out';
    }
}
