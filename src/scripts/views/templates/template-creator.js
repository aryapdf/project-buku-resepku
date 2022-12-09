import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRecipeTemplate = (results) => `
  <div class="col">
    <div class="card h-100 border border-0 me-1" style="margin: auto;">
        <img class="lazyload" data-src="${results.thumb}" class="card-img-top" alt="${results.title}">
        <div class="card-body-m-0">
            <ul class="list-group list-group-horizontal">
            <li class="list-group-item p-auto px-0 border border-0"><i class="bi bi-alarm-fill"></i> ${results.times}</li>
            <li class="list-group-item p-auto px-1 border border-0"><i class="bi bi-basket-fill"></i> ${results.serving}</li>
            <li class="list-group-item p-auto px-1 border border-0"><i class="bi bi-egg-fried"></i> ${results.difficulty}</li>
            </ul>
            <h2 class="card-title h5"><a href="#/detail/${results.key}">${results.title}</a></h2>
        </div>
    </div>
  </div>
`;

const createRecipeHeroDetail = (results) => `
<div class="container">
  <div class="row heroDetail row-cols-1 g-4 h-100">
    <div class="card border-0">
    <h2 class="card-title hero-title pt-2 pb-2">${results.title}</h2>
      <p class="card-text text-1 text-opacity-50 text-center m-1">Oleh ${results.author.user}</p>
      <p class="card-text text-2 text-opacity-50 text-center m-1"> ${results.author.datePublished}</p>
    </div>
    <ul class="list-group list-group-horizontal border border-0">
      <li class="list-group-item flex-fill text-center border border-0"> <i class="bi bi-alarm-fill"></i> ${results.times}</li>
      <li class="list-group-item flex-fill text-center border border-0"> <i class="bi bi-basket-fill"></i> ${results.servings}</li>
      <li class="list-group-item flex-fill text-center border border-0"> <i class="bi bi-egg-fried"></i> ${results.difficulty}</li>
    </ul>
    <div class="card border-0">
      <img class="lazyload" data-src="${results.thumb}" class="img-fluid hero-img">
    </div>
  </div>
</div>
<div class="borderline"></div>
`;

const createRecipeMainDetail = (results) => `
<div class="border-0 mt-3">
  <p class="card-text desc">${results.desc.split('.', 5)}.</p>
  </div>
  <div class="row row-cols-1 mt-3">
  <h2 class="sub-title">Bahan-Bahan</h2>
      <div class="group-of-ingredients mb-2">
        <ul class="ingredients pb-1 ps-0">
        ${results.ingredient.reduce((show, value) => show.concat(`<li class="ingredient">${value}</li>`), '')}
        </div>
    <div class="border-0">
        <h2 class="sub-title">Langkah-Langkah</h2>
        <div class="numbers-and-steps">
            <div class="numbers">
            ${results.step.reduce((show, value) => show.concat(`<h3 class="number">${value.split('', 1)}</h3>`), '')}
            </div>
            <div class="steps">
            ${results.step.reduce((show, value) => show.concat(`<p class=" step">${value.slice(1)}</p>`), '')}
            </div>
        </div>
    </div>
</div>
`;

const createCategoriesRecipe = (results) => `
    <div class="card h-100 border border-0 mt-2" style="
      background: rgb(51,51,51);
      background: linear-gradient(270deg, rgba(51,51,51,1) 11%, rgba(255,255,255,1) 11%);
      ">
            <h5 class="card-title text-light h-100 category"><a href="#/category/recipes/${results.key}">${results.category}</a></h5>
    </div>
`;

export {
  createRecipeTemplate,
  createRecipeHeroDetail,
  createRecipeMainDetail,
  createCategoriesRecipe,
};
