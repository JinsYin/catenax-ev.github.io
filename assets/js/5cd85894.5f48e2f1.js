"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[1607],{1518:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=a(74848),i=a(28453);const r={},s="CX-0040 Aspect Model: Part Analyses v2.0.1",o={id:"standards/CX-0040-AspectModelPartAnalyses/CX-0040-AspectModelPartAnalyses",title:"CX-0040 Aspect Model: Part Analyses v2.0.1",description:"1. Introduction",source:"@site/versioned_docs/version-24.03/standards/CX-0040-AspectModelPartAnalyses/CX-0040-AspectModelPartAnalyses.md",sourceDirName:"standards/CX-0040-AspectModelPartAnalyses",slug:"/standards/CX-0040-AspectModelPartAnalyses/",permalink:"/docs/standards/CX-0040-AspectModelPartAnalyses/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0039 Aspect Model: Fleet Claim Data v1.0.1",permalink:"/docs/standards/CX-0039-AspectModelFleetClaimData/"},next:{title:"CX-0041 Acpect Model: Manufactured Parts Quality Information v1.0.2",permalink:"/docs/standards/CX-0041-AspectModelManufacturedPartsQualityInformation/"}},l={},d=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Audience &amp; Scope",id:"11-audience--scope",level:3},{value:"1.2 Context",id:"12-context",level:3},{value:"1.3 Conformance",id:"13-conformance",level:3},{value:"1.4 Proof of conformity",id:"14-proof-of-conformity",level:3},{value:"1.5 Examples",id:"15-examples",level:3},{value:"1.6 Terminology",id:"16-terminology",level:3},{value:"2. Aspect Model Part Analyses",id:"2-aspect-model-part-analyses",level:2},{value:"2.1 Introduction",id:"21-introduction",level:3},{value:"2.2 Normative Criteria",id:"22-normative-criteria",level:3},{value:"2.2.1 Normative criteria for Data Provider",id:"221-normative-criteria-for-data-provider",level:4},{value:"2.2.2 Normative criteria for Business Application Provider",id:"222-normative-criteria-for-business-application-provider",level:4},{value:"2.3 License",id:"23-license",level:3},{value:"2.4 Identifier of Semantic Model",id:"24-identifier-of-semantic-model",level:3},{value:"2.5 Formats of Semantic Model",id:"25-formats-of-semantic-model",level:3},{value:"2.5.1 RDF Turtle",id:"251-rdf-turtle",level:4},{value:"2.5.2 JSON Schema",id:"252-json-schema",level:4},{value:"3. References",id:"3-references",level:2},{value:"3.1 Normative References",id:"31-normative-references",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cx-0040-aspect-model-part-analyses-v201",children:"CX-0040 Aspect Model: Part Analyses v2.0.1"}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsx)(n.p,{children:'This document describes the semantic model "Parts Analyses" used in the\nCatena-X network.'}),"\n",(0,t.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 Audience & Scope"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The described semantic model is relevant for:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n",(0,t.jsx)(n.li,{children:"Business Application Provider"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"12-context",children:"1.2 Context"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The Catena-X use case Quality (QAX) uses multiple data models\nto exchange data between automotive manufacturer (OEM) and component\nsupplier (TIER1). Each of these data models can be supplied\nindependently."}),"\n",(0,t.jsx)(n.p,{children:"The PartsAnalyses data model is used to exchange information about\nanalyzed parts that were send back from the automotive manufacturer\n(OEM) to the part manufacturer. These analyses and their results are\nrelated to one or more quality tasks."}),"\n",(0,t.jsx)(n.h3,{id:"13-conformance",children:"1.3 Conformance"}),"\n",(0,t.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines,\ndiagrams, examples, and notes in this specification are non-normative.\nEverything else in this specification is normative."}),"\n",(0,t.jsxs)(n.p,{children:["The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,\nSHOULD and SHOULD NOT in this document are to be interpreted as\ndescribed in\xa0",(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/bcp14",children:"BCP\n14"}),"\xa0[",(0,t.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc2119",children:"RFC2119"}),"]\n[",(0,t.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc8174",children:"RFC8174"}),"] when, and\nonly when, they appear in all capitals, as shown here."]}),"\n",(0,t.jsx)(n.h3,{id:"14-proof-of-conformity",children:"1.4 Proof of conformity"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All participants and their solutions will need to proof, that they are\nconform with the Catena-X standards. To validate that the standards are\napplied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,t.jsxs)(n.p,{children:["For Data Provider: To prove conformity you have to fulfill all MUST\ncriteria mentioned in chapter  ",(0,t.jsx)(n.a,{href:"#221-normative-criteria-for-data-provider",children:"Normative criteria for data provider"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"There is no proof of conformity necessary for Data Consumer."}),"\n",(0,t.jsxs)(n.p,{children:["For Business Application Provider: To prove conformity you have to\nfulfill all MUST criteria mentioned in chapter ",(0,t.jsx)(n.a,{href:"#222-normative-criteria-for-business-application-provider",children:"Normative criteria for Business Application Provider"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"A model validator needs to be created, to proof the correctness of the\ndata model. A generic test set created for the model needs to proof the\nexpected results."}),"\n",(0,t.jsx)(n.h3,{id:"15-examples",children:"1.5 Examples"}),"\n",(0,t.jsx)(n.p,{children:"Example payload in JSON format:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "listOfPartAnalyses" : [ {\n    "catenaXPartId" : "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9000",\n    "resultsDescription" : "Corrossion on component xyz in steering motor",\n    "customerPartNumber" : "OE-PRT-12345",\n    "qualityTaskId" : "BPN-811_2022_000001",\n    "manufacturerSerialPartNumber" : "436347347.4343884384.FTG.538348",\n    "isDefect" : true,\n    "manufacturerAnalysisID" : "TIER-647439403403",\n    "anonymizedVin" : "3747429FGH382923974682",\n    "manufacturerPartNumber" : "123-0.740-3434-A",\n    "customerAnalysisID" : "OE-43673473438",\n    "manufacturerPartName" : "Steering assembly",\n    "addtionalInformation" : {\n      "keys" : [ "Steel quality" ],\n      "values" : [ "Stainless steel" ]\n    },\n    "status" : "new"\n  } ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"16-terminology",children:"1.6 Terminology"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Business Partner Number (BPN)"})}),"\n",(0,t.jsx)(n.p,{children:"A BPN is the unique identifier of a partner within Catena-x."}),"\n",(0,t.jsx)(n.h2,{id:"2-aspect-model-part-analyses",children:"2. Aspect Model Part Analyses"}),"\n",(0,t.jsx)(n.h3,{id:"21-introduction",children:"2.1 Introduction"}),"\n",(0,t.jsx)(n.p,{children:'Catena-X use case "Quality"(QAX) uses several Catena-X\nstandardized data models to exchange data:'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(27274).A+"",children:"Aspect models used in QAX"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Figure 1: Hierarchy of Catena-X data models\xa0used in QAX"})})}),"\n",(0,t.jsx)(n.p,{children:"Data models in QAX and their content:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"QualityTask is the root element and describes why companies are\nworking together on a quality topic and what they want to do. All\ninvolved companies and their contact people are named. In addition,\na flag tells what should be done with exchanged data after a\nQualityTask is closed."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Vehicle.ProductDescription: This data model is a representation of\none vehicle affected by this QualityTask. The model represents the\nvehicle when it was sold to the end-customers from an end-customers\npoint of view: Which standard equipment was installed in the vehicle\nand which extra equipment was installed in the vehicle."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fleet.DiagnosticData: Diagnostic data coming from multiple vehicles\nthat are affected by this QualityTask + Diagnostic data from similar\nvehicles that are not affected by this QualityTask."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fleet.ClaimData: Customer complaints that are linked to this\nQualityTask + Data about the exchange of potentially faulty parts"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ManufacturedPartsQualityInformation: A selection of\nmanufacturing-related parameters that help to solve the QualityTask"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"PartsAnalyses: Analyses results of replaced and potentially faulty\nparts that are linked to this QualityTask"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"22-normative-criteria",children:"2.2 Normative Criteria"}),"\n",(0,t.jsx)(n.p,{children:'The usage of the described semantic model "Parts Analyses" is a MUST for\nData Provider and Data Consumer that want to work together on a quality\ntopic over Catena-X automotive network.'}),"\n",(0,t.jsx)(n.h4,{id:"221-normative-criteria-for-data-provider",children:"2.2.1 Normative criteria for Data Provider"}),"\n",(0,t.jsx)(n.p,{children:'Every data provider of "Parts Analyses" MUST provide the data conformant\nto the semantic model specified in CX-0040.'}),"\n",(0,t.jsx)(n.p,{children:'If available a data provider of "Parts Analyses" MUST provide property\nmanufacturerSerialPartNumber for serial parts.'}),"\n",(0,t.jsx)(n.p,{children:'If available a data provider of "Parts Analyses" MUST provide\nmanufacturerPartIdentifier for non-serial parts.'}),"\n",(0,t.jsx)(n.p,{children:'It is a MUST for data providers of "Parts Analyses" to provide the\nproperty qualityTaskId. qualityTaskId MUST match with qualityTaskId\nproperty of "Quality Task" data specified in CX - 0036.'}),"\n",(0,t.jsx)(n.p,{children:"If available catenaXIdentifier of the analyzed parts SHOULD be provided\nby the data provider."}),"\n",(0,t.jsx)(n.p,{children:'In the Catena-X data space "Parts Analyses" data MUST be exchanged via\nEclipse Dataspace Connector (EDC) conformant to CX - 0018.'}),"\n",(0,t.jsxs)(n.p,{children:["It is RECOMMENDED to use Apache parquet",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),' file format together with EDC\nS3 data plane for file data exchange for "Parts Analyses".']}),"\n",(0,t.jsx)(n.h4,{id:"222-normative-criteria-for-business-application-provider",children:"2.2.2 Normative criteria for Business Application Provider"}),"\n",(0,t.jsx)(n.p,{children:"It is a MUST for Business Application Provider to support at least 2 standardized Catena-X QAX aspect models from Catena-X Release 3.2 (2 out of Catena-X standards CX \u2013 0036, CX \u2013 0037, CX \u2013 0038, CX \u2013 0039, CX \u2013 0040, CX \u2013 0041, CX - 0091) to get the label \u201cCatena-X Certified Solution\u201d for their quality application."}),"\n",(0,t.jsx)(n.p,{children:"It is RECOMMENDED for Business Application Provider to be able to read the semantic model \u201cParts Analyses\u201d."}),"\n",(0,t.jsx)(n.h3,{id:"23-license",children:"2.3 License"}),"\n",(0,t.jsxs)(n.p,{children:["This Catena-X data model is an outcome of Catena-X use case group Live\nQuality Loops (QAX). This Catena-X data model is made available under\nthe terms of the Creative Commons Attribution 4.0 International\n(CC-BY-4.0) license, which is available at Creative Commons",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The license information is available in github."}),"\n",(0,t.jsx)(n.p,{children:"In case of doubt the license, copyright and authors information in\ngithub overwrites the information in this specification document."}),"\n",(0,t.jsx)(n.h3,{id:"24-identifier-of-semantic-model",children:"2.4 Identifier of Semantic Model"}),"\n",(0,t.jsx)(n.p,{children:"This semantic model has the unique identifier"}),"\n",(0,t.jsxs)(n.p,{children:["urn:samm",":io",".catenax.parts_analyses:2.0.0"]}),"\n",(0,t.jsx)(n.h3,{id:"25-formats-of-semantic-model",children:"2.5 Formats of Semantic Model"}),"\n",(0,t.jsx)(n.h4,{id:"251-rdf-turtle",children:"2.5.1 RDF Turtle"}),"\n",(0,t.jsx)(n.p,{children:"The rdf turtle file, adhering to the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. It is provided here:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.parts_analyses/2.0.0",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.parts_analyses/2.0.0"})}),"\n",(0,t.jsxs)(n.p,{children:["The open source command line tool of the Eclipse Semantic Modeling\nFramework",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-5",id:"user-content-fnref-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})," is used for generation of other file formats like\nfor example a JSON Schema, aasx for Asset Administration Shell Submodel\nTemplate or a HTML documentation."]}),"\n",(0,t.jsx)(n.h4,{id:"252-json-schema",children:"2.5.2 JSON Schema"}),"\n",(0,t.jsx)(n.p,{children:"A JSON Schemaas well as an example JSON payload can be generated from the RDF Turtle file using the\nEclipse ESMF tooling."}),"\n",(0,t.jsx)(n.p,{children:"If present, example JSON-payloads MUST validate against the generated\nJSON schema."}),"\n",(0,t.jsx)(n.h2,{id:"3-references",children:"3. References"}),"\n",(0,t.jsx)(n.h3,{id:"31-normative-references",children:"3.1 Normative References"}),"\n",(0,t.jsxs)(n.p,{children:["CX - 0018 EclipseDataConnector(EDC)",(0,t.jsx)(n.br,{}),"\n","CX - 0036 Aspect Model: QualityTask",(0,t.jsx)(n.br,{}),"\n","CX - 0037 Aspect Model: Vehicle.ProductionData",(0,t.jsx)(n.br,{}),"\n","CX - 0038 Aspect Model: Fleet.DiagnosticData",(0,t.jsx)(n.br,{}),"\n","CX - 0039 Aspect Model: Fleet.ClaimData",(0,t.jsx)(n.br,{}),"\n","CX - 0040-Aspect Model: PartAnalyses",(0,t.jsx)(n.br,{}),"\n","CX - 0041-Aspect Model: ManufacturedPartsQualityInformation",(0,t.jsx)(n.br,{}),"\n","CX - 0091 Aspect Model: Fleet.Vehicles",(0,t.jsx)(n.br,{}),"\n","CX - 0092 Aspect Model: QualityTaskAttachment"]}),"\n",(0,t.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,t.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,t.jsx)(n.a,{href:"/copyright",children:"here"}),"."]}),"\n","\n",(0,t.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,t.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{id:"user-content-fn-3",children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://parquet.apache.org/",children:"https://parquet.apache.org/"})," ",(0,t.jsx)(n.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{id:"user-content-fn-4",children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://creativecommons.org/licenses/by/4.0/legalcode",children:"https://creativecommons.org/licenses/by/4.0/legalcode"})," ",(0,t.jsx)(n.a,{href:"#user-content-fnref-4","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{id:"user-content-fn-5",children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/eclipse-esmf/esmf-sdk#samm-cli",children:"https://github.com/eclipse-esmf/esmf-sdk#samm-cli"})," ",(0,t.jsx)(n.a,{href:"#user-content-fnref-5","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},27274:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/QaxSemanticModelOverview-5984e3209e4e549743f647a36223f0e8.jpg"},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var t=a(96540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);