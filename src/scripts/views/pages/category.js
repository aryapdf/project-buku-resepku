import RecipeDbSource from '../../data/recipedb-source';
import UrlParser from '../../routes/url-parser';
import { createRecipeTemplate, createCategoriesTemplate } from '../templates/template-creator';

const Category = {
  async render() {
    return `
        <div class="heroCategory">
          <h2 class="heroMenuTitle">Resep Terkategori</h2>
        </div>
        <div class="container category-page mt-4">
          <div class="category-section row row-cols-1 row-cols-lg-5 row-cols-sm-2 g-4 h-100" id="categories"></div>
          <div class="line"></div>
          <div class="row row-cols-1 row-cols-xl-4 row-cols-md-2 mt-2 g-4" id="recipes">
          </div>
        </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const recipes = await RecipeDbSource.categoryRecipes(url.id);
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

export default Category;
