webpackJsonp([1,2],[,,,,,,function(t,e,s){"use strict";var n=s(26),i=s.n(n),a=s(54),o={startImage:"/4/start-image/",news:"/4/news/latest",newsDate:"/4/news/before/",newsDetail:"/4/news/",newsInfo:"/4/story-extra/",newsStory:"/4/story/",newsThemes:"/4/themes",newsThemeDetail:"/4/theme/"};e.a={getMessage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"news",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return i.a.get(a.a.concat(o[t],e))},getStart:function(t){return i.a.get(a.a.concat(o.startImage,t))},getNews:function(){return i.a.get(a.a.concat(o.news))},getNewsDate:function(t){return i.a.get(a.a.concat(o.newsDate,t))},getNewsDetail:function(t){return i.a.get(a.a.concat(o.newsDetail,t))},getNewsInfo:function(t){return i.a.get(a.a.concat(o.newsInfo,t))},getNewsStory:function(t){return i.a.get(a.a.concat(o.newsStory,t))},getThemes:function(){return i.a.get(a.a.concat(o.newsThemes))},getThemeDetail:function(t){return i.a.get(a.a.concat(o.newsThemeDetail,t))}}},,,,,,,,,,,,,,,,function(t,e,s){"use strict";var n=s(4),i=s(112),a=s(99),o=s.n(a),r=s(95),c=s.n(r),u=s(100),l=s.n(u),d=s(96),v=s.n(d);n.a.use(i.a),e.a=new i.a({routes:[{path:"/",redirect:"/List"},{path:"/Hello",name:"Hello",component:o.a},{path:"/Content/:id",name:"Content",component:c.a},{path:"/List/:id",name:"ListId",component:l.a},{path:"/List",name:"List",component:l.a},{path:"/Editors",name:"Editors",component:v.a}]})},function(t,e,s){"use strict";var n=s(4),i=s(2);n.a.use(i.b),e.a=new i.b.Store({state:{nav:!1,cid:0,lid:0,titleName:"",editors:[]},mutations:{toggle:function(t,e){t.nav=!!e},setLid:function(t,e){t.lid=e},setTitleName:function(t,e){e&&(t.titleName=e)},setEditors:function(t,e){e&&(t.editors=e)}}})},,function(t,e,s){s(89);var n=s(1)(s(46),s(109),null,null);t.exports=n.exports},,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",ready:function(){this.update()},mounted:function(){this.update()},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="undefined"!=typeof window;n&&(window.Swiper=s(21),s(83)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},ready:function(){!this.swiper&&n&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){!t.swiper&&n&&(delete t.options.notNextTick,t.swiper=new Swiper(t.$el,t.options))};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),i=s.n(n),a=s(98),o=s.n(a),r=s(97),c=s.n(r),u=s(101),l=s.n(u),d=s(2);e.default={name:"app",data:function(){return{head:!0,footer:!1}},computed:i()({},s.i(d.a)({nav:function(t){return t.nav}})),created:function(){this.toggleHead()},watch:{$route:"toggleHead"},components:{myHeader:o.a,myNav:l.a,myFooter:c.a},methods:{toggleHead:function(){var t=this.$route.path;/list/i.test(t)?(this.head=!0,this.footer=!1):/content/i.test(t)?(this.head=!1,this.footer=!0):(this.head=!1,this.footer=!1)},backroute:function(){window.history.back()}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(6);e.default={data:function(){return{loading:!1,getdone:!1,data:{}}},created:function(){this.getContent()},watch:{$route:"getContent"},methods:{getContent:function(){var t=this,e=this;this.loading=!0,this.getdone=!1;var s=this.$route.params.id;s<100||n.a.getMessage("newsDetail",s).then(function(s){e.data=s.data,t.loading=!1,t.getdone=!0}).catch(function(t){console.log(":",t)})},backroute:function(){this.$router.go(-1)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),i=s.n(n),a=s(2);e.default={data:function(){return{}},computed:i()({},s.i(a.a)({editors:function(t){return t.editors}})),methods:{goback:function(){window.history.length>1?this.$router.go(-1):this.$router.push({name:"List"})},godetail:function(t){location.replace(t)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s(2);e.default={data:function(){return{}},computed:{},methods:{backroute:function(){window.history.length>1?this.$router.go(-1):this.$router.push({name:"List"})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),i=s.n(n),a=s(2);e.default={data:function(){return{}},computed:i()({},s.i(a.a)({title:function(t){return t.titleName}})),methods:{toggle:function(){this.$store.commit("toggle",!0)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(6);s(2);e.default={data:function(){return{topStories:[1,2,3,4],datas:[],date:0,routetimes:!1,homepage:!1,refresh:!0,loading:!1,getdone:!1,swiperOption:{autoplay:3500,setWrapperSize:!0,pagination:".swiper-pagination",paginationClickable:!0,mousewheelControl:!0,observeParents:!0,loop:!0}}},created:function(){this.getlist()},mounted:function(){var t=this.$route.path.split("/")[2];this.routetimes=!0,t&&"0"!==t?this.homepage=!1:(this.homepage=!0,this.$store.commit("setTitleName","今日热闻"),document.querySelector(".list").addEventListener("scroll",this.lazyLoad))},watch:{$route:function(t,e){/list/i.test(t.path)&&this.getlist()}},methods:{toEditor:function(){this.$store.commit("setEditors",this.datas[0].editors),this.$router.push({name:"Editors"})},toContent:function(t){t!==-1&&this.$router.push({name:"Content",params:{id:t}})},getlist:function(){var t=this.$route.path.split("/")[2];this.routetimes&&(t&&"0"!==t?this.homepage&&(this.homepage=!1,document.querySelector(".list").removeEventListener("scroll",this.lazyLoad)):(this.homepage=!0,document.querySelector(".list").addEventListener("scroll",this.lazyLoad))),this.datas=[],this.date=0;var e=this,s=this.$route.params.id,i="newsThemeDetail";this.loading=!0,this.getdone=!1,s&&"0"!==s||(s="",i="news"),/list/i.test(this.$route.path)&&(n.a.getMessage(i,s).then(function(t){var t=t.data;if(t.top_stories){for(var s=t.top_stories,n=s.length,i=n-1;i>=0;i--);t.top_stories=s}if(t.stories){for(var a=t.stories,n=a.length,i=n-1;i>=0;i--)a[i].images;t.stories=a}if(t.date){var o=t.date;o=o.substring(0,4)+"年"+o.substring(4,6)+"月"+o.substring(6,8)+"日",t.date=o}e.datas.push(t),e.loading=!1,e.getdone=!0}).catch(function(t){console.log(t)}),setInterval(function(){},3e3))},lazyLoad:function(t){var e=this,s=document.documentElement.clientHeight||document.body.clientHeight,i=document.querySelector(".list").scrollTop;if(document.querySelector(".more-load").offsetTop-100<=s+i&&e.refresh){e.refresh=!1;var a=e.getdate();n.a.getMessage("newsDate",a).then(function(t){e.datas.push(t.data),e.date+=1,e.refresh=!0}).catch(function(t){console.log(":",t)})}},getdate:function(){var t=new Date;t.setDate(t.getDate()-this.date);var e=t.getFullYear(),s=t.getMonth()+1;s=s>=10?s:"0"+s;var n=t.getDate();return n=n>=10?n:"0"+n,""+e+s+n}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),i=s.n(n),a=s(6),o=s(2);e.default={data:function(){return{username:"知乎日报",subList:[],othersList:[],jumpId:""}},computed:i()({},s.i(o.a)({nav:function(t){return t.nav}})),mounted:function(){var t=this;a.a.getMessage("newsThemes").then(function(e){t.subList=e.data.subscribed,t.othersList=e.data.others;var s=t.$route.params.id;s||(s=0),setTimeout(function(){document.querySelector('.nav-list li[data-id="'+s+'"]')&&document.querySelector('.nav-list li[data-id="'+s+'"]').classList.add("nav-choice")},0)}).catch(function(t){console.log(t)})},methods:{navToggle:function(){this.$store.commit("toggle",!1)},choiceId:function(t,e){document.querySelector(".nav-choice")&&document.querySelector(".nav-choice").classList.remove("nav-choice"),document.querySelector('.nav-list [data-id="'+t+'"]').classList.add("nav-choice"),this.$store.commit("setLid",t)},tolist:function(t,e){0===t?this.$store.commit("setTitleName","今日热闻"):this.$store.commit("setTitleName",e),this.choiceId(t,e),this.$router.push({name:"ListId",params:{id:t}})}}}},function(t,e,s){"use strict";s.d(e,"a",function(){return i});var n={protocol:"https://",site:"test-zhihu.herokuapp.com/api"},i=n.protocol.concat(n.site)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,s){var n=s(1)(s(44),s(105),null,null);t.exports=n.exports},function(t,e,s){var n=s(1)(s(45),s(106),null,null);t.exports=n.exports},function(t,e,s){s(86);var n=s(1)(s(47),s(104),null,null);t.exports=n.exports},function(t,e,s){s(87);var n=s(1)(s(48),s(107),"data-v-2ef4d81e",null);t.exports=n.exports},function(t,e,s){s(91);var n=s(1)(s(49),s(111),"data-v-f1736ec0",null);t.exports=n.exports},function(t,e,s){s(90);var n=s(1)(s(50),s(110),"data-v-af0ea6dc",null);t.exports=n.exports},function(t,e,s){s(84);var n=s(1)(s(51),s(102),"data-v-06d4fadd",null);t.exports=n.exports},function(t,e,s){s(88);var n=s(1)(s(52),s(108),null,null);t.exports=n.exports},function(t,e,s){s(85);var n=s(1)(s(53),s(103),"data-v-0a5f0924",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav",class:{slide:t.nav},on:{click:t.navToggle}},[s("div",{staticClass:"nav-content"},[s("div",{staticClass:"nav-head"},[s("div",{staticClass:"avatar"}),t._v(" "),s("div",{staticClass:"user-name"},[t._v(t._s(t.username))])]),t._v(" "),t._m(0),t._v(" "),s("ul",{staticClass:"nav-list"},[s("li",{attrs:{title:"首页","data-id":"0"},on:{click:function(e){t.tolist(0,"首页")}}},[t._v("首页")]),t._v(" "),t._l(t.subList,function(e){return s("li",{attrs:{title:e.description,"data-id":e.id},on:{click:function(s){t.tolist(e.id,e.name)}}},[t._v(" "+t._s(e.name)+" ")])}),t._v(" "),t._l(t.othersList,function(e){return s("li",{attrs:{title:e.description,"data-id":e.id},on:{click:function(s){t.tolist(e.id,e.name)}}},[t._v(" "+t._s(e.name)+" ")])}),t._v(" "),t._m(1)],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"nav-settings"},[s("tr",[s("td",[t._v("收藏")]),t._v(" "),s("td",[t._v("|")]),t._v(" "),s("td",[t._v("消息")]),t._v(" "),s("td",[t._v("|")]),t._v(" "),s("td",[t._v("设置")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{attrs:{"data-id":"-1"}},[s("a",{attrs:{href:"https://github.com/dclcats/vue-zhihudaily"}},[t._v("GitHub")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ctn"},[t.loading?s("div",{staticClass:"loading"},[t._v("Loading...")]):t._e(),t._v(" "),t.getdone?s("div",[t.data.image?s("div",{staticClass:"top"},[s("div",{staticClass:"top-img"},[s("img",{attrs:{src:t.data.image,alt:t.data.image_source}}),t._v(" "),s("div",{staticClass:"slide-content"},[s("p",[t._v(t._s(t.data.title))])])])]):t._e(),t._v(" "),s("div",{staticClass:"article",domProps:{innerHTML:t._s(t.data.body)}})]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"swiper-slide"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),s("div",{staticClass:"swiper-wrapper"},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"editor-detail"},[s("div",{staticClass:"ed-header"},[s("span",{on:{click:t.goback}}),t._v("主编")]),t._v(" "),t._l(t.editors,function(e){return e?s("div",{staticClass:"ed-mes",on:{click:function(s){t.godetail(e.url)}}},[s("img",{staticClass:"ed-av",attrs:{src:e.avatar,alt:"头像"}}),t._v(" "),s("div",{staticClass:"ed-all"},[s("p",{staticClass:"ed-name"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"ed-bio"},[t._v(t._s(e.bio))])])]):t._e()})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list"},[t.loading?s("div",{staticClass:"loading"},[t._v("Loading...")]):t._e(),t._v(" "),s("div",{staticClass:"list-con"},t._l(t.datas,function(e){return t.getdone?s("div",[e.top_stories?s("div",{staticClass:"top-slide top"},[s("swiper",{staticClass:"sdj",attrs:{options:t.swiperOption}},[t._l(e.top_stories,function(e){return s("swiper-slide",{key:e,staticClass:"top-img",attrs:{"data-id":e.id}},[s("div",{on:{click:function(s){t.toContent(e.id)}}},[s("img",{attrs:{src:e.image,alt:e.title}}),t._v(" "),s("div",{staticClass:"slide-content"},[s("p",[t._v(t._s(e.title))])])])])}),t._v(" "),s("div",{staticClass:"swiper-pagination",slot:"pagination"})],2)],1):t._e(),t._v(" "),!e.date&&e.image?s("img",{staticClass:"other-img",attrs:{src:e.image,alt:e.name}}):t._e(),t._v(" "),e.stories?s("div",{staticClass:"list-message"},[e.date&&!e.top_stories?s("p",{staticClass:"date-mes"},[t._v(t._s(e.date))]):t._e(),t._v(" "),e.editors?s("p",{staticClass:"data-editors",attrs:{editors:e.editors},on:{click:t.toEditor}},[s("span",[t._v("主编")]),t._v(" "),s("ul",t._l(e.editors,function(t){return s("li",[s("img",{attrs:{src:t.avatar,alt:"主编头像"}})])}))]):t._e(),t._v(" "),s("ul",{staticClass:"list-content"},t._l(e.stories,function(e){return s("li",{attrs:{"data-id":e.id},on:{click:function(s){t.toContent(e.id)}}},[s("p",[t._v(t._s(e.title))]),t._v(" "),e.images?s("img",{attrs:{src:e.images,alt:e.title}}):t._e()])}))]):t._e()]):t._e()})),t._v(" "),t.getdone?s("div",{staticClass:"more-load",class:{dbload:t.homepage}},[t._v("loading...")]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app",attrs:{id:"app"}},[s("transition",{attrs:{name:"nav-slide"}},[s("my-nav",{staticClass:"nav-in"})],1),t._v(" "),t.head?s("my-header"):t._e(),t._v(" "),s("transition",[s("keep-alive",[s("router-view")],1)],1),t._v(" "),t.footer?s("my-footer"):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"left-menu",on:{click:function(e){e.stopPropagation(),t.toggle(e)}}},[s("span")]),t._v(" "),s("div",{staticClass:"title"},[t._v(t._s(t.title))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("p",{on:{click:t.backroute}})])},staticRenderFns:[]}},,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(4),i=s(25),a=s.n(i),o=s(23),r=s(22),c=s(24),u=s.n(c);n.a.use(u.a),n.a.config.productionTip=!1,new n.a({el:"#app",store:o.a,router:r.a,template:"<App/>",components:{App:a.a}})}],[115]);
//# sourceMappingURL=app.c54dcdb54830ce69238e.js.map