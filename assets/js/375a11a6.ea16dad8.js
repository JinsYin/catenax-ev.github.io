"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[1084],{28430:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var i=s(74848),t=s(28453);const a={},r="CX-0010 Business Partner Number v2.0.0",d={id:"standards/CX-0010-BusinessPartnerNumber/CX-0010-BusinessPartnerNumber",title:"CX-0010 Business Partner Number v2.0.0",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0010-BusinessPartnerNumber/CX-0010-BusinessPartnerNumber.md",sourceDirName:"standards/CX-0010-BusinessPartnerNumber",slug:"/standards/CX-0010-BusinessPartnerNumber/",permalink:"/docs/standards/CX-0010-BusinessPartnerNumber/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0009 CX Registration API v1.1.3",permalink:"/docs/standards/CX-0009-CXRegistrationAPI/"},next:{title:"CX-0011 Issuing Agency v1.0.1",permalink:"/docs/standards/CX-0011-IssuingAgency/"}},l={},o=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 CONFORMANCE",id:"13-conformance",level:3},{value:"1.4 PROOF OF CONFORMITY",id:"14-proof-of-conformity",level:3},{value:"1.5 TERMINOLOGY",id:"15-terminology",level:3},{value:"1.5.1 General",id:"151-general",level:3},{value:"1.5.2 Business Partner",id:"152-business-partner",level:3},{value:"1.5.3 Legal Entity",id:"153-legal-entity",level:3},{value:"1.5.4 Site",id:"154-site",level:3},{value:"1.5.5 Address",id:"155-address",level:3},{value:"2.1 BPN",id:"21-bpn",level:2},{value:"2.2 Lifecycle",id:"22-lifecycle",level:2},{value:"2.3 Relations",id:"23-relations",level:2},{value:"2.4 Examples",id:"24-examples",level:2},{value:"2.5 Out of Scope",id:"25-out-of-scope",level:2},{value:"2.6 Issuing Agency",id:"26-issuing-agency",level:2},{value:"2.6.1 Building Block View",id:"261-building-block-view",level:3},{value:"2.6.2 Run Time View",id:"262-run-time-view",level:3},{value:"3.1 NON-NORMATIVE REFERENCES",id:"31-non-normative-references",level:2},{value:"3.2 REFERENCE IMPLEMENTATIONS",id:"32-reference-implementations",level:2},{value:"FIGURES",id:"figures",level:2},{value:"TABLES",id:"tables",level:2},{value:"Legal",id:"legal",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cx-0010-business-partner-number-v200",children:"CX-0010 Business Partner Number v2.0.0"}),"\n",(0,i.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,i.jsx)(n.p,{children:"The Business Partner Data Management (BPDM) is a distributed service-based system, composed of a set of dedicated services, that simultaneously serve multiple stakeholders. It is based on a central data pool of business partners, which is consistent with the overall design principles of Catena-X. The main target is to create business partner data records (such as customer/supplier) with a high quality and currentness, to provide other processes with these data. This results in less rework and adjustment due to better master data quality which ultimately leads to an overall cost reduction for participating companies. Additionally, Value Added Services shall be offered to enrich those business partner data sets even further and give additional information or warnings about the business partners. Getting a 360\xb0 view on your business partners also helps with reducing costs and achieving process excellence because better decisions can be made."}),"\n",(0,i.jsx)(n.p,{children:"The Business Partner Number (BPN) is a unique identifier that is assigned to each business partner. The following represents the technical documentation for the Business Partner Number in the platform capability Business Partner Data Management. This standard documentation defines the structure and creation of a Business Partner Number."}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,i.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This standard is relevant for the following audience:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Core Service Provider"}),"\n",(0,i.jsx)(n.li,{children:"Onboarding Service Provider"}),"\n",(0,i.jsx)(n.li,{children:"Business Application Provider"}),"\n",(0,i.jsx)(n.li,{children:"Data Provider and Consumer"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This document focuses on the Business Partner Number (BPN) and its issuing agency that is part of the Business Partner Data Management (BPDM) described on the ",(0,i.jsx)(n.a,{href:"https://catena-x.net/en/offers/bpdm",children:"BPDM Catena-X Website"}),".It is relevant for core service providers who want to provide services for retrieving a cleansed, high-quality business partner data record (Golden Record) for a given Business Partner Number. It is also relevant for onboarding service providers, business application providers as well as data providers and consumers who want to use such services."]}),"\n",(0,i.jsx)(n.p,{children:"The BPN is the one unique identifier for business partners in the network. To maintain the issuing agency, core service providers especially need to get an understanding on the syntax of the BPN, the versions, and relations. In addition to that the lifecycle of a BPN is important."}),"\n",(0,i.jsx)(n.p,{children:"Not in scope is the way of how business partner data records can be shared to create a Golden Record. There is a separate standard for this: Business Partner Gate API."}),"\n",(0,i.jsx)(n.p,{children:"Not in scope is the overall Business Partner Pool with all Golden Records within Catena-X and the way of how the Golden Records can be retrieved. There is a separate standard for this: Business Partner Pool API."}),"\n",(0,i.jsx)(n.p,{children:"Not in scope are the requirements of cleansing and enriching the business partner data records with the aim to create a Golden Record. A separate standard is being prepared but will not be available simultaneously with this standard."}),"\n",(0,i.jsxs)(n.p,{children:["You can find the other standards in the standard library of Catena-X: ",(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"https://catena-x.net/de/standard-library"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It is not only with the founding of various industry networks (such as Catena-X) that the requirements increase to establish data standards for the entire automotive value chain and to promote the industry-wide, international data exchange. For the networking of OEMs, suppliers, customers, and industrial partners, it is essential to define and introduce a cross-industry standard for identifying business partners to map the entire supply chain in a sustainable manner."}),"\n",(0,i.jsx)(n.h3,{id:"13-conformance",children:"1.3 CONFORMANCE"}),"\n",(0,i.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,i.jsxs)(n.p,{children:["The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in ",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/bcp14",children:"BCP 14"})," [",(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc2119",children:"RFC2119"}),"] [",(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc8174",children:"RFC8174"}),"] when, and only when, they appear in all capitals, as shown here."]}),"\n",(0,i.jsx)(n.h3,{id:"14-proof-of-conformity",children:"1.4 PROOF OF CONFORMITY"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"All participants and their solutions will need to proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,i.jsx)(n.p,{children:"To proof conformity with this standard, a self-audited, stated and signed document that the syntax of the BPN is established must be provided."}),"\n",(0,i.jsx)(n.h3,{id:"15-terminology",children:"1.5 TERMINOLOGY"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"151-general",children:"1.5.1 General"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Golden Record:"})," Golden Record defines a business partner data record which successfully passed a set of predefined quality rules. These rules qualified the data record into a harmonized, standardized, and semantically unified data structure which is defined by Catena-X. The Golden Record status is a prerequisite for each BP data record to receive a valid BPN."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Sharing Member:"})," A sharing member is a BPDM member who shares the Business Partner data of his own system."]}),"\n",(0,i.jsx)(n.h3,{id:"152-business-partner",children:"1.5.2 Business Partner"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Business Partner",src:s(63011).A+"",width:"468",height:"248"})}),"\n",(0,i.jsx)(n.p,{children:"In general, a business partner is any entity (such as a customer, a supplier, an employee, or a service provider) that does business with another entity."}),"\n",(0,i.jsx)(n.p,{children:"In Catena-X, a business partner is an organization (and not a natural person) or one of its substructures (such as an enterprise or company, university, association, etc.) that acts as unique partner within the automotive supply chain \u2013 either in the role of a direct participant, or a consultant, or a non-production-material (NPM) supplier."}),"\n",(0,i.jsx)(n.p,{children:"Catena-X distinguishes between three business partner types to represent an organization with its substructures relevant for the automotive supply chain: legal entity, site, and address (see detailed definitions)."}),"\n",(0,i.jsx)(n.h3,{id:"153-legal-entity",children:"1.5.3 Legal Entity"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Legal Entity",src:s(81529).A+"",width:"580",height:"538"})}),"\n",(0,i.jsx)(n.p,{children:"In general, a legal entity is a juridical person that has legal rights and duties related to contracts, agreements, and obligations. The term especially applies to any kind of organization (such as an enterprise or company, university, association, etc.) established under the law applicable to a country."}),"\n",(0,i.jsx)(n.p,{children:"In Catena-X, a legal entity is a type of business partner representing a legally registered organization with its official registration information, such as legal name (including legal form, if registered), legal address and tax number."}),"\n",(0,i.jsx)(n.p,{children:"A legal entity has exactly one legal address, but it is possible to specify additional addresses that a legal entity owns. Thus, at least one address is assigned to a legal entity. A legal entity can own sites. Thus, many or no sites are assigned to a legal entity.\u202f A legal entity is uniquely identified by\u202fthe BPNL."}),"\n",(0,i.jsx)(n.p,{children:"A BPNL represents and uniquely identifies a legal entity, which is defined by its legal name (including legal form, if registered), legal address and tax number."}),"\n",(0,i.jsx)(n.h3,{id:"154-site",children:"1.5.4 Site"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Site",src:s(64845).A+"",width:"522",height:"490"})}),"\n",(0,i.jsx)(n.p,{children:"In general, a site is a delimited geographical area in which an organization (such as an enterprise or company, university, association, etc.) conducts business."}),"\n",(0,i.jsx)(n.p,{children:"In Catena-X, a site is a type of business partner representing a physical location or area owned by a legal entity, where a production plant, a warehouse, or an office building is located."}),"\n",(0,i.jsx)(n.p,{children:"A site is owned by a legal entity. Thus, exactly one legal entity is assigned to a site.\u202fA site has exactly one main address, but it is possible to specify additional addresses (such as different gates), that belong to a site. Thus, at least one address is assigned to a site.\u202fA site can only be uploaded and modified by the owner (the legal entity), because only the owner knows which addresses belong to which site. A site is uniquely identified by the BPNS."}),"\n",(0,i.jsx)(n.p,{children:"A BPNS represents and uniquely identifies a site, which is where for example a production plant, a warehouse, or an office building is located."}),"\n",(0,i.jsx)(n.h3,{id:"155-address",children:"1.5.5 Address"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Address",src:s(97246).A+"",width:"806",height:"1008"})}),"\n",(0,i.jsx)(n.p,{children:"In general, an address is a collection of information to describe a physical location, using a street name with a house number and/or a post office box as reference. In addition, an address consists of several postal attributes, such as country, region (state), county, township, city, district, or postal code, which help deliver mail."}),"\n",(0,i.jsx)(n.p,{children:"In Catena-X, an address is a type of business partner representing the legal address of a legal entity, and/or the main address of a site, or any additional address of a legal entity or site (such as different gates)."}),"\n",(0,i.jsx)(n.p,{children:"An address is owned by a legal entity. Thus, exactly one legal entity is assigned to an address. An address can belong to a site. Thus, one or no site is assigned to an address. An address is uniquely identified by the BPNA."}),"\n",(0,i.jsx)(n.p,{children:"A BPNA represents and uniquely identifies an address, which can be the legal address of a legal entity, and/or the main address of a site, or any additional address of a legal entity or site (such as different gates)."}),"\n",(0,i.jsx)(n.p,{children:"It is important to note that only the BPNL must be used to uniquely identify a legal entity. Even in the case that the BPNA represents the legal address of the legal entity, it shall not be used to uniquely identify the legal entity."}),"\n",(0,i.jsx)(n.h1,{id:"2-business-partner-number",children:"2 BUSINESS PARTNER NUMBER"}),"\n",(0,i.jsx)(n.h2,{id:"21-bpn",children:"2.1 BPN"}),"\n",(0,i.jsx)(n.p,{children:"The BPN is a unique, unchangeable identifier for business partners from foundation to closure, regardless of the different business relationships / structures between or within the business partners or company locations. It MUST follow the defined syntax and structure:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Prefix"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Classification"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Identifier"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Check Digit"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3-digit"}),(0,i.jsx)(n.td,{children:"1-digit"}),(0,i.jsx)(n.td,{children:"10-digit"}),(0,i.jsx)(n.td,{children:"2-digit"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Issuing Agency Code according to ISO/IEC 15459 e.g. BPN"}),(0,i.jsx)(n.td,{children:"L = Legal Entity S = Site A = Address"}),(0,i.jsx)(n.td,{children:"alphanumerical"}),(0,i.jsx)(n.td,{children:"2-digit verification algorithm according to ISO 7064 MOD 1271-36"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Further information:"}),"\n",(0,i.jsx)(n.p,{children:"The following input or reading aid SHOULD be used for human readable representation of the BPN: BPNL 1234 5678 90ZZ"}),"\n",(0,i.jsx)(n.h2,{id:"22-lifecycle",children:"2.2 Lifecycle"}),"\n",(0,i.jsx)(n.p,{children:"The BPNs of a legal entity (BPNL), a site (BPNS), or an address (BPNA) have an own life cycle, depending on the respective status of the legal entity, the site, or the address in the real world."}),"\n",(0,i.jsx)(n.p,{children:"Each BPNL, BPNS and BPNA data record contains a start and end date which defines the validity duration of the related data record."}),"\n",(0,i.jsx)(n.p,{children:"They MUST follow the status definitions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"active"}),"\n",(0,i.jsx)(n.li,{children:"inactive"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"23-relations",children:"2.3 Relations"}),"\n",(0,i.jsx)(n.p,{children:"There are relations between a legal entity (BPNL), its sites (BPNS), and its addresses (BPNA). Each organization in the real world (such as an enterprise or company, university, association, etc.) is represented by one legal entity. Each legal entity MUST have at least one address which is its legal address. If a site exists it MUST be associated exactly to one legal entity. A legal entity MAY have multiple sites. Each site MUST have at least one address which is its main address. See example under 2.4 for explanation."}),"\n",(0,i.jsx)(n.h2,{id:"24-examples",children:"2.4 Examples"}),"\n",(0,i.jsx)(n.p,{children:"Exemplary BPN: BPNL1234567890ZZ"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"BPN:"})," is used here as a placeholder for the issuing agency according to IDO/IEC 15459."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"L:"})," identifies the legal entity of the business partner"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ZZ"})," : is the individual check digit, which is formed according to ISO 7064."]}),"\n",(0,i.jsxs)(n.p,{children:["Example ",(0,i.jsx)(n.em,{children:"ABC Inc."})," with its relatedsubstructures:\n",(0,i.jsx)(n.img,{alt:"ABC_INC",src:s(88249).A+"",width:"785",height:"440"})]}),"\n",(0,i.jsx)(n.h2,{id:"25-out-of-scope",children:"2.5 Out of Scope"}),"\n",(0,i.jsx)(n.p,{children:"For the following entities a BPN SHALL NOT be issued:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"natural persons (such as employees) who act for a legal entity and not as own business partners"}),"\n",(0,i.jsx)(n.li,{children:"forms of freight forwarding (such as c/o addresses)"}),"\n",(0,i.jsx)(n.li,{children:"elements of (legal) hierarchies (such as business global ultimate)"}),"\n",(0,i.jsx)(n.li,{children:"internal unloading points (logistically)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"26-issuing-agency",children:"2.6 Issuing Agency"}),"\n",(0,i.jsx)(n.p,{children:"The issuing agency is a technical mechanism that centrally assigns BPNs to ensure the highest data quality in the data sharing process. Catena-X e.V. issues a license through which an operating company MUST operate the mechanism to issue further BPNs. BPNs are issued for legal entities, sites, and addresses. The issuing agency is specified in the prefix of the BPN according to ISO/IEC 15459."}),"\n",(0,i.jsx)(n.h3,{id:"261-building-block-view",children:"2.6.1 Building Block View"}),"\n",(0,i.jsx)(n.p,{children:"The BPDM API receives cleaned data sets from the SaaS Adapter. BPNs are issued centrally. For this purpose, the BPN is assigned on the BPDM side subsequently to the API and the SaaS adapter. The updated data objects are then mirrored back to the other services."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Building Block View",src:s(58152).A+"",width:"937",height:"366"})}),"\n",(0,i.jsx)(n.h3,{id:"262-run-time-view",children:"2.6.2 Run Time View"}),"\n",(0,i.jsx)(n.p,{children:"This runtime view illustrates the data sharing mechanism between a sharing member, the SaaS component, including the BPN issuing by the BPN Generator. An actor can be any sharing member that shares data with Catena-X. The new data object is transferred from the enterprise layer of the sharing member to the Catena-X gate. This gate interacts with the API of the SaaS component. The SaaS component fetches information about their synchronization and receives the new data objects in response. The BPN generator issues a BPN, and the data objects are changed accordingly. The SaaS adapter polls the changed data. The updated data objects are then available via standardized APIs."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Run Time View",src:s(65981).A+"",width:"750",height:"416"})}),"\n",(0,i.jsx)(n.h1,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,i.jsx)(n.h2,{id:"31-non-normative-references",children:"3.1 NON-NORMATIVE REFERENCES"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/en/offers/bpdm",children:"BPDM Catena-X Website"})}),"\n",(0,i.jsx)(n.h2,{id:"32-reference-implementations",children:"3.2 REFERENCE IMPLEMENTATIONS"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/bpdm/tree/main/bpdm-pool-api/src/main/kotlin/org/eclipse/tractusx/bpdm/pool/api",children:"Business Partner Pool API"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/bpdm/tree/main/bpdm-gate-api/src/main/kotlin/org/eclipse/tractusx/bpdm/gate/api",children:"Business Partner Gate API"})}),"\n",(0,i.jsx)(n.h1,{id:"annexes",children:"ANNEXES"}),"\n",(0,i.jsx)(n.h2,{id:"figures",children:"FIGURES"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Intentionally left blank."}),"\n",(0,i.jsx)(n.h2,{id:"tables",children:"TABLES"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Intentionally left blank."}),"\n",(0,i.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,i.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,i.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},88249:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/abc-inc-b19dbadece888a781eb6220b1b016f03.png"},97246:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/address-ea709080ff642e275ebe0b6bcd4e6365.png"},58152:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/building-block-view-db8e215b006b3b50e03b4358c1906827.png"},63011:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/business-partner-21acb9374010015c169ed94d5e896453.png"},81529:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/legal-entity-397809c1a8fc4f5829005dabe18d2ab1.png"},65981:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/run-time-view-69a70218fc31cb4d89f1480541de9f05.png"},64845:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/site-2f6d0e476c12eebe9bcc01b4605be27c.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var i=s(96540);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);