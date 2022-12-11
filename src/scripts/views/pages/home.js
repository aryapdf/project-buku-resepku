import RecipeDbSource from '../../data/recipedb-source';
import { createRecipeTemplate, createCategoriesTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="hero">
          <h2 class="heroTitle">Resep Untuk Semua<h2>
          <p class ="heroSubtitle">Semua bisa masak. Masak untuk semua.</p>
        </div>
        <div class="container mt-4 h-100 homepage">
          <div class="line"></div>
          <h3 class="text-center fw-semibold fs-1 mt-4">Resep Rekomendasi</h3>
          <div class="line"></div>
          <div class="row row-cols-1 row-cols-xl-4 row-cols-md-2 mt-2 g-4" id="recipes">
          </div>
          <div class="line"></div>
          <h3 class="text-center fw-semibold fs-1 mt-4">Cari Berdasarkan Kategori</h3>
          <div class="line"></div>
          <div class="category-section row row-cols-2 row-cols-lg-5 row-cols-sm-2 g-4 mt-2" id="categories"></div>
        </div>
        `;
  },

  async afterRender() {
    const newRecipes = await RecipeDbSource.newestRecipes();
    const recipesContainer = document.querySelector('#recipes');
    newRecipes.forEach((recipe) => {
      recipesContainer.innerHTML += createRecipeTemplate(recipe);
    });

    const categories = await RecipeDbSource.categories();
    const categoriesContainer = document.querySelector('#categories');
    categories.forEach((category) => {
      categoriesContainer.innerHTML += createCategoriesTemplate(category);
    });
  },
};

export default Home;
