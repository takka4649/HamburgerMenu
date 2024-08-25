let btn = document.querySelector('.nav__hambuergerMenu');
let navList = document.querySelector('.nav__list');

btn.onclick = () => {
    navList.classList.toggle('navOpen');
};
