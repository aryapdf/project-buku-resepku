import RecipeDbSource from '../../data/recipedb-source';
import { createRecipeTemplate } from '../templates/template-creator';

const MenuAndRecipe = {
  async render() {
    return `
        <div class="heroMenu">
        <h2 class="heroMenuTitle">Semua Bisa Masak<h2>
        <p class ="heroMenuSubtitle">Dengan hadirnya resep yang bisa dilihat dimana saja kapan saja, semua jadi bisa masak!</p>
        </div>
        <h3 class="text-center fw-semibold fs-1 mt-4">Daftar Menu Resep</h3>
        <div class="line"></div>
        <div class="container">
                    <div class="row row-cols-1 row-cols-xl-4 row-cols-md-2 mt-2 g-4" id="recipes">
                    </div>
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
