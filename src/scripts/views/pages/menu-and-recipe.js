import RecipeDbSource from '../../data/recipedb-source';
import { createRecipeTemplate, createCategoriesTemplate } from '../templates/template-creator';

const MenuAndRecipe = {
  async render() {
    return `
        <div class="heroMenu">
        <h2 class="heroMenuTitle">Daftar Menu Resep<h2>
        </div>
          <div class="recipes-page container mt-4">
            <div class="category-section row row-cols-1 row-cols-lg-5 row-cols-sm-2 g-4 mb-2" id="categories"></div>
            <div class="line"></div>
            <div class="row row-cols-1 row-cols-xl-4 row-cols-md-2 mt-2 g-4" id="recipes">
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

    const categories = await RecipeDbSource.categories();
    const categoriesContainer = document.querySelector('#categories');
    categories.forEach((category) => {
      categoriesContainer.innerHTML += createCategoriesTemplate(category);
    });
  },
};

export default MenuAndRecipe;
