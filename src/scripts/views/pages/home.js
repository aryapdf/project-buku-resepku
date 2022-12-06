import RecipeDbSource from '../../data/recipedb-source';
import { createRecipeTemplate, createCategoriesRecipe } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="hero">
          <h2 class="heroTitle">Resep Untuk Semua<h2>
          <p class ="heroSubtitle">Semua bisa masak. Masak untuk semua.</p>
        </div>
        <div class="line"></div>
        <div class="container mt-4 h-100">
          <h3 class="text-center fw-semibold fs-1">Resep Terbaru Kami</h3>
          <div class="row row-cols-1 row-cols-lg-4 row-cols-sm-2 mt-2 g-4" id="recipes">
          </div>
          <div class="line"></div>
          <h3 class="text-center fw-semibold fs-1 mt-4">Cari Berdasarkan Kategori</h3>
          <div class="row row-cols-1 row-cols-md-2 mt-4 g-5 h-100" id="categories">
          </div>
        </div>
        `;
  },

  async afterRender() {
    const newRecipes = await RecipeDbSource.newestRecipes();
    const categories = await RecipeDbSource.categoryRecipes();
    const recipesContainer = document.querySelector('#recipes');
    const categoriesContainer = document.querySelector('#categories');
    newRecipes.forEach((recipe) => {
      recipesContainer.innerHTML += createRecipeTemplate(recipe);
    });
    categories.forEach((category) => {
      categoriesContainer.innerHTML += createCategoriesRecipe(category);
    });
  },
};

export default Home;
