"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[9032],{78847:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var a=i(74848),r=i(28453);const t={},s="CX-0139 Information as a Service - External Data Provider  v1.0.0",o={id:"standards/CX-0139-InformationasaServiceExternalDataProvider/CX-0139-InformationasaServiceExternalDataProvider",title:"CX-0139 Information as a Service - External Data Provider  v1.0.0",description:"ABSTRACT",source:"@site/docs/standards/CX-0139-InformationasaServiceExternalDataProvider/CX-0139-InformationasaServiceExternalDataProvider.md",sourceDirName:"standards/CX-0139-InformationasaServiceExternalDataProvider",slug:"/standards/CX-0139-InformationasaServiceExternalDataProvider/",permalink:"/docs/next/standards/CX-0139-InformationasaServiceExternalDataProvider/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0138 Use Case Behaviour Twin Endurance Estimator v1.0.1",permalink:"/docs/next/standards/CX-0138-UseCaseBehaviourTwinEnduranceEstimator/"},next:{title:"CX-0141 Use Case Behaviour Twin Health Indicator v1.0.0",permalink:"/docs/next/standards/CX-0141-HealthIndicatorUseCase/"}},d={},l=[{value:"ABSTRACT",id:"abstract",level:2},{value:"FOR WHOM IS THE STANDARD DESIGNED",id:"for-whom-is-the-standard-designed",level:2},{value:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD",id:"comparison-with-the-previous-version-of-the-standard",level:2},{value:"1 INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT AND ARCHITECTURE FIT",id:"12-context-and-architecture-fit",level:3},{value:"1.3 CONFORMANCE AND PROOF OF CONFORMITY",id:"13-conformance-and-proof-of-conformity",level:3},{value:"1.4 EXAMPLES",id:"14-examples",level:3},{value:"1.5 TERMINOLOGY",id:"15-terminology",level:3},{value:"2 MAIN CONTENT",id:"2-main-content",level:2},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"cx-0139-information-as-a-service---external-data-provider--v100",children:"CX-0139 Information as a Service - External Data Provider  v1.0.0"}),"\n",(0,a.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,a.jsx)(n.p,{children:"Catena-X as an open and collaborative Data-Ecosystem and the current Operating Model defines Data Provider and Data Consumer as Members of an existing Value Chain, providing and consuming Operative Data necessary for their Business Relation.\nBusiness Application Provider are running Services, enabling and supporting these Business Processes and Collaboration, the integrated Information-Sharing is immanent and not a separate Commercial Subject. These Services are related to specific Use Cases and Standards defined in the Catena-X Framework.\nBeside and beyond these kinds of sharing of Operative Data, Businesses need many Third-Party Information e.g., Material, Business Partner, Standards, Environment, Prices etc..., as well as Automotive Value Chain Processes (reflected in Catena-X Use Cases) need Third Party Information.\nThese are Information collected, refined (evaluated, qualified, analysed, transformed etc.) and provided by Third-Party Information Providers (Information aaS). The Source of this Information resides outside the Catena-X Ecosystem, the Information aaS-Provider has a Commercial Model for this Service.\nFor Information from inside the Catena-X Ecosystem the Standards are defined in existing and future Use Cases.\nInformation from outside the Catena-X Ecosystem is not covered by existing Standards and is matter to this Standard."}),"\n",(0,a.jsx)(n.h2,{id:"for-whom-is-the-standard-designed",children:"FOR WHOM IS THE STANDARD DESIGNED"}),"\n",(0,a.jsx)(n.p,{children:"See Chapter 1.1. Audience and Scope"}),"\n",(0,a.jsx)(n.h2,{id:"comparison-with-the-previous-version-of-the-standard",children:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD"}),"\n",(0,a.jsx)(n.p,{children:"Not applicable"}),"\n",(0,a.jsx)(n.h2,{id:"1-introduction",children:"1 INTRODUCTION"}),"\n",(0,a.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This Standard is relevant for the following audience:"}),"\n",(0,a.jsx)(n.p,{children:"Core Service Provider\nData Provider / Consumer\nBusiness Application Provider"}),"\n",(0,a.jsx)(n.p,{children:"The Scope of this Standard is to enable Third-Party Information Provider to deliver Data from outside Catena-X inside Catena-X. This Standard is generic to every Use Case and qualifies Information aaS Provider as a potential Data Provider for a Use Case defined Business Application. The Data can be delivered only to a specific Use Case within Catena-X, realised in an certified Business Application.\nBy this way the Standard enables Third-Party Information Provider to deliver Data from outside Catena-X inside Catena-X and at the same time limits Data Delivery to existing Use Cases, avoiding Violations or Bypasses of existing Standards and Regulations within Catena-X. For this reason the Business Application Provider and the Third-Party Information Party Provider have a special responsibility based on this standard. The Business Application Provider is responsible for data governance with respect to Catena-X standards for the respective Use Case and Business Application. Both Business Application Provider and Third-Party Information Provider are responsible to respect existing license agreements that may be related to the provisioned data.\nNot in Scope of this Standard is a Data Provider who deliver data from inside Catena-X to a Data Consumer inside Catena-X, this is regulated e.g., with CX-0007 Process Specification Minimal Data Provider Service Offering v1.0.2.\nNot in Scope of this Standard is a Data Provider who deliver Data from inside Catena-X to a Data Consumer outside Catena-X, this Use Case requieres separate Regulation."}),"\n",(0,a.jsx)(n.h3,{id:"12-context-and-architecture-fit",children:"1.2 CONTEXT AND ARCHITECTURE FIT"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:'The Establishment of various Industry Networks (such as Catena-X) has increased the need to establish Data Standards across the entire Automotive Value Chain and to promote industry-wide, international Data Exchange. This Data Exchange is primarily focused on Operative Data immanent to the entire Value Chain and necessary for Business Processes and Relations.\nBeside and beyond these kinds of sharing of Operative Data, Businesses need many Third-Party Information e.g., Material, Business Partner, Standards, Environment, Prices etc..., as well as Automotive Value Chain Processes (reflected in Catena-X Use Cases) need Third-Party Information.\nThese are Information collected, refined (evaluated, qualified, analysed, transformed etc.) and provided by Third-Party Information Providers (Information aaS). The Source of this Information resides outside the Catena-X Ecosystem, the Information aaS-Provider has a Commercial Model for this Service.\nThe provision of any information from a Third-Party Information Provider can\xb4t bypass existing standards and regulations from the entire Catena-X framework related to the given Catena-X Use Case.Therefore a Third-Party Information Provider can\xb4t provide Infromation as it is, but only to a certified Business Application Provider for a certified Business Application.\nThe Third-Party Information Provider must be certified for this Standard to provide Data. The Business Application Provider and the Business Application must be certified for the Standards related to the relevant Use Case.\nExample:\nFor the Use Case Country Risk in BPDM Value-Added Services the Business Application Provider who provides the Service and the Business Application must be cerified for "CX-0081 Country Risk API". The Third-Party Information Provider, who provides Information as a Service to this Business Application Provider and the Business Application, must be certified for this new Standard "CX-0139 Information as a Service - External Data Provider"'}),"\n",(0,a.jsx)(n.h3,{id:"13-conformance-and-proof-of-conformity",children:"1.3 CONFORMANCE AND PROOF OF CONFORMITY"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,a.jsxs)(n.p,{children:["The key words ",(0,a.jsx)(n.strong,{children:"MAY"}),", ",(0,a.jsx)(n.strong,{children:"MUST"}),", ",(0,a.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,a.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,a.jsx)(n.strong,{children:"RECOMMENDED"}),", ",(0,a.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,a.jsx)(n.strong,{children:"SHOULD"})," and ",(0,a.jsx)(n.strong,{children:"SHOULD NOT"})," in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here."]}),"\n",(0,a.jsx)(n.p,{children:"All participants and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,a.jsx)(n.h3,{id:"14-examples",children:"1.4 EXAMPLES"}),"\n",(0,a.jsx)(n.p,{children:'For the Use Case Country Risk in BPDM Value-Added Services the Business Application Provider who provides the Service and the Business Application must be cerified for "CX-0081 Country Risk API". The Third-Party Information Provider, who provides Information as a Service to this Business Application Provider and the Business Application, must be certified for this new Standard "CX-0139 Information as a Service - External Data Provider"'}),"\n",(0,a.jsx)(n.h3,{id:"15-terminology",children:"1.5 TERMINOLOGY"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Third-Party Information Provider\nA Third-Party Information Provider collect, refine (evaluate, qualify, analyse, transforme etc.) differentkind of Information (e.g., Material, Weather, Business Partner, Prices etc.) and provide this Information to a Data Consumer (Information aaS).\nThe Source of this Information resides outside as well as inside the Catena-X Ecosystem, the Information aaS-Provider has a Commercial Model for this Service."}),"\n",(0,a.jsx)(n.p,{children:"External Data Provider\nA External Data Provider is a Third-Party Information Provider who provides Information where the Source of this Information resides outside the Catena-X Ecosystem."}),"\n",(0,a.jsx)(n.h2,{id:"2-main-content",children:"2 MAIN CONTENT"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["This standard differentiates between two roles: Requirements for the ",(0,a.jsx)(n.code,{children:"Business Application Provider"})," who receives and shares Third-Party Information and their Use Cases and their ",(0,a.jsx)(n.code,{children:"Third-Party Information Provider"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["To get certified as a ",(0,a.jsx)(n.code,{children:"Business Application Provider"})," who receives and shares Third-Party Information, the Business Application Provider MUST:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"document that he receives Information for a certified Business Application."}),"\n",(0,a.jsx)(n.li,{children:"document that he receives Information from a certified Third-Party Information Provider"}),"\n",(0,a.jsx)(n.li,{children:"document the license agreement, that he is entitled and by what terms, for the received and (through the Catena-X data ecosystem) shared Information."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To get certified as a ",(0,a.jsx)(n.code,{children:"Third-Party Information Provider"}),", the Third-Party Information Provider MUST:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"document that he provides Information to a certified Business Application Provider and for a certified Business Application."}),"\n",(0,a.jsx)(n.li,{children:"document the license agreement, that he is entitled and by what terms, for the provided Information if applicable. If the provided Information is publicly available without a third-party agreement a license agreement is not applicable."}),"\n",(0,a.jsx)(n.li,{children:"Third-Party Information Provider MUST NOT be certified for existing Standards for the related Use Case in his role as a Third-Party Information Provider."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,a.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,a.jsx)(n.p,{children:"Not applicable"}),"\n",(0,a.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Not applicable"}),"\n",(0,a.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Not applicable"}),"\n",(0,a.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,a.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,a.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,a.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var a=i(96540);const r={},t=a.createContext(r);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);