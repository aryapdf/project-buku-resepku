import 'regenerator-runtime';
import '../styles/style.scss';
import '../styles/responsive.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navDrawer'),
  content: document.querySelector('#mainContent'),
  close: document.querySelector('#btn-close'),
  menu: document.querySelector('#drawer-menu'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', async () => {
  app.renderPage();
  await swRegister();
});
