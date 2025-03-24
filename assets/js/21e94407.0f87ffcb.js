"use strict";(self.webpackChunkkotli_docs=self.webpackChunkkotli_docs||[]).push([[2317],{5711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(4848),r=n(8453);const a={sidebar_position:2,title:"Get started"},i=void 0,s={id:"engine/get_started",title:"Get started",description:"To get started with Kotli, ensure that the next Maven repository is added to your project:",source:"@site/docs/engine/get_started.md",sourceDirName:"engine",slug:"/engine/get_started",permalink:"/kotli/engine/get_started",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Get started"},sidebar:"tutorialSidebar",previous:{title:"Concept",permalink:"/kotli/engine/concept"},next:{title:"Architecture",permalink:"/kotli/engine/architecture"}},d={},l=[];function c(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["To get started with ",(0,o.jsx)(t.strong,{children:"Kotli"}),", ensure that the next Maven repository is added to your project:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:'dependencyResolutionManagement {\n    repositories {\n        maven { url "https://us-maven.pkg.dev/kotlitecture/kotli-maven" }\n    }\n}\n'})}),"\n",(0,o.jsx)(t.admonition,{title:"\xa0",type:"info",children:(0,o.jsx)(t.p,{children:"Later, all libraries can be migrated to the Maven Central repository, making this step obsolete."})}),"\n",(0,o.jsxs)(t.p,{children:["Then add ",(0,o.jsx)(t.strong,{children:"Kotli"})," to the module where you\u2019d like to use it."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:'dependencies {\n    // engine (required)\n    implementation("com.kotlitecture.kotli:kotli-engine:0.3.9")\n    \n    // android application template (optional)\n    implementation("com.kotlitecture.kotli:template-android-compose:0.2.5")\n    \n    // backend spring boot template (optional)\n    implementation("com.kotlitecture.kotli:template-backend-spring-boot:0.0.28")\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Once done, verify that dependencies are available in the classpath and can be used to generate templates."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:'// Init registry\nval androidProcessor = AndroidComposeTemplateProcessor() // android application template processor\nval backendProcessor = SpringBootTemplateProcessor() // backend spring boot template processor\nval templateRegistry = DefaultTemplateRegistry(androidProcessor, backendProcessor)\n\n// Define generator\nval templateGenerator = PathOutputGenerator(\n    output = File("my-templates").toPath().toAbsolutePath(),\n    registry = templateRegistry,\n)\n\n// Generate android application template\ntemplateGenerator.generate(\n    Layer(\n        processorId = androidProcessor.getId(),\n        namespace = "my.app.android",\n        name = "my-android-app",\n        features = listOf()\n    )\n)\n\n// Generate backend spring boot template\ntemplateGenerator.generate(\n    Layer(\n        processorId = backendProcessor.getId(),\n        namespace = "my.app.backend",\n        name = "my-backend-app",\n        features = listOf()\n    )\n)\n\n// Check that the templates are generated under the root folder named `my-templates`\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var o=n(6540);const r={},a=o.createContext(r);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);