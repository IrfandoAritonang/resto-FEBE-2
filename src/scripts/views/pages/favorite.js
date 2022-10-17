/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import RestoFavorite from '../../data/favorite-resto-idb';
import { createRestoItemTemplate, emptyData } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
      <div id="Restaurant" class="Restaurant">
      </div>
  </div>`;
  },

  async afterRender() {
    const restaurant = await RestoFavorite.getAllRestaurant();
    // console.log(restaurant);
    const RestaurantContainer = document.querySelector('#Restaurant');

    if (restaurant.length > 0) {
      restaurant.map((resto) => {
        console.log(resto.name);
        RestaurantContainer.innerHTML += createRestoItemTemplate(resto);
      });
    } else {
      RestaurantContainer.innerHTML += emptyData;
    }
  },
};

export default Favorite;
