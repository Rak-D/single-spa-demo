import React from 'react';
import ReactDOM from 'react-dom';
import singlePageReact from 'single-spa-react';
import NavBar from './root.component.js';
import SingleSpaReact from 'single-spa-react';

function domElementGetter() {
  return document.getElementById("navBar")
}

export const navBar = SingleSpaReact({
  React,
  ReactDOM,
  rootComponent: NavBar,
  domElementGetter,
})