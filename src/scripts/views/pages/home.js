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
          <div class="category-section row row-cols-2 row-cols-lg-5 row-cols-sm-2 g-4" id="categories"></div>
          <div class="line"></div>

          <div class="home-content row row-cols-1 row-cols-md-2">
            <div class="home-img">
              <picture>
                <img src="./images/bg-img-1.jpg" alt=""  class="img-one">
              </picture>
            </div>
            <div class="text-section">
              <h3 class="content-title title-one">Tahukah Kamu?</h3>
              <p class="content-text text-one">We Are Social mencatat bahwa sebanyak rata-rata 74% pengguna internet di Inonesia menggunakan aplikasi pesan-antar makanan setiap bulannya. Wow! Banyak juga ya.. </p>
            </div>
          </div>
          <div class="home-content row row-cols-1 row-cols-md-2">
            <div class="text-section">
              <h3 class="content-title title-two">Hemat Dengan Memasak</h3>
              <p class="content-text text-two">Dengan memasak, kamu dapat menghemat sampai dengan 20% pengeluaran bulanan kamu lho! Menarik bukan?</p>
            </div>
            <div class="home-img">
              <picture>
                <img src="./images/bg-img-2.jpg" alt=""  class="img-one">
              </picture>
            </div>
          </div>
          <div class="home-content row row-cols-1 row-cols-md-2">
          <div class="home-img">
            <picture>
              <img src="./images/bg-img-3.jpg" alt=""  class="img-one">
            </picture>
          </div>
            <div class="text-section">
              <h3 class="content-title title-one">Ayo Mulai Masak</h3>
              <p class="content-text text-one">Dengan bantuan dari resep-resep kami, kamu dapat memasak apa yang kamu mau. Dari mana saja, kapan saja.</p>
            </div>
          </div>
          <div class="line"></div>
            <h3 class="text-center fw-semibold fs-1 mt-4">Resep Rekomendasi</h3>
            <div class="row row-cols-1 row-cols-xl-2 row-cols-md-2 mt-2 g-4" id="recipes">
          </div>
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

    const categories = await RecipeDbSource.categories();
    const categoriesContainer = document.querySelector('#categories');
    categories.forEach((category) => {
      categoriesContainer.innerHTML += createCategoriesTemplate(category);
    });
  },
};

export default Home;
