// include angular loader, which allows the files to load in any order
/*
 AngularJS v0.10.6-5cdfe45a
 (c) 2010-2012 AngularJS http://angularjs.org
 License: MIT
*/
'use strict';(function(i){function d(a,b,c){return a[b]||(a[b]=c())}return d(d(i,"angular",Object),"module",function(){var a={};return function(b,c,e){c&&a.hasOwnProperty(b)&&(a[b]=null);return d(a,b,function(){function a(b,c){return function(){d.push([b,c,arguments]);return f}}if(!c)throw Error("No module: "+b);var d=[],g=[],h=a("$injector","invoke"),f={_invokeQueue:d,_runBlocks:g,requires:c,name:b,service:a("$provide","service"),factory:a("$provide","factory"),value:a("$provide","value"),filter:a("$filterProvider",
"register"),config:h,run:function(a){g.push(a);return this}};e&&h(e);return f})}})})(window);

// include a third-party async loader library
/*!
 * $script.js v1.3
 * https://github.com/ded/script.js
 * Copyright: @ded & @fat - Dustin Diaz, Jacob Thornton 2011
 * Follow our software http://twitter.com/dedfat
 * License: MIT
 */
!function(a,b,c){function t(a,c){var e=b.createElement("script"),f=j;e.onload=e.onerror=e[o]=function(){e[m]&&!/^c|loade/.test(e[m])||f||(e.onload=e[o]=null,f=1,c())},e.async=1,e.src=a,d.insertBefore(e,d.firstChild)}function q(a,b){p(a,function(a){return!b(a)})}var d=b.getElementsByTagName("head")[0],e={},f={},g={},h={},i="string",j=!1,k="push",l="DOMContentLoaded",m="readyState",n="addEventListener",o="onreadystatechange",p=function(a,b){for(var c=0,d=a.length;c<d;++c)if(!b(a[c]))return j;return 1};!b[m]&&b[n]&&(b[n](l,function r(){b.removeEventListener(l,r,j),b[m]="complete"},j),b[m]="loading");var s=function(a,b,d){function o(){if(!--m){e[l]=1,j&&j();for(var a in g)p(a.split("|"),n)&&!q(g[a],n)&&(g[a]=[])}}function n(a){return a.call?a():e[a]}a=a[k]?a:[a];var i=b&&b.call,j=i?b:d,l=i?a.join(""):b,m=a.length;c(function(){q(a,function(a){h[a]?(l&&(f[l]=1),o()):(h[a]=1,l&&(f[l]=1),t(s.path?s.path+a+".js":a,o))})},0);return s};s.get=t,s.ready=function(a,b,c){a=a[k]?a:[a];var d=[];!q(a,function(a){e[a]||d[k](a)})&&p(a,function(a){return e[a]})?b():!function(a){g[a]=g[a]||[],g[a][k](b),c&&c(d)}(a.join("|"));return s};var u=a.$script;s.noConflict=function(){a.$script=u;return this},typeof module!="undefined"&&module.exports?module.exports=s:a.$script=s}(this,document,setTimeout)

// load all of the dependencies asynchronously.
$script([
  "bower_components/angular/angular.min.js",
  "js/app.js"
], function() {
  // when all is done, execute bootstrap angular application
  angular.bootstrap(document, ['angularComment']);
});