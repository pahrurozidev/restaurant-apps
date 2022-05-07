const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
    I.amOnPage('/#/like');
    I.wait(5);
});

const message = 'it looks like your favorite Resto list is empty';

Scenario('showing empty liked Resto', ({ I }) => {
    I.seeElement('.content__heading');
    I.see(message, 'p.empty-favorite');
});

Scenario('like and unlike one resto', async ({ I }) => {
    I.see(message, 'p.empty-favorite');

    I.amOnPage('/');
    I.wait(5);

    I.seeElement('.card-resto-item');

    const firstResto = locate('a.card-title-link').first();

    I.wait(5);
    I.click(firstResto);
    I.wait(5);
    I.seeElement('#likeButton');

    I.wait(5);
    I.click('#likeButton');
    I.wait(5);
    I.amOnPage('/#/like');
    I.wait(5);

    I.seeElement('.card-resto-item');
    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('p.empty-favorite');

    const pageMessage = await I.grabTextFrom('p#message');
    assert.strictEqual(pageMessage, message);
});
