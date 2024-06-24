"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[1055],{10732:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=i(74848),s=i(28453);const a={},l="CX-0042 Aspect Model SingleLevelBomAsPlanned v2.0.0",o={id:"standards/CX-0042-AspectModelSingleLevelBoMasPlanned/CX-0042-AspectModelSingleLevelBoMasPlanned",title:"CX-0042 Aspect Model SingleLevelBomAsPlanned v2.0.0",description:"FOR WHOM IS THE STANDARD DESIGNED",source:"@site/versioned_docs/version-24.03/standards/CX-0042-AspectModelSingleLevelBoMasPlanned/CX-0042-AspectModelSingleLevelBoMasPlanned.md",sourceDirName:"standards/CX-0042-AspectModelSingleLevelBoMasPlanned",slug:"/standards/CX-0042-AspectModelSingleLevelBoMasPlanned/",permalink:"/docs/standards/CX-0042-AspectModelSingleLevelBoMasPlanned/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0041 Acpect Model: Manufactured Parts Quality Information v1.0.2",permalink:"/docs/standards/CX-0041-AspectModelManufacturedPartsQualityInformation/"},next:{title:"CX-0043 Aspect Model: Part As Planned v1.0.1",permalink:"/docs/standards/CX-0043-AspectModelPartAsPlanned/"}},r={},d=[{value:"FOR WHOM IS THE STANDARD DESIGNED",id:"for-whom-is-the-standard-designed",level:2},{value:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD",id:"comparison-with-the-previous-version-of-the-standard",level:2},{value:"ABSTRACT",id:"abstract",level:2},{value:"1 INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT AND ARCHITECTURE FIT",id:"12-context-and-architecture-fit",level:3},{value:"1.3 CONFORMANCE AND PROOF OF CONFORMITY",id:"13-conformance-and-proof-of-conformity",level:3},{value:"1.4 EXAMPLES",id:"14-examples",level:3},{value:"1.5 TERMINOLOGY",id:"15-terminology",level:3},{value:"2 ASPECT MODEL \u201cSingleLevelBomAsPlanned\u201d",id:"2-aspect-model-singlelevelbomasplanned",level:2},{value:"2.1 INTRODUCTION",id:"21-introduction",level:3},{value:"2.2 SPECIFICATION ARTIFACTS",id:"22-specification-artifacts",level:3},{value:"2.3 LICENSE",id:"23-license",level:3},{value:"2.4 IDENTIFER OF SEMANTIC MODEL",id:"24-identifer-of-semantic-model",level:3},{value:"2.5 FORMATS OF SEMANTIC MODEL",id:"25-formats-of-semantic-model",level:3},{value:"2.5.1 RDF TURTLE",id:"251-rdf-turtle",level:4},{value:"2.5.2 JSON SCHEMA",id:"252-json-schema",level:4},{value:"2.5.3 AASX",id:"253-aasx",level:4},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cx-0042-aspect-model-singlelevelbomasplanned-v200",children:"CX-0042 Aspect Model SingleLevelBomAsPlanned v2.0.0"}),"\n",(0,t.jsx)(n.h2,{id:"for-whom-is-the-standard-designed",children:"FOR WHOM IS THE STANDARD DESIGNED"}),"\n",(0,t.jsx)(n.h2,{id:"comparison-with-the-previous-version-of-the-standard",children:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"changed version from 1.1.2 to 2.0.0"}),"\n",(0,t.jsx)(n.li,{children:"updated version number of referenced aspect model from 1.1.0 to 2.0.0"}),"\n",(0,t.jsx)(n.li,{children:"updated example JSON payload"}),"\n",(0,t.jsx)(n.li,{children:"migrated the standard to the new template"}),"\n",(0,t.jsx)(n.li,{children:"updated names of referenced standards"}),"\n",(0,t.jsxs)(n.li,{children:["changed urn from urn:bamm",":io",".catenax.single_level_bom_as_planned:2.0.0 to urn:samm",":io",".catenax.single_level_bom_as_planned:2.0.0"]}),"\n",(0,t.jsx)(n.li,{children:"minor formatting and typos"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(n.p,{children:"The semantic model described below describes a submodel for a digital twin on material or part level providing information on its assembly. The single-level Bill of Material represents one sub-level of an assembly and does not include any lower-level subassemblies. The Digital Twin as planned lifecycle stage refers to the linkage of parts on a material/part number level. Currently, it is anticipated that these parts can be linked between two partners once the sourcing is complete."}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1 INTRODUCTION"}),"\n",(0,t.jsx)(n.p,{children:"The aspect SingleLevelBomAsPlanned provides information on the child parts (one structural level down) from which the given object is assembled. It describes the relationship of parts/materials in a planned stage. It does not hold serial number or batch specific information, but supports navigation through the potential supply chains for a given material/part number."}),"\n",(0,t.jsx)(n.p,{children:"Note: The presented aspect model is in version 2.0.0"}),"\n",(0,t.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This standard applies to the roles:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n",(0,t.jsx)(n.li,{children:"Business Application Provider"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The described semantic model or submodel template must only be made available by applications,\nas well as all data providers provisioning data for the Digital Twin AsPlanned lifecycle."}),"\n",(0,t.jsx)(n.h3,{id:"12-context-and-architecture-fit",children:"1.2 CONTEXT AND ARCHITECTURE FIT"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This submodel template or aspect model is required to identify child part numbers for a given part.\nIt links the Catena-X IDs of the parent material/part with the Catena-X IDs of its ingredients or components materials."}),"\n",(0,t.jsx)(n.p,{children:"Therefore this aspect allows navigation throughout the supply chain in the Digital Twin AsPlanned lifecycle."}),"\n",(0,t.jsx)(n.h3,{id:"13-conformance-and-proof-of-conformity",children:"1.3 CONFORMANCE AND PROOF OF CONFORMITY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes\nin this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,t.jsxs)(n.p,{children:["The key words ",(0,t.jsx)(n.strong,{children:"MAY"}),", ",(0,t.jsx)(n.strong,{children:"MUST"}),", ",(0,t.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,t.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,t.jsx)(n.strong,{children:"RECOMMENDED"}),", ",(0,t.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,t.jsx)(n.strong,{children:"SHOULD"}),"\nand ",(0,t.jsx)(n.strong,{children:"SHOULD NOT"})," in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]\nwhen, and only when, they appear in all capitals, as shown here."]}),"\n",(0,t.jsx)(n.p,{children:"All participants and their solutions will need to prove, that they are conform with the Catena-X standards.\nTo validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,t.jsx)(n.p,{children:"The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data."}),"\n",(0,t.jsxs)(n.p,{children:["*",(0,t.jsx)(n.em,{children:"Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases."})]}),"\n",(0,t.jsx)(n.h3,{id:"14-examples",children:"1.4 EXAMPLES"}),"\n",(0,t.jsx)(n.p,{children:"Example JSON payload:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "catenaXId": "urn:uuid:055c1128-0375-47c8-98de-7cf802c3241d",\n  "childItems": [\n    {\n      "catenaXId": "urn:uuid:5daB938E-Cafa-92B3-7ca1-9aD7885e9dC8",\n      "quantity": {\n        "quantityNumber": 2.5,\n        "measurementUnit": "unit:litre"\n      },\n      "createdOn": "2022-02-03T14:48:54.709Z",\n      "businessPartner": "BPNL50096894aNXY",\n      "lastModifiedOn": "2022-02-03T14:48:54.709Z"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"15-terminology",children:"1.5 TERMINOLOGY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Aspect Model"}),"\n",(0,t.jsx)(n.p,{children:"A formal, machine-readable semantic description (expressed with\nRDF/turtle) of data accessible from an Aspect."}),"\n",(0,t.jsx)(n.p,{children:"Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta\nModel (SAMM), i.e., it utilizes elements and relations defined in the\nSemantic Aspect Meta Model and is compliant to the validity rules\ndefined by the Semantic Aspect Meta Model."}),"\n",(0,t.jsx)(n.p,{children:"Note 2 to entry: Aspect model are logical data models which can be used\nto detail a conceptual model in order to describe the semantics of\nruntime data related to a concept. Further, elements of an Aspect model\ncan/should refer to terms of a standardized Business Glossary (if\nexisting)\u200b."}),"\n",(0,t.jsx)(n.p,{children:"Part / Item"}),"\n",(0,t.jsx)(n.p,{children:'The terms "part" and "item" are used as synonyms in this standard and describe products, materials or other entities that are referenced by the digital twins.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"[Source: Catena-X, SEM-002, note 3 removed]"})}),"\n",(0,t.jsx)(n.p,{children:"Additional terminology used in this standard can be looked up in the\nglossary on the association homepage."}),"\n",(0,t.jsx)(n.h2,{id:"2-aspect-model-singlelevelbomasplanned",children:"2 ASPECT MODEL \u201cSingleLevelBomAsPlanned\u201d"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:['This semantic model describes Part/Material relationships. The original intent is to attach this aspect to a material specific twin in an Asset Administration Shell but is not limited to that use case.\nThe single-level Bill of Material represents one sub-level of an assembly and does not include any lower-level subassemblies. In the As-Planned lifecycle state all variants are covered ("120% BOM").\nEvery data provider of SingleLevelBomAsPlanned data ',(0,t.jsx)(n.strong,{children:"MUST"})," provide the data conformant to the semantic model specified in this document.\nThe unique identifier of the semantic model specified in this document ",(0,t.jsx)(n.strong,{children:"MUST"})," be used by the data provider to define the semantics of the data being transferred.\nEvery certified business application relying on SingleLevelBomAsPlanned data ",(0,t.jsx)(n.strong,{children:"MUST"})," be able to consume data conformant to the semantic model specified in this document."]}),"\n",(0,t.jsxs)(n.p,{children:["This semantic model ",(0,t.jsx)(n.strong,{children:"MUST"})," be made available in the central Semantic Hub. Data consumers and data provider ",(0,t.jsx)(n.strong,{children:"MUST"})," comply with the license of the semantic model.\nIn the Catena-X data space SingleLevelBoMAsPlanned data ",(0,t.jsx)(n.strong,{children:"MUST"})," be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to CX-0018 and CX-0002.\nData providers ",(0,t.jsx)(n.strong,{children:"MUST"})," provide the data as part of a digital twin of the asset for a material/plant conformant to CX-0002. The JSON Payload of data providers ",(0,t.jsx)(n.strong,{children:"MUST"})," be conformant to the JSON Schema as specified in this document."]}),"\n",(0,t.jsx)(n.h3,{id:"21-introduction",children:"2.1 INTRODUCTION"}),"\n",(0,t.jsx)(n.p,{children:"The aspect SingleLevelBomAsPlanned provides information on the child parts (one structural level down) from which the given object is assembled. It describes the relationship of parts/materials in a planned stage. It does not hold serial number or batch specific information, but supports navigation through the potential supply chains for a given material number."}),"\n",(0,t.jsx)(n.h3,{id:"22-specification-artifacts",children:"2.2 SPECIFICATION ARTIFACTS"}),"\n",(0,t.jsxs)(n.p,{children:['The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification ',(0,t.jsx)(n.a,{href:"#32-non-normative-references",children:"SMT"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003\nas input for the semantic deriven workflow."}),"\n",(0,t.jsx)(n.p,{children:"Like all Catena-X data models, this model is available in a machine-readable format on GitHub\nconformant to CX-0003."}),"\n",(0,t.jsx)(n.h3,{id:"23-license",children:"2.3 LICENSE"}),"\n",(0,t.jsx)(n.p,{children:"This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons."}),"\n",(0,t.jsx)(n.h3,{id:"24-identifer-of-semantic-model",children:"2.4 IDENTIFER OF SEMANTIC MODEL"}),"\n",(0,t.jsx)(n.p,{children:"The semantic model has the unique identifier:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"urn:samm:io.catenax.single_level_bom_as_planned:2.0.0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This identifier ",(0,t.jsx)(n.strong,{children:"MUST"})," be used by the data provider to define the semantics of the data being transferred."]}),"\n",(0,t.jsx)(n.h3,{id:"25-formats-of-semantic-model",children:"2.5 FORMATS OF SEMANTIC MODEL"}),"\n",(0,t.jsx)(n.h4,{id:"251-rdf-turtle",children:"2.5.1 RDF TURTLE"}),"\n",(0,t.jsx)(n.p,{children:"The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.single_level_bom_as_planned/2.0.0/SingleLevelBomAsPlanned.ttl",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.single_level_bom_as_planned/2.0.0/SingleLevelBomAsPlanned.ttl"})}),"\n",(0,t.jsx)(n.p,{children:"The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation\nof other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel\nTemplate or a HTML documentation."}),"\n",(0,t.jsx)(n.h4,{id:"252-json-schema",children:"2.5.2 JSON SCHEMA"}),"\n",(0,t.jsx)(n.p,{children:'A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only\npayload of the Asset Administration Shell for the API operation "GetSubmodel".'}),"\n",(0,t.jsx)(n.h4,{id:"253-aasx",children:"2.5.3 AASX"}),"\n",(0,t.jsxs)(n.p,{children:["An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested\nartifacts for a Submodel Template Specification conformant to [",(0,t.jsx)(n.a,{href:"#32-non-normative-references",children:"SMT"}),"]."]}),"\n",(0,t.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,t.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CX-0002 DIGITAL TWINS IN CATENA-X"}),"\n",(0,t.jsx)(n.li,{children:"CX-0003 SAMM SEMANTIC ASPECT META MODEL"}),"\n",(0,t.jsx)(n.li,{children:"CX-0004 GOVERNANCE PROCESS"}),"\n",(0,t.jsx)(n.li,{children:"CX-0018 ECLIPSE DATA SPACE CONNECTOR (EDC)"}),"\n",(0,t.jsx)(n.li,{children:"CX-0045 Aspect Model Template Data Chain"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["[SMT] How to create a submodel template specification. Guideline. Download from: ",(0,t.jsx)(n.a,{href:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf",children:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf"})]}),"\n",(0,t.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This section is empty."}),"\n",(0,t.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,t.jsx)(n.p,{children:"This section is empty."}),"\n",(0,t.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This section is empty."}),"\n",(0,t.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,t.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,t.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var t=i(96540);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);