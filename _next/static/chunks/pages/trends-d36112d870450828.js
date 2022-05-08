(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{37434:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return a(74650)}])},74650:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var r=a(85893),n=a(9008),l=a(67294),o=a(45697),i=a.n(o);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=(0,l.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,n=e.size,o=void 0===n?24:n,i=u(e,["color","size"]);return l.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),l.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),l.createElement("polyline",{points:"17 6 23 6 23 12"}))}));d.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},d.displayName="TrendingUp";var c=d;function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},v.apply(this,arguments)}function h(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=(0,l.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,n=e.size,o=void 0===n?24:n,i=h(e,["color","size"]);return l.createElement("svg",v({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),l.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),l.createElement("polyline",{points:"17 18 23 18 23 12"}))}));p.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},p.displayName="TrendingDown";var T=p,f=a(74041),Z=a(18121),g=a(49384),y={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},"declaration-rgpd":{title:"D\xe9claration RGPD"},trivyGrade:{title:"Trivy grade"}},b=[{name:"trend",label:"Trend",render:function(e){return function(e,t){var a=y[e],r=t[0],n=t[t.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,g.BE)(n)-(0,g.BE)(r):a.reverse?r-n:n-r}(e.key,e.values)>0?(0,r.jsx)(c,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,r.jsx)(T,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return y[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,t,a){return 0===t||t===a.length-1})).join(" => ")}}],m=function(e){var t=e.trends,a=Object.keys(t);return a.sort(),(0,r.jsxs)("div",{children:[(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,r.jsx)("br",{}),a.map((function(e){var a=function(e){var t={};return Object.keys(e).filter((function(e){return e in y})).forEach((function(a){var r=e[a].map((function(e){return e.date,e.value}));if(r.length>1){var n=r[0],l=r[r.length-1],o=y[a].treshold;(!o||Math.abs(n-l)>(o||0))&&n!==l&&(t[a]=[n,l])}})),t}(t[e]);return Object.keys(a).length?(0,r.jsx)(Z.s,{title:(0,g.p5)(e),url:"/url/".concat(encodeURIComponent((0,g.N0)(e))),children:(0,r.jsx)(f.Table,{columns:b,data:Object.keys(a).map((function(e){return{key:e,values:a[e]}})),rowKey:"key"})},e):null}))]})},_=JSON.parse('{"https://www.fabrique.social.gouv.fr":{"404":[{"date":"2021-11-18T11:20:00.000Z","value":6},{"date":"2021-11-28T01:32:51.000Z","value":7},{"date":"2021-12-12T01:26:42.000Z","value":8}],"httpGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"A+"},{"date":"2022-02-27T01:33:44.000Z","value":"B"},{"date":"2022-04-17T02:10:47.000Z","value":"A+"}],"nmapGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-11-18T11:20:00.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"A"}],"dependabotGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"D"}],"dependabotCount":[{"date":"2021-11-18T11:20:00.000Z","value":6}],"testsslExpireSoon":[{"date":"2021-11-18T11:20:00.000Z","value":false},{"date":"2021-11-28T01:32:51.000Z","value":true},{"date":"2021-12-12T01:26:42.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-18T11:20:00.000Z","value":"2021-12-26T11:59:00.000Z"},{"date":"2021-12-12T01:26:42.000Z","value":"2022-03-04T16:49:00.000Z"},{"date":"2021-12-26T01:32:24.000Z","value":"2022-03-20T08:22:00.000Z"},{"date":"2022-02-20T01:29:27.000Z","value":"2022-05-19T07:23:00.000Z"},{"date":"2022-02-27T01:33:44.000Z","value":"2022-05-25T17:41:00.000Z"},{"date":"2022-03-20T01:37:54.000Z","value":"2022-05-19T07:23:00.000Z"},{"date":"2022-04-24T02:12:52.000Z","value":"2022-07-18T06:24:00.000Z"}],"testsslGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"B"}],"cookiesCount":[{"date":"2021-11-18T11:20:00.000Z","value":2}],"trackersGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"A"}],"trackersCount":[{"date":"2021-11-18T11:20:00.000Z","value":0}],"lighthouse_performance":[{"date":"2021-11-18T11:20:00.000Z","value":0.45},{"date":"2021-11-28T01:32:51.000Z","value":0.4},{"date":"2021-12-12T01:26:42.000Z","value":0.35},{"date":"2022-04-24T02:12:52.000Z","value":0.3}],"lighthouse_performanceGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"D"},{"date":"2022-04-24T02:12:52.000Z","value":"E"}],"lighthouse_accessibility":[{"date":"2021-11-18T11:20:00.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-11-18T11:20:00.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-11-18T11:20:00.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-18T11:20:00.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"D"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://beta.gouv.fr":{"404":[{"date":"2021-11-18T11:20:00.000Z","value":2},{"date":"2022-01-09T01:27:18.000Z","value":9},{"date":"2022-01-16T01:30:58.000Z","value":3},{"date":"2022-02-20T01:29:27.000Z","value":12},{"date":"2022-02-27T01:33:44.000Z","value":4},{"date":"2022-03-27T01:56:06.000Z","value":217},{"date":"2022-04-03T02:05:36.000Z","value":7}],"httpGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"D"},{"date":"2022-04-03T02:05:36.000Z","value":"D+"}],"nmapGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-11-18T11:20:00.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2021-11-18T11:20:00.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-18T11:20:00.000Z","value":"2022-01-23T13:00:00.000Z"},{"date":"2021-12-26T01:32:24.000Z","value":"2022-03-24T13:00:00.000Z"},{"date":"2022-02-27T01:33:44.000Z","value":"2022-05-23T13:00:00.000Z"},{"date":"2022-04-03T02:05:36.000Z","value":"2022-06-28T07:17:00.000Z"}],"testsslGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"B"}],"cookiesCount":[{"date":"2021-11-18T11:20:00.000Z","value":2}],"trackersGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"C"},{"date":"2022-04-03T02:05:36.000Z","value":"A"}],"trackersCount":[{"date":"2021-11-18T11:20:00.000Z","value":7},{"date":"2021-11-21T01:24:57.000Z","value":6},{"date":"2022-04-03T02:05:36.000Z","value":0}],"lighthouse_performance":[{"date":"2021-11-18T11:20:00.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-11-18T11:20:00.000Z","value":0.89},{"date":"2022-02-13T01:29:49.000Z","value":0.88},{"date":"2022-05-08T02:17:19.737Z","value":0.89}],"lighthouse_accessibilityGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-11-18T11:20:00.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-11-18T11:20:00.000Z","value":0.92}],"lighthouse_seoGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-18T11:20:00.000Z","value":0.67}],"lighthouse_pwaGrade":[{"date":"2021-11-18T11:20:00.000Z","value":"B"}],"declaration-a11y":[],"declaration-rgpd":[]}}'),j=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.default,{children:(0,r.jsx)("title",{children:"DashLord - evolutions"})}),(0,r.jsx)(m,{trends:_})]})}},18121:function(e,t,a){"use strict";a.d(t,{s:function(){return v}});var r=a(85893),n=(a(67294),a(94184)),l=a.n(n),o=a(79223),i=a(73973),s=a(83206),u=a(41664),d=a(75670),c=a.n(d),v=function(e){var t=e.title,a=e.children,n=e.info,d=e.url,v=e.urlText,h=void 0===v?"":v,p=e.className,T=e.isExternal,f=void 0!==T&&T;return(0,r.jsxs)("div",{className:l()(c().container,p),children:[(0,r.jsxs)("div",{className:c().banner,children:[(0,r.jsx)("h5",{className:c().mainTitle,children:t}),n&&(0,r.jsx)(o.Z,{overlay:n,children:(0,r.jsx)(i.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),d&&(f?(0,r.jsx)("a",{style:{float:"right"},href:d,target:"_blank",rel:"noreferrer noopener",children:h}):(0,r.jsx)(u.default,{prefetch:!1,href:d,children:(0,r.jsxs)("a",{style:{float:"right"},children:[h,(0,r.jsx)(s.Z,{})]})}))]}),(0,r.jsx)("div",{className:c().body,children:a})]})}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[241,774,888,179],(function(){return t=37434,e(e.s=t);var t}));var t=e.O();_N_E=t}]);