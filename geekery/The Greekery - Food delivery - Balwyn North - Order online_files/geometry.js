google.maps.__gjsload__('geometry', function(_){var ska=function(a,b){return Math.abs(_.tg(b-a,-180,180))},tka=function(a,b,c,d,e){if(!d){c=ska(a.lng(),c)/ska(a.lng(),b.lng());if(!e)return e=Math.sin(_.Xd(a.lat())),e=Math.log((1+e)/(1-e))/2,b=Math.sin(_.Xd(b.lat())),_.Yd(2*Math.atan(Math.exp(e+c*(Math.log((1+b)/(1-b))/2-e)))-Math.PI/2);a=e.fromLatLngToPoint(a);b=e.fromLatLngToPoint(b);return e.fromPointToLatLng(new _.P(a.x+c*(b.x-a.x),a.y+c*(b.y-a.y))).lat()}e=_.Xd(a.lat());a=_.Xd(a.lng());d=_.Xd(b.lat());b=_.Xd(b.lng());c=_.Xd(c);return _.tg(_.Yd(Math.atan2(Math.sin(e)*
Math.cos(d)*Math.sin(c-b)-Math.sin(d)*Math.cos(e)*Math.sin(c-a),Math.cos(e)*Math.cos(d)*Math.sin(a-b))),-90,90)},uka=function(a,b){a=new _.I(a,!1);b=new _.I(b,!1);return a.equals(b)},Xu={containsLocation:function(a,b){a=_.bh(a);const c=_.tg(a.lng(),-180,180),d=!!b.get("geodesic"),e=b.get("latLngs");var f=b.get("map");f=!d&&f?f.getProjection():null;let g=!1;for(let k=0,l=e.getLength();k<l;++k){const m=e.getAt(k);for(let n=0,p=m.getLength();n<p;++n){const q=m.getAt(n),r=m.getAt((n+1)%p);var h=_.tg(q.lng(),
-180,180);const t=_.tg(r.lng(),-180,180),u=Math.max(h,t);h=Math.min(h,t);(180<u-h?c>=u||c<h:c<u&&c>=h)&&tka(q,r,c,d,f)<a.lat()&&(g=!g)}}return g||Xu.isLocationOnEdge(a,b)}};_.na("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.containsLocation",Xu.containsLocation);
Xu.isLocationOnEdge=function(a,b,c){a=_.bh(a);c=c||1E-9;const d=_.tg(a.lng(),-180,180),e=b instanceof _.jk,f=!!b.get("geodesic"),g=b.get("latLngs");b=b.get("map");b=!f&&b?b.getProjection():null;for(let n=0,p=g.getLength();n<p;++n){const q=g.getAt(n),r=q.getLength(),t=e?r:r-1;for(let u=0;u<t;++u){var h=q.getAt(u);const v=q.getAt((u+1)%r);if(uka(h,a)||uka(v,a))return!0;var k=_.tg(h.lng(),-180,180),l=_.tg(v.lng(),-180,180);const A=Math.max(k,l),D=Math.min(k,l);if(k=1E-9>=Math.abs(_.tg(k-l,-180,180))&&
(Math.abs(_.tg(k-d,-180,180))<=c||Math.abs(_.tg(l-d,-180,180))<=c)){k=a.lat();l=Math.min(h.lat(),v.lat())-c;var m=Math.max(h.lat(),v.lat())+c;k=k>=l&&k<=m}if(k)return!0;if(180<A-D?d+c>=A||d-c<=D:d+c>=D&&d-c<=A)if(h=tka(h,v,d,f,b),Math.abs(h-a.lat())<c)return!0}}return!1};_.na("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.isLocationOnEdge",Xu.isLocationOnEdge);var Yu={decodePath:function(a){const b=_.pg(a),c=Array(Math.floor(a.length/2));let d=0,e=0,f=0,g;for(g=0;d<b;++g){let h=1,k=0,l;do l=a.charCodeAt(d++)-63-1,h+=l<<k,k+=5;while(31<=l);e+=h&1?~(h>>1):h>>1;h=1;k=0;do l=a.charCodeAt(d++)-63-1,h+=l<<k,k+=5;while(31<=l);f+=h&1?~(h>>1):h>>1;c[g]=new _.I(1E-5*e,1E-5*f,!0)}c.length=g;return c}};_.na("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.decodePath",Yu.decodePath);
Yu.encodePath=function(a){a instanceof _.Ui&&(a=a.getArray());a=(0,_.Lh)(a);return Yu.Aw(a,function(b){return[Math.round(1E5*b.lat()),Math.round(1E5*b.lng())]})};_.na("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.encodePath",Yu.encodePath);Yu.Aw=function(a,b){const c=[];let d=[0,0],e;for(let f=0,g=_.pg(a);f<g;++f)e=b?b(a[f]):a[f],Yu.jr(e[0]-d[0],c),Yu.jr(e[1]-d[1],c),d=e;return c.join("")};Yu.jr=function(a,b){Yu.Bw(0>a?~(a<<1):a<<1,b)};
Yu.Bw=function(a,b){for(;32<=a;)b.push(String.fromCharCode((32|a&31)+63)),a>>=5;b.push(String.fromCharCode(a+63))};var vka={encoding:Yu,spherical:_.El,poly:Xu};_.x.google.maps.geometry=vka;_.kh("geometry",vka);});