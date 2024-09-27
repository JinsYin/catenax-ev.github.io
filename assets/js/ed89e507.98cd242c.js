"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[6500],{83813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(74848),s=n(28453);const a={sidebar_position:4},r="3. Application Programming Interfaces",o={id:"standards/CX-0143-UseCaseCircularEconomyDigitalProductPassportStandard/CX-0143-API",title:"3. Application Programming Interfaces",description:"This section is normantive",source:"@site/docs/standards/CX-0143-UseCaseCircularEconomyDigitalProductPassportStandard/CX-0143-API.md",sourceDirName:"standards/CX-0143-UseCaseCircularEconomyDigitalProductPassportStandard",slug:"/standards/CX-0143-UseCaseCircularEconomyDigitalProductPassportStandard/CX-0143-API",permalink:"/docs/next/standards/CX-0143-UseCaseCircularEconomyDigitalProductPassportStandard/CX-0143-API",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar_standards",previous:{title:"2. Aspect Models",permalink:"/docs/next/standards/CX-0143-UseCaseCircularEconomyDigitalProductPassportStandard/CX-0143-SEM"},next:{title:"4. Processes",permalink:"/docs/next/standards/CX-0143-UseCaseCircularEconomyDigitalProductPassportStandard/CX-0143-PROCESS"}},c={},d=[{value:"3.1 EDC DATA ASSET STRUCTURE",id:"31-edc-data-asset-structure",level:2},{value:"3.1.1 EDC Data Asset",id:"311-edc-data-asset",level:3},{value:"3.1.2 EDC Policy Structure",id:"312-edc-policy-structure",level:3},{value:"3.1.2.1 Conventions for Use Case Policy in context data exchange",id:"3121-conventions-for-use-case-policy-in-context-data-exchange",level:4},{value:"3.1.2.2 Additional Details regarding Access Policies",id:"3122-additional-details-regarding-access-policies",level:4},{value:"3.1.2.3 Additional Details regarding Usage Policies",id:"3123-additional-details-regarding-usage-policies",level:4},{value:"3.1.3 Contract Definition",id:"313-contract-definition",level:4},{value:"Legal",id:"legal",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"3-application-programming-interfaces",children:"3. Application Programming Interfaces"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This section is normantive"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"31-edc-data-asset-structure",children:"3.1 EDC DATA ASSET STRUCTURE"}),"\n",(0,i.jsxs)(t.p,{children:["The general asset structure ",(0,i.jsx)(t.strong,{children:"MUST"})," follow the ",(0,i.jsx)(t.a,{href:"#211-list-of-standalone-standards",children:"CX-0018"}),".\nExamples are in the official ",(0,i.jsx)(t.a,{href:"https://eclipse-tractusx.github.io/docs-kits/kits/Connector%20Kit/Adoption%20View/connector_kit_adoption_view",children:"Connector Kit"}),".\nThe following subchapters define the specifics for this standard."]}),"\n",(0,i.jsx)(t.h3,{id:"311-edc-data-asset",children:"3.1.1 EDC Data Asset"}),"\n",(0,i.jsxs)(t.p,{children:["The EDC assets for product passports ",(0,i.jsx)(t.strong,{children:"MUST"})," follow the JSON."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "@context": {\n    "edc": "https://w3id.org/edc/v0.0.1/ns/",\n    "cx-common": "https://w3id.org/catenax/ontology/common#",\n    "cx-taxo": "https://w3id.org/catenax/taxonomy#",\n    "dct": "https://purl.org/dc/terms/"\n  },\n  "@type": "Asset",\n  "@id": "{{assetId}}",\n  "properties": {\n    "type": {\n      "@id": "Asset"\n    },\n    "name": "{{asset-name}}",\n    "description": "{{Description}}",\n    "contenttype": "{{type}}"\n  },\n  "dataAddress": {\n    "@type": "DataAddress",\n    "type": "HttpData",\n    "baseUrl": "{{submodel.server.endpoint}}",\n    "proxyQueryParams": "true",\n    "proxyPath": "true",\n    "proxyMethod": "true",\n    "proxyBody": "true"\n  }\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"312-edc-policy-structure",children:"3.1.2 EDC Policy Structure"}),"\n",(0,i.jsxs)(t.p,{children:["A participant mentioned under ",(0,i.jsx)(t.a,{href:"#11-audience--scope",children:"1.1"})," ",(0,i.jsx)(t.strong,{children:"MUST"})," sign the overall\n",(0,i.jsx)(t.a,{href:"https://catenax-ev.github.io/docs/regulatory-framework/governance-framework",children:"Catena-X Terms and Condition"})," as well as the sustainability agreement\n",(0,i.jsx)(t.a,{href:"https://catenax-ev.github.io/docs/regulatory-framework/20000ft/use-case-ce",children:"circular economy framework agreement"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Have a look at example policies ",(0,i.jsx)(t.a,{href:"https://github.com/catenax-eV/cx-odrl-profile/blob/c96b426ded7922f44bdc33bfc5e0bf754031b5e8/example_usage_policy.json",children:"here"}),". A guideline for different use cases profiles has been provided ",(0,i.jsx)(t.a,{href:"https://github.com/catenax-eV/cx-odrl-profile/blob/c96b426ded7922f44bdc33bfc5e0bf754031b5e8/profile.md",children:"here"})]}),"\n",(0,i.jsx)(t.h4,{id:"3121-conventions-for-use-case-policy-in-context-data-exchange",children:"3.1.2.1 Conventions for Use Case Policy in context data exchange"}),"\n",(0,i.jsx)(t.p,{children:"In alignment with our commitment to data sovereignty, a specific framework governing the utilization of data within the Catena-X use cases has been outlined. A set of specific policies on data offering and data usage level detail the conditions under which data may be accessed, shared, and used, ensuring compliance with legal standards."}),"\n",(0,i.jsx)(t.p,{children:"For a comprehensive understanding of the rights, restrictions, and obligations associated with data usage in the Catena-X ecosystem, we refer users to:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["the detailed ",(0,i.jsx)(t.a,{href:"https://github.com/catenax-eV/cx-odrl-profile",children:"ODRL policy repository"}),". This document provides in-depth explanations of the terms and conditions applied to data access and utilization, ensuring that all engagement with our data is conducted responsibly and in accordance with established guidelines."]}),"\n",(0,i.jsxs)(t.li,{children:["the ODRL schema template. This defines how policies used for data sharing/usage should get defined. Those schemas ",(0,i.jsx)(t.strong,{children:"MUST"})," be followed when providing services or apps for data sharing/consuming."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"3122-additional-details-regarding-access-policies",children:"3.1.2.2 Additional Details regarding Access Policies"}),"\n",(0,i.jsx)(t.p,{children:'A Data Provider may tie certain access authorizations ("Access Policies") to its data offers for members of Catena-X  and one or several Data Consumers. By limiting access to certain Participants, Data Provider maintains control over its anti-trust obligations when sharing certain data. In particular, Data Provider may apply Access Policies to restrict access to a particular data offer for only one Participant identified by a specific business partner number:'}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Membership"}),"\n",(0,i.jsx)(t.li,{children:"BPNL"}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"3123-additional-details-regarding-usage-policies",children:"3.1.2.3 Additional Details regarding Usage Policies"}),"\n",(0,i.jsxs)(t.p,{children:["In the context of data usage policies (\u201cUsage Policies\u201d), Participants and related services ",(0,i.jsx)(t.strong,{children:"MUST"})," use the following policy rules:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Use Case Framework (\u201cFrameworkAgreement\u201d), for the Digital Product Pass ",(0,i.jsx)(t.strong,{children:"MUST"})," be the latest circular economy framework agreement contraint provided in the profiles ",(0,i.jsx)(t.a,{href:"https://github.com/catenax-eV/cx-odrl-profile/blob/c96b426ded7922f44bdc33bfc5e0bf754031b5e8/profile.md#frameworkagreement",children:"here"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:['for the Digital Product Passport, Battery Passport and other passports the latest (\u201cUsagePurpose\u201d) for circular economy "dpp" ',(0,i.jsx)(t.strong,{children:"MUST"})," be used. It is defined ",(0,i.jsx)(t.a,{href:"https://github.com/catenax-eV/cx-odrl-profile/blob/c96b426ded7922f44bdc33bfc5e0bf754031b5e8/profile.md#usagepurpose",children:"here"})," in the latest policy profile contraints."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, respective usage policies ",(0,i.jsx)(t.strong,{children:"MAY"})," include the following policy rule:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Reference Contract (\u201cContractReference\u201d)."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Details on  namespaces and ODLR policy rule values to be used for the above-mentioned types are provided via the ",(0,i.jsx)(t.a,{href:"https://github.com/catenax-eV/cx-odrl-profile",children:"ODRL policy repository"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"313-contract-definition",children:"3.1.3 Contract Definition"}),"\n",(0,i.jsxs)(t.p,{children:["Contract definitions of data providers ",(0,i.jsx)(t.strong,{children:"MUST"})," follow this structure (also defined in ",(0,i.jsx)(t.a,{href:"#211-list-of-standalone-standards",children:"CX-0018"}),"):"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://w3id.org/edc/v0.0.1/ns/"\n  },\n  "@id": "{{ContractDefinitionId}}",\n  "@type": "ContractDefinition",\n  "accessPolicyId": "{{AccessPolicyId}}",\n  "contractPolicyId": "{{ContractPolicyId}}",\n  "assetsSelector": {\n    "@type": "CriterionDto",\n    "operandLeft": "https://w3id.org/edc/v0.0.1/ns/id",\n    "operator": "=",\n    "operandRight": "{{AssetId}}"\n  }\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"legal",children:"Legal"}),"\n",(0,i.jsxs)(t.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,i.jsx)(t.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);