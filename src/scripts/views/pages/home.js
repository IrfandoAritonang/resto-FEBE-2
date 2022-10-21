import TheRestoDbSource from '../../data/restodb-source';
import CONFIG from '../../globals/config';
import { createRestoItemTemplate, createHeroImage } from '../templates/template-creator';

const Home = {
  async render() {
    return `

    <div class="jumbotron" id="jumbotron">
    <picture>

    <source type="image/webp" media="(max-width: 600px)" srcset="${CONFIG.IMAGE_HERO_SMALL_PATH}.webp">
    <source type="image/jpeg" media="(max-width: 600px)" srcset="${CONFIG.IMAGE_HERO_SMALL_PATH}.jpg">
    <source type="image/webp" media="(min-width: 601px)" srcset="${CONFIG.IMAGE_HERO_LARGE_PATH}.webp">
    <source type="image/jpeg" media="(min-width: 601px)" srcset="${CONFIG.IMAGE_HERO_LARGE_PATH}.jpg">
          <img 
          src="${CONFIG.IMAGE_HERO_PATH}.jpg" alt="hero" class="lazyload">

    </picture>
    
    </div>


    <div class="content" id="content">
      <h2 class="content__heading" id="content__heading">Explore Restaurant</h2>
      <div id="Restaurant" class="Restaurant">
      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurant = await TheRestoDbSource.homeResto();
    const jumbotronContainer = document.querySelector('#jumbotron');
    jumbotronContainer.innerHTML = createHeroImage;
    const RestaurantContainer = document.querySelector('#Restaurant');
    restaurant.forEach((resto) => {
      RestaurantContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
