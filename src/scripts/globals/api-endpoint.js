import CONFIG from './config';

const API_ENDPOINT = {
  RECIPES: `${CONFIG.BASE_URL}search/?q`,
  RECIPES_HOME: `${CONFIG.BASE_URL}recipes-length?limit=8`,
  RECIPES_OTHER: `${CONFIG.BASE_URL}recipes-length?limit=4`,
  DETAIL: (key) => `${CONFIG.BASE_URL}recipe/${key}`,
  SEARCH_RECIPES: (key) => `${CONFIG.BASE_URL}search/?q=${key}`,
};

export default API_ENDPOINT;
