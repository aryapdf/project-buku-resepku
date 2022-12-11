import RecipeDbSource from '../../data/recipedb-source';
import { createRecipeTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="hero">
          <h2 class="heroTitle">Resep Untuk Semua<h2>
          <p class ="heroSubtitle">Semua bisa masak. Masak untuk semua.</p>
        </div>
        <div class="container mt-4 h-100">
          <h3 class="text-center fw-semibold fs-1">Resep Rekomendasi</h3>
          <div class="line"></div>
          <div class="row row-cols-1 row-cols-xl-4 row-cols-md-2 mt-2 g-4" id="recipes">
          </div>
        </div>
        `;
  },

  async afterRender() {
    const newRecipes = await RecipeDbSource.newestRecipes();
    const recipesContainer = document.querySelector('#recipes');
    newRecipes.forEach((recipe) => {
      recipesContainer.innerHTML += createRecipeTemplate(recipe);
    });
  },
};

export default Home;
