import CONFIG from './config';

const API_ENDPOINT = {
  RECIPES: `${CONFIG.BASE_URL}posts`,
  RECIPES_HOME: `${CONFIG.BASE_URL}posts/limit/4`,
  RECIPES_OTHER: `${CONFIG.BASE_URL}posts/limit/5`,
  CATEGORIES: `${CONFIG.BASE_URL}categories`,
  POST_COMMENT: `${CONFIG.BASE_URL}comments`,
  DETAIL: (id) => `${CONFIG.BASE_URL}posts/${id}`,
  CATEGORY: (id) => `${CONFIG.BASE_URL}posts/category/${id}`,
};

export default API_ENDPOINT;
