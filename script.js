document.querySelector('body').addEventListener('mousemove', eyeball);
    function eyeball() {
    const eye = document.querySelectorAll('.eye');
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rotation + "deg)"
    });
    }

var header = document.querySelector('header');
var nav = document.querySelector('.nav');


window.onscroll = function () {

    if (window.pageYOffset > (header.offsetHeight - nav.offsetHeight)) {
        nav.classList.remove('bottom-nav');
        nav.classList.add('top-nav');
    } else {
        nav.classList.add('bottom-nav');
        nav.classList.remove('top-nav');
    }
}