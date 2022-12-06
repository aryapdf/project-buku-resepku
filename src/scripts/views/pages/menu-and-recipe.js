import RecipeDbSource from '../../data/recipedb-source';
import { createRecipeTemplate, createCategoriesRecipe } from '../templates/template-creator';

const MenuAndRecipe = {
  async render() {
    return `
        <h2 class="text-center fw-semibold fs-1 mt-4">Semua Bisa Masak</h2>
        <p class="text-center lead fs-4 mt-2 mb-4">Dengan hadirnya resep yang bisa dilihat dimana saja kapan saja, semua jadi bisa masak!</p>
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <div class="row row-cols-1 row-cols-md-2 mt-1 g-4" id="recipes">
                    </div>
                </div>
                <div class="container col-4">
                    <div class="row row-cols-1 mt-1 g-4" id="categories">
                </div>
            </div>
        </div>
    `;
  },

  async afterRender() {
    const recipes = await RecipeDbSource.listRecipes();
    const categories = await RecipeDbSource.categoryRecipes();
    const recipesContainer = document.querySelector('#recipes');
    const categoriesContainer = document.querySelector('#categories');
    recipes.forEach((recipe) => {
      recipesContainer.innerHTML += createRecipeTemplate(recipe);
    });
    categories.forEach((category) => {
      categoriesContainer.innerHTML += createCategoriesRecipe(category);
    });
  },
};

export default MenuAndRecipe;
