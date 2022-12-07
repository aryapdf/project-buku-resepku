import UrlParser from '../../routes/url-parser';
import RecipeDbSource from '../../data/recipedb-source';
import { createRecipeTemplate } from '../templates/template-creator';

const Search = {
  async render() {
    return `
    <div class="container">
    <h2>Search Page</h2>
    <div class="row row-cols-1 row-cols-lg-4 row-cols-sm-2 mt-2 g-4" id="recipes">
    </div>
    </div>
`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const recipes = await RecipeDbSource.searchRecipes(url.key);
    const recipesContainer = document.querySelector('#recipes');
    recipesContainer.innerHTML += createRecipeTemplate(recipes);
  },
};

export default Search;
