"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[9757],{55331:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=t(74848),s=t(28453);const r={},a="CX-0018 Dataspace Connectivity v3.0.0",c={id:"standards/CX-0018-DataspaceConnectivity/CX-0018-DataspaceConnectivity",title:"CX-0018 Dataspace Connectivity v3.0.0",description:"ABSTRACT",source:"@site/docs/standards/CX-0018-DataspaceConnectivity/CX-0018-DataspaceConnectivity.md",sourceDirName:"standards/CX-0018-DataspaceConnectivity",slug:"/standards/CX-0018-DataspaceConnectivity/",permalink:"/docs/next/standards/CX-0018-DataspaceConnectivity/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0014 Employees and Technical Users v1.0.1",permalink:"/docs/next/standards/CX-0014-EmployeesAndTechnicalUsers/"},next:{title:"CX-0027 Product Carbon Footprint Aspect Model v1.0.0",permalink:"/docs/next/standards/CX-0027-ProductCarbonFootprintAspectModel/"}},d={},o=[{value:"ABSTRACT",id:"abstract",level:2},{value:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD",id:"comparison-with-the-previous-version-of-the-standard",level:2},{value:"1 INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"AUDIENCE",id:"audience",level:4},{value:"SCOPE",id:"scope",level:4},{value:"1.2 CONTEXT AND ARCHITECTURE FIT",id:"12-context-and-architecture-fit",level:3},{value:"1.3 CONFORMANCE AND PROOF OF CONFORMITY",id:"13-conformance-and-proof-of-conformity",level:3},{value:"1.4 TERMINOLOGY",id:"14-terminology",level:3},{value:"2 MAIN CONTENT",id:"2-main-content",level:2},{value:"2.1 Communication between Dataspace Participants",id:"21-communication-between-dataspace-participants",level:3},{value:"2.2 Transfer Type Profiles",id:"22-transfer-type-profiles",level:3},{value:"2.2.1 HttpData-PULL",id:"221-httpdata-pull",level:4},{value:"2.2.2 AmazonS3-PUSH",id:"222-amazons3-push",level:4},{value:"2.3 Communication with a Credential Service",id:"23-communication-with-a-credential-service",level:3},{value:"2.4 Conventions for Policy Constraints",id:"24-conventions-for-policy-constraints",level:3},{value:"2.5 Conventions for Datasets",id:"25-conventions-for-datasets",level:3},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"Legal",id:"legal",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cx-0018-dataspace-connectivity-v300",children:"CX-0018 Dataspace Connectivity v3.0.0"}),"\n",(0,i.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,i.jsx)(n.p,{children:"This document specifies the communication requirements for data exchange between participants in the Catena-X data\necosystem. The aim is to ensure interoperability and data sovereignty at the same time."}),"\n",(0,i.jsx)(n.h2,{id:"comparison-with-the-previous-version-of-the-standard",children:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In order to avoid lock-in effects, this standard intentionally does ",(0,i.jsx)(n.strong,{children:"not"})," describe a specific component (like the\nEclipse Dataspace Connector in the last version), but how such a communication component must behave in order to be\ncertified for the Catena-X data space."]}),"\n",(0,i.jsx)(n.li,{children:"Adopt pinned versions of IATP, DSP, policy definitions"}),"\n",(0,i.jsx)(n.li,{children:"Specify HTTPS and AmazonS3 transfer processes"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1 INTRODUCTION"}),"\n",(0,i.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"audience",children:"AUDIENCE"}),"\n",(0,i.jsxs)(n.p,{children:["The role definition is based on the definition of\nthe ",(0,i.jsx)(n.a,{href:"https://catena-x.net/fileadmin/_online_media_/CX_Operating_Modelv2.1_final.pdf",children:"CX Operating Model v2.1"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The standard is relevant for the following roles, as they must be certified against it:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Core Service Provider (A/B)"}),"\n",(0,i.jsx)(n.li,{children:"Enablement Service Provider"}),"\n",(0,i.jsx)(n.li,{children:"Business Application Provider"}),"\n",(0,i.jsx)(n.li,{children:"Data Provider/Consumer"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'Note: The normative section of this standard uses the DSP-definitions of "Consumer" and "Provider". Any of the\naforementioned Catena-X-roles can assume either DSP-role.'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The standard is relevant for the following role, as they must certify against this standard:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Conformity Assessment Body"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The standard is relevant for the following role, as they carry out their advisory on the basis of this standard."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advisory Provider"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"scope",children:"SCOPE"}),"\n",(0,i.jsx)(n.p,{children:"This document covers the requirements for dataspace connectivity. It describes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"how communication between dataspace participants must take place,"}),"\n",(0,i.jsx)(n.li,{children:"which transfer type profiles must be used,"}),"\n",(0,i.jsx)(n.li,{children:"how communication with credential services must take place,"}),"\n",(0,i.jsx)(n.li,{children:"which conventions apply with regard to policy constraints"}),"\n",(0,i.jsx)(n.li,{children:"and which conventions apply to datasets."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"12-context-and-architecture-fit",children:"1.2 CONTEXT AND ARCHITECTURE FIT"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The connector is the main technical component that implements dataspace connectivity including data sovereignty and\ninterorganizational interoperability. It is part of the enablement services, which are intended to enable participation\nin the Catena-X ecosystem. More information about the Enablement Services can be found under\nthe ",(0,i.jsx)(n.a,{href:"https://catena-x.net/fileadmin/_online_media_/231006_Whitepaper_EnablementServices.pdf",children:"Whitepaper Enablement Services"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The following figure shows how the connector fits into the overall framework of Catena-X to exchange data."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Framework of data exchange",src:t(71034).A+"",width:"1287",height:"438"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Figure 1: Framework of data exchange"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Note: At time of the release, the Identity Wallet solution is not decentralized yet. However, this standard already\nprovides most of the infrastructure to operate Wallets (IATP-Credential-Services) in a distributed manner.\nMore information about the SSI-infrastructure can be found in the relevant standards."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"13-conformance-and-proof-of-conformity",children:"1.3 CONFORMANCE AND PROOF OF CONFORMITY"}),"\n",(0,i.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this\nspecification are non-normative. Everything else in this specification is normative."}),"\n",(0,i.jsxs)(n.p,{children:["The key words ",(0,i.jsx)(n.strong,{children:"MAY"}),", ",(0,i.jsx)(n.strong,{children:"MUST"}),", ",(0,i.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,i.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,i.jsx)(n.strong,{children:"RECOMMENDED"}),", ",(0,i.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,i.jsx)(n.strong,{children:"SHOULD"})," and **SHOULD NOT\n**\nin this document are to be interpreted as described in BCP 14 RFC2119, RFC8174 when, and only when, they\nappear in all capitals, as shown here."]}),"\n",(0,i.jsx)(n.h3,{id:"14-terminology",children:"1.4 TERMINOLOGY"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Term"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Reference"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"International Data Spaces Association (IDSA)"}),(0,i.jsx)(n.td,{children:"Organisation that provides standards and architecture solutions for secure, sovereign data sharing within so-called dataspaces"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://internationaldataspaces.org",children:"https://internationaldataspaces.org"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Dataspace Protocol (DSP)"}),(0,i.jsx)(n.td,{children:"Set of specifications designed to facilitate interoperable data sharing within a dataspace, currently governed by the IDSA"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/International-Data-Spaces-Association/ids-specification",children:"https://github.com/International-Data-Spaces-Association/ids-specification"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Connector"}),(0,i.jsx)(n.td,{children:"(Catena-X) Technical component that allows business applications to interact with each other within a dataspace"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/tractusx-edc",children:"https://github.com/eclipse-tractusx/tractusx-edc"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"(Catena-X) Business Applications"}),(0,i.jsx)(n.td,{children:"(Catena-X) Applications that enable functionality of different use cases, hosted by a data provider or consumer itself or by a business application provider"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://eclipse-tractusx.github.io/developer",children:"https://eclipse-tractusx.github.io/developer"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Catena-X Marketplace"}),(0,i.jsx)(n.td,{children:"The Marketplace inside a portal, allowing participants of the Catena-X network to search and select Catena-X Business Applicactions"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/en/offers/portal-marketplace",children:"https://catena-x.net/en/offers/portal-marketplace"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Business Partner Number (BPN)"}),(0,i.jsx)(n.td,{children:"Every participant in the Catena-X network has a unique, unchangeable identifier, called business partner number (BPN). The legal entity of an organization is represented by the Business Partner Number Legal Entity (BPNL)"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX - 0010 Business Partner Number"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Data Catalog Vocabulary (DCAT)"}),(0,i.jsx)(n.td,{children:"RDF vocabulary designed to facilitate interoperability between data catalogs published on the Web"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/vocab-dcat-3",children:"https://www.w3.org/TR/vocab-dcat-3"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Open Data Rights Language (ODRL)"}),(0,i.jsx)(n.td,{children:"Policy expression language that provides a flexible and interoperable information model, vocabulary, and encoding mechanisms for representing statements about the usage of content and services"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/odrl-model",children:"https://www.w3.org/TR/odrl-model"}),", ",(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/odrl-vocab",children:"https://www.w3.org/TR/odrl-vocab"}),", ",(0,i.jsx)(n.a,{href:"https://w3c.github.io/odrl/bp",children:"https://w3c.github.io/odrl/bp"})]})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The terms ",(0,i.jsx)(n.em,{children:"Connector, Provider, Participant Agent"})," are adopted from the DSP."]}),"\n",(0,i.jsxs)(n.li,{children:["The term ",(0,i.jsx)(n.em,{children:"Credential Service"})," is adopted from the IATP."]}),"\n",(0,i.jsxs)(n.li,{children:["The terms ",(0,i.jsx)(n.em,{children:"Core Service Provider A/B (CSP A/B)"}),", ",(0,i.jsx)(n.em,{children:"Onboarding Service Provider (OSP)"}),", ",(0,i.jsx)(n.em,{children:"Enablement Service Provider (\nESP)"}),", ",(0,i.jsx)(n.em,{children:"Business Application Provider (BAP)"}),", ",(0,i.jsx)(n.em,{children:"Advisory Provider (AP)"})," and ",(0,i.jsx)(n.em,{children:"Conformity Assessment Body (CAB)"})," are\nadopted from   the ",(0,i.jsx)(n.a,{href:"https://catena-x.net/fileadmin/_online_media_/CX_Operating_Modelv2.1_final.pdf",children:"CX Operating Model v2.1"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"2-main-content",children:"2 MAIN CONTENT"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This section uses the following prefixes as abbreviations for namespaces"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'"dct": "http://purl.org/dc/terms/"'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'"dspace": "https://w3id.org/dspace/2024/1/"'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'"odrl": "https://www.w3.org/ns/odrl/2/"'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'"dcat": "http://www.w3.org/ns/dcat#"'})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"21-communication-between-dataspace-participants",children:"2.1 Communication between Dataspace Participants"}),"\n",(0,i.jsxs)(n.p,{children:["Dataspace ",(0,i.jsx)(n.em,{children:"Participants"})," exchange data via their ",(0,i.jsx)(n.em,{children:"Participant Agents"}),". They are a logical component that communicates\nvia a set of well-defined messages."]}),"\n",(0,i.jsxs)(n.p,{children:["Participant Agents MUST facilitate data exchange according to the HTTPS binding defined in the ",(0,i.jsx)(n.a,{href:"#31-normative-references",children:"Dataspace Protocol\n2024-01"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Providers and Consumer MUST expose the specified endpoints for the"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Catalog Protocol"}),"\n",(0,i.jsx)(n.li,{children:"Contract Negotiation Protocol"}),"\n",(0,i.jsx)(n.li,{children:"Transfer Process Protocol"}),"\n",(0,i.jsx)(n.li,{children:"Version Metadata"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"as specified in the HTTPS binding of the Dataspace Protocol 2024-01."}),"\n",(0,i.jsx)(n.h3,{id:"22-transfer-type-profiles",children:"2.2 Transfer Type Profiles"}),"\n",(0,i.jsxs)(n.p,{children:["In their ",(0,i.jsx)(n.code,{children:"dcat:Catalog"})," response to a ",(0,i.jsx)(n.code,{children:"dspace:CatalogRequestMessage"}),", for each Dataset, a Provider MUST return a\n",(0,i.jsx)(n.code,{children:"dcat:Distribution"})," signifying what Transfer Profile a Consumer can use to obtain data."]}),"\n",(0,i.jsxs)(n.p,{children:["Providers MUST be able to serve data according to that signal when data transfer is requested by a consumer\nvia a ",(0,i.jsx)(n.code,{children:"dspace:TransferRequestMessage"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Despite the IRIs ",(0,i.jsx)(n.code,{children:"dspace:HttpData-PULL"})," and ",(0,i.jsx)(n.code,{children:"dspace:AmazonS3-PUSH"})," are not yet included in the DSP-context, they will\nbe used as preliminary identifiers."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Providers MAY offer any of the following Transfer Type Profiles:"}),"\n",(0,i.jsx)(n.h4,{id:"221-httpdata-pull",children:"2.2.1 HttpData-PULL"}),"\n",(0,i.jsxs)(n.p,{children:["A Consumer MUST send a ",(0,i.jsx)(n.code,{children:"dspace:TransferRequestMessage"})," with ",(0,i.jsx)(n.code,{children:"dct:format"}),":",(0,i.jsx)(n.code,{children:"dspace:HttpData-PULL"})," and an\nempty ",(0,i.jsx)(n.code,{children:"dspace:dataAddress"})," property."]}),"\n",(0,i.jsxs)(n.p,{children:["A Provider MUST send a ",(0,i.jsx)(n.code,{children:"dspace:TransferStartMessage"})," with sufficient information in the ",(0,i.jsx)(n.code,{children:"dspace:dataAddress"})," property so\nthat a request to the ",(0,i.jsx)(n.code,{children:"dspace:endpoint"})," may succeed when decorated with HTTP-headers constructed from\nthe ",(0,i.jsx)(n.code,{children:"dspace:endpointProperties"}),"' with ",(0,i.jsx)(n.code,{children:"dspace:name"})," as key and ",(0,i.jsx)(n.code,{children:"dspace:value"})," as value respectively."]}),"\n",(0,i.jsx)(n.p,{children:"A Provider Connector MUST ensure that the requested backend system has sufficient context from the negotiation\nto evaluate the legitimacy of the request."}),"\n",(0,i.jsx)(n.p,{children:"A Consumer may then use the provided data to execute requests against the endpoint."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Despite the token, the endpoint still has the right to refuse serving a request. This may occur for instance when\na consumer attempts to PUT against a resource but is only allowed to GET."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"222-amazons3-push",children:"2.2.2 AmazonS3-PUSH"}),"\n",(0,i.jsxs)(n.p,{children:["A Consumer MUST send a ",(0,i.jsx)(n.code,{children:"dspace:TransferRequestMessage"})," with ",(0,i.jsx)(n.code,{children:"dct:format"}),":",(0,i.jsx)(n.code,{children:"dspace:AmazonS3-PUSH"})," and\na ",(0,i.jsx)(n.code,{children:"dspace:dataAddress"})," property\nso that triggering a transfer to the ",(0,i.jsx)(n.code,{children:"dspace:endpoint"})," decorated with the data relevant ",(0,i.jsx)(n.code,{children:"dspace:endpointProperties"})," may\nsucceed."]}),"\n",(0,i.jsxs)(n.p,{children:["A Provider MUST send a ",(0,i.jsx)(n.code,{children:"dspace:TransferStartMessage"})," and an empty ",(0,i.jsx)(n.code,{children:"dspace:dataAddress"})," property. He MUST execute a\ntransfer\nas specified by the received request."]}),"\n",(0,i.jsx)(n.h3,{id:"23-communication-with-a-credential-service",children:"2.3 Communication with a Credential Service"}),"\n",(0,i.jsx)(n.p,{children:"This standard assumes that each Participant has been issued a set of Verifiable Credentials (VCs) according to the\nrelevant\nCatena-X standards. These VCs are stored in a Credential Service."}),"\n",(0,i.jsx)(n.p,{children:"A Consumer MUST be able to retrieve an access token according to the Verifiable Presentation Protocol (VPP) that is part\nof the IATP (Identity and Trust Protocol). This corresponds to Request 1 in the presentation flow where this Consumer\nacts as Client."}),"\n",(0,i.jsx)(n.p,{children:"A Provider MUST be able to receive and securely verify an access token and derive information on a Consumer's\nCredential Service in order to execute IATP VPP Request 4. This corresponds to the role of Verifier."}),"\n",(0,i.jsx)(n.h3,{id:"24-conventions-for-policy-constraints",children:"2.4 Conventions for Policy Constraints"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"odrl:Offer"})," objects contained in a ",(0,i.jsx)(n.code,{children:"dcat:Catalog"})," SHOULD carry ",(0,i.jsx)(n.code,{children:"odrl:Constraint"}),"s that are specified in the\n",(0,i.jsx)(n.a,{href:"#31-normative-references",children:"CX-ODRL-Profile"}),". Subsequent standards are encouraged to specify further\nrestrictions of said profile, especially on the ",(0,i.jsx)(n.code,{children:"odrl:rightOperand"}),"s. The following list compiles a set of well-defined\npolicies that Participants SHOULD include in their offers and guidance on how to check them."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"leftOperand (expanded IRI)"}),(0,i.jsxs)(n.th,{children:["operator ",(0,i.jsx)("br",{})," (compacted IRI)"]}),(0,i.jsx)(n.th,{children:"valid rightOperands (literal)"}),(0,i.jsx)(n.th,{children:"validation mechanism"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MembershipConstraint"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"https://w3id.org/catenax/policy/Membership"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"odrl:eq"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"active"})}),(0,i.jsx)(n.td,{children:"Membership Credential (CX - 0149)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UseCaseConstraints"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"https://w3id.org/catenax/policy/FrameworkAgreement"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"odrl:eq"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"[usecasename]:[version]"})}),(0,i.jsxs)(n.td,{children:["UseCaseFrameworkAgreementCredential (CX - 0050)",(0,i.jsx)("br",{}),"The exact mapping logic from credential and to rightOperand specified in ",(0,i.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/tractusx-profiles/blob/64f83dde1432573db456500f091f223929d43307/cx/policy/specs/policy.mapping.md",children:"tractusx-profiles"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ContractReferenceConstraint"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"https://w3id.org/catenax/policy/ContractReference"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"odrl:eq"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"[string]:[version]"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"unchecked"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UsagePurposeConstraint"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"https://w3id.org/catenax/policy/UsagePurpose"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"odrl:eq"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"[string]:[version]"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"unchecked"})})]})]})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Note: The list is available in machine-readable form with links to the respective legal documents in the\ncatenax-ev/cx-odrl-profile repository."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Providers SHOULD chain constraints (if necessary) via ",(0,i.jsx)(n.code,{children:"odrl:and"}),". Examples can be found\nin ",(0,i.jsx)(n.a,{href:"#32-non-normative-references",children:"catenax-ev/cx-odrl-profiles"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Providers MUST perform access control checks on their data offers as a ",(0,i.jsx)(n.code,{children:"dcat:Catalog"})," object may expose\ninformation restricted by governance and regulation."]}),"\n",(0,i.jsx)(n.h3,{id:"25-conventions-for-datasets",children:"2.5 Conventions for Datasets"}),"\n",(0,i.jsxs)(n.p,{children:["A Provider MUST annotate all instances ",(0,i.jsx)(n.code,{children:"dcat:Dataset"})," in a ",(0,i.jsx)(n.code,{children:"dcat:Catalog"})," with the following properties:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dct:type"})," holding an object with at least a ",(0,i.jsx)(n.code,{children:"@id"})," property pointing to a concept describing what type of API this\nDataset represents. Subsequent standards define the exact value this property shall hold, depending on the Business\nscenario. The set of concepts is maintained in the taxonomy ",(0,i.jsx)(n.code,{children:"https://w3id.org/catenax/taxonomy#"})," and MUST\nextend the concept ",(0,i.jsx)(n.a,{href:"https://w3id.org/catenax/taxonomy#Asset",children:"https://w3id.org/catenax/taxonomy#Asset"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cx-common:version"})," holding a SemVer-conformant string indicating the API version of the API that was typed by the\n",(0,i.jsx)(n.code,{children:"dct:type"})," property. Subsequent standards define the exact value this property shall hold, depending on the Business\nscenario."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,i.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/International-Data-Spaces-Association/ids-specification/releases/tag/2024-1",children:"IDSA Dataspace Protocol 2024-01"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/identity-trust/blob/0.8.1/specifications/verifiable.presentation.protocol.md",children:"Identity And Trust Protocol v0.8"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX - 0050 Framework Agreement Credential v1.2.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX - 0149 Verfied Company Identity v1.0.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/tractusx-profiles/releases/tag/1.0.0",children:"Tractus-X Profiles v1.0"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/catenax-eV/cx-odrl-profile",children:"Catena-X Profile of the Open Digital Rights Language (ODRL)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://eclipse-tractusx.github.io/docs-kits/next/category/connector-kit",children:"Connector Kit"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/tractusx-edc",children:"Tractus-X EDC"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,i.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,i.jsx)(n.p,{children:"Figure 1: Framework of data exchange"}),"\n",(0,i.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,i.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,i.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},71034:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Framework_of_data_exchange-26c6a1884b6467c7c836b94db96bdb3a.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);