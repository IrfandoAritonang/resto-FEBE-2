/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked menu restaurant', ({ I }) => {
  I.dontSeeElement('.resto-item');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.dontSeeElement('.resto-item');
  I.amOnPage('/');
  I.waitForElement('.resto-item');
  I.seeElement('.restaurant__title a');

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('Data is still empty', '.empty');

  I.amOnPage('/');

  I.waitForElement('.resto-item');
  I.seeElement('.restaurant__title a');

  const firstRestaurant = locate('.resto-item .restaurant__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click('.resto-item .restaurant__title a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');

  const likedRestaurantName = await I.grabTextFrom('.resto-item .restaurant__title a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(locate('.resto-item .restaurant__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('Data is still empty', '.empty');
});
