"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[1676],{13380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(74848),a=t(28453);const s={},o="CX-0043 Aspect Model: Part As Planned v1.0.1",r={id:"standards/CX-0043-AspectModelPartAsPlanned/CX-0043-AspectModelPartAsPlanned",title:"CX-0043 Aspect Model: Part As Planned v1.0.1",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0043-AspectModelPartAsPlanned/CX-0043-AspectModelPartAsPlanned.md",sourceDirName:"standards/CX-0043-AspectModelPartAsPlanned",slug:"/standards/CX-0043-AspectModelPartAsPlanned/",permalink:"/docs/standards/CX-0043-AspectModelPartAsPlanned/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0042 Aspect Model SingleLevelBomAsPlanned v2.0.0",permalink:"/docs/standards/CX-0042-AspectModelSingleLevelBoMasPlanned/"},next:{title:"CX-0044 ECLASS v1.0.2",permalink:"/docs/standards/CX-0044-ECLASS/"}},l={},d=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Audience &amp; Scope",id:"11-audience--scope",level:3},{value:"1.2 Context",id:"12-context",level:3},{value:"1.3 Conformance",id:"13-conformance",level:3},{value:"1.4 Proof of conformity",id:"14-proof-of-conformity",level:3},{value:"1.5 Examples",id:"15-examples",level:3},{value:"1.6 Terminology",id:"16-terminology",level:3},{value:"2. Aspect Model SerialPartTypization",id:"2-aspect-model-serialparttypization",level:2},{value:"2.1 Introduction",id:"21-introduction",level:3},{value:"2.2 Specification Artifacts",id:"22-specification-artifacts",level:3},{value:"2.3 License",id:"23-license",level:3},{value:"2.4 Identified of Semantic Model",id:"24-identified-of-semantic-model",level:3},{value:"2.5 Formats of Semantic Model",id:"25-formats-of-semantic-model",level:3},{value:"2.5.1 RDF Turtle",id:"251-rdf-turtle",level:4},{value:"2.5.2 JSON Schema",id:"252-json-schema",level:4},{value:"2.5.3 aasx",id:"253-aasx",level:4},{value:"3. References",id:"3-references",level:2},{value:"3.1 Normative References",id:"31-normative-references",level:3},{value:"3.2 Non-Normative References",id:"32-non-normative-references",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cx-0043-aspect-model-part-as-planned-v101",children:"CX-0043 Aspect Model: Part As Planned v1.0.1"}),"\n",(0,i.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,i.jsx)(n.p,{children:"A serialized part is an instance of a (design-) part, where the\nparticular instance can be uniquely identified by means of a serial\nnumber or a similar identifier (e.g. VAN) or a combination of multiple\nidentifiers (e.g. combination of manufacturer, date and number)."}),"\n",(0,i.jsx)(n.p,{children:"The aspect will be attached to a material-level digital twin and links\nthe physical part and its identification to its IDs within Catena-X."}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,i.jsx)(n.p,{children:"This semantic model describes a Part/Material as it was planned. The\noriginal intent is to attach this aspect to a material-specific twin in\nan Asset Administration Shell but is not limited to that use case. The\naspect allows several identifications: of a component from a\nmanufacturer ID and/or part type and optionally a validity period in\norder to determine the unique ID with which the part is identified\nwithin Catena-X at a given time."}),"\n",(0,i.jsx)(n.p,{children:"Note: The presented aspect model is in version 1.0.0."}),"\n",(0,i.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 Audience & Scope"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This standard applies to the roles:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n",(0,i.jsx)(n.li,{children:"Business Application Provider"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The described semantic model or submodel template MUST be followed for\napplications that want to participate in the BomAsPlanned lifecycle phases within Catena-X."}),"\n",(0,i.jsx)(n.h3,{id:"12-context",children:"1.2 Context"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This submodel template or aspect model is required to identify a\npart/material within Catena-X."}),"\n",(0,i.jsx)(n.p,{children:"It links the manufacturer part identification to the actual Catena-X ID."}),"\n",(0,i.jsx)(n.p,{children:"Therefore by accessing this aspect you can link an internal material\nnumber to its representation within the BomAsPlanned-lifecycle in\nCatena-X."}),"\n",(0,i.jsx)(n.h3,{id:"13-conformance",children:"1.3 Conformance"}),"\n",(0,i.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines,\ndiagrams, examples, and notes in this specification are non-normative.\nEverything else in this specification is normative."}),"\n",(0,i.jsxs)(n.p,{children:["The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,\nSHOULD and SHOULD NOT in this document are to be interpreted as\ndescribed in\xa0",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/bcp14",children:"BCP\n14"}),"\xa0[",(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc2119",children:"RFC2119"}),"]\n[",(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc8174",children:"RFC8174"}),"] when, and\nonly when, they appear in all capitals, as shown here."]}),"\n",(0,i.jsx)(n.h3,{id:"14-proof-of-conformity",children:"1.4 Proof of conformity"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"All participants and their solutions must prove they conform with the\nCatena-X standards. To validate that the standards are applied\ncorrectly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,i.jsx)(n.p,{children:"A model validator must be created, to prove the correctness of the data\nmodel. A generic test set created for the model needs to prove the\nexpected results."}),"\n",(0,i.jsx)(n.h3,{id:"15-examples",children:"1.5 Examples"}),"\n",(0,i.jsx)(n.p,{children:"Example JSON payload:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n   "partTypeInformation":{\n      "classification":"product",\n      "manufacturerPartId":"123-0.740-3434-A",\n      "nameAtManufacturer":"Mirror left"\n   },\n   "validityPeriod":{\n      "validFrom":"2023-02-10T15:18:13.815Z",\n      "validTo":"2023-02-10T15:18:13.815Z"\n   },\n   "catenaXId":"580d3adf-1981-44a0-a214-13d6ceed9379"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"16-terminology",children:"1.6 Terminology"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The following terms are especially relevant for the understanding of the\nstandard:"}),"\n",(0,i.jsx)(n.p,{children:"EXAMPLE:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Business Partner Number (BPN)"})}),"\n",(0,i.jsx)(n.p,{children:"A BPN is the unique identifier of a partner within Catena-x."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Aspect Model"})}),"\n",(0,i.jsxs)(n.p,{children:["a formal, machine-readable semantic description\xa0(expressed with\nRDF/turtle) of data accessible from an ",(0,i.jsx)(n.strong,{children:"Aspect."})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta\nModel (SAMM), i.e., it utilizes elements and relations defined in the\nSemantic Aspect Meta Model and is compliant to the validity rules\ndefined by the Semantic Aspect Meta Model.\xa0\n\nNote 2 to entry: Aspect model are logical data models which can be used\nto detail a conceptual model in order to describe the semantics of\nruntime data related to a concept. Further, elements of an Aspect model\ncan/should refer to terms of a standardized Business Glossary (if\nexisting)\u200b.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"[Source: Catena-X, SEM-002, note 3 removed]"})}),"\n",(0,i.jsx)(n.p,{children:"Additional terminology used in this standard can be looked up in the\nglossary on the association homepage."}),"\n",(0,i.jsx)(n.h2,{id:"2-aspect-model-serialparttypization",children:"2. Aspect Model SerialPartTypization"}),"\n",(0,i.jsx)(n.h3,{id:"21-introduction",children:"2.1 Introduction"}),"\n",(0,i.jsx)(n.p,{children:"This submodel template or aspect model is required to identify a\npart/material within Traceability in Catena-X."}),"\n",(0,i.jsx)(n.p,{children:"It links manufacturerPartId to the Catena-X identifier."}),"\n",(0,i.jsx)(n.p,{children:"This allows decoupling of the Catena-X identifiers from the actual\nbusiness process."}),"\n",(0,i.jsx)(n.p,{children:"By accessing this aspect you can link a material/part to its\nrepresentation within the BomAsPlanned lifecycle in Catena-X."}),"\n",(0,i.jsx)(n.p,{children:"Every data provider of partAsplanned data MUST provide the data\nconformant to the semantic model specified in this document."}),"\n",(0,i.jsx)(n.p,{children:"The unique identifier of the semantic model specified in this document\nMUST be used by the data provider to define the semantics of the data\nbeing transferred."}),"\n",(0,i.jsx)(n.p,{children:"Every certified business application relying on partAsPlanned data MUST\nbe able to consume data conformant to the semantic model specified in\nthis document."}),"\n",(0,i.jsx)(n.p,{children:"This semantic model MUST be made available in the central Semantic Hub."}),"\n",(0,i.jsx)(n.p,{children:"Data consumers and data provider MUST comply with the license of the\nsemantic model."}),"\n",(0,i.jsx)(n.p,{children:"In the Catena-X data space partAsPlanned data MUST be requested and\nexchanged via Eclipse Dataspace Connector (EDC) conformant to CX-0018\nand CX-0002."}),"\n",(0,i.jsx)(n.p,{children:"Data providers MUST provide the data as part of a digital twin of a\nmaterial/part level."}),"\n",(0,i.jsx)(n.p,{children:"The JSON Payload of data providers MUST be conformant to the JSON Schema\nas specified in this document."}),"\n",(0,i.jsx)(n.h3,{id:"22-specification-artifacts",children:"2.2 Specification Artifacts"}),"\n",(0,i.jsx)(n.p,{children:'The modeling of the semantic model specified in this document was done\nin accordance to the "semantic driven workflow" to create a submodel\ntemplate specification [SMT].'}),"\n",(0,i.jsx)(n.p,{children:"This aspect model is written in SAMM 2.0.0 as a modeling language\nconformant to CX-0003 as input for the semantic deriven workflow."}),"\n",(0,i.jsxs)(n.p,{children:["Like all Catena-X data models, this model is available in a\nmachine-readable format on GitHub",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," c conformant to CX-0003."]}),"\n",(0,i.jsx)(n.h3,{id:"23-license",children:"2.3 License"}),"\n",(0,i.jsxs)(n.p,{children:["This Catena-X data model is an outcome of Catena-X use case group\nTraceability. This Catena-X data model is made available under the terms\nof the Creative Commons Attribution 4.0 International (CC-BY-4.0)\nlicense, which is available at Creative Commons",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The license information is available in github."}),"\n",(0,i.jsx)(n.p,{children:"In case of doubt the license, copyright and authors information in\ngithub overwrites the information in this specification document."}),"\n",(0,i.jsx)(n.h3,{id:"24-identified-of-semantic-model",children:"2.4 Identified of Semantic Model"}),"\n",(0,i.jsx)(n.p,{children:"The semantic model has the unique identifier"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["urn:bamm",":io",".catenax.part_as_planned:1.0.0"]})}),"\n",(0,i.jsx)(n.h3,{id:"25-formats-of-semantic-model",children:"2.5 Formats of Semantic Model"}),"\n",(0,i.jsx)(n.h4,{id:"251-rdf-turtle",children:"2.5.1 RDF Turtle"}),"\n",(0,i.jsx)(n.p,{children:"The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.part_as_planned/1.0.0/PartAsPlanned.ttl",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.part_as_planned/1.0.0/PartAsPlanned.ttl"})}),"\n",(0,i.jsxs)(n.p,{children:["The open source command line tool of the Eclipse Semantic Modeling Framework",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-5",id:"user-content-fnref-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),"  is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation."]}),"\n",(0,i.jsx)(n.h4,{id:"252-json-schema",children:"2.5.2 JSON Schema"}),"\n",(0,i.jsx)(n.p,{children:'A JSON Schema can be generated from the RDF Turtle file. The JSON Schema\ndefines the Value-Only payload of the Asset Administration Shell for the\nAPI operation "GetSubmodel".'}),"\n",(0,i.jsx)(n.h4,{id:"253-aasx",children:"2.5.3 aasx"}),"\n",(0,i.jsx)(n.p,{children:"A AASX file can be generated from the RDF Turtle file. The AASX file\ndefines one of the requested artifacts for a Submodel Template\nSpecification conformant to [SMT]."}),"\n",(0,i.jsx)(n.p,{children:"Note: As soon as the specification V3.0 of the Asset Administration\nShell specfication is available and update will be provided."}),"\n",(0,i.jsx)(n.h2,{id:"3-references",children:"3. References"}),"\n",(0,i.jsx)(n.h3,{id:"31-normative-references",children:"3.1 Normative References"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"CX-0002 DIGITAL TWINS IN CATENA-X"}),"\n",(0,i.jsx)(n.li,{children:"CX-0003 SEMANTIC ASPECT META MODEL"}),"\n",(0,i.jsx)(n.li,{children:"CX-0004 GOVERNANCE PROCESS FOR SEMANTIC MODELS"}),"\n",(0,i.jsx)(n.li,{children:"CX-0018 ECLPISE DATA SPACE CONNECTOR (EDC)"}),"\n",(0,i.jsx)(n.li,{children:"CX-0001 EDC DISCOVERY API"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 Non-Normative References"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[SMT] How to create a submodel template specification. Guideline. Download from: ",(0,i.jsx)(n.a,{href:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf",children:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,i.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,i.jsx)(n.a,{href:"/copyright",children:"here"}),"."]}),"\n","\n",(0,i.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{id:"user-content-fn-3",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models",children:"https://github.com/eclipse-tractusx/sldt-semantic-models"})," ",(0,i.jsx)(n.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-4",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://creativecommons.org/licenses/by/4.0/legalcode",children:"https://creativecommons.org/licenses/by/4.0/legalcode"})," ",(0,i.jsx)(n.a,{href:"#user-content-fnref-4","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-5",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/eclipse-esmf/esmf-sdk",children:"https://github.com/eclipse-esmf/esmf-sdk"})," ",(0,i.jsx)(n.a,{href:"#user-content-fnref-5","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);