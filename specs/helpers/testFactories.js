import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestoIdb from '../../src/scripts/data/favoriteresto-db';

const createLikeButtonPresenterWithResto = async (resto) => {
    await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteResto: FavoriteRestoIdb,
        resto,
    });
};

export { createLikeButtonPresenterWithResto };
