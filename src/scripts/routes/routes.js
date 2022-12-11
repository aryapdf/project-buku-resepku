import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import MenuAndRecipe from '../views/pages/menu-and-recipe';
import AboutUs from '../views/pages/about-us';
import '../utils/search-function';
import Category from '../views/pages/category';

const routes = {
  '/': Home,
  '/home': Home,
  '/recipe': MenuAndRecipe,
  '/about-us': AboutUs,
  '/detail/:id': Detail,
  '/category/:id': Category,
};

export default routes;
