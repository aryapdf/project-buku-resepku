import API_ENDPOINT from '../globals/api-endpoint';

class RecipeDbSource {
  static async listRecipes() {
    const response = await fetch(API_ENDPOINT.RECIPES);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailRecipes(key) {
    const response = await fetch(API_ENDPOINT.DETAIL(key));
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async categoryRecipes() {
    const response = await fetch(API_ENDPOINT.CATEGORY);
    const responseJson = await response.json();
    return responseJson.results;
  }

}

export default RecipeDbSource;
