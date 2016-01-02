// ==UserScript==
// @name        VSCO Image Pop
// @namespace   com.xela722.GreaseMonkey
// @description pops images from vsco
// @include     http://*.vsco.co/*
// @exclude     http://grid.vsco.co/feed*
// @exclude     http://*.vsco.co/grid*
// @exclude     http://*vsco.co/
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
getVideoContent()
