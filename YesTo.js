<!-- No berapa Start LazyLoad YouTube modiv -->
<script>
//<![CDATA[
/*! lazyload-youtube.js */
!function(){"use strict";for(var t=document.querySelectorAll(".youtube-lazyload"),e=0;e<t.length;e++){var i=document.createElement("div");i.className="play-button",t[e].appendChild(i);var l=document.createElement("img");l.src="https://img.youtube.com/vi/"+t[e].dataset.id+"/hqdefault.jpg",t[e].appendChild(l),t[e].addEventListener("click",function(){var t=document.createElement("iframe");for(t.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.id+"?rel=0&showinfo=0&autoplay=1"),t.setAttribute("frameborder","0"),t.setAttribute("allowfullscreen","");this.firstChild;)this.removeChild(this.firstChild);this.appendChild(t)})}}();
//]]>
</script>
<!-- No berapa End LazyLoad YouTube modiv -->
