const reveal = document.querySelectorAll('.reveal');

window.onscroll = () => {
    reveal.forEach((el) => {
        const { innerHeight } = window;
        const { top } = el.getBoundingClientRect();

        active = top < innerHeight && top > 0
            ? el.classList.add('reveal_active')
            : el.classList.remove('reveal_active');
    })
}


