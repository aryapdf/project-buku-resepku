/* eslint-disable camelcase */
import UrlParser from '../../routes/url-parser';
import RecipeDbSource from '../../data/recipedb-source';
import RecipesAPI from '../../data/recipe-api';
import {
  createRecipeHeroDetail,
  createRecipeMainDetail,
  createRecipeTemplate,
  createCategoriesTemplate,
  createReviewsTemplate,
} from '../templates/template-creator';
import API_ENDPOINT from '../../globals/api-endpoint';

const Detail = {
  async render() {
    return `
      <div class="mt-1 detail">
        <div class="hero-section">
          <div id="recipeHero"></div>
          <div class="borderline"></div>
        </div>
        <div class="container">
          <div class="row">
          <div class="col-12 col-lg-8">
            <div id="recipeMain"></div>
            <div class="line"></div>
            <div class="review-section">
              <div class="reviews" id="reviews"></div>
              <h2 class="sub-title">Ulasan</h2>
              <div class="input-review-section">
                <textarea id="input-name" name="input-name" type="text" placeholder="Nama" required></textarea>
                <textarea cols="30" id="input-comment" name="input-comment" type="text" placeholder="Beri komentar" required></textarea>
                <button id="submit-review" class="submit-review" type="submit" value="submit">Kirim
                </button>
              </div>
              <p class="note"></p>
            </div>
          </div>
            <div class="col-12 col-lg-4">
              <div class="other-line"></div>
              <div id="categories" class="category-section row row-cols-1 row-cols-sm-2 row-cols-lg-1"></div>
              <div class="other-line" style="height: 0;"></div>
              <h2 class="other-title">Resep Lainnya</h2>
              <div id="other" class="row row-cols-1 row-cols-sm-2 row-cols-lg-1 ps-5 px-5 mt-4"></div>
            </div>
          </div>
        </div>
      </div>
          `;
  },

  async afterRender() {
    const { id } = await UrlParser.parseActiveUrlWithoutCombiner();
    const { post_id } = await UrlParser.parseActiveUrlWithoutCombiner();
    const recipe = await RecipeDbSource.detailRecipes(id);
    const otherRecipes = await RecipeDbSource.otherRecipes();

    const recipeHeroContainer = document.querySelector('#recipeHero');
    const recipeMainContainer = document.querySelector('#recipeMain');
    const recipeOtherContainer = document.querySelector('#other');

    otherRecipes.forEach((otherRecipe) => {
      recipeOtherContainer.innerHTML += createRecipeTemplate(otherRecipe);
    });
    recipeHeroContainer.innerHTML = createRecipeHeroDetail(recipe);
    recipeMainContainer.innerHTML = createRecipeMainDetail(recipe);

    const categories = await RecipeDbSource.categories();
    const categoriesContainer = document.querySelector('#categories');
    categories.forEach((category) => {
      categoriesContainer.innerHTML += createCategoriesTemplate(category);
    });

    const reviewsContainer = document.querySelector('#reviews');
    if (recipe.comments.length === 0) {
      reviewsContainer.innerHTML = '<p class="review-empty">Jadi orang pertama yang mengulas resep ini!</p>';
    }
    recipe.comments.forEach((comment) => {
      reviewsContainer.innerHTML = createReviewsTemplate(comment.name, comment.description);
    });

    const inputName = document.querySelector('#input-name');
    const inputComment = document.querySelector('#input-comment');
    const submitBtn = document.querySelector('#submit-review');
    const note = document.querySelector('.note');

    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!inputName.value || !inputComment.value) {
        note.innerHTML = 'Nama dan Review tidak boleh kosong';
      } else {
        RecipesAPI.fetchURL(API_ENDPOINT.POST_COMMENT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id,
            name: inputName.value,
            post_id,
            description: inputComment.value,
          }),
        });
        note.innerHTML = 'Review Telah Terposting';
        inputName.value = '';
        inputComment.value = '';
      }
    });
  },
};

export default Detail;
