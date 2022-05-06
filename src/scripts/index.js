import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import swRegister from './utils/sw-register';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const button = document.querySelector('button');
button.addEventListener('click', () => {
    const toggleItem = button.querySelectorAll('.toggle-item');
    for (let i = 0; i < toggleItem.length; i++) {
        toggleItem[0].classList.toggle('top');
        toggleItem[1].classList.toggle('center');
        toggleItem[2].classList.toggle('bottom');
    }

    const navItem = document.querySelector('.nav-item');
    navItem.classList.toggle('draw');
});

const app = new App({
    content: document.querySelector('.restaurants'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});
