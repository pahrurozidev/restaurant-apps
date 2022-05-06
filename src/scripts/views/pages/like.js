import FavoriteRestoIdb from '../../data/favoriteresto-db';
import { createRestoListItemTemplate, createEmptyText } from '../templates/template-creator';

const like = {
    async render() {
        return `
      <div class="content">
        <h2 class="content__heading">Your Liked Resto</h2>
        <div id="resto" class="resto">
 
        </div>
      </div>
    `;
    },

    async afterRender() {
        const allResto = await FavoriteRestoIdb.getAllResto();
        const restoContainer = document.querySelector('#resto');

        restoContainer.innerHTML = allResto.length === 0 ? createEmptyText() : '';

        allResto.forEach((resto) => {
            restoContainer.innerHTML += createRestoListItemTemplate(resto);
        });
    },
};

export default like;
