import TheRestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate, createHeroImage } from '../templates/template-creator';

const Home = {
  async render() {
    return `

    <div class="jumbotron" id="jumbotron"></div>

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
