import UrlParser from '../../routes/url-parser';
import RecipeDbSource from '../../data/recipedb-source';
import { createRecipeHeroDetail, createRecipeMainDetail, createRecipeTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class="mt-1 detail">
        <div id="recipeHero">
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-8" id="recipeMain">
            </div>
            <div class="col-12 col-lg-4">
              <div class="other-line"></div>
              <h2 class="other-title">Lihat Resep Lainnya</h2>
              <div id="other" class="row row-cols-1 row-cols-sm-2 row-cols-lg-1 ps-5 px-5">
              </div>
            </div>
          </div>
        </div>
      </div>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const recipe = await RecipeDbSource.detailRecipes(url.key);
    const otherRecipes = await RecipeDbSource.otherRecipes();
    const recipeHeroContainer = document.querySelector('#recipeHero');
    const recipeMainContainer = document.querySelector('#recipeMain');
    const recipeOtherContainer = document.querySelector('#other');
    otherRecipes.forEach((otherRecipe) => {
      recipeOtherContainer.innerHTML += createRecipeTemplate(otherRecipe);
    });
    recipeHeroContainer.innerHTML = createRecipeHeroDetail(recipe);
    recipeMainContainer.innerHTML = createRecipeMainDetail(recipe);
  },
};

export default Detail;
