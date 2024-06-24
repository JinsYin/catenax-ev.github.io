"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[2508],{28822:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=i(74848),s=i(28453);const o={},a="CX-0056 Semantic Model: Classified Load Spectrum v1.0.0",r={id:"standards/CX-0056-SemanticModelClassifiedLoadSpectrum/CX-0056-SemanticModelClassifiedLoadSpectrum",title:"CX-0056 Semantic Model: Classified Load Spectrum v1.0.0",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0056-SemanticModelClassifiedLoadSpectrum/CX-0056-SemanticModelClassifiedLoadSpectrum.md",sourceDirName:"standards/CX-0056-SemanticModelClassifiedLoadSpectrum",slug:"/standards/CX-0056-SemanticModelClassifiedLoadSpectrum/",permalink:"/docs/standards/CX-0056-SemanticModelClassifiedLoadSpectrum/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0055 Data Processing Patterns for IT System Integration v1.1.0",permalink:"/docs/standards/CX-0055-DataProcessingPatternsforITSystemIntegration/"},next:{title:"CX-0057 Semantic Model: Remaining Useful Life v1.0.0",permalink:"/docs/standards/CX-0057-SemanticModelRemainingUsefulLife/"}},l={},d=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 CONFORMANCE",id:"13-conformance",level:3},{value:"1.4 PROOF OF CONFORMITY",id:"14-proof-of-conformity",level:3},{value:"1.5 EXAMPLES",id:"15-examples",level:3},{value:"1.6 TERMINOLOGY",id:"16-terminology",level:3},{value:"2 ASPECT MODEL \u201cCLASSIFIED LOAD SPECTRUM\u201d",id:"2-aspect-model-classified-load-spectrum",level:2},{value:"2.1 INTRODUCTION",id:"21-introduction",level:3},{value:"2.2 SPECIFICATION ARTIFACTS",id:"22-specification-artifacts",level:3},{value:"2.3 LICENSE",id:"23-license",level:3},{value:"2.4 IDENTIFER OF SEMANTIC MODEL",id:"24-identifer-of-semantic-model",level:3},{value:"2.5 FORMATS OF SEMANTIC MODEL",id:"25-formats-of-semantic-model",level:3},{value:"2.5.1 RDF Turtle",id:"251-rdf-turtle",level:4},{value:"2.5.2 JSON Schema",id:"252-json-schema",level:4},{value:"2.5.3 aasx",id:"253-aasx",level:4},{value:"2.6 SEMANTIC MODEL",id:"26-semantic-model",level:3},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cx-0056-semantic-model-classified-load-spectrum-v100",children:"CX-0056 Semantic Model: Classified Load Spectrum v1.0.0"}),"\n",(0,t.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(n.p,{children:"The data model \u201cClassifiedLoadSpectrum\u201d represents the load data of a vehicle component.\nThe load spectrum is a data set that represents the aggregated loading of a component.\nAny kind of loading is covered: loading can be force or torque or revolutions or temperature or event or similar. The load data is classified and counted with specific counting methods."}),"\n",(0,t.jsx)(n.p,{children:"This standard defines the format for the counted load data, so that the exchange of load data between different partners is possible."}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,t.jsx)(n.p,{children:"This document describes one semantic model used in the Catena-X network."}),"\n",(0,t.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The standard is relevant for the following roles:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n",(0,t.jsx)(n.li,{children:"Business Application Provider"}),"\n",(0,t.jsx)(n.li,{children:"Enablement Service Provider"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The data model \u201cClassifiedLoadSpectrum\u201d represents the load data of a vehicle component. Loading can be force or torque or revolutions or temperature or event or similar. The load data is counted, all usual counting methods are included like Time-At-Level, Rainflow, Load-Revolution-Counting, Range-Pair, etc. The classification is comprised in the header-section while the data are stored in the body-section. In case of rainflow counted spectra, a residuum is optional. Additional a metadata section comprises information about the component, source, vehicle and vehicle status. The target Component ID identifies the CX ID of component or assembly for which the loading is provided."}),"\n",(0,t.jsx)(n.p,{children:"Only classified load data is covered by the standard, time-history series are not included."}),"\n",(0,t.jsx)(n.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The \u201eClassifiedLoadSpectrum\u201c contains load data, metadata to interpret this load data and the CX ID of the assembly or component these load data are valid for."}),"\n",(0,t.jsx)(n.p,{children:"Load spectra counts the loading of a component in classes. Loading can be a change of a state like gearshift, a temperature distribution or the torque acting at a shaft or anything else. In a load spectrum, these loads are classified. The torque acting at a shaft, for example, has an upper and a lower limit: this interval is divided in a number smaller intervals, the classes and torque is sorted is this classes. The counting may be the time the shaft is subjected to the torque or the number of changes of torque classes."}),"\n",(0,t.jsx)(n.p,{children:"In the standard, arbitrary number of load channels are possible, but only one counting. For each load channel a vector with the acting load classes must be provided. The first entry in the counts vector is the counting of the combination of loads given in the first entries of the load channel vectors. Only load combinations which occur are stored. So the number of data is minimized."}),"\n",(0,t.jsx)(n.p,{children:"All kinds of load data and events can be covered with the standard. The counting might be time or any kind of numbering like number of events or revolutions."}),"\n",(0,t.jsx)(n.p,{children:"The metadata block is used to identify the right component in order to interpret the load spectrum. A component is designed for a specific application with a specific loading. To estimate the damage respectively the health of a component, a lifetime model is combined with the load data. The lifetime model is in general property of the component producer. Load data might be measured, simulated or logged during component usage."}),"\n",(0,t.jsx)(n.p,{children:"The standard covers all classified load spectra, independent of the origin. The origin is stored in the standard."}),"\n",(0,t.jsx)(n.h3,{id:"13-conformance",children:"1.3 CONFORMANCE"}),"\n",(0,t.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams,\nexamples, and notes in this specification are non-normative. Everything else in\nthis specification is normative."}),"\n",(0,t.jsxs)(n.p,{children:["The key words ",(0,t.jsx)(n.strong,{children:"MAY"}),", ",(0,t.jsx)(n.strong,{children:"MUST"}),", ",(0,t.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,t.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,t.jsx)(n.strong,{children:"RECOMMENDED"}),",\n",(0,t.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,t.jsx)(n.strong,{children:"SHOULD"})," and ",(0,t.jsx)(n.strong,{children:"SHOULD NOT"})," in this document document are to be\ninterpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they\nappear in all capitals, as shown here."]}),"\n",(0,t.jsx)(n.h3,{id:"14-proof-of-conformity",children:"1.4 PROOF OF CONFORMITY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["All participants and their solutions ",(0,t.jsx)(n.strong,{children:"MUST"})," prove they conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."]}),"\n",(0,t.jsx)(n.p,{children:"The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data."}),"\n",(0,t.jsx)(n.h3,{id:"15-examples",children:"1.5 EXAMPLES"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{ \n\u202f \u202f "targetComponentID": "urn:uuid:1d161134-8bd4-4253-8735-304852d1d17b", \n\u202f \u202f "metadata": { \n\u202f \u202f \u202f \u202f "projectDescription": "projectnumber Stadt", \n\u202f \u202f \u202f \u202f "componentDescription": "GearOil", \n\u202f \u202f \u202f \u202f "routeDescription": "logged", \n\u202f \u202f \u202f \u202f "status": { \n\u202f \u202f \u202f \u202f \u202f "date": "2022-08-11T10:42:14.213+01:00", \n\u202f \u202f \u202f \u202f \u202f "operatingHours": 3213.9, \n\u202f \u202f \u202f \u202f \u202f "mileage": 65432 \n\u202f \u202f \u202f \u202f\n        } \n    }, \n\u202f \u202f \u202f "header": { \n\u202f \u202f \u202f \u202f "countingMethod": "TimeAtLevel", \n\u202f \u202f \u202f \u202f "channels": [ \n\u202f \u202f \u202f \u202f \u202f \u202f { \n\u202f \u202f \u202f \u202f \u202f \u202f \u202f \u202f "channelName": "TC_SU", \n\u202f \u202f \u202f \u202f \u202f \u202f \u202f \u202f "unit": "unit:degreeCelsius", \n\u202f \u202f \u202f \u202f \u202f \u202f \u202f \u202f "lowerLimit": 0.0, \n\u202f \u202f \u202f \u202f \u202f \u202f \u202f \u202f "upperLimit": 640.0, \n\u202f \u202f \u202f \u202f \u202f \u202f \u202f \u202f "numberOfBins": 128 \u202f \u202f \u202f \u202f \u202f\n            } \n        ], \n\u202f \u202f \u202f \u202f "countingValue": "Time", \n\u202f \u202f \u202f \u202f "countingUnit": "unit:secondUnitOfTime"\n    }, \n\u202f \u202f "body": {\n        "classes": [  \n\u202f \u202f \u202f \u202f {\n                "className": "TC_SU-class",\n                "classList": [\n                    14, \n            \u202f \u202f \u202f \u202f 15, \n            \u202f \u202f \u202f \u202f 16, \n            \u202f \u202f \u202f \u202f 17, \n            \u202f \u202f \u202f \u202f 18, \n            \u202f \u202f \u202f \u202f 19, \n            \u202f \u202f \u202f \u202f 20, \n            \u202f \u202f \u202f \u202f 21, \n            \u202f \u202f \u202f \u202f 22 \n                ]\n            }\n        ],\n        "counts": { \n\u202f \u202f \u202f \u202f "countsName": "Time",\n            "countsList": [\n                34968.93, \n\u202f \u202f \u202f \u202f         73972.51, \n\u202f \u202f \u202f \u202f         401315.15, \n        \u202f \u202f \u202f \u202f 4675505.56, \n        \u202f \u202f \u202f \u202f 2526898.35, \n        \u202f \u202f \u202f \u202f 864975.95, \n        \u202f \u202f \u202f \u202f 938365.35, \n        \u202f \u202f \u202f \u202f 1918920.77, \n        \u202f \u202f \u202f \u202f 135387.54 \n            ]\n        } \n    }\n'})}),"\n",(0,t.jsx)(n.h3,{id:"16-terminology",children:"1.6 TERMINOLOGY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Aspect Model\n: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect."}),"\n",(0,t.jsx)(n.p,{children:": Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model."}),"\n",(0,t.jsx)(n.p,{children:": Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing)."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"[Source: Catena-X, CX-0002, note 3 removed]"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cClassified Load Spectrum\u201d: Aspect model"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201ctargetComponentID\u201d: CX -ID of the assembly or component for which the load spectrum is valid for. It is necessary to identify the specific component."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cmetadata\u201d/\u201dMetadata\u201d: property/entity; Information on component, vehicle, load data origin and vehicle status"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201ccomponentDescription\u201d: property; identifier, might be used to find the right lifetime model"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cprojectDescription\u201d: property; identifier, might be used for information on specific vehicle"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201crouteDescription\u201d: property; identifier, might be used for information on specific application"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cstatus\u201d/\u201dStatusEntity\u201d: property/entity; actual vehicle status"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cdate\u201d: property; actual date at which the load spectrum is provided"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cmileage\u201d: property; mileage which the load spectrum covers, the unit is [km]"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201coperatingHours\u201d: property; number of operating hours which the load spectrum covers"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cheader\u201d/\u201dHeaderEntity\u201d: property/entity; classification information"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201ccountingMethod\u201d: property; enumeration describing the kind of counting: \u201cRainflow\u201d, \u201cLRD\u201d, \u201cEventCount\u201d, \u201cTimeAtLevel\u201d, \u201cRangeCount\u201d, \u201cPeakCount\u201d, \u201cMaximumCount\u201d."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201ccountingValue\u201d: property; optional, for example \u201cTime\u201d, if time is counted."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201ccountingUnit\u201d : property; dependent on counting value \u201cunit: s\u201d for time"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cchannels\u201d/\u201dLoadChannelEntity\u201d property/entity; list of load channels. Each list entry contains"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cchannelName\u201d: property; identifier of channel"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cunit\u201d: property; unit of the load, for example \u201cunit: degreeCelsius\u201d or \u201cunit: Nm\u201d"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201clowerLimit\u201d: property; lower limit of the load value"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cupperLimit\u201d: property; upper limit of the load value"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cnumerOfBins\u201d: property; number of load classes"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cbinLimits\u201d: property; optional, if a non-equidistant divisio"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cbody\u201d/\u201dBodySets\u201d: property/entity; lists of load dat"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cclasses\u201d/\u201dClassListEntity\u201d: property/entity; list of load channels, each entry in the list contains"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cclassName\u201d : here the channel is characterized by channel name. The name ics extended by \u201c-class\u201d. For a rainflow counting, a load channel has two class lists, the channel name must be extended with \u201c_from-class\u201d and \u201c_to-class\u201d"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cclassList\u201d: list of the load data"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201ccounts\u201d/\u201dCountsEntity\u201d: property/entity; counts name and list"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201ccountsName\u201d: Name of counting, for example \u201cNumberOfRevolutions\u201d or just \u201cCounts\u201d"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201ccountsList\u201d: property; list of the counting according to the classes in same position in \u201cclassList\u201d"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cresiduum\u201d/\u201dResiduumEntity\u201d: property/entity; for rainflow counted load spectra, a residuum stores the unclosed hysteresis loops."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cresiduumClassName\u201d: property; the name is according to the load channel name"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cresiduumClassList\u201d: property; the list of turning point classes belonging to unclosed hysteresis loops"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Additional terminology used in this standard can be looked up in the glossary on the association homepage."}),"\n",(0,t.jsx)(n.h2,{id:"2-aspect-model-classified-load-spectrum",children:"2 ASPECT MODEL \u201cCLASSIFIED LOAD SPECTRUM\u201d"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"21-introduction",children:"2.1 INTRODUCTION"}),"\n",(0,t.jsx)(n.p,{children:"ClassifiedLoadSpectrum is a standard to describe counted load data for specified component. Load spectra are used to estimate the lifetime. The standard is needed to exchange load data."}),"\n",(0,t.jsx)(n.h3,{id:"22-specification-artifacts",children:"2.2 SPECIFICATION ARTIFACTS"}),"\n",(0,t.jsxs)(n.p,{children:['The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification ',(0,t.jsx)(n.a,{href:"#32-non-normative-references",children:"SMT"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003\nas input for the semantic deriven workflow."}),"\n",(0,t.jsx)(n.p,{children:"Like all Catena-X data models, this model is available in a machine-readable format on GitHub\nconformant to CX-0003."}),"\n",(0,t.jsx)(n.h3,{id:"23-license",children:"2.3 LICENSE"}),"\n",(0,t.jsx)(n.p,{children:"This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons."}),"\n",(0,t.jsx)(n.h3,{id:"24-identifer-of-semantic-model",children:"2.4 IDENTIFER OF SEMANTIC MODEL"}),"\n",(0,t.jsx)(n.p,{children:"The semantic model has the unique identifier:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["urn:bamm",":io",".catenax.classified_load_spectrum:1.0.0"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This identifier ",(0,t.jsx)(n.strong,{children:"MUST"})," be used by the data provider to define the semantics of the data being transferred."]}),"\n",(0,t.jsx)(n.h3,{id:"25-formats-of-semantic-model",children:"2.5 FORMATS OF SEMANTIC MODEL"}),"\n",(0,t.jsx)(n.h4,{id:"251-rdf-turtle",children:"2.5.1 RDF Turtle"}),"\n",(0,t.jsx)(n.p,{children:"The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. The file can be found here:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.classified_load_spectrum/1.0.0/ClassifiedLoadSpectrum.ttl",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.classified_load_spectrum/1.0.0/ClassifiedLoadSpectrum.ttl"})}),"\n",(0,t.jsx)(n.p,{children:"The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation\nof other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel\nTemplate or a HTML documentation."}),"\n",(0,t.jsx)(n.h4,{id:"252-json-schema",children:"2.5.2 JSON Schema"}),"\n",(0,t.jsx)(n.p,{children:'A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only\npayload of the Asset Administration Shell for the API operation "GetSubmodel".'}),"\n",(0,t.jsx)(n.h4,{id:"253-aasx",children:"2.5.3 aasx"}),"\n",(0,t.jsxs)(n.p,{children:["An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested\nartifacts for a Submodel Template Specification conformant to [",(0,t.jsx)(n.a,{href:"#32-non-normative-references",children:"SMT"}),"]."]}),"\n",(0,t.jsx)(n.p,{children:"Note: As soon as the specification V3.0 of the Asset Administration Shell specfication is available\nan update will be provided."}),"\n",(0,t.jsx)(n.h3,{id:"26-semantic-model",children:"2.6 SEMANTIC MODEL"}),"\n",(0,t.jsx)(n.p,{children:"The data model is described in SAMM. A html documentation can be generated from the rdf turtle file"}),"\n",(0,t.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,t.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CX-0018 Eclipse Data Space Connector (EDC)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CX-0003 SAMM Aspect Meta Model"}),"\n",(0,t.jsx)(n.li,{children:"CX-0004 Governance Process for Semantic Models"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,t.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,t.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,t.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(96540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);