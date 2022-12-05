import CONFIG from './config';

const API_ENDPOINT = {
  RECIPES: `${CONFIG.BASE_URL}recipes-length?limit=4`,
  CATEGORY: `${CONFIG.BASE_URL}category/recipes`,
  DETAIL: (key) => `${CONFIG.BASE_URL}recipe/${key}`,
  CATEGORY_DETAIL: (key) => `${CONFIG.BASE_URL}recipes/${key}`,
};

export default API_ENDPOINT;
