import { runGhadi } from './src/ghadi';
import { handleMenu } from './src/menu';

import "@melloware/coloris/dist/coloris.css";
import { coloris, init as colorisInit } from "@melloware/coloris";
import Alpine from 'alpinejs'
 
// window.Alpine = Alpine;
Alpine.start();
colorisInit();

document.addEventListener("DOMContentLoaded", ()=>{
  runGhadi();
  handleMenu();

  // the color picker
  coloris({
    el: ".colorInput",
    themeMode: "auto",
    theme: "polaroid",
    wrap: true,
    defaultColor: '#b9d6e2'
  });
});


