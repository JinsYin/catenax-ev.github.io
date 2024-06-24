"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[2993],{49152:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(74848),t=i(28453);const r={},a="CX-0005 Item Relationship Service API 2.0.0",l={id:"standards/CX-0005-ItemRelationshipServiceAPI/CX-0005-ItemRelationshipServiceAPI",title:"CX-0005 Item Relationship Service API 2.0.0",description:"FOR WHOM IS THE STANDARD DESIGNED",source:"@site/versioned_docs/version-24.03/standards/CX-0005-ItemRelationshipServiceAPI/CX-0005-ItemRelationshipServiceAPI.md",sourceDirName:"standards/CX-0005-ItemRelationshipServiceAPI",slug:"/standards/CX-0005-ItemRelationshipServiceAPI/",permalink:"/docs/standards/CX-0005-ItemRelationshipServiceAPI/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0004 Governance Process for Aspect models v1.0.1",permalink:"/docs/standards/CX-0004-GovernanceProcess/"},next:{title:"CX-0006 Registration and Initial Onboarding v1.1.3",permalink:"/docs/standards/CX-0006-RegistrationAndInitialOnboarding/"}},o={},c=[{value:"FOR WHOM IS THE STANDARD DESIGNED",id:"for-whom-is-the-standard-designed",level:2},{value:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD",id:"comparison-with-the-previous-version-of-the-standard",level:2},{value:"ABSTRACT",id:"abstract",level:2},{value:"1 INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT AND ARCHITECTURE FIT",id:"12-context-and-architecture-fit",level:3},{value:"1.3 CONFORMANCE AND PROOF OF CONFORMITY",id:"13-conformance-and-proof-of-conformity",level:3},{value:"1.4 EXAMPLES",id:"14-examples",level:3},{value:"1.5 TERMINOLOGY",id:"15-terminology",level:3},{value:"2 Item Relationship Service API",id:"2-item-relationship-service-api",level:2},{value:"2.1 PRECONDITIONS AND DEPENDENCIES",id:"21-preconditions-and-dependencies",level:2},{value:"2.2 API SPECIFICATION",id:"22-api-specification",level:2},{value:"2.2.1 API ENDPOINTS &amp; RESOURCES",id:"221-api-endpoints--resources",level:3},{value:"2.2.2 AVAILABLE DATA TYPES",id:"222-available-data-types",level:3},{value:"2.2.3 EDC DATA ASSET STRUCTURE",id:"223-edc-data-asset-structure",level:3},{value:"2.2.4 ERROR HANDLING",id:"224-error-handling",level:3},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"cx-0005-item-relationship-service-api-200",children:"CX-0005 Item Relationship Service API 2.0.0"}),"\n",(0,s.jsx)(n.h2,{id:"for-whom-is-the-standard-designed",children:"FOR WHOM IS THE STANDARD DESIGNED"}),"\n",(0,s.jsx)(n.h2,{id:"comparison-with-the-previous-version-of-the-standard",children:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Relevant only for existing standards. At the new standard, please delete"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,s.jsx)(n.p,{children:"Today, a large amount of data is stored among different participants in a supply chain of an\nindustry. The value of the data can be enhanced immensely by connecting the data to their related\ncontext."}),"\n",(0,s.jsx)(n.p,{children:"To enable cross-enterprise linked data, standards such as aspect models, standardized protocols, and\nstandardized ways to connect the data are applied. One of the first FOSS solutions to be developed\nin Catena-X for accessing cross-enterprise linked data is the Item Relationship Service. This\ndocument aims to standardize the API of the service so that any new participant can access this\ninterface to build new solutions based on data chains. Connected data, so-called data chains, are\nseen as a valuable asset for the consortia that serve as an enabler technology for other Use-Cases\nto build solutions on."}),"\n",(0,s.jsx)(n.h2,{id:"1-introduction",children:"1 INTRODUCTION"}),"\n",(0,s.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"List for which roles the standard is relevant:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Core Service Provider"}),"\n",(0,s.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n",(0,s.jsx)(n.li,{children:"Business Application Provider"}),"\n",(0,s.jsx)(n.li,{children:"Enablement Service Provider"}),"\n",(0,s.jsx)(n.li,{children:"Consulting Services Provider"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This Standard applies for Applications, which want to access Data Chains, and provide an\ninteroperable Solution for the Catena-X Network. To the time being of writing this document there\nare Traceability Aspect Models which build data chains. So, this applies to the Traceability Business\nDomain."}),"\n",(0,s.jsx)(n.h3,{id:"12-context-and-architecture-fit",children:"1.2 CONTEXT AND ARCHITECTURE FIT"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This standardization is built upon existing standards, such as"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'\u201cEDC Discovery API" [CX-0001]'}),"\n",(0,s.jsx)(n.li,{children:"\u201cDigital Twins in Catena-X\u201c [CX-0002]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cSAMMSemanticAspectMetaModel\u201c [CX-0003]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cBusinessPartnerNumber\u201c [CX-0010]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cEclipse Dataspace Connector (EDC)\u201d [CX-0018]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cAspect Model: SerialPart\u201d [CX-0019]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cAspect Model: SingleLevelBomAsBuilt\u201d [CX-0020]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cAspect Model: Batch\u201d [CX-0021]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cImplementation Specification: Data Provisioning for Release 2\u201d [CX-0024]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cAspect Model: DataModelBoMAsSpecified\u201c [CX-0030]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cAspect Model: DataModelPartAsSpecified\u201c [CX-0032]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cAspect Model: SingleLevelBomAsPlanned\u201d [CX-0042]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cAspect Model: PartAsPlanned\u201d [CX-0043]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cTraceability-BoMAs-BuiltTriangle\u201c [CX-0060]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cTraceabilityDataProvisioningBoMAs-PlannedTriangle\u201c [CX-0061]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cAspectModel: PartSiteInformationAsPlanned\u201c [CX-0094]"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"further Aspects which conclude in connecting Digital Twins between each other will be added to the Semantic Hub."}),"\n",(0,s.jsx)(n.p,{children:"Currently, no open Standard exists, which addresses this issue, based on the combination of the used\nstandards like Aspect Models, AAS (AssetAdministrationShell), EDC (Eclipse Dataspace Connector), and the Implementation specification it is a solution fit to\nthe needs of Catena-X to simplify the interactions with data chains."}),"\n",(0,s.jsx)(n.p,{children:"This API has been designed to provide Interoperability within Catena-X on a Data Chain layer. Currently,\nthis is being developed in the Tractus-X Eclipse FOSS project."}),"\n",(0,s.jsx)(n.p,{children:"The IRS iterates through multiple digital twin aspects, which are representing a relationship. An example\naspect is the SingleLevelBOMasBuilt aspect, which connects serialized parts with each other, across company\nboundaries. This service is accessing the aspects of digital twins for which an EDC policy and data contract\nmust exist."}),"\n",(0,s.jsx)(n.p,{children:"The following general conditions apply:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Access control through policies and contracts by the EDC"}),"\n",(0,s.jsx)(n.li,{children:"Direct data exchange between supply-chain partners"}),"\n",(0,s.jsx)(n.li,{children:"Catena-X partners of the accessible value chain are known to the data-consumer"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://eclipse-tractusx.github.io/assets/images/irs-minified-037c600ef69262ad0681b600c0cb3d85.svg",alt:"irs-overview.png"}),"\n",(0,s.jsx)(n.em,{children:"Figure 1: IRS in iterative mode"})]}),"\n",(0,s.jsx)(n.h3,{id:"13-conformance-and-proof-of-conformity",children:"1.3 CONFORMANCE AND PROOF OF CONFORMITY"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams,\nexamples, and notes in this specification are non-normative. Everything else in\nthis specification is normative."}),"\n",(0,s.jsxs)(n.p,{children:["The key words ",(0,s.jsx)(n.strong,{children:"MAY"}),", ",(0,s.jsx)(n.strong,{children:"MUST"}),", ",(0,s.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,s.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,s.jsx)(n.strong,{children:"RECOMMENDED"}),",\n",(0,s.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,s.jsx)(n.strong,{children:"SHOULD"})," and ",(0,s.jsx)(n.strong,{children:"SHOULD NOT"})," in this document document are to be\ninterpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they\nappear in all capitals, as shown here."]}),"\n",(0,s.jsx)(n.p,{children:"All participants and their solutions will need to proof, that they are conform\nwith the Catena-X standards. To validate that the standards are applied\ncorrectly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,s.jsx)(n.p,{children:"To proof conformity with the IRS API Standard provide the following assets to a conformity assessment\nbody:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["API Response of the Implementation ",(0,s.jsx)(n.strong,{children:"MUST"})," match to the response structure of the API Documentation more information in the ",(0,s.jsx)(n.a,{href:"https://eclipse-tractusx.github.io/docs-kits/kits/Data%20Chain%20Kit/Adoption%20View%20Data%20Chain%20Kit",children:"Data Chain KIT"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"14-examples",children:"1.4 EXAMPLES"}),"\n",(0,s.jsxs)(n.p,{children:["Examples and further information are being shared in the ",(0,s.jsx)(n.a,{href:"https://eclipse-tractusx.github.io/docs-kits/kits/Data%20Chain%20Kit/Adoption%20View%20Data%20Chain%20Kit",children:"Data Chain KIT"}),"\nand in the ",(0,s.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/item-relationship-service",children:"Tractus-X Github Repository"})]}),"\n",(0,s.jsx)(n.h3,{id:"15-terminology",children:"1.5 TERMINOLOGY"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Business Partner Number (BPN)\n: A BPN is the unique identifier of a partner within Catena-X"}),"\n",(0,s.jsx)(n.p,{children:"InternationalDataSpace(IDS)\n: InternationalDataSpace and its protocol for datae xchange foresees an compliant\nconnector handling contract negotiations before each data transfer and defines a general architecture for data exchange."}),"\n",(0,s.jsx)(n.p,{children:"EclipseDataspaceConnector(EDC)\n: The EDC is a reference implementation for an IDS compliant connector currently acting as a\nde-facto standard and/or reference Implementation within Catena-X"}),"\n",(0,s.jsx)(n.p,{children:"Additional terminology used in this standard can be looked up in the glossary on\nthe association homepage."}),"\n",(0,s.jsx)(n.h2,{id:"2-item-relationship-service-api",children:"2 Item Relationship Service API"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The IRS API follows the Apache 2.0 licenses.\nThe Item Relationship Service API is implemented as a RESTful API following the OpenAPI 3.0 specification\nin JSON format. It covers initiating, retrieving, and controlling the lifecycle of a data chain\nretrieval processes. We use the OpenAPI standard to align on the industry standards for illustrating\nRESTful APIs."}),"\n",(0,s.jsx)(n.h2,{id:"21-preconditions-and-dependencies",children:"2.1 PRECONDITIONS AND DEPENDENCIES"}),"\n",(0,s.jsxs)(n.p,{children:["The IRS API and the IRS App ",(0,s.jsx)(n.strong,{children:"MUST"})," be connected to an EDC in order to consume data offers within the Catena-X data space. It will handle the access and usage control so that a data sovereign data space can be provided"]}),"\n",(0,s.jsxs)(n.p,{children:["The data accessed and consolidated via the IRS ",(0,s.jsx)(n.strong,{children:"MUST"})," be accessible via EDC Assets by data providers; \u201cEclipse Dataspace Connector (EDC)\u201d [CX-0018] and be registered via the Registry Service (Digital Twin Registry) [CX\u20130002]."]}),"\n",(0,s.jsx)(n.p,{children:"The Aspects to traverse along data chains are built upon the data chain aspect template. Aspect models such as the SingleLevelBOMasBuilt [CX-0020] is built upon that. The IRS API uses that information to build connected data chains.\nTo find the correct assets within a data space the Digital Twin registry is beeing used. These preconditions need to be met, so that the IRS API works accordingly."}),"\n",(0,s.jsx)(n.h2,{id:"22-api-specification",children:"2.2 API SPECIFICATION"}),"\n",(0,s.jsx)(n.h3,{id:"221-api-endpoints--resources",children:"2.2.1 API ENDPOINTS & RESOURCES"}),"\n",(0,s.jsxs)(n.p,{children:["The openAPI documentation is formulated here [IRS API 2.1.0](",(0,s.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/item-relationship-service/blob/3.5.2/docs/src/api/irs-api.yaml",children:"IRS API"}),")\nThe following Endpoints ",(0,s.jsx)(n.strong,{children:"MUST"})," be implemented as described in the openAPI document:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["ItemRelationshipService","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"POST /irs/jobs"}),"\n",(0,s.jsx)(n.li,{children:"GET  /irs/jobs"}),"\n",(0,s.jsx)(n.li,{children:"PUT  /irs/jobs/{id}"}),"\n",(0,s.jsx)(n.li,{children:"GET  /irs/jobs/{id}"}),"\n",(0,s.jsx)(n.li,{children:"POST /irs/orders"}),"\n",(0,s.jsx)(n.li,{children:"PUT  /irs/orders/{orderId}"}),"\n",(0,s.jsx)(n.li,{children:"GET  /irs/orders/{orderId}/batches/{batchId}"}),"\n",(0,s.jsx)(n.li,{children:"GET  /irs/orders/{orderId}"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The following Endpoints ",(0,s.jsx)(n.strong,{children:"SHOULD"})," be implemented as described in the openAPI document:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["ItemRelationshipService","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"GET /irs/policies"}),"\n",(0,s.jsx)(n.li,{children:"POST /irs/policies"}),"\n",(0,s.jsx)(n.li,{children:"PUT /irs/policies/{policyId}"}),"\n",(0,s.jsx)(n.li,{children:"DELETE /irs/policies/{policyId}"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The following Endpoints ",(0,s.jsx)(n.strong,{children:"OPTIONAL"})," be implemented as described in the openAPI document:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["EnvironmentalAndSocialStandards","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"GET /ess/bpn/investigations/{id}"}),"\n",(0,s.jsx)(n.li,{children:"POST /ess/notification/receive"}),"\n",(0,s.jsx)(n.li,{children:"POST /ess/bpn/investigations"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["AspectModels","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"GET /irs/aspectmodels"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"222-available-data-types",children:"2.2.2 AVAILABLE DATA TYPES"}),"\n",(0,s.jsxs)(n.p,{children:["The API ",(0,s.jsx)(n.strong,{children:"MUST"})," use JSON as the payload transported via HTTPS(TLS)."]}),"\n",(0,s.jsx)(n.h3,{id:"223-edc-data-asset-structure",children:"2.2.3 EDC DATA ASSET STRUCTURE"}),"\n",(0,s.jsx)(n.p,{children:"Not applicable for this document"}),"\n",(0,s.jsx)(n.h3,{id:"224-error-handling",children:"2.2.4 ERROR HANDLING"}),"\n",(0,s.jsxs)(n.p,{children:["The following http response codes ",(0,s.jsx)(n.strong,{children:"MUST"})," be defined for IRS API endpoints:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"200:"})," The request succeeded"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"201:"})," The request succeeded and returns the expected result"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"206:"})," This is sent when a partial result of a resource is being sent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"400:"})," Bad Request - Requested operation in failed state."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"401:"})," Unauthorized - No valid authentication credentials."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"403:"})," Forbidden - Authorization refused by server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"404:"})," Not Found - Requested resource not found"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/item-relationship-service/blob/3.5.2/docs/src/api/irs-api.yaml",children:"IRS API 2.1.0"}),"\nMore information for each endpoint can be extracted from the IRS API documentation."]}),"\n",(0,s.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,s.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Digital Twins in Catena-X [CX\u20130002]"}),"\n",(0,s.jsx)(n.li,{children:"Eclipse Dataspace Connector (EDC) [CX-0018]"}),"\n",(0,s.jsx)(n.li,{children:"Implementation Specification: Data Provisioning for Release 2 [CX - 0024]"}),"\n",(0,s.jsx)(n.li,{children:"Traceability-BoMAs-BuiltTriangle [CX-0060]"}),"\n",(0,s.jsx)(n.li,{children:"TraceabilityDataProvisioningBoMAs-PlannedTriangle [CX-0061]"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u201cAspect Model: SerialPart\u201c [CX-0019]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cAspect Model: SingleLevelBOMasBuilt\u201c [CX-0020]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cAspect Model: Batch\u201c [CX-0021]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cAspect Model: DataModelBoMAsSpecified\u201c [CX-0030]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cAspect Model: DataModelPartAsSpecified\u201c [CX-0032]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cAspect Model: SingleLevelBomAsPlanned\u201c [CX-0042]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cAspect Model: PartAsPlanned\u201c [CX-0043]"}),"\n",(0,s.jsx)(n.li,{children:"\u201cAspectModel: PartSiteInformationAsPlanned\u201c [CX-0094]"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://catena-x.net/en/offers/item-relationship-service",children:"Item Relationship Service (Publication on website)"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The code found at ",(0,s.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/item-relationship-service",children:"https://github.com/eclipse-tractusx/item-relationship-service"}),"\nrepresents a reference implementation that implements this standard."]}),"\n",(0,s.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,s.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"    [OPTIONAL] Add figures here if necessary. Please delete if no figures are provided\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"    [OPTIONAL] Add Tables here here if necessary. Please delete if no tables are provided\n"})}),"\n",(0,s.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,s.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,s.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var s=i(96540);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);