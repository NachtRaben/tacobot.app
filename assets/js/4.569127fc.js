(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{311:function(t,e,a){"use strict";a(336),a(174),a(167),a(97),a(175),a(312);var i=a(308),n={name:"NavLink",props:{item:{required:!0}},computed:{absLink:function(){var t=this,e=this.$page.frontmatter._aliases?this.$page.frontmatter._aliases.find((function(e){return e.aliases.includes(t.item.link)})):null;return e?e.url:this.item.link},link:function(){return Object(i.b)(this.absLink)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction:function(){this.$emit("focusout")}}},s=a(44),o=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isInternal?a("RouterLink",{staticClass:"nav-link",class:t.item.class||"",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):a("a",{staticClass:"nav-link external",class:t.item.class||"",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?a("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=o.exports},315:function(t,e,a){"use strict";e.a={data:function(){return{darkTheme:!1}},mounted:function(){localStorage.getItem("dark-theme")?this.darkTheme="true"===localStorage.getItem("dark-theme"):this.darkTheme=!!window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,this.updateDarkTheme()},methods:{updateDarkTheme:function(){if(localStorage.setItem("dark-theme",this.darkTheme),this.darkTheme)return document.documentElement.classList.add("dark-theme");document.documentElement.classList.remove("dark-theme")},toggleDarkTheme:function(){this.darkTheme=!this.darkTheme,this.updateDarkTheme()}}}},317:function(t,e,a){},318:function(t,e,a){},324:function(t,e,a){},345:function(t,e,a){"use strict";var i=a(317);a.n(i).a},347:function(t,e,a){"use strict";var i=a(318);a.n(i).a},358:function(t,e,a){"use strict";var i=a(324);a.n(i).a},376:function(t,e,a){"use strict";a.r(e);a(344);var i=a(311),n={name:"Footer",components:{NavLink:i.a},computed:{data:function(){return this.$page.frontmatter},config:function(){return this.$site.themeConfig.footer||{}}}},s=(a(345),a(44)),o=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[t.config.columns&&t.config.columns.length?a("div",{staticClass:"columns"},[a("span",{staticClass:"column-opener"},[t._v("\n      Made possible by the\n      "),a("NavLink",{attrs:{item:{text:"Trello Talk Team",link:"/guide/other/team/"}}}),t._v(" \n      using "),a("NavLink",{attrs:{item:{text:"Node.JS",link:"https://nodejs.org/"}}}),t._v(",\n      "),a("NavLink",{attrs:{item:{text:"VuePress",link:"https://vuepress.vuejs.org/"}}}),t._v(" and love.")],1),t._v(" "),t._l(t.config.columns,(function(e){return a("div",{staticClass:"column"},[a("span",{staticClass:"col-title"},[t._v(t._s(e.title))]),t._v(" "),e.rows?a("div",{staticClass:"links",class:e.rows.find((function(t){return!!t.text}))?"flex-down":""},t._l(e.rows,(function(e){return e.icon&&e.link?a("a",{staticClass:"with-icon",attrs:{title:e.title,href:e.link}},[a("icon-"+e.icon,{tag:"component"}),t._v("\n          "+t._s(e.text)+"\n        ")],1):e.darkbtn?a("span",{staticClass:"dark-btn",on:{click:t.$parent.toggleDarkTheme}},[t._v("\n          "+t._s(t.$parent.darkTheme?"Light theme?":"Dark theme?")+"\n        ")]):e.text&&e.link?a("NavLink",{attrs:{item:e}}):t._e()})),0):t._e()])}))],2):t._e(),t._v(" "),t.config.finePrints?a("div",{staticClass:"fine-print"},t._l(t.config.finePrints,(function(e){return e?a("p",[t._v(t._s(e))]):a("br")})),0):t._e()])}),[],!1,null,null,null).exports,r=globalThis.window?a(346):{},l=r.Carousel,c=r.Slide,u={name:"Home",components:{NavLink:i.a,Footer:o,Carousel:l,Slide:c},computed:{data:function(){return this.$page.frontmatter}}},h=(a(347),Object(s.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[a("header",{staticClass:"landing"},[a("div",{staticClass:"slideshow"},[a("ClientOnly",[a("carousel",{attrs:{autoplay:!0,perPage:1,paginationEnabled:!0,autoplayTimeout:1e4,loop:!0}},t._l(t.data.slides,(function(e){return a("slide",[a("div",{staticClass:"picture-outer"},[a("img",{staticClass:"picture",attrs:{src:e.image,"data-original":e.ogImage||e.image,"no-zoom":""}})]),t._v(" "),a("span",{staticClass:"caption"},[t._v(t._s(e.caption))])])})),1)],1)],1),t._v(" "),a("div",{staticClass:"hero"},[a("div",{staticClass:"mobile-wrapper"},[a("img",{attrs:{"no-zoom":"",src:this.$parent.darkTheme?"/logo_nightly_happy.svg":"/logo_happy.svg"}}),t._v(" "),a("div",{staticClass:"hero-text"},[a("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),a("p",{staticClass:"description"},[t._v(t._s(t.data.tagline||t.$description||"Welcome to your VuePress site"))])])]),t._v(" "),t.data.actionButtons&&t.data.actionButtons.length?a("p",{staticClass:"action-buttons"},t._l(t.data.actionButtons,(function(t){return a("NavLink",{staticClass:"action-button",class:t.primary?"primary":"",attrs:{item:t}})})),1):t._e()])]),t._v(" "),a("hr"),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,(function(e){return a("div",{staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),e.image?a("div",{staticClass:"picture-outer"},[a("img",{staticClass:"picture",attrs:{src:e.image,"data-original":e.ogImage||e.image}})]):t._e(),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e()])}),[],!1,null,null,null).exports),d=(a(348),a(350)),m=a(372),f=a(374),g=a(341);function p(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var v={name:"Navbar",components:{SidebarButton:f.a,NavLinks:g.a,SearchBox:m.a,AlgoliaSearchBox:d.a},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(p(this.$el,"paddingLeft"))+parseInt(p(this.$el,"paddingRight")),a=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};a(),window.addEventListener("resize",a,!1)}},_=(a(358),Object(s.a)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar"},[a("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),a("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?a("img",{staticClass:"logo",attrs:{src:t.$withBase((t.$parent.darkTheme?t.$site.themeConfig.logoDark:null)||t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?a("span",{ref:"siteName",staticClass:"site-name"},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),a("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?a("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?a("SearchBox"):t._e(),t._v(" "),a("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),b=a(371),k=a(373),C=a(315),$=a(308),S={name:"Layout",components:{Home:h,Page:b.a,Sidebar:k.a,Navbar:_,Footer:o},mixins:[C.a],data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object($.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},x=Object(s.a)(S,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.footer&&t.$site.themeConfig.footer?a("Footer"):t._e()],1)}),[],!1,null,null,null);e.default=x.exports}}]);