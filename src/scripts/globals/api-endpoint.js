import CONFIG from './config';

const API_ENDPOINT = {
  RECIPES: `${CONFIG.BASE_URL}search/?q`,
  RECIPES_HOME: `${CONFIG.BASE_URL}recipes-length?limit=8`,
  RECIPES_OTHER: `${CONFIG.BASE_URL}recipes-length?limit=4`,
  CATEGORIES: `${CONFIG.BASE_URL}category/recipes`,
  DETAIL: (key) => `${CONFIG.BASE_URL}recipe/${key}`,
  CATEGORY: (key) => `${CONFIG.BASE_URL}category/recipes/${key}`,
};

export default API_ENDPOINT;
