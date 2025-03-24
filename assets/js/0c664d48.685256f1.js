"use strict";(self.webpackChunkkotli_docs=self.webpackChunkkotli_docs||[]).push([[1324],{6801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(4848),r=n(8453);const s={sidebar_position:4,title:"Template overview"},o=void 0,l={id:"engine/template_overview",title:"Template overview",description:"Each Kotli Template is a self-contained Kotlin artifact that encompasses all the necessary metadata for presentation and facilitates the multistep process of generating an output structure.",source:"@site/docs/engine/template_overview.md",sourceDirName:"engine",slug:"/engine/template_overview",permalink:"/kotli/engine/template_overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Template overview"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/kotli/engine/architecture"},next:{title:"Create own template",permalink:"/kotli/engine/template_creation"}},a={},c=[{value:"Template",id:"template",level:2},{value:"Processor",id:"processor",level:2},{value:"1. TemplateProcessor",id:"1-templateprocessor",level:3},{value:"2. FeatureProvider",id:"2-featureprovider",level:3},{value:"3. FeatureProcessor",id:"3-featureprocessor",level:3},{value:"4. FileRule",id:"4-filerule",level:3},{value:"5. TemplateContext",id:"5-templatecontext",level:3},{value:"Examples",id:"examples",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Each ",(0,i.jsx)(t.strong,{children:"Kotli Template"})," is a self-contained Kotlin artifact that encompasses all the necessary metadata for presentation and facilitates the multistep process of generating an output structure."]}),"\n",(0,i.jsxs)(t.p,{children:["It comprises ",(0,i.jsx)(t.code,{children:"Template"})," and ",(0,i.jsx)(t.code,{children:"Processor"}),"."]}),"\n",(0,i.jsx)(t.mermaid,{value:"graph TD\n   P[Processor]\n   T[Template]\n   KT[Kotli Template]\n   \n   T --\x3e KT\n   P --\x3e KT"}),"\n",(0,i.jsx)(t.h2,{id:"template",children:"Template"}),"\n",(0,i.jsxs)(t.p,{children:['It serves as the initial blueprint for a project template structure without any limitations.\nThe structure can be written in any language, and technically, it doesn\'t even have to be a "project".\nThe crucial aspect is that this template is utilized by the ',(0,i.jsx)(t.code,{children:"Processor"})," to generate the resulting structure."]}),"\n",(0,i.jsx)(t.admonition,{title:"\xa0",type:"tip",children:(0,i.jsx)(t.p,{children:"It is recommended for this structure to be a functional example of a project, importable into an IDE as-is for testing and modification purposes."})}),"\n",(0,i.jsx)(t.h2,{id:"processor",children:"Processor"}),"\n",(0,i.jsx)(t.p,{children:"The initial blueprint template can include many dependencies and implement a ton of functionality, which usually is not needed by everyone."}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Processor"})," serves two goals:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Include only the required features into the output structure."}),"\n",(0,i.jsxs)(t.li,{children:["Provide any third-party solution that utilizes the artifact with all the required metadata describing the ",(0,i.jsx)(t.code,{children:"processor"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Let's take a look at some existing ",(0,i.jsx)(t.code,{children:"processors"})," for a better understanding of the whole mechanics."]}),"\n",(0,i.jsx)(t.mermaid,{value:'graph TD\n   class TemplateProcessor abstract\n   class FeatureProcessor abstract\n   class FeatureProvider abstract\n   Layer\n   TG["Template Generator"]\n   TS["TemplateContext"]\n   OS["Output Structure"]\n   subgraph TemplateProcessor\n       direction TB\n       FP1["Feature Provider 1"]\n       FPN["Feature Provider N"]\n       P1["Feature Processor 1"]\n       P2["Feature Processor 2"]\n       PN["Feature Processor N"]\n       R1["Rule 1"]\n       R2["Rule 2"]\n       R3["Rule 3"]\n       R4["Rule 4"]\n       R5["Rule 5"]\n       R6["Rule 6"]\n       RN["Rule N"]\n       FP1 --\x3e P1\n       FP1 --\x3e P2\n       FPN --\x3e PN\n       P1 --\x3e R1\n       P1 --\x3e R2\n       P2 --\x3e R3\n       P2 --\x3e R4\n       PN --\x3e R5\n       PN --\x3e R6\n       PN --\x3e RN\n       R1 --\x3e |apply|TS\n       R2 --\x3e |apply|TS\n       R3 --\x3e |apply|TS\n       R4 --\x3e |apply|TS\n       R5 --\x3e |apply|TS\n       R6 --\x3e |apply|TS\n       RN --\x3e |apply|TS\n   end\n\n    Layer --\x3e TemplateProcessor\n    TS --\x3e TG\n    TG --\x3e OS'}),"\n",(0,i.jsx)(t.h3,{id:"1-templateprocessor",children:"1. TemplateProcessor"}),"\n",(0,i.jsxs)(t.p,{children:["Any external usage of the ",(0,i.jsx)(t.code,{children:"Kotli Template"})," occurs through its processor only."]}),"\n",(0,i.jsxs)(t.p,{children:["A typical processor is an implementation of the ",(0,i.jsx)(t.code,{children:"BaseFeatureProcessor"})," class."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'class AndroidComposeTemplateProcessor : BaseTemplateProcessor() {\n\n    override fun getId(): String = "template-android-compose"\n    override fun getType(): LayerType = LayerTypes.Android\n    override fun getWebUrl(): String = "https://github.com/realAleksha/template-android-compose"\n\n    override fun createProviders(): List<FeatureProvider> = listOf(\n        L10NProvider(),\n        NavigationProvider(),\n        SplashProvider(),\n        ThemeProvider(),\n        ...\n    }\n    \n    override fun processBefore(state: TemplateState) {\n        state.onApplyRules(\n            "app/build.gradle",\n            ReplaceMarkedText(\n                text = "kotli.app",\n                marker = "{applicationId}",\n                replacer = state.layer.namespace,\n                singleLine = true\n            )\n        )\n        ...\n    }\n    \n    override fun processAfter(state: TemplateState) {\n        state.onApplyRules(\n            "app/src/main/kotlin",\n            RenamePackage("app", state.layer.namespace)\n        )\n        ...\n    }\n\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Each implementation is responsible for overriding the given methods:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"getId()"})," - Defines the unique processor id. This id must be unique across all registered processors in the classpath."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"getType()"})," - Clarifies the type of the template and is used for a better understanding of its purpose."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"getWebUrl()"})," - Mostly an URL to the repository with the source codes of the template implementation. Although it's not required to link source codes, we prioritize open-source and its collaborative possibilities."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"createProviders()"})," - This is the main method. It registers all providers responsible for manipulating the blueprint template to form the required output architecture."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"processBefore()"})," - Used to apply some ",(0,i.jsx)(t.code,{children:"rules"})," to the output structure before it is delegated to providers."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"processAfter()"})," - Used to apply some ",(0,i.jsx)(t.code,{children:"rules"})," to the output structure after it is processed by providers."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"2-featureprovider",children:"2. FeatureProvider"}),"\n",(0,i.jsx)(t.p,{children:"Feature providers are used to group different implementations of the same functionality by different vendors."}),"\n",(0,i.jsx)(t.p,{children:"Examples:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Your project requires the use of analytics events, and you want to log such events into one or multiple different services (Google Analytics, Amplitude, AppsFlyer)."}),"\n",(0,i.jsx)(t.li,{children:"Your project requires publication in different distribution channels (Maven, Google Artifact Registry, AWS CodeArtifact, etc.)."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In both scenarios, you can use either one or multiple services (",(0,i.jsx)(t.code,{children:"processors"}),"). Depending on the scenario, you will get all the required technical solutions to either log events into multiple systems using one common method or deploy artifacts into several destinations using one generated pipeline."]}),"\n",(0,i.jsx)(t.admonition,{title:"\xa0",type:"tip",children:(0,i.jsx)(t.p,{children:"FeatureProvider is responsible to group multiple similar services, present them to the user, and generate all required artifacts, making it possible to operate with the services as one."})}),"\n",(0,i.jsxs)(t.p,{children:["A typical feature provider is an implementation of the ",(0,i.jsx)(t.code,{children:"BaseFeatureProvider"})," class."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'class DistributionProvider : BaseFeatureProvider() {\n\n    override fun getId(): String = ID\n    override fun isMultiple(): Boolean = true\n    override fun getType(): FeatureType = FeatureTypes.DevOps\n\n    override fun createProcessors(): List<FeatureProcessor> = listOf(\n        FirebaseDistributionProcessor(),\n        GooglePlayDistributionProcessor()\n    )\n\n    companion object {\n        const val ID = "distribution"\n    }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Each implementation is responsible for overriding the given methods:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"getId"})," - Unique identifier of the provider. It must be unique only across other providers of the ",(0,i.jsx)(t.code,{children:"template processor"})," it is registered in."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"isMultiple"})," - Instructs the ",(0,i.jsx)(t.code,{children:"Template Processor"})," if it is possible to use several ",(0,i.jsx)(t.code,{children:"feature processors"})," in the output structure."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"getType"})," - Clarifies the type of the provider for a better understanding of its purpose."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"createProcessors"})," - Registers all ",(0,i.jsx)(t.code,{children:"feature processors"})," of the given provider."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"3-featureprocessor",children:"3. FeatureProcessor"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Feature Processor"})," is responsible for the inclusion or exclusion of the feature it implements in the generated template.\nA ",(0,i.jsx)(t.code,{children:"feature"})," is any atomic integration, technical solution, or business flow that can be added to a layer during its configuration in ",(0,i.jsx)(t.code,{children:"Kotli"}),".\nEach feature should be self-descriptive, allowing it to be presented to the user with an ",(0,i.jsx)(t.code,{children:"icon"}),", ",(0,i.jsx)(t.code,{children:"title"}),", ",(0,i.jsx)(t.code,{children:"description"}),", ",(0,i.jsx)(t.code,{children:"links"}),", and any ",(0,i.jsx)(t.code,{children:"other metadata"})," required to understand its value and purpose.\nThe primary advantage of a feature is to provide a ready-to-use solution with minimal configuration required (zero configuration is the goal)."]}),"\n",(0,i.jsxs)(t.p,{children:["A typical feature processor is an implementation of the ",(0,i.jsx)(t.code,{children:"BaseFeatureProcessor"})," class."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'class FirebaseDistributionProcessor : BaseFeatureProcessor() {\n\n    override fun getId(): String = ID\n    override fun getWebUrl(state: TemplateState): String = "https://firebase.google.com/docs/app-distribution"\n    override fun getIntegrationUrl(state: TemplateState): String = "https://firebase.google.com/docs/app-distribution/android/distribute-gradle"\n\n    override fun dependencies(): List<Class<out FeatureProcessor>> = listOf(\n        GoogleServicesProcessor::class.java,\n        FirebaseProcessor::class.java\n    )\n\n    override fun doApply(state: TemplateState) {\n        state.onApplyRules("app/build.gradle",\n            CleanupMarkedLine("{firebase-distribution}"),\n            CleanupMarkedBlock("{firebase-distribution-debug}"),\n            CleanupMarkedBlock("{firebase-distribution-staging}")\n        )\n        ...\n    }\n\n    override fun doRemove(state: TemplateState) {\n        state.onApplyRules("app/build.gradle",\n            RemoveMarkedLine("{firebase-distribution}"),\n            RemoveMarkedBlock("{firebase-distribution-debug}"),\n            RemoveMarkedBlock("{firebase-distribution-staging}")\n        )\n        ...\n    }\n\n    companion object {\n        const val ID = "firebase-distribution"\n    }\n\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Each implementation is responsible for overriding the given methods:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"getId"})," - Unique identifier of the processor. It must be unique only across other processors of the ",(0,i.jsx)(t.code,{children:"template processor"})," it is used in."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"getWebUrl"})," - Any official URL of the underlying functionality for a better understanding of its purpose by the user."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"getIntegrationUrl"})," - Any public URL of the integration guide for this feature. This guide is not required when the feature is included. Instead, it is just a knowledge base of the sources used to integrate the feature."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"dependencies"})," - If the feature has any dependencies on other features, the processor will apply them first to the prepared structure. The dependencies must also be registered in the ",(0,i.jsx)(t.code,{children:"template processor"})," through ",(0,i.jsx)(t.code,{children:"feature providers"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"doApply"})," - When the feature is selected by the user, this method is used to apply some ",(0,i.jsx)(t.code,{children:"rules"})," to the files affected by the feature in the blueprint template. It is not required that such files exist in the original template."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"doRemove"})," - When the feature is not selected by the user, this method will be called to ",(0,i.jsx)(t.code,{children:"cleanup"})," the template from any changes specific to the feature only."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"4-filerule",children:"4. FileRule"}),"\n",(0,i.jsx)(t.p,{children:"Any rule to be applied to files from the blueprint template during the generation of the output structure."}),"\n",(0,i.jsxs)(t.p,{children:["A typical rule is an implementation of the ",(0,i.jsx)(t.code,{children:"FileRule"})," class."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"class CleanupMarkedLine(\n    private val marker: String,\n    private val singleLine: Boolean = false\n) : FileRule() {\n\n    override fun doApply(file: TemplateFile) {\n        val lines = file.lines\n        lines.forEachIndexed { index, line ->\n            if (isMarked(file, line, marker)) {\n                lines[index] = cleanup(file, line)\n                if (singleLine) return\n            }\n        }\n    }\n\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Each file rule requires implementing only one method, ",(0,i.jsx)(t.code,{children:"doApply"}),". This method is called during the final stage of the generation phase."]}),"\n",(0,i.jsx)(t.admonition,{title:"\xa0",type:"tip",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FileRule"})," is not bound to files it modifies."]}),"\n",(0,i.jsx)(t.li,{children:"It is not required that files exist in the original template."}),"\n",(0,i.jsx)(t.li,{children:"It is possible to implement any rule with any underlying template engine to process the input files."}),"\n",(0,i.jsx)(t.li,{children:"The engine allows applying different rules to the same files. In such cases, each subsequent rule will operate with the modified version of the file."}),"\n"]})}),"\n",(0,i.jsx)(t.h3,{id:"5-templatecontext",children:"5. TemplateContext"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"TemplateProcessor"})," does not directly manipulate the output structure. Instead, it creates rules to be applied during the preparation phase."]}),"\n",(0,i.jsx)(t.admonition,{title:"\xa0",type:"tip",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"TemplateContext"})," serves to accumulate the rules to be applied to the blueprint template during the generation phase."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'...\nstate.onApplyRules("*AnalyticsSource*", RemoveFile())\n...\nstate.onApplyRules("app/src/main/kotlin/app/datasource/analytics/firebase", RemoveFile())\n...\nstate.onApplyRules("app/build.gradle", CleanupMarkedLine("{baselineprofile}"), CleanupMarkedBlock("{baselineprofile-config}"))\n...\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Each ",(0,i.jsx)(t.strong,{children:"TemplateProcessor"})," and any subsequent ",(0,i.jsx)(t.strong,{children:"FeatureProcessor"})," is responsible for applying rules to the passed context by calling the method ",(0,i.jsx)(t.code,{children:"onApplyRules"}),".\nThis method accepts two parameters:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"contextPath"})," - The path to the file (or files) relative to the root folder of the blueprint template."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"rules"})," - The list of rules to be applied to the files found by the provided ",(0,i.jsx)(t.code,{children:"contextPath"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{title:"\xa0",type:"info",children:[(0,i.jsxs)(t.p,{children:["The parameter ",(0,i.jsx)(t.code,{children:"contextPath"})," can be defined as a mask to apply the given rules to multiple files.\nIf it contains wildcard characters such as ",(0,i.jsx)(t.code,{children:"*"})," or ",(0,i.jsx)(t.code,{children:"?"}),", it is considered a mask.\nExamples:"]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"*Source*"})," - selects any file from the template that has ",(0,i.jsx)(t.code,{children:"Source"})," in the middle."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"*Source??"})," - selects any file from the template that has ",(0,i.jsx)(t.code,{children:"Source"})," in the middle and ends with two additional symbols."]}),"\n"]})]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"It is recommended to check how existing templates look for a better understanding of the engine concept. Here are some examples:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Compose Multiplatform Application - ",(0,i.jsx)(t.a,{href:"https://github.com/realAleksha/template-multiplatform-compose",children:"https://github.com/realAleksha/template-multiplatform-compose"})]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(6540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);