"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[3448],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(4137));const r={id:"installation",title:"Installation"},o=void 0,l={unversionedId:"getting-started/installation",id:"version-27.1/getting-started/installation",title:"Installation",description:"Dependencies",source:"@site/versioned_docs/version-27.1/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/ts-jest/docs/27.1/getting-started/installation",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.1/getting-started/installation.md",tags:[],version:"27.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1675516873,formattedLastUpdatedAt:"Feb 4, 2023",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-27.1-docs",previous:{title:"Contributing",permalink:"/ts-jest/docs/27.1/contributing"},next:{title:"Presets",permalink:"/ts-jest/docs/27.1/getting-started/presets"}},s={},p=[{value:"Dependencies",id:"dependencies",level:3},{value:"NPM",id:"npm",level:4},{value:"Yarn",id:"yarn",level:4},{value:"Jest config file",id:"jest-config-file",level:3},{value:"Creating",id:"creating",level:4},{value:"NPM",id:"npm-1",level:4},{value:"Yarn",id:"yarn-1",level:4},{value:"Customizing",id:"customizing",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"You can install ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," and dependencies all at once with one of the following commands."),(0,a.kt)("h4",{id:"npm"},"NPM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev jest typescript ts-jest @types/jest\n")),(0,a.kt)("h4",{id:"yarn"},"Yarn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev jest typescript ts-jest @types/jest\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Tip: If you get an error with the following ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," commands such as ",(0,a.kt)("inlineCode",{parentName:"p"},"npx: command not found"),", you can replace ",(0,a.kt)("inlineCode",{parentName:"p"},"npx XXX")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"node node_modules/.bin/XXX")," from the root of your project.")),(0,a.kt)("h3",{id:"jest-config-file"},"Jest config file"),(0,a.kt)("h4",{id:"creating"},"Creating"),(0,a.kt)("p",null,"By default, Jest can run without any config files, but it will not compile ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," files.\nTo make it transpile TypeScript with ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest"),", we will need to create a configuration file that will tell Jest to use a ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," preset."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," can create the configuration file for you automatically:"),(0,a.kt)("h4",{id:"npm-1"},"NPM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx ts-jest config:init\n")),(0,a.kt)("h4",{id:"yarn-1"},"Yarn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn ts-jest config:init\n")),(0,a.kt)("p",null,"This will create a basic Jest configuration file which will inform Jest about how to handle ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," files correctly."),(0,a.kt)("p",null,"You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"jest --init")," command (prefixed with either ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," depending on what you're using) to have more options related to Jest.\nHowever, answer ",(0,a.kt)("inlineCode",{parentName:"p"},"no")," to the Jest question about whether or not to enable TypeScript. Instead, add the line: ",(0,a.kt)("inlineCode",{parentName:"p"},'preset: "ts-jest"')," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.config.js")," file afterwards."),(0,a.kt)("h4",{id:"customizing"},"Customizing"),(0,a.kt)("p",null,"For customizing jest, please follow their ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration.html"},"official guide online"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," specific options can be found ",(0,a.kt)("a",{parentName:"p",href:"options"},"here"),"."))}d.isMDXComponent=!0}}]);