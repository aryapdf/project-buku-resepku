// import CONFIG from '../globals/config';

class RecipesAPI {
  static async fetchURL(url, body = {}) {
    try {
      const request = await fetch(url, {
        ...body,
      });
      return request.json();
    } catch (error) {
      return error;
    }
  }
}

export default RecipesAPI;
