(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{75:function(e,t,a){"use strict";a.r(t);var n=a(136),l=a(24),r=a(135),o=a(140),c=a(0),m=a.n(c);t.default=function(){var e=Object(l.default)().siteConfig,t=Object(r.useVersions)(),a=Object(r.useLatestVersion)(),c=t.filter((function(e){return e!==a&&"current"!==e.name})),s=t[0],i="https://github.com/"+e.organizationName+"/"+e.projectName;return m.a.createElement(o.a,{title:"Versions",description:"ts-jest Versions page listing all documented site versions"},m.a.createElement("main",{className:"container margin-vert--lg"},m.a.createElement("h1",null,"ts-jest documentation versions"),m.a.createElement("div",{className:"margin-bottom--lg"},m.a.createElement("h3",{id:"next"},"Next version (Unreleased)"),m.a.createElement("p",null,"Here you can find the documentation for work-in-process unreleased version."),m.a.createElement("table",null,m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",null,s.label),m.a.createElement("td",null,m.a.createElement(n.a,{to:s.path},"Documentation")),m.a.createElement("td",null,m.a.createElement("a",{href:i+"/blob/master/CHANGELOG.md"},"Release Notes")))))),m.a.createElement("div",{className:"margin-bottom--lg"},m.a.createElement("h3",{id:"latest"},"Latest version (Stable)"),m.a.createElement("p",null,"Here you can find the documentation for current released version."),m.a.createElement("table",null,m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",null,a.label),m.a.createElement("td",null,m.a.createElement(n.a,{to:a.path},"Documentation")),m.a.createElement("td",null,m.a.createElement("a",{href:i+"/blob/master/CHANGELOG.md"},"Release Notes")))))),c.length>0&&m.a.createElement("div",{className:"margin-bottom--lg"},m.a.createElement("h3",{id:"archive"},"Past versions (Not maintained anymore)"),m.a.createElement("p",null,"Here you can find documentation for previous versions of Docusaurus."),m.a.createElement("table",null,m.a.createElement("tbody",null,c.map((function(e){return m.a.createElement("tr",{key:e.name},m.a.createElement("th",null,e.label),m.a.createElement("td",null,m.a.createElement(n.a,{to:e.path},"Documentation")),m.a.createElement("td",null,m.a.createElement("a",{href:i+"/blob/master/CHANGELOG.md"},"Release Notes")))})))))))}}}]);