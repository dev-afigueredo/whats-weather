function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _iterableToArrayLimit(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a,c,o=[],s=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==e);s=!0);}catch(l){u=!0,i=l}finally{try{if(!s&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(u)throw i}}return o}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==typeof e?e:String(e)}function _toPrimitive(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{TyDT:function(t,e,n){"use strict";n.r(e),n.d(e,"DetailsModule",(function(){return X}));var r,i=n("ofXK"),a=n("tyNb"),c=n("kt0X"),o=Object(c.n)("[Details] Load Weather Details"),s=Object(c.n)("[Details] Load Weather Details Success",Object(c.s)()),u=Object(c.n)("[Details] Load Weather Details Failed"),l=Object(c.o)("details"),b=Object(c.q)(l,(function(t){return t.entity})),d=Object(c.q)(l,(function(t){return t.loading})),f=Object(c.q)(l,(function(t){return t.error})),y=n("eTSW"),p=n("fXoL"),h=n("668k"),g=n("Zllk"),m=n("f0Wu"),O=n("neNJ"),v=((r=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"weather",get:function(){return this.dailyWeather.weather}},{key:"date",get:function(){return m.unix(this.dailyWeather.date).format("DD MMM - dddd")}},{key:"icon",get:function(){return"http://openweathermap.org/img/wn/".concat(this.weather.icon,"@2x.png")}},{key:"unitSymbol",get:function(){return Object(O.a)(this.unit)}},{key:"unixToHourMinute",value:function(t){return m.unix(t).tz(this.timeZone).format("HH:mm")}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=p.Db({type:r,selectors:[["whats-daily-weather"]],inputs:{dailyWeather:"dailyWeather",timeZone:"timeZone",unit:"unit"},decls:19,vars:12,consts:[[1,"card"],[1,"badge","badge-secondary"],[3,"src"]],template:function(t,e){1&t&&(p.Ob(0,"div",0),p.Ob(1,"span",1),p.nc(2),p.Zb(3,"uppercase"),p.Nb(),p.Ob(4,"div"),p.Ob(5,"div"),p.Kb(6,"img",2),p.Nb(),p.Ob(7,"div"),p.Ob(8,"div"),p.nc(9),p.Nb(),p.Ob(10,"div"),p.nc(11),p.Nb(),p.Ob(12,"div"),p.nc(13),p.Nb(),p.Ob(14,"div"),p.Ob(15,"div"),p.nc(16),p.Nb(),p.Ob(17,"div"),p.nc(18),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Nb()),2&t&&(p.zb(2),p.oc(p.ac(3,10,e.date)),p.zb(4),p.bc("src",e.icon,p.ic),p.zb(3),p.rc("",e.weather.minTemp," ",e.unitSymbol," - ",e.weather.maxTemp," ",e.unitSymbol,""),p.zb(2),p.pc("Humidade: ",e.weather.humidity," %"),p.zb(2),p.pc("Velocidade do vento: ",e.weather.wind.speed," m/s"),p.zb(3),p.pc("Nascer do sol: ",e.unixToHourMinute(e.weather.sunrise),""),p.zb(2),p.pc("P\xf4r do sol: ",e.unixToHourMinute(e.weather.sunset),""))},pipes:[i.o],styles:[".card[_ngcontent-%COMP%]{margin-top:8px;padding:8px;display:flex;flex-direction:column}.card[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}.card[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-top:8px;display:grid;grid-template-columns:1fr 1fr 1fr;grid-column-gap:8px;align-items:center}.card[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.card[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:50px;height:50px}"],changeDetection:0}),r);function w(t,e){1&t&&p.Kb(0,"whats-loader")}function j(t,e){if(1&t&&(p.Kb(0,"whats-daily-weather",7),p.Zb(1,"async"),p.Zb(2,"async")),2&t){var n=e.$implicit,r=p.Yb(3);p.bc("dailyWeather",n)("timeZone",p.ac(1,3,r.details$).city.timeZone)("unit",p.ac(2,5,r.unit$))}}function _(t,e){if(1&t&&(p.Mb(0),p.Ob(1,"h1"),p.nc(2),p.Zb(3,"async"),p.Zb(4,"async"),p.Nb(),p.Ob(5,"div",4),p.Kb(6,"whats-detailed-weather",5),p.Zb(7,"async"),p.Zb(8,"async"),p.Nb(),p.lc(9,j,3,7,"whats-daily-weather",6),p.Zb(10,"async"),p.Lb()),2&t){var n=p.Yb(2);p.zb(2),p.qc("",p.ac(3,5,n.details$).city.name,", ",p.ac(4,7,n.details$).city.country,""),p.zb(4),p.bc("weather",p.ac(7,9,n.details$).current)("unit",p.ac(8,11,n.unit$)),p.zb(3),p.bc("ngForOf",p.ac(10,13,n.details$).daily)}}function C(t,e){1&t&&(p.Ob(0,"div"),p.nc(1,"Erro"),p.Nb())}function P(t,e){if(1&t&&(p.lc(0,_,11,15,"ng-container",3),p.Zb(1,"async"),p.lc(2,C,2,0,"div",3),p.Zb(3,"async")),2&t){var n=p.Yb();p.bc("ngIf",!p.ac(1,2,n.error$)),p.zb(2),p.bc("ngIf",p.ac(3,4,n.error$))}}var k,M,x=((M=function(){function t(e){_classCallCheck(this,t),this.store=e}return _createClass(t,[{key:"ngOnInit",value:function(){this.store.dispatch(o()),this.details$=this.store.pipe(Object(c.t)(b)),this.loading$=this.store.pipe(Object(c.t)(d)),this.error$=this.store.pipe(Object(c.t)(f)),this.unit$=this.store.pipe(Object(c.t)(y.a))}}]),t}()).\u0275fac=function(t){return new(t||M)(p.Jb(c.h))},M.\u0275cmp=p.Db({type:M,selectors:[["whats-details"]],decls:5,vars:4,consts:[[1,"container-fluid"],[4,"ngIf","ngIfElse"],["notLoading",""],[4,"ngIf"],[1,"card","current-card"],[3,"weather","unit"],[3,"dailyWeather","timeZone","unit",4,"ngFor","ngForOf"],[3,"dailyWeather","timeZone","unit"]],template:function(t,e){if(1&t&&(p.Ob(0,"div",0),p.lc(1,w,1,0,"whats-loader",1),p.Zb(2,"async"),p.lc(3,P,4,6,"ng-template",null,2,p.mc),p.Nb()),2&t){var n=p.fc(4);p.zb(1),p.bc("ngIf",p.ac(2,2,e.loading$))("ngIfElse",n)}},directives:[i.k,h.a,g.a,i.j,v],pipes:[i.b],styles:[".container-fluid[_ngcontent-%COMP%]{margin:0 0 16px;padding:32px 0 0}.container-fluid[_ngcontent-%COMP%]   .current-card[_ngcontent-%COMP%]{padding:16px}"]}),M),T=((k=function(){function t(e){_classCallCheck(this,t),this.router=e}return _createClass(t,[{key:"canActivate",value:function(t,e){return!(!t.queryParams.lat||!t.queryParams.lon)||this.router.createUrlTree([""])}}]),t}()).\u0275fac=function(t){return new(t||k)(p.Sb(a.e))},k.\u0275prov=p.Fb({token:k,factory:k.\u0275fac}),k),Z=Object(c.p)({entity:void 0,loading:!1,error:!1},Object(c.r)(o,(function(t){return Object.assign(Object.assign({},t),{entity:void 0,loading:!0,error:!1})})),Object(c.r)(s,(function(t,e){var n=e.entity;return Object.assign(Object.assign({},t),{entity:n,loading:!1})})),Object(c.r)(u,(function(t){return Object.assign(Object.assign({},t),{loading:!1,error:!0})})));function S(t,e){return Z(t,e)}var N,$,A=n("snw9"),W=n("itXk"),I=n("zp1y"),z=n("5+tZ"),D=n("JIr8"),L=n("lJxs"),q=Object(c.o)("router"),H=Object(c.q)(q,(function(t){return t&&t.state||{}})),F=Object(c.q)(H,(function(t){return t&&t.queryParams||{}})),K=n("d3tU"),E=((N=_createClass((function t(e,n,r){var i=this;_classCallCheck(this,t),this.actions$=e,this.store=n,this.weatherService=r,this.loadCurrentWeather$=Object(A.c)((function(){return i.actions$.pipe(Object(A.d)(o),Object(I.a)(i.store.pipe(Object(c.t)(F))),Object(z.a)((function(t){var e=_slicedToArray(t,2)[1];return Object(W.a)([i.weatherService.getCityWeatherByCoord(e.lat,e.lon),i.weatherService.getWeatherDetails(e.lat,e.lon)])})),Object(D.a)((function(t,e){return console.log(t),i.store.dispatch(u()),e})),Object(L.a)((function(t){var e=_slicedToArray(t,2),n=e[0],r=e[1],i=r;return i.city=Object.assign(Object.assign({},n.city),{timeZone:r.city.timeZone}),s({entity:i})})))}))}))).\u0275fac=function(t){return new(t||N)(p.Sb(A.a),p.Sb(c.h),p.Sb(K.a))},N.\u0275prov=p.Fb({token:N,factory:N.\u0275fac}),N),J=n("V/fk"),X=(($=_createClass((function t(){_classCallCheck(this,t)}))).\u0275mod=p.Hb({type:$}),$.\u0275inj=p.Gb({factory:function(t){return new(t||$)},providers:[T],imports:[[i.c,a.g.forChild([{path:"",component:x,canActivate:[T]}]),c.j.forFeature("details",S),A.b.forFeature([E]),J.a]]}),$)}}]);