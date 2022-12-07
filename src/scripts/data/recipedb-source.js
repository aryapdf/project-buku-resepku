import API_ENDPOINT from '../globals/api-endpoint';

class RecipeDbSource {
  static async listRecipes() {
    const response = await fetch(API_ENDPOINT.RECIPES);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async newestRecipes() {
    const response = await fetch(API_ENDPOINT.RECIPES_HOME);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async otherRecipes() {
    const response = await fetch(API_ENDPOINT.RECIPES_OTHER);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailRecipes(key) {
    const response = await fetch(API_ENDPOINT.DETAIL(key));
    const responseJson = await response.json();
    return responseJson.results;
  }
}

export default RecipeDbSource;
