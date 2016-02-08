// ==UserScript==
// @name        VSCO Image Pop
// @namespace   com.xela722.GreaseMonkey
// @description pops images from vsco
// @include     https://*.vsco.co/*
// @include     https://vsco.co/*
// @exclude     https://grid.vsco.co/feed*
// @exclude     https://*.vsco.co/grid/*
// @exclude     https://vsco.co/
// @exclude     https://vsco.co/*/grid/*
// @version     1
// @grant       none
// ==/UserScript==
function getVideoContent() { 
   var metas = document.getElementsByTagName('meta'); 

   for (i=0; i<metas.length; i++) { 
     if (metas[i].getAttribute("property") == "og:image") { 
         var x = metas[i].getAttribute("content"); 
      } 
   } 
  window.open(x)
} 
$(document).click(function(){
   getVideoContent()
});
