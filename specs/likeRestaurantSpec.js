import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-db';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Resto', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the like button when the Resto has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({
            id: 1,
        });

        expect(document.querySelector('[aria-label="like this resto"]'))
            .toBeTruthy();
    });

    it('should not show the unlike button when the Resto has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({
            id: 1,
        });

        expect(document.querySelector('[aria-label="unlike this resto"]'))
            .toBeFalsy();
    });

    it('should be able to like the Resto', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({
            id: 1,
        });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const Resto = await FavoriteRestoIdb.getResto(1);

        expect(Resto).toEqual({
            id: 1,
        });

        FavoriteRestoIdb.deleteResto(1);
    });

    it('should not add a Resto again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({
            id: 1,
        });

        await FavoriteRestoIdb.putResto({
            id: 1,
        });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavoriteRestoIdb.getAllResto()).toEqual([{
            id: 1,
        }]);

        FavoriteRestoIdb.deleteResto(1);
    });

    it('should not add a Resto when it has no id', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
    });
});
