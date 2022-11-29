import 'regenerator-runtime';
import '../styles/style.scss';
import '../styles/responsive.scss';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navDrawer'),
  content: document.querySelector('#mainContent'),
  close: document.querySelector('#btn-close'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
