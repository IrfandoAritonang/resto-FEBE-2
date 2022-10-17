/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';
import imghero from '../../../public/heros/hero-image_4.jpg';

const createHeroImage = `

  <style>
  .hero{
      background:linear-gradient(rgba(0, 0, 5, .5), rgba(0, 0, 5, .5)), url(${imghero});
      background-size: cover;
      min-height: 480px;
      height: 35vh;
      position: relative;
      width: 100%;
      color: white;
      text-shadow: 0px 3px 6px black;
  }
  .judul h1 span{
      font-weight: 600;
      font-size:2rem;                
  }
  .judul h1 {
      margin-top:30px;
      text-align: center;
  }
  </style>
  <div class="hero">
      <div class="judul">
          <h1 id="tagline"><span>Come visit the best restaurants <br>In Indonesia</span></h1>
      </div>
  </div>
    `;

const emptyData = `
<style>
  .empty{
    color: #bf1722;
    display: flex;
    width: 80%;
    height: 100px;
    background-color: salmon;
    justify-content: center;
    align-items: center;
  }
</style>
  <div class="empty">
      <p>Data is still empty</p>
  </div>
  `;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster" alt="${resto.name}"
            src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <p><i class="material-icons">&#xe563;</i><span class="resto-item__content__city">${resto.city}</span></p>
        <h3><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
        <p>${resto.description}</p>
    </div>
  </div>
  `;

const createRestoDetailTemplate = (resto) => `
  <style>
    h2 {
      padding-top : 20px;
    }
    img {
      margin-top : 40px;
    }
    .resto-item__content__city {
      margin-left: 5px;
      display: inline-block;
      position:absolute;
      padding: 0px;
    }

    .kategori {
      margin-top : 40px;
    }
    .movie__info {
      list-style: none;
    }

    #titel-revew{
      justify-content: center;
      text-align:center;
      padding-top : 20px;
      margin-top : 40px;
    }
    .category-name {
      text-decoration : none;
    }
  </style>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId}" alt="${resto.restaurant.name}" />
  <h2 class="resto__title">${resto.restaurant.name}</h2>
  <div class="resto__info">
    <h3>Information</h3>
    <h4>Rating</h4>
    <p>⭐️<span class="movie-item__header__rating__score">${resto.restaurant.rating}</span></p>
    <h4>Address</h4>
    <p>${resto.restaurant.address}</p>
    <h4>City</h4>
    <p><i class="material-icons">&#xe563;</i><span class="resto-item__content__city">${resto.restaurant.city}</span></p>
  

  <div class="movie__overview">
  <h4>Description</h4>
  <p>${resto.restaurant.description}</p>
  </div>

  <div class="kategori">
    <div class="Categories">
    <h4>Kategori Menu</h4>
    <ul>
    ${resto.restaurant.categories
    .map(
      (categori) => `
        <li class="category-name">${categori.name}</li>
  `,
    )
    .join('')}
      </ul>
    </div>

    <div class="kategori-makanan">
    <h4><i style='font-size:15px' class='fas'>&#xf805;</i>Food Menu</h4>
      <ul>
    ${resto.restaurant.menus.foods
    .map(
      (food) => `
        <li class="category-name">${food.name}</li>
  `,
    )
    .join('')}
      </ul>
  </div>

  <div class="kategori-minuman">
    <h4><i style='font-size:15px' class='fas'>&#xf79f;</i>Drink Menu</h4>
    <ul>
    ${resto.restaurant.menus.drinks
    .map(
      (drink) => `
        <li class="category-name">${drink.name}</li>
  `,
    )
    .join('')}
  </div>
  
  </div>

  <h4 id="titel-revew">Customer Review</h4>
  <div class="review">
        ${resto.restaurant.customerReviews
    .map(
      (review) => `
        <div class="review-card">
          <p class="review-name">${review.name}</p>
          <p class="review-comment">${review.review}</p>
          <p class="review-date">${review.date}</p>
        </div>
      `,
    )
    .join('')}
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createHeroImage,
  emptyData,
};
