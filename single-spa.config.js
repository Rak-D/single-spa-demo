import { registerApplication, start } from "single-spa";

registerApplication(
  // Name of the single page application
  'home',
  // Loading Function
  () => { },
  // Activity Function
  (location) => location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith('/home')
)

start()