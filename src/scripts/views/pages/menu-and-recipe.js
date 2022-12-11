/* eslint-disable no-return-assign */
import RecipeDbSource from '../../data/recipedb-source';
import { createRecipeTemplate, createCategoriesTemplate } from '../templates/template-creator';
import RecipesAPI from '../../data/recipe-api';
import API_ENDPOINT from '../../globals/api-endpoint';

const MenuAndRecipe = {
  async render() {
    return `
        <div class="heroMenu">
        <h2 class="heroMenuTitle">Daftar Resep</h2>
        </div>
          <div class="recipes-page container mt-4">
            <div class="search">
              <i class="fa-solid fa-utensils"></i>
              <form action="">
              <input type="text" class="input" id="input" placeholder="Temukan..">
              <button class="submit" id="submit">Cari</button>
              </form>
            </div>
            <div class="line"></div>
            <div class="category-section row row-cols-1 row-cols-lg-5 row-cols-sm-2 g-4 mt-1" id="categories"></div>
            <div class="line"></div>
            <div class="row row-cols-1 row-cols-lg-4 row-cols-sm-2 mt-2 g-4" id="recipes">
          </div>
        </div>
    `;
  },

  async afterRender() {
    let items = '';

    const recipes = await RecipesAPI.fetchURL(API_ENDPOINT.RECIPES);
    const recipesContainer = document.querySelector('#recipes');

    recipesContainer.innerHTML = items;
    recipes.data.map((recipe) => items += createRecipeTemplate(recipe));
    recipesContainer.innerHTML = items;

    const categories = await RecipeDbSource.categories();
    const categoriesContainer = document.querySelector('#categories');
    categories.forEach((category) => {
      categoriesContainer.innerHTML += createCategoriesTemplate(category);
    });

    const inputSearch = document.querySelector('#input');
    const searchBtn = document.querySelector('#submit');

    searchBtn.addEventListener('click', async (event) => {
      event.preventDefault();
      items = '';
      const search = await RecipesAPI.fetchURL(`http://api-recipee.herokuapp.com/api/search/posts?q=${inputSearch.value}`);

      if (search.data.length === 0) {
        items = `<p class="empty-comment">No Result for ${inputSearch.value}</p>`;
        recipesContainer.innerHTML = items;
      }
      search.data.forEach((res) => items += createRecipeTemplate(res));
      recipesContainer.innerHTML = items;

      inputSearch.value = '';
    });
  },
};

export default MenuAndRecipe;
