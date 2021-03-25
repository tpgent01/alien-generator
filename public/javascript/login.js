const form = () => {
    const loginBtn = document.querySelector('.login');
    const signupBtn = document.querySelector('.signup');
    const loginForm = document.querySelector('#login');
    const signupForm = document.querySelector('#signup');

    signupBtn.addEventListener('click', (e) => {
        loginForm.style.left = '-450px';
        signupForm.style.left = '0px';
        loginBtn.classList.remove('current');
        signupBtn.classList.add('current');
    });
    loginBtn.addEventListener('click', (e) => {
        loginForm.style.left = '0px';
        signupForm.style.left = '450px';
        loginBtn.classList.add('current');
        signupBtn.classList.remove('current');
    });
}

const loginFormhandler = async (e) => {
    e.preventDefault()

    const username = document.getElementById('username-login').Value.trim();
    const password = document.getElementById('password-login').Value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }

}

const signupFormhandler = async (e) => {
    e.preventDefault()
    const email = document.getElementById('email-signup').value.trim();
    const username = document.getElementById('username-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();

    if (email && username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({ email, username, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}


function init() {
    document.querySelector('#login').addEventListener('submit', loginFormhandler);
    document.querySelector('#signup').addEventListener('submit', signupFormhandler);

    form();
}

init();
