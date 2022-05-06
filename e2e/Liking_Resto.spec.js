const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
    I.amOnPage('/#/like');
});

const message = 'it looks like your favorite Resto list is empty';

Scenario('showing empty liked Resto', ({ I }) => {
    pause();
    I.seeElement('.content__heading');
    I.see(message, '.empty-favorite');
});

Scenario('like and unlike one Resto', async ({ I }) => {
    pause();
    I.see(message, 'p.empty-favorite');

    I.amOnPage('/');

    I.seeElement('.card-resto-item');

    const firstResto = locate('.card-title-link').first();
    const firstRestoTitle = await I.grabTextFrom(firstResto);
    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.card-resto-item');

    const likeRestoTitle = await I.grabTextFrom('.card-title');
    assert.strictEqual(firstRestoTitle, likeRestoTitle);

    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('p.empty-favorite');

    const PageMessage = await I.grabTextFrom('p#message');
    assert.strictEqual(PageMessage, message);
});
