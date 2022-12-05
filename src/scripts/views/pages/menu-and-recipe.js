import RecipeDbSource from '../../data/recipedb-source';
import { createRecipeTemplate } from '../templates/template-creator';

const MenuAndRecipe = {
  async render() {
    return `
        <div class="container">
          <h2 class="text-center mt-4">Menu dan Resep<h2>
          <div class="row row-cols-6 row-cols-md-4 g-4" id="recipes">
          </div>
        </div>
    `;
  },

  async afterRender() {
    const recipes = await RecipeDbSource.listRecipes();
    const recipesContainer = document.querySelector('#recipes');
    recipes.forEach((recipe) => {
      recipesContainer.innerHTML += createRecipeTemplate(recipe);
    });
  },
};

export default MenuAndRecipe;
