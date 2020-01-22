import { registerApplication, start } from "single-spa";

registerApplication(
  // Name of the single page application
  'home',
  // Loading Function
  () => import('./src/home/home.app.js'),
  // Activity Function
  (location) => location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith('/home')
)

start()