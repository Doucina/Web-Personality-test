(function(t){function e(e){for(var n,a,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var o=r[a];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-78d8a6e0":"2a60ec6c","chunk-2d0ac3bd":"9fc3de8e","chunk-2d0be105":"da1884c4"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"chunk-78d8a6e0":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-78d8a6e0":"4a4acaf2","chunk-2d0ac3bd":"31d6cfe0","chunk-2d0be105":"31d6cfe0"}[t]+".css",s=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===n||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],p.parentNode.removeChild(p),r(i)},p.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){a[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=s[t]=[e,r]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var r=s[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}s[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-card",{staticClass:"blue lighten-4 text-center",attrs:{width:"100%"}},[r("v-app-bar",{attrs:{app:"",src:"http://www.maximumwall.com/wp-content/uploads/2015/07/fonds-ecran-paysage-magnifique-6.jpg"}},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"text-center lighten-2",staticStyle:{color:"#caccd9"},attrs:{primary:"",light:"",color:"rgb(255, 0, 0, 0.16)",dark:"",replace:"",to:{name:"home"}}},n),[t._v(" QUIZZLAND ")])]}}])},[r("span",[t._v("Return to the homme page")])]),r("v-spacer"),r("v-btn",{staticClass:"mr-3 white lighten-7 text-center",attrs:{outlined:"",color:"primary",replace:"",to:{name:"login"}}},[t._v("Sign in")]),r("v-btn",{staticClass:"mr-2 white lighten-7 text-center",attrs:{outlined:"",color:"primary",replace:"",to:{name:"register"}}},[t._v("Sign up")])],1),r("v-content",{staticClass:"compo"},[r("router-view"),t.begin?t._e():r("Footer")],1)],1),r("v-content")],1)},s=[],i=r("a11e"),o=r("864c"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{attrs:{color:"blue darken-2",padless:""}},[r("v-row",{attrs:{justify:"center","no-gutters":""}},[r("v-dialog",{attrs:{justify:"center",width:"100",height:"130"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{color:"rgb(255, 0, 0, 0.16)"}},n),[t._v(" Contact Us ")])]}}])},[r("li",[r("a",{staticStyle:{color:"#caccd9"},attrs:{href:"https://fr.linkedin.com/in/nesrine-outemzabet-02813b163"}},[t._v("👩‍💻 Nesrine")])]),r("li",[r("a",{staticStyle:{color:"#caccd9"},attrs:{href:"https://www.linkedin.com/in/th%C3%A9odore-blanc-talon-5a0540194/"}},[t._v("👨‍💻 Théodore")])]),r("li",[r("a",{staticStyle:{color:"#caccd9"},attrs:{href:"https://www.linkedin.com/in/lenny-daho-7a5277161/"}},[t._v("👨‍💻 Lenny")])])]),r("v-col",{staticClass:"blue darken-1 py-4 text-center white--text",attrs:{cols:"12"}},[r("strong",{attrs:{medium:""}},[t._v("🍀 See you soon 🍀")]),r("p",[t._v("Quizzland Team !")])])],1)],1)},l=[],u={data:function(){return{links:["Team","Contact Us"]}}},d=u,p=r("2877"),h=r("6544"),m=r.n(h),f=r("8336"),g=r("62ad"),v=r("169a"),w=r("553a"),b=r("0fd9"),y=Object(p["a"])(d,c,l,!1,null,null,null),_=y.exports;m()(y,{VBtn:f["a"],VCol:g["a"],VDialog:v["a"],VFooter:w["a"],VRow:b["a"]});var j={name:"App",components:{Accueil:i["default"],Test:o["default"],Footer:_},data:function(){return{begin:!0}},methods:{beginTest:function(){this.begin=!1}}},k=j,A=r("7496"),S=r("40dc"),x=r("b0af"),C=r("a75b"),V=r("2fa4"),T=r("3a2f"),q=Object(p["a"])(k,a,s,!1,null,null,null),E=q.exports;m()(q,{VApp:A["a"],VAppBar:S["a"],VBtn:f["a"],VCard:x["a"],VContent:C["a"],VSpacer:V["a"],VTooltip:T["a"]});var P=r("f309");n["a"].use(P["a"]);var O=new P["a"]({icons:{iconfont:"mdi"}}),F=r("bc3a"),Q=r.n(F),B=(r("d3b7"),r("8c4f"));n["a"].use(B["a"]);var L=new B["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return Promise.resolve().then(r.bind(null,"a11e"))}},{path:"/login",name:"login",component:function(){return Promise.all([r.e("chunk-78d8a6e0"),r.e("chunk-2d0ac3bd")]).then(r.bind(null,"1954"))},props:!0},{path:"/register",name:"register",component:function(){return Promise.all([r.e("chunk-78d8a6e0"),r.e("chunk-2d0be105")]).then(r.bind(null,"2f50"))},props:!0},{path:"/quizz",name:"Test",component:function(){return Promise.resolve().then(r.bind(null,"864c"))},props:!0}]});n["a"].config.productionTip=!1,Q.a.defaults.withCredentials=!0,n["a"].use(Q.a),new n["a"]({vuetify:O,router:L,render:function(t){return t(E)}}).$mount("#app")},"864c":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-flex",{attrs:{xs12:"",sm12:""}},[r("v-container",{attrs:{width:"500px"}},[r("v-card",{staticStyle:{"border-radius":"20px"}},[r("v-row",{attrs:{justify:"center"}},[r("h1",[t._v(t._s(t.currentAnswers[0][0]))])]),r("v-row",[r("v-col",[r("Answers",{attrs:{id:t.currentAnswers[1][0][2],imgUrl:t.currentAnswers[1][0][1],titre:t.currentAnswers[1][0][0]},on:{getAnswerFromObject:t.getAnswer}})],1),r("v-col",[r("Answers",{attrs:{id:t.currentAnswers[1][1][2],imgUrl:t.currentAnswers[1][1][1],titre:t.currentAnswers[1][1][0]},on:{getAnswerFromObject:t.getAnswer}})],1)],1),r("v-row",[r("v-col",[r("Answers",{attrs:{id:t.currentAnswers[1][2][2],imgUrl:t.currentAnswers[1][2][1],titre:t.currentAnswers[1][2][0]},on:{getAnswerFromObject:t.getAnswer}})],1),r("v-col",[r("Answers",{attrs:{id:t.currentAnswers[1][3][2],imgUrl:t.currentAnswers[1][3][1],titre:t.currentAnswers[1][3][0]},on:{getAnswerFromObject:t.getAnswer}})],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-btn",{attrs:{color:"error"},on:{click:t.reset}},[t._v("RESET")])],1),r("br"),r("v-container",[r("v-row",{attrs:{justify:"center"}},[r("v-progress-linear",{attrs:{active:"active",rounded:"rounded",height:"10","buffer:100":"",value:100*t.currentQuestion/t.questionSet.length,color:"light-blue",width:"80%"}}),r("p",[t._v(t._s(t.currentQuestion)+" / "+t._s(t.questionSet.length))])],1)],1)],1),r("v-container",[r("v-overlay",{attrs:{opacity:.5,value:t.overlay}},[r("v-card",{staticClass:"mx-auto",attrs:{justify:"center"}},[r("v-card-title",{attrs:{justify:"center"}},[t._v(t._s(t.result[0]))]),r("v-card-subtitle",[t._v(t._s(t.result[1]))]),r("v-btn",{attrs:{color:"error"},on:{click:t.reset}},[t._v("RETAKE THE TEST")])],1)],1)],1)],1)],1)},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"},on:{click:t.getAnswers}},[r("v-img",{staticClass:"white--text align-end image",attrs:{height:"200px",src:t.imgUrl}},[r("v-card-title",[t._v(t._s(t.titre))])],1)],1)},i=[],o=(r("a9e3"),{props:{id:Number,imgUrl:String,titre:String},methods:{getAnswers:function(){this.$emit("getAnswerFromObject",this.id)}}}),c=o,l=r("2877"),u=r("6544"),d=r.n(u),p=r("b0af"),h=r("99d9"),m=r("adda"),f=Object(l["a"])(c,s,i,!1,null,null,null),g=f.exports;d()(f,{VCard:p["a"],VCardTitle:h["d"],VImg:m["a"]});var v={components:{Answers:g},data:function(){return{currentQuestion:0,currentAnswers:[],result:[],count:0,overlay:!1,questionSet:[[["Favorite landscape?"],[["Ireland","https://photos.marmara.com/ProduitPhoto/IRLATTOU_circuits-irlande-tui.jpg",1],["Tree leaves","https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixlib=rb-1.2.1&w=1000&q=80",2],["Palm","https://www.travelblat.com/wp-content/uploads/2014/07/summer-vacation.jpg",3],["Flowers","https://cdn.britannica.com/05/155405-050-F8969EE6/Spring-flowers-fruit-trees-bloom.jpg",4]]],[["What animal would you like to see first ?"],[["Penguin","http://blob-harmony.groupetva.ca/harmony/media/static/filemanager/content/1452661200/655x369-pingouin_1452715089.jpg",1],["Squirrel","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Red_Squirrel_-_Lazienki.JPG/1200px-Red_Squirrel_-_Lazienki.JPG",2],["Butterfly","https://cdn.futura-sciences.com/buildsv6/images/wide1920/b/b/7/bb70a62d85_108302_papillon-toucher-ailes.jpg",3],["Bird","https://i.ytimg.com/vi/EMe0Z4LCnVY/hqdefault.jpg",4]]],[["What color do you represent ?"],[["Bleu","https://cuirenstock.com/6209-large_default/peau-de-cuir-d-agneau-metallise-bleu.jpg",1],["Orange","https://cdn.pixabay.com/photo/2011/09/14/14/47/orange-9283_960_720.jpg",2],["Vert","https://www.careandcoaching.nl/wp-content/uploads/2017/03/green-leaves-on-green-background.jpg",3],["Rose","https://cdn11.bigcommerce.com/s-19ea7/images/stencil/1280x1280/products/191/501/Teaberry_Rose_Dry_Blusher__70069.1332299622.jpg?c=2&imbypass=on",4]]],[["Which flower do you prefer ?"],[["Edelweiss","https://img-3.journaldesfemmes.fr/zSqNG947ybV9QlLEdrRtuXTrNJk=/910x607/smart/68ac12ed12f84f99bc0759fdc408dee2/ccmcms-jdf/10960187.jpg",1],["Tulip","https://media.ooreka.fr/public/image/plant/80/mainImage-source-9412304.jpg",2],["Eglantine","https://steemitimages.com/p/B69zEhWZA8UBY2uvCm2jhayjPd2uZ8oUJxf1rwSUF4uHge5sghauiA52DTD3E796fJ65BvBubUm27W274ePo1PYmuNesLUYxPZLWc2mc?format=match&mode=fit&width=640",3],["Orchid","https://media.ooreka.fr/public/image/orchidee-bienfait-full-12559057.jpg",4]]],[["Which place is the most beautiful ?"],[["Moscow","https://www.tripsavvy.com/thmb/FKkmwDSmBbP-P0b9qriggj3EIVw=/3858x2170/smart/filters:no_upscale()/winter-in-moscow--russia--629101330-5b1dd985fa6bcc0036a2e52e.jpg",1],["Pays Basque","https://www.keyweek.com/blog/wp-content/uploads/visiter-pays-basque-hors-saison-biarritz-villa-belza-cover-1.jpg",2],["Thaiti","http://www.nolobike.com/wp-content/uploads/2017/06/conseils-voyage-tahiti-1200x900.jpg",3],["Cappadocia","https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1496699939/hot-air-balloons-festival-cappadocia-turkey-HOTAIR0605.jpg?itok=WZ9CVr-K",4]]],[["What is the most delicious fruit ?"],[["Ananas","https://www.lanutrition.fr/sites/default/files/styles/article_large/public/ressources/shutterstock_572083087_3.jpg?itok=813o9KfI",1],["Poire","https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/large/public/r69-poire-williams_fotolia.jpg",2],["Pastèque","https://www.lanutrition.fr/sites/default/files/styles/article_large/public/ressources/pasteque_morceaux.jpg?itok=snxfV3VQ",3],["Fraise","https://www.sante-sur-le-net.com/wp-content/uploads/2018/07/fraise-sante.jpg",4]]],[["Which quote defines you best ?"],[["Coluche","https://citation-celebre.leparisien.fr/plugin/citation/view/resource/public/img/beautiful-image/generic/68043.png",1],["Sénèque","https://sf1.viepratique.fr/wp-content/uploads/sites/5/2019/01/citation-1-750x410.jpg",2],["Churchill","https://www.defi-ecologique.com/wp-content/uploads/citations-ecologie.jpg",3],["Salomé","http://img.over-blog-kiwi.com/1/58/44/60/20151218/ob_fcc5bc_la-vache-rose-jacques-salome-6.jpg",4]]],[["What is your element ?"],[["Eau","https://10wallpaper.com/wallpaper/medium/1701/Scotland_Highlands_River-Winter_Landscape_HD_Wallpaper_medium.jpg",1],["Terre","https://cdn.futura-sciences.com/buildsv6/images/wide1920/8/a/3/8a3ab16898_106964_source-eau-potable.jpg",2],["Mer","https://i.pinimg.com/originals/61/0b/87/610b874b87156d674a5b4c116f929693.jpg",3],["Cascade","https://www.aeroportvoyage.com/wp-content/uploads/2019/07/eaux-thermales-tabacon-arenal-costa-rica-decouverte.jpg",4]]]],answerSet:[["Winter","You are a little cold and reserved. If someone dislikes you, you can be scathing, but when you like a person, you give yourself 100%"],["Autumn","The colors, the falling leaves, the sweet and fragrant flavors ... All this puts you in a melancholic, romantic and dreamy mood."],["Summer","Dynamic and playful, you are passionate. you are fiery and ardent. And we appreciate you because you are sensitive !"],["Spring","You dream of a world full of sweetness, small birds and flowers. To be happy, you need harmony. With you, it's the sweetness of life!"]]}},mounted:function(){},methods:{getAnswer:function(t){this.currentQuestion<this.questionSet.length-1?(this.currentQuestion++,this.currentAnswers=this.questionSet[this.currentQuestion],this.currentAnswers[1]=this.shuffle(this.currentAnswers[1]),this.count+=t):(this.overlay=!0,this.count<this.currentQuestion*this.questionSet.length/4?this.result=this.answerSet[3]:this.count>this.currentQuestion*this.questionSet.length/4&&this.count<=this.currentQuestion*this.questionSet.length/2?this.result=this.answerSet[0]:this.count>this.currentQuestion*this.questionSet.length/2&&this.count<=3*this.currentQuestion*this.questionSet.length/4?this.result=this.answerSet[1]:this.result=this.answerSet[2])},shuffle:function(t){var e,r,n;for(n=t.length-1;n>0;n--)e=Math.floor(Math.random()*(n+1)),r=t[n],t[n]=t[e],t[e]=r;return t},reset:function(){this.currentQuestion=0,this.count=0,this.currentAnswers=this.questionSet[0],this.overlay=!1}},created:function(){this.currentAnswers=this.questionSet[this.currentQuestion],this.currentAnswers[1]=this.shuffle(this.currentAnswers[1])}},w=v,b=r("8336"),y=r("62ad"),_=r("a523"),j=r("0e8f"),k=r("a797"),A=r("8e36"),S=r("0fd9"),x=Object(l["a"])(w,n,a,!1,null,null,null);e["default"]=x.exports;d()(x,{VBtn:b["a"],VCard:p["a"],VCardSubtitle:h["b"],VCardTitle:h["d"],VCol:y["a"],VContainer:_["a"],VFlex:j["a"],VOverlay:k["a"],VProgressLinear:A["a"],VRow:S["a"]})},a11e:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{"text-center":"",wrap:"",row:"","justify-center":"","align-center":""}},[r("v-img",{attrs:{height:"100%",width:"150%",src:"http://www.maximumwall.com/wp-content/uploads/2015/07/fonds-ecran-paysage-magnifique-6.jpg"}},[r("v-layout",{attrs:{row:"","justify-center":"","align-center":""}},[r("v-container",{staticStyle:{"max-height":"10em"},attrs:{"grid-list-xl":"","pt-5":""}},[r("v-layout",{attrs:{row:"","justify-center":"","align-center":""}},[r("v-card",{staticClass:"text-center lighten-5",attrs:{color:"rgb(255, 0, 0, 0.16)"}},[r("v-card-title",{staticClass:"section__title justify-center"},[r("v-flex",{attrs:{"mb-4":""}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3",staticStyle:{color:"#caccd9"}},[t._v("Welcome to Quizzland")]),r("p",{staticClass:"subheading font-weight-light",staticStyle:{color:"#caccd9"}},[t._v(" Wanna see what season fits you best ? "),r("br"),t._v("Let's join us ! ")])])],1)],1)],1)],1)],1),r("div",[r("v-card",{staticClass:"mx-auto",attrs:{elevation:t.card,width:t.width}},[t.media?r("v-img",{staticClass:"black--text",attrs:{height:"200px",width:"400",src:"https://raw.githubusercontent.com/Doucina/Web-Personality-test/rondoudou/src/assets/tra.png"}}):t._e(),r("v-card-text",[t._v("Quelle est la saison qui correspond le mieux à votre personnalité profonde ?")]),t.actions?r("v-card-actions",[r("v-card-title",[r("v-rating",{staticClass:"mr-2",attrs:{value:4,dense:"",color:"orange","background-color":"orange",hover:""}})],1),r("v-hover",{attrs:{disabled:t.disabled,value:t.value},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-btn",{attrs:{elevation:n?15:2,outlined:"",color:"primary",replace:"",to:{name:"Test"}},on:{click:t.redirect}},[t._v("Faire le test")])]}}],null,!1,937657670)})],1):t._e()],1)],1),r("div",[r("div",{attrs:{id:"surveyElement"}}),r("div",{attrs:{id:"surveyResult"}})]),r("p",{staticClass:"text-center",staticStyle:{color:"#0f377d"}},[r("br"),t._v("For always more fun → "),r("a",{staticStyle:{color:"#0f377d"},attrs:{href:"https://www.openask.com/fr/tests/",target:"_blank"}},[t._v("Click here 😊")])])],1)],1)],1)},a=[],s={data:function(){return{media:!0,actions:!0,width:344,height:void 0}},methods:{redirect:function(){this.$emit("triggerTest")}}},i=s,o=r("2877"),c=r("6544"),l=r.n(c),u=r("8336"),d=r("b0af"),p=r("99d9"),h=r("a523"),m=r("0e8f"),f=r("ce87"),g=r("adda"),v=r("a722"),w=r("1d4d"),b=Object(o["a"])(i,n,a,!1,null,null,null);e["default"]=b.exports;l()(b,{VBtn:u["a"],VCard:d["a"],VCardActions:p["a"],VCardText:p["c"],VCardTitle:p["d"],VContainer:h["a"],VFlex:m["a"],VHover:f["a"],VImg:g["a"],VLayout:v["a"],VRating:w["a"]})}});
//# sourceMappingURL=app.37e8bf42.js.map