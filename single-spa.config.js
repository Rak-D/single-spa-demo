import { registerApplication, start } from "single-spa";

registerApplication(
  'navBar',
  () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
  () => true
);

registerApplication(
  // Name of the single page application
  'home',
  // Loading Function
  () => import('./src/home/home.app.js'),
  // Activity Function
  (location) => location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith('/home')
);

const pathPrefix = prefix => {
  return location => {
    return location.pathname.startsWith(prefix);
  }
}

registerApplication(
  'angularJS',
  () => import('./src/angularJS/angularJS.app.js'),
  pathPrefix('/angularJS')
);

start()