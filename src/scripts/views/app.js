import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
    constructor({ content }) {
        this._content = content;
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();

        const skipLinkElem = document.querySelector('.skip-link');
        skipLinkElem.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('#toContent').focus();
        });
    }
}

export default App;
