"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4854],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return n?s.createElement(k,a(a({ref:t},u),{},{components:n})):s.createElement(k,a({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var s=n(7462),r=(n(7294),n(4137));const o={id:"esm-support",title:"ESM Support"},a=void 0,i={unversionedId:"guides/esm-support",id:"version-28.0/guides/esm-support",title:"ESM Support",description:"To use ts-jest with ESM support:",source:"@site/versioned_docs/version-28.0/guides/esm-support.md",sourceDirName:"guides",slug:"/guides/esm-support",permalink:"/ts-jest/docs/28.0/guides/esm-support",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-28.0/guides/esm-support.md",tags:[],version:"28.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1675516873,formattedLastUpdatedAt:"Feb 4, 2023",frontMatter:{id:"esm-support",title:"ESM Support"},sidebar:"version-28.0-docs",previous:{title:"Version checking",permalink:"/ts-jest/docs/28.0/getting-started/version-checking"},next:{title:"Mock ES6 class",permalink:"/ts-jest/docs/28.0/guides/mock-es6-class"}},l={},p=[{value:"ESM presets",id:"esm-presets",level:3},{value:"Examples",id:"examples",level:3},{value:"Manual configuration",id:"manual-configuration",level:4},{value:"Use ESM presets",id:"use-esm-presets",level:4},{value:"Support <code>.mts</code> extension",id:"support-mts-extension",level:4}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To use ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," with ESM support:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check ",(0,r.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/en/ecmascript-modules"},"ESM Jest documentation"),"."),(0,r.kt)("li",{parentName:"ul"},"Enable ",(0,r.kt)("a",{parentName:"li",href:"../getting-started/options/useESM"},"useESM")," ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"ts-jest")," config."),(0,r.kt)("li",{parentName:"ul"},"Include ",(0,r.kt)("inlineCode",{parentName:"li"},".ts")," in ",(0,r.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/en/next/configuration#extensionstotreatasesm-arraystring"},"extensionsToTreatAsEsm")," Jest config option."),(0,r.kt)("li",{parentName:"ul"},"Ensure that ",(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig")," has ",(0,r.kt)("inlineCode",{parentName:"li"},"module")," with value for ESM, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"ES2015")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"ES2020")," etc...")),(0,r.kt)("h3",{id:"esm-presets"},"ESM presets"),(0,r.kt)("p",null,"There are also ",(0,r.kt)("a",{parentName:"p",href:"/ts-jest/docs/28.0/getting-started/presets"},"3 presets")," to work with ESM."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("h4",{id:"manual-configuration"},"Manual configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  extensionsToTreatAsEsm: ['.ts'],\n  globals: {\n    'ts-jest': {\n      useESM: true,\n    },\n  },\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "extensionsToTreatAsEsm": [".ts"],\n    "globals": {\n      "ts-jest": {\n        "useESM": true\n      }\n    },\n    "moduleNameMapper": {\n      "^(\\\\.{1,2}/.*)\\\\.js$": "$1"\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"use-esm-presets"},"Use ESM presets"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Starting from ",(0,r.kt)("strong",{parentName:"p"},"v28.0.0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," will gradually switch to ",(0,r.kt)("inlineCode",{parentName:"p"},"esbuild"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"swc")," to transform ",(0,r.kt)("inlineCode",{parentName:"p"},"ts")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"js"),". To make the transition smoothly, we introduce ",(0,r.kt)("inlineCode",{parentName:"p"},"legacy")," presets as a fallback when the new codes don't work yet.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  preset: 'ts-jest/presets/default-esm', // or other ESM presets\n  globals: {\n    'ts-jest': {\n      useESM: true,\n    },\n  },\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "preset": "ts-jest/presets/default-esm", // or other ESM presets,\n    "globals": {\n      "ts-jest": {\n        "useESM": true\n      }\n    },\n    "moduleNameMapper": {\n      "^(\\\\.{1,2}/.*)\\\\.js$": "$1"\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"support-mts-extension"},"Support ",(0,r.kt)("inlineCode",{parentName:"h4"},".mts")," extension"),(0,r.kt)("p",null,"To work with ",(0,r.kt)("inlineCode",{parentName:"p"},".mts")," extension, besides the requirement to run Jest and ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," in ESM mode, there are a few extra requirements to be met:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," should contain ",(0,r.kt)("inlineCode",{parentName:"li"},'"type": "module"')),(0,r.kt)("li",{parentName:"ul"},"A custom Jest resolver to resolve ",(0,r.kt)("inlineCode",{parentName:"li"},".mjs")," extension, see our simple one at ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kulshekhar/ts-jest/blob/main/e2e/native-esm-ts/mjs-resolver.ts"},"https://github.com/kulshekhar/ts-jest/blob/main/e2e/native-esm-ts/mjs-resolver.ts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," should at least contain these following options")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "module": "Node16", // or "NodeNext"\n    "target": "ESNext",\n    "moduleResolution": "Node16", // or "NodeNext"\n    "esModuleInterop": true\n  }\n}\n')))}m.isMDXComponent=!0}}]);