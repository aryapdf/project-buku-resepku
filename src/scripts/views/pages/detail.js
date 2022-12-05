import UrlParser from '../../routes/url-parser';
import RecipeDbSource from '../../data/recipedb-source';
import { createRecipeDetail } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
          <div class="container mt-5">
            <div class="row g-4" id="recipe">
            </div>
          </div>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const recipe = await RecipeDbSource.detailRecipes(url.key);
    const recipeContainer = document.querySelector('#recipe');
    recipeContainer.innerHTML = createRecipeDetail(recipe);
  },
};

export default Detail;
