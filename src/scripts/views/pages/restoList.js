import RestoResource from '../../data/resto-resource';
import { createRestoListItemTemplate } from '../templates/template-creator';

const restoList = {
    async render() {
        return `
            <h2 tabindex="0">Explore Restaurant</h2>
            <div class="restaurant-list">

            </div>
        `;
    },

    async afterRender() {
        const allData = await RestoResource.getAllResto();
        const restoContainer = document.querySelector('.restaurant-list');
        allData.restaurants.forEach((resto) => {
            restoContainer.innerHTML += createRestoListItemTemplate(resto);
        });
    },
};

export default restoList;
