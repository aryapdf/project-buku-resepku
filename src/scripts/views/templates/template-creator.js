const createRecipeTemplate = (results) => `
  <div class="col">
    <div class="card h-100 border border-0" style="margin: auto;">
        <img src="${results.thumb}" class="card-img-top" alt="${results.title}">
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

const createRecipeDetail = (results) => `
  <div class="card col-6">
    <img src="${results.thumb}" class="img-fluid">
  </div>
  <div class="card col-6">
    <h2 class="card-title">${results.title}</h2>
    <p class="card-text text-opacity-50">By ${results.author.user}. ${results.author.datePublished}.</p>
    <ul class="list-group list-group-flush border-0">
        <li class="list-group-item">${results.times}</li>
        <li class="list-group-item">${results.servings}</li>
        <li class="list-group-item">${results.difficulty}</li>
    </ul>
  </div>
  <div class="card col-12">
    <h2 class="card-title">Deskripsi</h2>
    <p class="card-text">${results.desc}</p>
  </div>
  <div class="card col-12">
    <h2 class="card-title">Bahan-Bahan</h2>
    ${results.ingredient.reduce((show, value) => show.concat(`<p>${value}</p>`), '')}
    <p class="card-text"></p>
  </div>
  <div class="card col-12">
    <h2 class="card-title">Langkah-Langkah</h2>
    <p class="card-text">    
    ${results.ingredient.reduce((show, value) => show.concat(`<p>${value}</p>`), '')}
    </p>
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
  createRecipeDetail,
  createCategoriesRecipe,
};
