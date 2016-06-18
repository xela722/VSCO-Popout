// ==UserScript==
// @name        VSCO Image Pop
// @namespace   com.xela722.GreaseMonkey
// @description pops images from vsco
// @include     https://*.vsco.co/*
// @include     https://vsco.co/*
// @exclude     https://grid.vsco.co/feed*
// @exclude     https://*.vsco.co/grid/*
// @exclude     https://vsco.co/
// @exclude     https://vsco.co/*/images/*
// @include     http://*.vsco.co/*
// @include     http://vsco.co/*
// @exclude     http://grid.vsco.co/feed*
// @exclude     http://*.vsco.co/grid/*
// @exclude     http://vsco.co/
// @exclude     http://vsco.co/*/images/*
// @version     1
// @grant       none
// ==/UserScript==
function getVideoContent() {
  var metas = document.getElementsByTagName('meta');
  for (i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('property') == 'og:image') {
      var x = metas[i].getAttribute('content');
    } else if (metas[i].getAttribute('property') == 'og:image:width') {
      var y = metas[i].getAttribute('content');
    } else if (metas[i].getAttribute('property') == 'og:image:height') {
      var z = metas[i].getAttribute('content');
    }
  }
  if (x.includes('w=')) {
    window.open(x.replace('w=800', 'w=' + y));
  } else if (x.includes('h=')) {
    window.open(x.replace('h=800', 'h=' + z));
  }
}
$(document).click(function () {
  getVideoContent();
});
