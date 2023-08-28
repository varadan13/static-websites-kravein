null==Element.prototype.getAttributeNames&&(Element.prototype.getAttributeNames=function(){for(var e=this.attributes,t=e.length,o=new Array(t),n=0;n<t;n++)o[n]=e[n].name;return o}),function(e,t,o){function n(){window.setupMap=w,v(["//maps.googleapis.com/maps/api/js?v=3.exp&callback=setupMap&key=AIzaSyChxZ857StRceZGKljSRQydJ0XgRXdEowA"],(function(e){e&&console.error("ERROR LOADING GOOGLE MAPS SCRIPT",e)}))}var a=$(window),s=$("[lazy-src],[lazy-style],[lazy-srcset]"),i=$(".js-svg-sprite-loaded").length>0,l=$(".js-contact-form"),r=$(".js-header"),c=$(".js-toggle-menu"),p=$(".js-language-selector"),d=$(".js-announcement"),g=$(".js-announcement-placeholder"),u=$(".js-navigation"),h=$(".js-contact-send"),m=$(".js-swipebox"),f=$(".js-has-map");function w(){var e=document.querySelector(".js-map");if(e){var o,n=new google.maps.LatLng("-37.79073604957066","145.09585347116393"),a=new google.maps.Map(e,{mapTypeId:google.maps.MapTypeId.ROADMAP,center:n,zoom:15,mapTypeControlOptions:{position:google.maps.ControlPosition.RIGHT_TOP},zoomControlOptions:{position:google.maps.ControlPosition.LEFT_TOP},streetViewControlOptions:{position:google.maps.ControlPosition.LEFT_TOP},scrollwheel:!1,draggable:!1});new google.maps.Marker({position:n,map:a,draggable:!1,icon:"/websites/img/marker.png"});google.maps.event.addDomListenerOnce(a,"click",(function(e){this.setOptions({scrollwheel:!0,draggable:!0})})),google.maps.Polygon.prototype.getBounds||(google.maps.Polygon.prototype.getBounds=function(){var e=new google.maps.LatLngBounds;return this.getPath().forEach((function(t){e.extend(t)})),e}),t.forEach((function(e,t){var n,s,i={clickable:!1,fillColor:e.color,fillOpacity:.1,strokeColor:e.color,strokeOpacity:.6,strokeWeight:4,zIndex:t};"circle"==e.type?((n=new google.maps.Circle(i)).setRadius(e.shape.radius),n.setCenter(new google.maps.LatLng(e.shape.center.lat,e.shape.center.lng)),n.setMap(a)):"polygon"==e.type&&(s=[],e.shape.path.forEach((function(e){s.push(new google.maps.LatLng(e.lat,e.lng))})),(n=new google.maps.Polygon(i)).setPath(s),n.setMap(a)),o=o?n.getBounds().union(o):n.getBounds()})),o&&a.fitBounds(o)}}function v(e,t){e=Array.isArray(e)?e:[e];var o=0,n=!1,a=function(){var s=e[o],i=document.createElement("script");i.src=s,i.async=1,i.onload=function(){o++,n||o!==e.length?a():t()},i.onerror=function(){n=!0,t(new Error("Failed to load script "+s))},document.head.appendChild(i)};a()}function y(e){document.createStyleSheet?document.createStyleSheet(e):$("head").append($("<link rel='stylesheet' href='"+e+"' type='text/css' media='screen' />"))}function C(e,t){var o=$(window).height(),n=e.offset().top;!function(e,t){var o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;if(o>=e)return t();var n=!1,a=function(){o=window.scrollY,!n&&o>=e&&(window.removeEventListener("scroll",a),window.requestAnimationFrame(t),n=!0)};window.addEventListener("scroll",a)}(Math.max(n-o,0),t)}function b(e){$.ajax({url:e}).done((function(e){document.body.appendChild(e.children[0])}))}location.hash&&setTimeout((function(){var e=$(location.hash);window.scrollTo(0,e.closest("section").offset().top-u.outerHeight()-30)}),1),$(document).ready((function(){window.location!==window.parent.location&&window.location.href.indexOf("/api/websites/preview/")<0&&window.location.href.indexOf("www.pronto-ny.com")<0?$("body").html("Website cannot be loaded inside an iframe."):(function(){if(0===s.length)return;s.each((function(e,t){C($(t),(function(){t.getAttributeNames().filter((function(e){return 0===e.indexOf("lazy-")})).forEach((function(e){t.setAttribute(e.replace("lazy-",""),t.getAttribute(e))}))}))}))}(),window.checkPageSpeedCrawler&&window.checkPageSpeedCrawler()||function(){if(0===f.length)return;C(f,n)}(),function(){"transparent"==e.navigation_type?(t(),a.on("scroll",t)):r.addClass("active");function t(){a.scrollTop()>60?r.addClass("active"):c.hasClass("active")||r.removeClass("active")}}(),c.on("click",(function(t){$(t.target).closest(".js-toggle-active").length?c.toggleClass("active"):c.hasClass("active")&&c.removeClass("active"),"transparent"===e.navigation_type&&(c.hasClass("active")&&!r.hasClass("active")?r.addClass("active"):!c.hasClass("active")&&r.hasClass("active")&&a.scrollTop()<=60&&r.removeClass("active"))})),function(){d.length>0?(g.height(d.outerHeight()),g.css("maxHeight",d.outerHeight()+"px"),d.find(".js-close").on("click",e)):e();function e(){u.css("transform","translateY(-"+d.outerHeight()+"px)"),g.css("maxHeight","0"),setTimeout((function(){u.css("transition","none").css("transform","none"),g.remove(),d.remove()}),400)}}(),$('a[href*="#"]:not([href="#"])').click((function(e){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var t=$(this.hash);(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length&&(function(e){$("html, body").animate({scrollTop:e.offset().top-u.outerHeight()-30},1e3)}(t.closest("section")),e.preventDefault())}})),p.on("change",(function(){window.location.href=p.val()})),y("https://www.fbgcdn.com/websites/swipebox-1.5.1/css/swipebox.css"),m.swipebox(),function(){if(0===l.length)return;C(l,(function(){v(["https://www.google.com/recaptcha/api.js?hl=en"],(function(e){var t,o,n,a,s,i;e?console.error("ERROR LOADING RECAPTCHA SCRIPT",e):(t="a22424ed-f02a-4897-9319-214b7d07b674",o=$(".js-contact-name"),n=$(".js-contact-email"),a=$(".js-contact-message"),s=$(".js-contact-feedback"),i=$(".js-contact-feedback-message"),h.on("click",(function(e){var l=$("#g-recaptcha-response");e.preventDefault(),s.removeClass("error").removeClass("success").removeClass("wrapper"),i.html(""),n.val(n.val().trim());var r=!1;r="Functionality not available in preview mode.",o.val()?n.val()?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(n.val())?a.val()?l.val()||(r="Captcha is required."):r="Message is required.":r="Email is not valid.":r="Email is required.":r="Name is required.",r?(s.addClass("error"),i.html(r)):$.ajax({url:"/submit-contact-form",type:"POST",data:{restaurantUid:t,name:o.val(),email:n.val(),message:a.val(),captcha:l.val()},success:function(e,t,o){s.addClass("success"),i.html("Thank you! We&#039;ll contact you shortly.")},error:function(e,t,o){e.responseJSON&&"Owner email blocked"===e.responseJSON.message||"Bad Request"===o?(i.html("The restaurant&#039;s contact email address seems blocked. Your message was not sent. Please try calling us."),s.addClass("wrapper")):i.html("Failed to send message."),s.addClass("error")}})})))}))}))}(),$(".js-encoded-email").each((function(e,t){var o;"a"===t.nodeName.toLowerCase()?(o=/mailto:([^\?]*)/.exec(t.href)[1],t.href=t.href.replace(o,atob(o))):t.innerHTML=atob(t.innerHTML)})),window.Intl&&"object"==typeof window.Intl&&$(".js-date-intl").each((function(){var e=$(this),t=new Date(e.html());e.html(t.toLocaleDateString("en",{month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit"}))})),$.ajax({url:"/api/websites/preview/GV0gaU8DeNcJ595emfJlvRyZxv/is_open.json",cache:!1,dataType:"json"}).done((function(e){var t=$(".js-is-open");e&&!e.open&&t.addClass("closed")})),function(){i||b("https://www.fbgcdn.com/websites/sprite-critical.svg");b("https://www.fbgcdn.com/websites/sprite.svg")}(),function(){var e=$(".popup-with-external-content .popup"),t=$("body");if(0===e.length)return;var o=e.find(".reservation"),n=e.find(".popup-close");o.on("click",(function(o){e.toggleClass("popup-active"),t.css("overflow","hidden")})),n.on("click",(function(o){e.toggleClass("popup-active"),t.css("overflow","")})),o.on("keydown",(function(o){13==o.which&&(e.toggleClass("popup-active"),t.css("overflow","hidden"))})),n.on("keydown",(function(o){13==o.which&&(e.toggleClass("popup-active"),t.css("overflow",""))}))}())}))}({navigation_type:"transparent"},[{id:834168,name:"Zone 2",type:"circle",minimum_order:20,delivery_fee:6.99,color:"#3eb09b",shape:{center:{lat:-37.79073604957066,lng:145.09585347116393},radius:4267.8443827703395}},{id:834167,name:"Zone 1",type:"polygon",minimum_order:25,delivery_fee:7.99,color:"#fc743a",shape:{path:[{lat:-37.772471083153064,lng:145.064935357102},{lat:-37.84306380499068,lng:145.0517555661167},{lat:-37.845006800961606,lng:145.09706462997877},{lat:-37.84667863956706,lng:145.1415153869561},{lat:-37.807466959762216,lng:145.1417013656714},{lat:-37.778652233332735,lng:145.14240232851756},{lat:-37.77613500907568,lng:145.1318805321919},{lat:-37.77567896394617,lng:145.1237885904832},{lat:-37.77579957116198,lng:145.11876271752251},{lat:-37.77419396293638,lng:145.1082818443522},{lat:-37.773500450592095,lng:145.09718107181678},{lat:-37.77316772177125,lng:145.08940576136737},{lat:-37.77342298118816,lng:145.082774847874}]}}]);