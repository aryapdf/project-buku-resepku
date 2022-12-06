import UrlParser from '../../routes/url-parser';
import RecipeDbSource from '../../data/recipedb-source';
import { createRecipeTemplate } from '../templates/template-creator';

const Category = {
  async render() {
    return `
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 mt-1 g-4" id="recipes">
      </div>
    </div>
`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const recipes = await RecipeDbSource.detailCategory(url.key);
    const recipesContainer = document.querySelector('#recipes');
    recipes.forEach((recipe) => {
      recipesContainer.innerHTML += createRecipeTemplate(recipe);
    });
  },
};

export default Category;
