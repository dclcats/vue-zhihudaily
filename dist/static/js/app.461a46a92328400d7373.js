webpackJsonp([1,2],[,,,,,function(t,e,n){"use strict";var a=n(26),s=n.n(a),i=n(53),o={startImage:"4/start-image/",news:"/4/news/latest",newsDate:"/4/news/before/",newsDetail:"/4/news/",newsInfo:"/4/story-extra/",newsStory:"/4/story/",newsThemes:"/4/themes",newsThemeDetail:"/4/theme/"};e.a={getMessage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"news",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return s.a.get(i.a.concat(o[t],e))},getStart:function(t){return s.a.get(i.a.concat(o.startImage,t))},getNews:function(){return s.a.get(i.a.concat(o.news))},getNewsDate:function(t){return s.a.get(i.a.concat(o.newsDate,t))},getNewsDetail:function(t){return s.a.get(i.a.concat(o.newsDetail,t))},getNewsInfo:function(t){return s.a.get(i.a.concat(o.newsInfo,t))},getNewsStory:function(t){return s.a.get(i.a.concat(o.newsStory,t))},getThemes:function(){return s.a.get(i.a.concat(o.newsThemes))},getThemeDetail:function(t){return s.a.get(i.a.concat(o.newsThemeDetail,t))}}},,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var a=n(3),s=n(108),i=n(96),o=n.n(i),r=n(93),c=n.n(r),u=n(97),l=n.n(u);a.a.use(s.a),e.a=new s.a({mode:"history",routes:[{path:"/",redirect:"/List"},{path:"/Hello",name:"Hello",component:o.a},{path:"/Content/:id",name:"Content",component:c.a},{path:"/List/:id",name:"ListId",component:l.a},{path:"/List",name:"List",component:l.a}]})},function(t,e,n){"use strict";var a=n(3),s=n(2);a.a.use(s.b),e.a=new s.b.Store({state:{nav:!1,cid:0,lid:0,titleName:""},mutations:{toggle:function(t,e){t.nav=!!e},setLid:function(t,e){t.lid=e},setTitleName:function(t,e){e&&(t.titleName=e)}}})},,function(t,e,n){n(87);var a=n(1)(n(46),n(105),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",ready:function(){this.update()},mounted:function(){this.update()},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a="undefined"!=typeof window;a&&(window.Swiper=n(21),n(82)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},ready:function(){!this.swiper&&a&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){!t.swiper&&a&&(delete t.options.notNextTick,t.swiper=new Swiper(t.$el,t.options))};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(6),s=n.n(a),i=n(95),o=n.n(i),r=n(94),c=n.n(r),u=n(98),l=n.n(u),d=n(2);e.default={name:"app",data:function(){return{head:!0}},computed:s()({},n.i(d.a)({nav:function(t){return t.nav},head:function(t){return t.head}})),created:function(){this.toggleHead()},watch:{$route:"toggleHead"},components:{myHeader:o.a,myNav:l.a,myFooter:c.a},methods:{toggleHead:function(){this.$route.path.search(/\/list/i)===-1?this.head=!1:this.head=!0},backroute:function(){window.history.back()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(5);e.default={data:function(){return{loading:!1,getdone:!1,data:{}}},created:function(){this.getContent()},watch:{$route:"getContent"},methods:{getContent:function(){var t=this,e=this;this.loading=!0,this.getdone=!1;var n=this.$route.params.id;a.a.getMessage("newsDetail",n).then(function(n){e.data=n.data,t.loading=!1,t.getdone=!0}).catch(function(t){console.log(":",t)})},backroute:function(){this.$router.go(-1)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(2);e.default={data:function(){return{}},computed:{},methods:{backroute:function(){window.history.length>1?this.$router.go(-1):this.$router.push({name:"List"})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(6),s=n.n(a),i=n(2);e.default={data:function(){return{}},computed:s()({},n.i(i.a)({title:function(t){return t.titleName}})),methods:{toggle:function(){this.$store.commit("toggle",!0)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(5);n(2);e.default={data:function(){return{topStories:[1,2,3,4],datas:[],date:0,routetimes:!1,homepage:!1,refresh:!0,loading:!1,getdone:!1,swiperOption:{autoplay:3500,setWrapperSize:!0,pagination:".swiper-pagination",paginationClickable:!0,mousewheelControl:!0,observeParents:!0,loop:!0}}},created:function(){this.getlist()},mounted:function(){var t=this.$route.path.split("/")[2];this.routetimes=!0,t&&"0"!==t?this.homepage=!1:(this.homepage=!0,this.$store.commit("setTitleName","今日热闻"),document.querySelector(".list").addEventListener("scroll",this.lazyLoad))},watch:{$route:"getlist"},methods:{toContent:function(t){this.$router.push({name:"Content",params:{id:t}})},getlist:function(){var t=this.$route.path.split("/")[2];this.routetimes&&(t&&"0"!==t?this.homepage&&(this.homepage=!1,document.querySelector(".list").removeEventListener("scroll",this.lazyLoad)):(this.homepage=!0,document.querySelector(".list").addEventListener("scroll",this.lazyLoad))),this.datas=[],this.date=0;var e=this,n=this.$route.params.id,s="newsThemeDetail";this.loading=!0,this.getdone=!1,n&&"0"!==n||(n="",s="news"),a.a.getMessage(s,n).then(function(t){var t=t.data;if(t.top_stories){for(var n=t.top_stories,a=n.length,s=a-1;s>=0;s--);t.top_stories=n}if(t.stories){for(var i=t.stories,a=i.length,s=a-1;s>=0;s--)i[s].images;t.stories=i}if(t.date){var o=t.date;o=o.substring(0,4)+"年"+o.substring(4,6)+"月"+o.substring(6,8)+"日",t.date=o}e.datas.push(t),e.loading=!1,e.getdone=!0}).catch(function(t){console.log(t)}),setInterval(function(){},3e3)},lazyLoad:function(t){var e=this,n=document.documentElement.clientHeight||document.body.clientHeight,s=document.querySelector(".list").scrollTop;if(document.querySelector(".more-load").offsetTop-100<=n+s&&e.refresh){e.refresh=!1;var i=e.getdate();a.a.getMessage("newsDate",i).then(function(t){e.datas.push(t.data),e.date+=1,e.refresh=!0}).catch(function(t){console.log(":",t)})}},getdate:function(){var t=new Date;t.setDate(t.getDate()-this.date);var e=t.getFullYear(),n=t.getMonth()+1;n=n>=10?n:"0"+n;var a=t.getDate();return a=a>=10?a:"0"+a,""+e+n+a}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(6),s=n.n(a),i=n(5),o=n(2);e.default={data:function(){return{username:"知乎日报",subList:[],othersList:[],jumpId:""}},computed:s()({},n.i(o.a)({nav:function(t){return t.nav}})),mounted:function(){var t=this;i.a.getMessage("newsThemes").then(function(e){t.subList=e.data.subscribed,t.othersList=e.data.others;var n=t.$route.params.id;n||(n=0),setTimeout(function(){document.querySelector('.nav-list li[data-id="'+n+'"]')&&document.querySelector('.nav-list li[data-id="'+n+'"]').classList.add("nav-choice")},0)}).catch(function(t){console.log(t)})},methods:{navToggle:function(){this.$store.commit("toggle",!1)},choiceId:function(t,e){document.querySelector(".nav-choice")&&document.querySelector(".nav-choice").classList.remove("nav-choice"),document.querySelector('.nav-list [data-id="'+t+'"]').classList.add("nav-choice"),this.$store.commit("setLid",t)},tolist:function(t,e){0===t?this.$store.commit("setTitleName","今日热闻"):this.$store.commit("setTitleName",e),this.choiceId(t,e),this.$router.push({name:"ListId",params:{id:t}})}}}},function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a="/api"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){var a=n(1)(n(44),n(102),null,null);t.exports=a.exports},function(t,e,n){var a=n(1)(n(45),n(103),null,null);t.exports=a.exports},function(t,e,n){n(85);var a=n(1)(n(47),n(101),null,null);t.exports=a.exports},function(t,e,n){n(89);var a=n(1)(n(48),n(107),"data-v-f1736ec0",null);t.exports=a.exports},function(t,e,n){n(88);var a=n(1)(n(49),n(106),"data-v-af0ea6dc",null);t.exports=a.exports},function(t,e,n){n(83);var a=n(1)(n(50),n(99),"data-v-06d4fadd",null);t.exports=a.exports},function(t,e,n){n(86);var a=n(1)(n(51),n(104),null,null);t.exports=a.exports},function(t,e,n){n(84);var a=n(1)(n(52),n(100),"data-v-0a5f0924",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav",class:{slide:t.nav},on:{click:t.navToggle}},[n("div",{staticClass:"nav-content"},[n("div",{staticClass:"nav-head"},[n("div",{staticClass:"avatar"}),t._v(" "),n("div",{staticClass:"user-name"},[t._v(t._s(t.username))])]),t._v(" "),t._m(0),t._v(" "),n("ul",{staticClass:"nav-list"},[n("li",{attrs:{title:"首页","data-id":"0"},on:{click:function(e){t.tolist(0,"首页")}}},[t._v("首页")]),t._v(" "),t._l(t.subList,function(e){return n("li",{attrs:{title:e.description,"data-id":e.id},on:{click:function(n){t.tolist(e.id,e.name)}}},[t._v(" "+t._s(e.name)+" ")])}),t._v(" "),t._l(t.othersList,function(e){return n("li",{attrs:{title:e.description,"data-id":e.id},on:{click:function(n){t.tolist(e.id,e.name)}}},[t._v(" "+t._s(e.name)+" ")])}),t._v(" "),t._m(1)],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"nav-settings"},[n("tr",[n("td",[t._v("收藏")]),t._v(" "),n("td",[t._v("|")]),t._v(" "),n("td",[t._v("消息")]),t._v(" "),n("td",[t._v("|")]),t._v(" "),n("td",[t._v("设置")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{attrs:{"data-id":"-1"}},[n("a",{attrs:{href:"https://github.com/dclcats/vue-zhihudaily"}},[t._v("GitHub")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ctn"},[t.loading?n("div",{staticClass:"loading"},[t._v("Loading...")]):t._e(),t._v(" "),t.getdone?n("div",[t.data.image?n("div",{staticClass:"top"},[n("div",{staticClass:"top-img"},[n("img",{attrs:{src:t.data.image,alt:t.data.image_source}}),t._v(" "),n("div",{staticClass:"slide-content"},[n("p",[t._v(t._s(t.data.title))])])])]):t._e(),t._v(" "),n("div",{staticClass:"article",domProps:{innerHTML:t._s(t.data.body)}})]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"swiper-slide"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{staticClass:"swiper-wrapper"},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[t.loading?n("div",{staticClass:"loading"},[t._v("Loading...")]):t._e(),t._v(" "),n("div",{staticClass:"list-con"},t._l(t.datas,function(e){return t.getdone?n("div",[e.top_stories?n("div",{staticClass:"top-slide top"},[n("swiper",{staticClass:"sdj",attrs:{options:t.swiperOption}},[t._l(e.top_stories,function(e){return n("swiper-slide",{key:e,staticClass:"top-img",attrs:{"data-id":e.id}},[n("div",{on:{click:function(n){t.toContent(e.id)}}},[n("img",{attrs:{src:e.image,alt:e.title}}),t._v(" "),n("div",{staticClass:"slide-content"},[n("p",[t._v(t._s(e.title))])])])])}),t._v(" "),n("div",{staticClass:"swiper-pagination",slot:"pagination"})],2)],1):t._e(),t._v(" "),e.stories?n("div",{staticClass:"list-message"},[e.date&&!e.top_stories?n("p",[t._v(t._s(e.date))]):t._e(),t._v(" "),!e.date&&e.image?n("img",{attrs:{src:"http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl="+e.image,alt:e.name}}):t._e(),t._v(" "),n("ul",t._l(e.stories,function(e){return n("li",{attrs:{"data-id":e.id},on:{click:function(n){t.toContent(e.id)}}},[n("p",[t._v(t._s(e.title))]),t._v(" "),e.images?n("img",{attrs:{src:e.images,alt:e.title}}):t._e()])}))]):t._e()]):t._e()})),t._v(" "),t.getdone?n("div",{staticClass:"more-load",class:{dbload:t.homepage}},[t._v("loading...")]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("transition",{attrs:{name:"nav-slide"}},[n("my-nav",{staticClass:"nav-in"})],1),t._v(" "),t.head?n("my-header"):t._e(),t._v(" "),n("transition",[n("keep-alive",[n("router-view")],1)],1),t._v(" "),t.head?t._e():n("my-footer")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"left-menu",on:{click:function(e){e.stopPropagation(),t.toggle(e)}}},[n("span")]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.title))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("p",{on:{click:t.backroute}})])},staticRenderFns:[]}},,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),s=n(25),i=n.n(s),o=n(23),r=n(22),c=n(24),u=n.n(c);a.a.use(u.a),a.a.config.productionTip=!1,new a.a({el:"#app",store:o.a,router:r.a,template:"<App/>",components:{App:i.a}})}],[111]);
//# sourceMappingURL=app.461a46a92328400d7373.js.map