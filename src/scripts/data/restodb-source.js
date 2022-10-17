import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoDbSource {
  static async homeResto() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
    // const responseJson = await response.json();
    // return responseJson.restaurant;
  }
}

export default TheRestoDbSource;
