import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import MenuAndRecipe from '../views/pages/menu-and-recipe';
import AboutUs from '../views/pages/about-us';

const routes = {
  '/': Home,
  '/home': Home,
  '/recipe': MenuAndRecipe,
  '/about-us': AboutUs,
  '/detail/:key': Detail,
};

export default routes;
