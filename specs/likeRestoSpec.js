/* eslint-disable no-undef */
import LikeButtonInitiator from '../src/scripts/utlis/like-button-initiator';

describe('Liking A Resto', () => {
  it('should show the like button when the Resto has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeTruthy();
  });
});
