"use strict";(self.webpackChunkmycompany_docs=self.webpackChunkmycompany_docs||[]).push([[6103],{6883:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(3366),l=a(7294),r=a(6010),i=a(9156),m=a(6742),s="sidebar_2ahu",o="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",d="sidebarItem_2UVv",u="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",p=a(4973);function v(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:d},l.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var h=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,m=e.children,s=(0,n.Z)(e,h),o=t&&t.items.length>0;return l.createElement(i.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(v,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&l.createElement("div",{className:"col col--2"},a))))}},7495:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(7294),l=a(6010),r=a(3905),i=a(4973),m=a(6742),s=a(4996),o=a(7281),c=a(5665),d=a(4195),u="blogPostTitle_GeHD",g="blogPostData_291c",p="blogPostDetailsFull_3kfx",v=a(1221),h="image_1yU8";var E=function(e){var t=e.author,a=t.name,l=t.title,r=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:r},n.createElement("img",{className:h,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(m.Z,{href:r,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},b="authorCol_1R69";function f(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var r;return n.createElement("div",{className:(0,l.Z)("col col--6",b),key:t},n.createElement(E,{author:Object.assign({},e,{imageURL:null!=(r=a.authorsImageUrls[t])?r:e.imageURL})}))})))}var _=function(e){var t,a,h,E,b=(h=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return h(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,s.C)().withBaseUrl,N=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,C=e.truncated,L=e.isBlogPostPage,y=void 0!==L&&L,T=P.date,w=P.formattedDate,x=P.permalink,I=P.tags,H=P.readingTime,M=P.title,A=P.editUrl,U=P.authors,B=null!=(t=k.image)?t:Z.image,R=!y&&C,O=I.length>0;return n.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(E=y?"h1":"h2",n.createElement("header",null,n.createElement(E,{className:u,itemProp:"headline"},y?M:n.createElement(m.Z,{itemProp:"url",to:x},M)),n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:T,itemProp:"datePublished"},w),void 0!==H&&n.createElement(n.Fragment,null," \xb7 ",b(H))),n.createElement(f,{authors:U,assets:k}))),B&&n.createElement("meta",{itemProp:"image",content:_(B,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(r.Zo,{components:c.Z},N)),(O||C)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[p]=y,a))},O&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":R})},n.createElement(v.Z,{tags:I})),y&&A&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:A})),R&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":O})},n.createElement(m.Z,{to:P.permalink,"aria-label":"Read more about "+M},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},3295:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),l=a(1217),r=a(6883),i=a(7495),m=a(4973),s=a(6742);var o=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},c=a(7281),d=a(3070);var u=function(e){var t,a=e.content,m=e.sidebar,s=a.frontMatter,u=a.assets,g=a.metadata,p=g.title,v=g.description,h=g.nextItem,E=g.prevItem,b=g.date,f=g.tags,_=g.authors,N=s.hide_table_of_contents,Z=s.keywords,k=s.toc_min_heading_level,P=s.toc_max_heading_level,C=null!=(t=u.image)?t:s.image;return n.createElement(r.Z,{wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:m,toc:!N&&a.toc&&a.toc.length>0?n.createElement(d.Z,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:P}):void 0},n.createElement(l.Z,{title:p,description:v,keywords:Z,image:C},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:b}),_.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:_.map((function(e){return e.url})).filter(Boolean).join(",")}),f.length>0&&n.createElement("meta",{property:"article:tag",content:f.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:s,assets:u,metadata:g,isBlogPostPage:!0},n.createElement(a,null)),(h||E)&&n.createElement(o,{nextItem:h,prevItem:E}))}},4195:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),l=a(4973),r=a(7462),i=a(3366),m=a(6010),s="iconEdit_2_ui",o=["className"],c=function(e){var t=e.className,a=(0,i.Z)(e,o);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},d=a(7281);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},5002:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7462),l=a(3366),r=a(7294),i=a(7281),m=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function o(e){var t=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,g=void 0===u?void 0:u,p=e.minHeadingLevel,v=e.maxHeadingLevel,h=(0,l.Z)(e,m),E=(0,i.LU)(),b=null!=p?p:E.tableOfContents.minHeadingLevel,f=null!=v?v:E.tableOfContents.maxHeadingLevel,_=(0,i.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:f}),N=(0,r.useMemo)((function(){if(d&&g)return{linkClassName:d,linkActiveClassName:g,minHeadingLevel:b,maxHeadingLevel:f}}),[d,g,b,f]);return(0,i.Si)(N),r.createElement(s,(0,n.Z)({toc:_,className:o,linkClassName:d},h))}},3070:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(3366),r=a(7294),i=a(6010),m=a(5002),s="tableOfContents_35-E",o=["className"];var c=function(e){var t=e.className,a=(0,l.Z)(e,o);return r.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},r.createElement(m.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},4346:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(6010),r=a(6742),i="tag_1Okp",m="tagRegular_3MiF",s="tagWithCount_1HU1";var o=function(e){var t,a=e.permalink,o=e.name,c=e.count;return n.createElement(r.Z,{href:a,className:(0,l.Z)(i,(t={},t[m]=!c,t[s]=c,t))},o,c&&n.createElement("span",null,c))}},1221:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(6010),r=a(4973),i=a(4346),m="tags_2ga9",s="tag_11ep";function o(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(m,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:s},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);