import FavoriteRestoIdb from '../../data/favoriteresto-db';
import RestoResource from '../../data/resto-resource';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestoDetailTemplate } from '../templates/template-creator';

const detail = {
    async render() {
        return `
            <div class="restaurant"></div>
            <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const resto = await RestoResource.detailResto(url.id);
        const restoContainer = document.querySelector('.restaurant');
        restoContainer.innerHTML = createRestoDetailTemplate(resto);

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteResto: FavoriteRestoIdb,
            resto: {
                id: resto.restaurant.id,
                name: resto.restaurant.name,
                pictureId: resto.restaurant.pictureId,
                city: resto.restaurant.city,
                description: resto.restaurant.description,
                rating: resto.restaurant.rating,
            },
        });
    },
};

export default detail;
