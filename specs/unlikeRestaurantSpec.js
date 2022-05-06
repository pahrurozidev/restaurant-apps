import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-db';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Resto', () => {
    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestoIdb.putResto({
            id: 1,
        });
    });

    afterEach(async () => {
        await FavoriteRestoIdb.deleteResto(1);
    });

    it('should display unlike widget when the Resto has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({
            id: 1,
        });

        expect(document.querySelector('[aria-label="unlike this resto"]'))
            .toBeTruthy();
    });

    it('should not display like widget when the Resto has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({
            id: 1,
        });

        expect(document.querySelector('[aria-label="like this Resto"]'))
            .toBeFalsy();
    });

    it('should be able to remove liked Resto from the list', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({
            id: 1,
        });

        document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
    });

    it('should not throw error if the unliked Resto is not in the list', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({
            id: 1,
        });

        await FavoriteRestoIdb.deleteResto(1);

        document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
    });
});
