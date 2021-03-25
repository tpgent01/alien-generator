
const menu = () => {
    const menuBtn = document.querySelector('button');
    const navigationContainer = document.querySelector('.nav-links');
    menuBtn.addEventListener('click', () => {
        navigationContainer.classList.toggle('slide');
    })
}

const date = () => {
    const footerdate = document.querySelector('footer span');
    footerdate.textContent = new Date().getFullYear()
}



function init() {
    menu();
    date();
}

init();
