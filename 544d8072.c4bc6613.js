(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{132:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return t?o.a.createElement(f,c(c({ref:n},p),{},{components:t})):o.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(132)),i={id:"migration",title:"Migration from <=23.10"},c={unversionedId:"migration",id:"version-26.5/migration",isDocsHomePage:!1,title:"Migration from <=23.10",description:"You can use the config:migrate tool of ts-jest CLI if you're coming from an older version to help you migrate your Jest configuration.",source:"@site/versioned_docs/version-26.5/migration.md",slug:"/migration",permalink:"/docs/migration",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/docs/versioned_docs/version-26.5/migration.md",version:"26.5",sidebar:"version-26.5-docs",previous:{title:"Babel7 or TypeScript",permalink:"/docs/babel7-or-ts"},next:{title:"Debugging ts-jest",permalink:"/docs/debugging"}},s=[{value:"NPM",id:"npm",children:[]},{value:"Yarn",id:"yarn",children:[]},{value:"NPM",id:"npm-1",children:[]},{value:"Yarn",id:"yarn-1",children:[]}],p={toc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can use the ",Object(a.b)("inlineCode",{parentName:"p"},"config:migrate")," tool of ",Object(a.b)("inlineCode",{parentName:"p"},"ts-jest")," CLI if you're coming from an older version to help you migrate your Jest configuration."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"If you're using ",Object(a.b)("inlineCode",{parentName:"em"},"jest.config.js"),":")),Object(a.b)("h3",{id:"npm"},"NPM"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx ts-jest config:migrate jest.config.js\n")),Object(a.b)("h3",{id:"yarn"},"Yarn"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn ts-jest config:migrate jest.config.js\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"If you're using ",Object(a.b)("inlineCode",{parentName:"em"},"jest")," config property of ",Object(a.b)("inlineCode",{parentName:"em"},"package.json"),":")),Object(a.b)("h3",{id:"npm-1"},"NPM"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx ts-jest config:migrate package.json\n")),Object(a.b)("h3",{id:"yarn-1"},"Yarn"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn ts-jest config:migrate package.json\n")))}l.isMDXComponent=!0}}]);