

$(".btn").mouseup(function(){
  $(this).blur();
})


$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  //nav li contact
  $(function() {
    $('a[href^="mailto"]').each(function() {
     this.href = this.href.replace('(at)', '@').replace(/\(dot\)/g, '.');
    });
   });


   //footer email contact
  $(function() {
    $('.mailto').each(function() {
     this.href = this.href.replace('(at)', '@').replace(/\(dot\)/g, '.');
     // Remove this line if you don't want to set the email address as link text:
     this.innerHTML = this.href.replace('mailto:', '');
    });
   });


//======================================
//MODERNIZR.JS to get rid of iPhone Hover
//=======================================

   /*! modernizr 3.2.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-pointerevents-touchevents !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,i,a,r;for(var f in u)if(u.hasOwnProperty(f)){if(e=[],n=u[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)a=e[i],r=a.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),l.push((s?"":"no-")+r.join("-"))}}function i(e){var n=d.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?d.className.baseVal=n:d.className=n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=a(p?"svg":"body"),e.fake=!0),e}function f(e,t,o,s){var i,f,l,u,c="modernizr",p=a("div"),v=r();if(parseInt(o,10))for(;o--;)l=a("div"),l.id=s?s[o]:c+(o+1),p.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+c,(v.fake?v:p).appendChild(i),v.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=c,v.fake&&(v.style.background="",v.style.overflow="hidden",u=d.style.overflow,d.style.overflow="hidden",d.appendChild(v)),f=t(p,e),v.fake?(v.parentNode.removeChild(v),d.style.overflow=u,d.offsetHeight):p.parentNode.removeChild(p),!!f}var l=[],d=n.documentElement,u=[],c={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){u.push({name:e,fn:n,options:t})},addAsyncTest:function(e){u.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr;var p="svg"===d.nodeName.toLowerCase(),v=c._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];c._prefixes=v;var h="Moz O ms Webkit",m=c._config.usePrefixes?h.toLowerCase().split(" "):[];c._domPrefixes=m;var g=function(e){function t(n,t){var s;return n?(t&&"string"!=typeof t||(t=a(t||"div")),n="on"+n,s=n in t,!s&&o&&(t.setAttribute||(t=a("div")),t.setAttribute(n,""),s="function"==typeof t[n],t[n]!==e&&(t[n]=e),t.removeAttribute(n)),s):!1}var o=!("onblur"in n.documentElement);return t}();c.hasEvent=g,Modernizr.addTest("pointerevents",function(){var e=!1,n=m.length;for(e=Modernizr.hasEvent("pointerdown");n--&&!e;)g(m[n]+"pointerdown")&&(e=!0);return e});var w=c.testStyles=f;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",v.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");w(o,function(e){t=9===e.offsetTop})}return t}),s(),i(l),delete c.addTest,delete c.addAsyncTest;for(var y=0;y<Modernizr._q.length;y++)Modernizr._q[y]();e.Modernizr=Modernizr}(window,document);