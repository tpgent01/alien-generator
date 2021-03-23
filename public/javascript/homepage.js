const navigationIndicator = () => {

    const links = document.querySelectorAll('.link');
    const navigationContainer = document.querySelector('.nav-links');
    const navigationContent = document.querySelectorAll('.tab_description');

    navigationContainer.addEventListener('click', (e) => {
        let navIds = e.target.dataset.id;
        if (navIds) {
            links.forEach(link => {
                link.classList.remove('active');
            });

            e.target.classList.add('active');

            navigationContent.forEach(content => {
                content.classList.remove('display');
            })

            const matchId = document.getElementById(navIds);
            matchId.classList.add('display');

        }
    })
}

const menu = () => {
    const menuBtn = document.querySelector('button');
    const navigationContainer = document.querySelector('.nav-links');
    menuBtn.addEventListener('click', () => {
        navigationContainer.classList.toggle('slide');
    })
}

function init() {
    menu();
    navigationIndicator();
}

init();
