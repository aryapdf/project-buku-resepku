import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRecipeTemplate = (data) => `
  <div class="col">
    <div class="card h-100 border border-0 me-1" style="margin: auto;">
        <img class="lazyload rounded" data-src="${data.image}" class="card-img-top" alt="${data.title}">
        <div class="card-body-m-0">
            <ul class="list-group list-group-horizontal">
            <li class="list-group-item p-0 border border-0"><i class="fa-solid fa-bowl-food"></i> ${data.category}</li>
            </ul>
            <h2 class="card-title h5"><a href="#/detail/${data.id}">${data.title}</a></h2>
        </div>
    </div>
  </div>
`;

const createRecipeHeroDetail = (data) => `
<div class="container">
  <div class="row heroDetail row-cols-1 g-4 h-100">
    <div class="card border-0">
    <h2 class="card-title hero-title pt-2 pb-2">${data.title}</h2>
    </div>
    <div class="card border-0">
      <img class="lazyload hero-img" data-src="${data.image}" class="img-fluid hero-img">
    </div>
  </div>
</div>
`;

const createRecipeMainDetail = (data) => `
<div class="border-0 mt-3">
  <p class="card-text desc">${data.description.split('.', 5)}.</p>
  <div class="line"></div>
  <div class="row row-cols-1 mt-3">
  <h2 class="sub-title">Bahan-Bahan</h2>
      <div class="group-of-ingredients mb-2">
        <ul class="ingredients pb-1 ps-0">
        ${data.ingredient.reduce((show, value) => show.concat(`<li class="ingredient">${value}</li>`), '')}
        </div>
    <div class="border-0">
        <h2 class="sub-title">Langkah-Langkah</h2>
        <div class="numbers-and-steps">
            <div class="numbers">
            ${data.direction.reduce((show, value) => show.concat(`<h3 class="number">${value.split('', 1)}</h3>`), '')}
            </div>
            <div class="steps">
            ${data.direction.reduce((show, value) => show.concat(`<p class=" step">${value.slice(1)}</p>`), '')}
            </div>
        </div>
    </div>
</div>
`;

const createCategoriesTemplate = (data) => `
<div class="category-item">
  <h3 class="category"><a href="#/category/${data.id}">${data.name}</a></h3>
</div>
`;

const createReviewsTemplate = (comments) => `
<div class="review">
  <h3 class="review-name">${comments.name}</h3>
  <div class="review-line"></div>
  <p class="review-desc">${comments.description}</p>
</div>
`;

export {
  createRecipeTemplate,
  createRecipeHeroDetail,
  createRecipeMainDetail,
  createCategoriesTemplate,
  createReviewsTemplate,
};
