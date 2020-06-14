(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(47),a=n(207),o=(n(0),n(208)),i=n(210),c={id:"editor",title:"<Editor />",sidebar_label:"<Editor />"},l={id:"version-0.1.0-beta.6/api/editor",title:"<Editor />",description:"Creates the context that stores the editor state.",source:"@site/versioned_docs/version-0.1.0-beta.6/api/Editor.md",permalink:"/r/docs/0.1.0-beta.6/api/editor",version:"0.1.0-beta.6",sidebar_label:"<Editor />",sidebar:"version-0.1.0-beta.6/docs",previous:{title:"UserComponent",permalink:"/r/docs/0.1.0-beta.6/api/user-component"},next:{title:"<Frame />",permalink:"/r/docs/0.1.0-beta.6/api/frame"}},s=[{value:"Reference",id:"reference",children:[{value:"Props",id:"props",children:[]}]},{value:"Examples",id:"examples",children:[{value:"The default screen",id:"the-default-screen",children:[]},{value:"Custom render user elements",id:"custom-render-user-elements",children:[]},{value:"Specifying the Drop Indicator colour",id:"specifying-the-drop-indicator-colour",children:[]}]}],d={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.b,{type:"component",mdxType:"Badge"}),Object(o.b)("p",null,"Creates the context that stores the editor state."),Object(o.b)("h2",{id:"reference"},"Reference"),Object(o.b)("h3",{id:"props"},"Props"),Object(o.b)(i.a,{items:[["resolver","Map<String, React.ComponentType>","A map of User Components that will be used in the editor"],["enabled?","boolean","Optional. If set to false, all editing capabilities will be disabled"],["indicator?",'Record<"success" | "error", String>',"Optional. The colour to use for the drop indicator. The colour set in 'success' will be used when the indicator shows a droppable location; otherwise the colour set in 'error' will be used."],["onRender?","React.ComponentType<{element: React.ReactElement}>","Optional. Specify a custom component to render every User Element in the editor."]],mdxType:"API"}),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"the-default-screen"},"The default screen"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{9,10,16,17}","{9,10,16,17}":!0}),'import {Editor, Frame, Canvas} from "@craftjs/core";\n\nconst App = () => {\n  return (\n    <div>\n      <h2>My App!</h2>\n      <Editor>\n        <h2>My Page Editor</h2>\n        <Frame> \n          <Canvas is={Container}> // defines the Root Node\n            <h2>Drag me around</h2>\n            <MyComp text="You can drag me around too" />\n            <Canvas is="div" style={{background: "#333" }}>\n              <p>Same here</p>\n            </Canvas>\n          </Canvas>\n        </Frame>\n      </Editor>\n    </div>\n  )\n}\n')),Object(o.b)("h3",{id:"custom-render-user-elements"},"Custom render user elements"),Object(o.b)("p",null,"By default, every user element is rendered just as it is. However, if you'd like to, for example, wrap every user element inside a ",Object(o.b)("inlineCode",{parentName:"p"},"div"),", you can do so through the ",Object(o.b)("inlineCode",{parentName:"p"},"onRender")," prop:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{3-9,13}","{3-9,13}":!0}),'import {Editor} from "@craftjs/core";\n\nconst RenderNode = ({element}) => {\n  return (\n    <div style={{background: "#000", padding: "5px" }}>\n      {element}\n    </div>\n  )\n}\n\nconst App = () => {\n  return (\n    <Editor onRender={RenderNode}>\n      <Frame resolver={{Hero}}>\n        <Canvas>\n          <h1>Hi</h1>\n          <Hero />\n        </Canvas>\n      </Frame>\n    </Editor>\n  )\n}\n')),Object(o.b)("p",null,"In the above example, every user element will now be wrapped in a black ",Object(o.b)("inlineCode",{parentName:"p"},"div"),"."),Object(o.b)("h3",{id:"specifying-the-drop-indicator-colour"},"Specifying the Drop Indicator colour"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{6-9}","{6-9}":!0}),"import {Editor} from \"@craftjs/core\";\n\nconst App = () => {\n  return (\n    <Editor\n      indicator={{\n        'success': '#2d9d78', // green\n        'error': '#e34850' // red\n      }}\n    >\n      <Frame resolver={{Hero}}>\n        <Canvas>\n          <h1>Hi</h1>\n          <Hero />\n        </Canvas>\n      </Frame>\n    </Editor>\n  )\n}\n")))}p.isMDXComponent=!0},207:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},209:function(e,t,n){"use strict";var r=n(0),a=n(48);t.a=function(){return Object(r.useContext)(a.a)}},210:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=function(e){var t=e.item,n=t[0],r=t.length>1&&"string"==typeof t[1]&&t[1],o=3==t.length?"string"==typeof t[2]&&t[2]:4==t.length&&"string"==typeof t[3]&&t[3],c=t.length>1&&Array.isArray(t[t.length-1])&&t[t.length-1];return a.a.createElement("li",{className:"api-item"},a.a.createElement("div",null,n&&a.a.createElement("code",{className:"api-title"},n),r&&a.a.createElement("strong",{className:"api-type"},r)),o&&a.a.createElement("div",{className:"api-description",dangerouslySetInnerHTML:{__html:o}}),c&&a.a.createElement(i,{items:c}))},i=function(e){var t=e.items;return a.a.createElement("ul",null,t&&t.map((function(e,t){return a.a.createElement(o,{item:e,key:t})})))},c=function(e){var t,n=e.type,r=e.title,o=void 0===r||r,i=e.noMargin,c=void 0===i||i;switch(n){case"hoc":t="Higher-Order Component";break;default:t=n[0].toUpperCase()+n.substring(1)}return a.a.createElement("div",{className:"badge-wrapper"},a.a.createElement("span",{className:"badge badge-"+n+" "+(o?"badge-title":"")+" "+(c?"badge-no-margin":"")},t))},l=n(209),s=function(e){var t=e.img,n=Object(l.a)().siteConfig.baseUrl;return a.a.createElement("div",{className:"img-wrapper"},a.a.createElement("div",null,a.a.createElement("header",null,a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)),a.a.createElement("img",{src:n+"img/"+t})))};n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"b",(function(){})),n.d(t,"c",(function(){return s}))}}]);