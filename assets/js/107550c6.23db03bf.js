"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[1592],{50707:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=t(74848),a=t(28453);const s={},r="CX-0135 - BP company certificate management v2.0.0",c={id:"standards/CX-0135-CompanyCertificateManagement/CX-0135-CompanyCertificateManagement",title:"CX-0135 - BP company certificate management v2.0.0",description:"This standard is temporarily suspended for certification, as this standard does not represent the current state of advancement in Catena-X.",source:"@site/docs/standards/CX-0135-CompanyCertificateManagement/CX-0135-CompanyCertificateManagement.md",sourceDirName:"standards/CX-0135-CompanyCertificateManagement",slug:"/standards/CX-0135-CompanyCertificateManagement/",permalink:"/docs/next/standards/CX-0135-CompanyCertificateManagement/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0133 Online Control and Simulation 1.1.0",permalink:"/docs/next/standards/CX-0133-OnlineControlandSimulation/"},next:{title:"CX-0136 Use Case PCF 1.0.1",permalink:"/docs/next/standards/CX-0136-UseCasePCF/"}},o={},d=[{value:"ABSTRACT",id:"abstract",level:2},{value:"FOR WHOM IS THE STANDARD DESIGNED",id:"for-whom-is-the-standard-designed",level:2},{value:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD",id:"comparison-with-the-previous-version-of-the-standard",level:2},{value:"1 INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 CONFORMANCE",id:"13-conformance",level:3},{value:"1.4 EXAMPLES",id:"14-examples",level:3},{value:"1.5 TERMINOLOGY",id:"15-terminology",level:3},{value:"1.5.1 BPNL BUSINESS PARTNER NUMBER LEGAL ENTITY",id:"151-bpnl-business-partner-number-legal-entity",level:4},{value:"1.5.2 TYPE",id:"152-type",level:4},{value:"1.5.3 REGISTRATION AND ISSUING",id:"153-registration-and-issuing",level:4},{value:"1.5.4 AREA OF APPLICATION",id:"154-area-of-application",level:4},{value:"1.5.5 ENCLOSED SITES",id:"155-enclosed-sites",level:4},{value:"1.5.6 VALIDITY",id:"156-validity",level:4},{value:"1.5.7 TRUST LEVEL",id:"157-trust-level",level:4},{value:"1.5.8 VALIDATOR",id:"158-validator",level:4},{value:"1.5.9 SOURCE",id:"159-source",level:4},{value:"1.5.10 ID",id:"1510-id",level:4},{value:"1.5.11 STATUS",id:"1511-status",level:4},{value:"1.6 INTERFACE",id:"16-interface",level:3},{value:"1.6.1 META DATA CONTROLLER",id:"161-meta-data-controller",level:4},{value:"1.6.2 PROVIDE A CERTIFICATE",id:"162-provide-a-certificate",level:4},{value:"1.6.2 REQUEST CERTIFICATE INFORMATION",id:"162-request-certificate-information",level:4},{value:"2 MAIN CONTENT",id:"2-main-content",level:2},{value:"2.1. DATA MODEL COMPANY CERTIFICATES",id:"21-data-model-company-certificates",level:3},{value:"2.2. COMPANY CERTIFICATE INTERFACE ENDPOINTS",id:"22-company-certificate-interface-endpoints",level:3},{value:"2.3 OUT OF SCOPE",id:"23-out-of-scope",level:3},{value:"2.4 Conventions for Use Case Policy in context data exchange",id:"24-conventions-for-use-case-policy-in-context-data-exchange",level:3},{value:"Additional Details regarding Access Policies",id:"additional-details-regarding-access-policies",level:4},{value:"Additional Details regarding Usage Policies",id:"additional-details-regarding-usage-policies",level:4},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function l(e){const i={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"cx-0135---bp-company-certificate-management-v200",children:"CX-0135 - BP company certificate management v2.0.0"}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"This standard is temporarily suspended for certification, as this standard does not represent the current state of advancement in Catena-X."})}),"\n",(0,n.jsx)(i.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative."})}),"\n",(0,n.jsx)(i.p,{children:"In the world of business, company certificates are often mandatory for conducting transactions between two companies. However, the process of provisioning, maintaining, and validating these certificates can be a major challenge. For example, if a company has 100 customers, they may need to provide their company certificates in 100 different ways and maintain them at 100 different points."}),"\n",(0,n.jsx)(i.p,{children:"To address this issue, a use case has been developed that provides a standardized but generic data model for company certificates. This allows companies to provide and exchange certificates on a defined standard within the scope of the Catena-X dataspace. The second part of this use case focuses on the technological aspect of providing and validating certificates via an interface."}),"\n",(0,n.jsx)(i.p,{children:"This standard is relevant for business application providers who wish to establish a solution for managing and validating company certificates, and returning them to customers. It is also important for data providers and consumers who need to exchange or validate certificates through a solution provider."}),"\n",(0,n.jsx)(i.h2,{id:"for-whom-is-the-standard-designed",children:"FOR WHOM IS THE STANDARD DESIGNED"}),"\n",(0,n.jsx)(i.p,{children:"This standard is crucial for business application providers looking to implement a sturdy solution for consuming, providing, and validating company certificates, which can be effortlessly returned to customers. Moreover, data providers and consumers who need a dependable means of exchanging or validating certificates through a solution provider or even the certificate issuer itself will find this standard to be of immense importance. By complying with this standard, businesses can ensure seamless certificate management and validation, thereby enhancing their overall operations."}),"\n",(0,n.jsx)(i.h2,{id:"comparison-with-the-previous-version-of-the-standard",children:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD"}),"\n",(0,n.jsx)(i.p,{children:"Added a new attribute 'status' to the data model (1.5.11 STATUS)\nAdded new certificate types (1.5.2 TYPE)"}),"\n",(0,n.jsx)(i.h2,{id:"1-introduction",children:"1 INTRODUCTION"}),"\n",(0,n.jsx)(i.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative."})}),"\n",(0,n.jsx)(i.p,{children:"This standard is relevant for the following audience:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Business Application Provider"}),"\n",(0,n.jsx)(i.li,{children:"Data Provider and Consumer"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"This standard applies to business application providers who wish to establish a solution for managing and validating company certificates, and returning them to customers. It is also important for data providers and consumers who need to exchange or validate certificates through a solution provider."}),"\n",(0,n.jsx)(i.p,{children:"The data model for company certificates included in this standard is generic and supports the following certificates: IATF 16949, ISO 14001, ISO 9001, ISO 27001, and VDA6.4."}),"\n",(0,n.jsx)(i.p,{children:"Additional certificates may be added in the future."}),"\n",(0,n.jsxs)(i.p,{children:["You can find the other standards in the standard library of Catena-X: ",(0,n.jsx)(i.a,{href:"https://catena-x.net/de/standard-library",children:"https://catena-x.net/de/standard-library"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative."})}),"\n",(0,n.jsx)(i.p,{children:"The establishment of various industry networks, such as Catena-X, has significantly increased the need for data standards across the entire automotive value chain. To promote industry-wide, international data exchange and facilitate networking between OEMs, suppliers, customers, and industrial partners, it is essential to define and introduce a cross-industry standard for the provisioning, exchanging, maintenance, and validation of company certificates. This standard ensures interoperability and data sovereignty, while also increasing trust in certificates."}),"\n",(0,n.jsx)(i.p,{children:"By implementing this standard, companies can streamline the process of managing and exchanging certificates, reducing the burden of maintaining multiple certificates for different customers. Additionally, the standard ensures that certificates are validated and exchanged in a secure and reliable manner, enhancing trust and confidence in the data exchange process. Overall, the introduction of a cross-industry standard for company certificates is a crucial step towards achieving seamless and secure data exchange across the automotive industry."}),"\n",(0,n.jsx)(i.h3,{id:"13-conformance",children:"1.3 CONFORMANCE"}),"\n",(0,n.jsx)(i.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,n.jsxs)(i.p,{children:["The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in\xa0",(0,n.jsx)(i.a,{href:"https://datatracker.ietf.org/doc/html/bcp14",children:"BCP 14"}),"\xa0[",(0,n.jsx)(i.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc2119",title:"Key words for use in RFCs to Indicate Requirement Levels",children:"RFC2119"}),"] [",(0,n.jsx)(i.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc8174",title:"Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words",children:"RFC8174"}),"] when, and only when, they appear in all capitals, as shown here."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative."})}),"\n",(0,n.jsx)(i.p,{children:"All participants and their solutions will need to proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,n.jsx)(i.h3,{id:"14-examples",children:"1.4 EXAMPLES"}),"\n",(0,n.jsx)(i.p,{children:"A company that has 100 customers, they may need to provide their company certificates in up to 100 different ways and maintain them manually at 100 different points (typically proprietary customer portals).\nA company has 100 customers, that provide different certificates, from different countries and they need to validate them."}),"\n",(0,n.jsx)(i.h3,{id:"15-terminology",children:"1.5 TERMINOLOGY"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative."})}),"\n",(0,n.jsx)(i.p,{children:"In this section the different parts of the data model are explained."}),"\n",(0,n.jsxs)(i.p,{children:["The data model is implemented according to the API specification that is published in the Tractus-X open source repository:\n",(0,n.jsx)(i.a,{href:"https://github.com/eclipse-tractusx/bpdm-certificate-management/tree/main/doc/api",children:"BPDM certificate management api"}),"(v1.0.0)"]}),"\n",(0,n.jsx)(i.h4,{id:"151-bpnl-business-partner-number-legal-entity",children:"1.5.1 BPNL BUSINESS PARTNER NUMBER LEGAL ENTITY"}),"\n",(0,n.jsx)(i.p,{children:"A BPNL represents and uniquely identifies a Legal Entity, which is defined by its legal name (including Legal Form, if registered), legal Address and Tax Number. For further details on BPNLs please see standard 0010 Business Partner Number."}),"\n",(0,n.jsx)(i.p,{children:"For this standard and the data model the BPNL is the BPN id of the certified legal entity."}),"\n",(0,n.jsx)(i.p,{children:"Attribute: businessPartnerNumber"}),"\n",(0,n.jsx)(i.h4,{id:"152-type",children:"1.5.2 TYPE"}),"\n",(0,n.jsx)(i.p,{children:"Attribute: certitificateType\nAttribute: certificateVersion"}),"\n",(0,n.jsx)(i.p,{children:"Is the type of the certificate the BPN is certified for. This data model is generic and supports the following certificates (additional certificates may be added in the future):"}),"\n",(0,n.jsx)(i.p,{children:"IATF 16949 (International Automotive Task Force) is a standard that defines the requirements for a quality management system in the automotive industry."}),"\n",(0,n.jsx)(i.p,{children:"ISO 14001 is a standard that outlines the requirements for an environmental management system to help organizations minimize their impact on the environment."}),"\n",(0,n.jsx)(i.p,{children:"ISO 9001 is a standard that sets out the requirements for a quality management system to help organizations consistently provide products and services that meet customer and regulatory requirements."}),"\n",(0,n.jsx)(i.p,{children:"ISO 45001, OHSAS 18001 or national certification are occupational health and safety management system standards that help companies identify and manage workplace hazards to prevent accidents and injuries."}),"\n",(0,n.jsx)(i.p,{children:"ISO/IEC 27001 is an information security management system standard that provides a framework for companies to manage and protect their sensitive information."}),"\n",(0,n.jsx)(i.p,{children:"ISO 50001 or national certification is an energy management system standard that helps companies improve energy efficiency and reduce costs."}),"\n",(0,n.jsx)(i.p,{children:"ISO/IEC 17025 is a laboratory accreditation standard that ensures the accuracy and reliability of testing and calibration results."}),"\n",(0,n.jsx)(i.p,{children:"ISO 15504 (SPICE) is a process assessment model that helps companies improve the quality and efficiency of their software development processes."}),"\n",(0,n.jsx)(i.p,{children:"ISO 20000 is an IT service management system standard that helps companies deliver high-quality IT services to their customers."}),"\n",(0,n.jsx)(i.p,{children:"ISO 22301 is a business continuity management system standard that helps companies prepare for and respond to unexpected disruptions to their operations."}),"\n",(0,n.jsx)(i.p,{children:"AEO (Authorized Economic Operator), CTPAT (Customs-Trade Partnership Against Terrorism), Security Declaration is an internationally recognized certificate that confirms a company's compliance with customs regulations and supply chain security standards. CTPAT (Customs-Trade Partnership Against Terrorism) is a voluntary program that promotes supply chain security and trade compliance with U.S. Customs and Border Protection. Security Declaration is a document that outlines a company's security measures and procedures for the transportation of goods."}),"\n",(0,n.jsx)(i.p,{children:"VDA6.4 is a standard that defines the requirements for a quality management system in the automotive industry, with a focus on process auditing."}),"\n",(0,n.jsx)(i.p,{children:"Note: The spelling of the certificate type may vary slightly on the user interface or within the data model."}),"\n",(0,n.jsx)(i.h4,{id:"153-registration-and-issuing",children:"1.5.3 REGISTRATION AND ISSUING"}),"\n",(0,n.jsx)(i.p,{children:"Attribute: issuer\nAttribute: registrationNumber"}),"\n",(0,n.jsx)(i.p,{children:"Issuer authority is the one who is handing out a certificate - e.g. TUEV Sued. The registration number is the certificate unique identifier at the certifying authority / issuing agency."}),"\n",(0,n.jsx)(i.p,{children:"Example: ISO 9001 certificate is issued by T\xdcV S\xfcd and they are the certifying authority."}),"\n",(0,n.jsx)(i.h4,{id:"154-area-of-application",children:"1.5.4 AREA OF APPLICATION"}),"\n",(0,n.jsx)(i.p,{children:"Attribute: areaOfApplication"}),"\n",(0,n.jsx)(i.p,{children:"It is the area of applications for the given certification i.e. additional details."}),"\n",(0,n.jsx)(i.h4,{id:"155-enclosed-sites",children:"1.5.5 ENCLOSED SITES"}),"\n",(0,n.jsx)(i.p,{children:"Attribute: enclosedSites"}),"\n",(0,n.jsx)(i.p,{children:"This attribute is closely linked to the business partner number (BPN) and indicates additional sites, such as production or engineering sites, that are covered by the certificate. In other words, the certificate is valid not only for the primary BPN, but also for any associated sites. This attribute is particularly useful for companies with multiple locations or business units, as it allows them to manage certificates more efficiently and ensures that all relevant sites are covered by the certificate."}),"\n",(0,n.jsx)(i.h4,{id:"156-validity",children:"1.5.6 VALIDITY"}),"\n",(0,n.jsx)(i.p,{children:"Attribute: validFrom\nAttribute: validUntil"}),"\n",(0,n.jsx)(i.p,{children:"This is the valid from date for certificate, if not defined - its recommended to use the issueing/signing date of the document. Related to the valid from date there is the valid to date for a certificate -  31.12.9999 for no expiration."}),"\n",(0,n.jsx)(i.h4,{id:"157-trust-level",children:"1.5.7 TRUST LEVEL"}),"\n",(0,n.jsx)(i.p,{children:"Attribute: trustLevel"}),"\n",(0,n.jsx)(i.p,{children:"Data object defining the trust level of the certicate."}),"\n",(0,n.jsx)(i.p,{children:"The certificates are provided in the business context by the company itself - they are showing their certificates to other companies. Not every certificate can be directly validated by the issuing authority. Thats why there are different trust levels defined: none/ low /high / trusted."}),"\n",(0,n.jsx)(i.p,{children:"None: no validation check at all, just uploaded / provided by the company\nLow: manual validation check done by human after upload\nMedium: certificate provided by trusted issuer and manually checked (as low)\nHigh: automated cross check via some database (e.g. T\xdcV, IATF)\nTrusted: directly provided by issuer (e.g. T\xdcV)"}),"\n",(0,n.jsx)(i.h4,{id:"158-validator",children:"1.5.8 VALIDATOR"}),"\n",(0,n.jsx)(i.p,{children:"Attribute: validator"}),"\n",(0,n.jsx)(i.p,{children:"Validator is the one who can validate certificate information. In the best way it is the authority that is issuing the certificates but there can be other validators. This attribute has a relation to the trust level."}),"\n",(0,n.jsx)(i.p,{children:"E.g. Business service providers that offer a validation service for company certificates."}),"\n",(0,n.jsx)(i.h4,{id:"159-source",children:"1.5.9 SOURCE"}),"\n",(0,n.jsx)(i.p,{children:"Attribute: source"}),"\n",(0,n.jsx)(i.p,{children:"This defines the company who orginally provided the given certificate (e.g. Company A provided it to Business service provider B, Business service provider B is a trusted validator). This company is also identified by a BPN."}),"\n",(0,n.jsx)(i.h4,{id:"1510-id",children:"1.5.10 ID"}),"\n",(0,n.jsx)(i.p,{children:"Attribute: documentID"}),"\n",(0,n.jsx)(i.p,{children:"The internal reference id to request a certificate document."}),"\n",(0,n.jsx)(i.h4,{id:"1511-status",children:"1.5.11 STATUS"}),"\n",(0,n.jsx)(i.p,{children:"Attribute: status"}),"\n",(0,n.jsx)(i.p,{children:"This attribute provides the possibility to define a status to the given certificate."}),"\n",(0,n.jsx)(i.p,{children:"Three possible values: active, inactive, pending"}),"\n",(0,n.jsx)(i.h3,{id:"16-interface",children:"1.6 INTERFACE"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative."})}),"\n",(0,n.jsx)(i.p,{children:"In this section the interface / API for the data model is explained. The interface is a main factor for interoperability."}),"\n",(0,n.jsx)(i.h4,{id:"161-meta-data-controller",children:"1.6.1 META DATA CONTROLLER"}),"\n",(0,n.jsx)(i.p,{children:"For developers implementing the business partner certificate API, it is essential to have access to a list of registered certificate types. This information is necessary to ensure correct spelling and to determine which certificate types are available for use with other API endpoints in this use case. To obtain this information, developers can make an API call to the MetaDataController, using the following endpoint: /api/catena/certificate-types. This call returns a list of all currently registered certificate types."}),"\n",(0,n.jsx)(i.p,{children:"In addition to accessing the list of registered certificate types, developers may also need to register a new certificate type. This is necessary when providing new certificates for which the type is not yet known. To register a new certificate type, developers can make an API call to the MetaDataController using the following endpoint (POST): /api/catena/create-certificate-type. This call allows developers to add a new certificate type to the list of registered types, ensuring that it is available for use with other API endpoints in this use case."}),"\n",(0,n.jsx)(i.h4,{id:"162-provide-a-certificate",children:"1.6.2 PROVIDE A CERTIFICATE"}),"\n",(0,n.jsx)(i.p,{children:"In the context of data exchange within the Catena-X dataspace, companies may need to provide their own certificates or the certificates of their partners to other participants. To facilitate this process, a specific API call is available."}),"\n",(0,n.jsx)(i.p,{children:"Using the following endpoint (POST): api/catena/certificate/document, companies can provide a certificate document for a legal entity, including all sites assigned to the certificate. This API call allows companies to securely and efficiently share their certificates with other participants in the dataspace, ensuring that all relevant information is included in the document. By providing this API call, the Catena-X dataspace enables seamless and secure data exchange between companies, promoting interoperability and trust in the data exchange process."}),"\n",(0,n.jsx)(i.h4,{id:"162-request-certificate-information",children:"1.6.2 REQUEST CERTIFICATE INFORMATION"}),"\n",(0,n.jsx)(i.p,{children:"To validate a certificate provided by a company, users can make use of the Catena-X dataspace API. The API provides a range of trust levels, which indicate the level of validation that has been performed on the certificate. These levels include None (no validation check at all), Low (manual validation check done by a human after upload), Medium (certificate provided by a trusted issuer and manually checked), High (automated cross-check via a database, such as T\xdcV), and Trusted (directly provided by the issuer, such as T\xdcV)."}),"\n",(0,n.jsx)(i.p,{children:"To access this information, users can make an API call to the following endpoint: /api/catena/certificate/simple/{bpn}/{certificateType} . This call returns a true/false value indicating whether the certificate is valid, as well as the certification valid-until date and the trust level."}),"\n",(0,n.jsx)(i.p,{children:"In addition to validating certificates, users may also need to request specific certificate information based on the BPN L/S/A. To do this, they can make an API call to the following endpoint: /api/catena/certificate/{bpn} this call returns the requested certificate for a legal entity, including all sites assigned to the certificate. By providing these API calls, the Catena-X dataspace enables users to easily verify that a business partner has the necessary certification, promoting trust and confidence in the data exchange process."}),"\n",(0,n.jsx)(i.p,{children:"To specify this call - its possible to add the certificate type to get a certicate for a given certificate type: /api/catena/certificate/{bpn}/{certificateType}."}),"\n",(0,n.jsx)(i.p,{children:"The following endpoint: /api/catena/certificate/document/{cdID} returns requested certificate document for a legal entity including all sites assigned to a certificate - with the ID the direct and unique document can be requested and found."}),"\n",(0,n.jsx)(i.h2,{id:"2-main-content",children:"2 MAIN CONTENT"}),"\n",(0,n.jsx)(i.p,{children:"The following rules are minimum requirements and may be supplemented."}),"\n",(0,n.jsx)(i.h3,{id:"21-data-model-company-certificates",children:"2.1. DATA MODEL COMPANY CERTIFICATES"}),"\n",(0,n.jsx)(i.p,{children:"The following attributes that are described in detail in the terminology chapter and MUST be provided when participating in the use case of company certificates:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"businessPartnerNumber with the datatype BPNL"}),"\n",(0,n.jsx)(i.li,{children:"type with the datatype CertificateType"}),"\n",(0,n.jsx)(i.li,{children:"registrationNumber as a string datatype"}),"\n",(0,n.jsx)(i.li,{children:"validFrom with the datatype date"}),"\n",(0,n.jsx)(i.li,{children:"validUntil with the datatype date"}),"\n",(0,n.jsx)(i.li,{children:"trustLevel with the datatype TrustLevel"}),"\n",(0,n.jsx)(i.li,{children:"documentID"}),"\n",(0,n.jsx)(i.li,{children:"status"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"There are attributes that are OPTIONAL:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"areaOfApplication with the datatype string. This is just relevant when there need to be additional details added to a certificate."}),"\n",(0,n.jsx)(i.li,{children:"enclosedSites with the datatype List of EcnlosedSites. This becomes a MUST attribute when the certificate is not only relevant for the legal entity but also for one site or more."}),"\n",(0,n.jsx)(i.li,{children:"issuer with the datatype BPN. Would be nice to know who issued the certificate but not mandatory."}),"\n",(0,n.jsx)(i.li,{children:"validator with the datatype TrustValidator. Typically validates certificate information so that it can be trusted (see also trust levels)."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["The data model is implemented according to the API specification that is published in the Tractus-X open source repository:\n",(0,n.jsx)(i.a,{href:"https://github.com/eclipse-tractusx/bpdm-certificate-management/tree/main/doc/api",children:"BPDM certificate management api"})]}),"\n",(0,n.jsx)(i.h3,{id:"22-company-certificate-interface-endpoints",children:"2.2. COMPANY CERTIFICATE INTERFACE ENDPOINTS"}),"\n",(0,n.jsx)(i.p,{children:"The following GET and POST endpoints are MUST - especially for business service providers:"}),"\n",(0,n.jsx)(i.p,{children:"GET endpoints:"}),"\n",(0,n.jsx)(i.p,{children:"/api/catena/certificate/{bpn} - Get call certificates of a given BPN.\n/api/catena/certificate/{bpn}/{certificateType} - Get a specific certificate by certicate type for a given BPN.\n/api/catena/certificate/simple/{bpn}/{certificateType} -  This endpoint checks whether a provided BPN is certified for a specific certificate type.\n/api/catena/certificate/document/{cdID} - Request a specific / unique certicate document for a given BPN.\n/api/catena/certificate-types - Get a list of all currently registered certificate types."}),"\n",(0,n.jsx)(i.p,{children:"POST endpoints:"}),"\n",(0,n.jsx)(i.p,{children:"/api/catena/certificate/document - Provide a specific certicate document for a given BPN.\n/api/catena/certificate-types - Register a new certificate type."}),"\n",(0,n.jsx)(i.h3,{id:"23-out-of-scope",children:"2.3 OUT OF SCOPE"}),"\n",(0,n.jsx)(i.p,{children:"This standardization document does not describe the process and functionality of the lifecycle-management of certificates."}),"\n",(0,n.jsx)(i.h3,{id:"24-conventions-for-use-case-policy-in-context-data-exchange",children:"2.4 Conventions for Use Case Policy in context data exchange"}),"\n",(0,n.jsx)(i.p,{children:"In alignment with our commitment to data sovereignty, a specific framework governing the utilization of data within the Catena-X use cases has been outlined. A set of specific policies on data offering and data usage level detail the conditions under which data may be accessed, shared, and used, ensuring compliance with legal standards."}),"\n",(0,n.jsx)(i.p,{children:"For a comprehensive understanding of the rights, restrictions, and obligations associated with data usage in the Catena-X ecosystem, we refer users to"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["the detailed ",(0,n.jsx)(i.a,{href:"https://github.com/catenax-eV/cx-odrl-profile",children:"ODRL policy repository"}),". This document provides in-depth explanations of the terms and conditions applied to data access and utilization, ensuring that all engagement with our data is conducted responsibly and in accordance with established guidelines."]}),"\n",(0,n.jsx)(i.li,{children:"the ODRL schema template. This defines how policies used for data sharing/usage should get defined. Those schemas MUST be followed when providing services or apps for data sharing/consuming."}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"additional-details-regarding-access-policies",children:"Additional Details regarding Access Policies"}),"\n",(0,n.jsx)(i.p,{children:'A Data Provider may tie certain access authorizations ("Access Policies") to its data offers for members of Catena-X  and one or several Data Consumers. By limiting access to certain Participants, Data Provider maintains control over its anti-trust obligations when sharing certain data. In particular, Data Provider may apply Access Policies to restrict access to a particular data offer for only one Participant identified by a specific business partner number:'}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Membership"}),"\n",(0,n.jsx)(i.li,{children:"BPNL"}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"additional-details-regarding-usage-policies",children:"Additional Details regarding Usage Policies"}),"\n",(0,n.jsx)(i.p,{children:"In the context of data usage policies (\u201cUsage Policies\u201d), Participants and related services MUST use the following policy rules:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Use Case Framework (\u201cFrameworkAgreement\u201d)"}),"\n",(0,n.jsxs)(i.li,{children:["at least one use case purpose (\u201cUsagePurpose\u201d) from the above mentioned ",(0,n.jsx)(i.a,{href:"https://github.com/catenax-eV/cx-odrl-profile",children:"ODRL policy repository"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Additionally, respective usage policies MAY include the following policy rule:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Reference Contract (\u201cContractReference\u201d)."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Details on  namespaces and ODLR policy rule values to be used for the above-mentioned types are provided via the ",(0,n.jsx)(i.a,{href:"https://github.com/catenax-eV/cx-odrl-profile",children:"ODRL policy repository"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,n.jsx)(i.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/eclipse-tractusx/bpdm-certificate-management/tree/main/doc/api",children:"BPDM certificate management api"})}),"\n",(0,n.jsx)(i.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative."})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://catena-x.net/en/offers/bpdm",children:"BPDM Catena-X Website"})}),"\n",(0,n.jsx)(i.li,{children:"CX \u2013 0010 Business Partner Number"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative."})}),"\n",(0,n.jsx)(i.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,n.jsx)(i.h3,{id:"figures",children:"FIGURES"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative."})}),"\n",(0,n.jsx)(i.p,{children:"Intentionally left blank."}),"\n",(0,n.jsx)(i.h3,{id:"tables",children:"TABLES"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative."})}),"\n",(0,n.jsx)(i.p,{children:"Intentionally left blank."}),"\n",(0,n.jsxs)(i.p,{children:["[^1] : For details related to the Pool API, please see standard 0012.\n[^2] : For details related to the Business Partner number and the different types, please see standard 0010.\n[^3] : For details on the data model and data fields please refer to the 0074 Business Partner Gate API standard.\n[^4] : ",(0,n.jsx)(i.a,{href:"https://catena-x.net/fileadmin/user_upload/Vereinsdokumente/Catena-X_IP_Regelwerk_IP_Regulations.pdf",children:"https://catena-x.net/fileadmin/user_upload/Vereinsdokumente/Catena-X_IP_Regelwerk_IP_Regulations.pdf"}),"\n[^5] : ",(0,n.jsx)(i.a,{href:"https://catena-x.net/de/standardisierung/catena-x-einfuehren-umsetzen/standardisierung/standard-library",children:"https://catena-x.net/de/standardisierung/catena-x-einfuehren-umsetzen/standardisierung/standard-library"})]}),"\n",(0,n.jsx)(i.h2,{id:"legal",children:"Legal"}),"\n",(0,n.jsxs)(i.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,n.jsx)(i.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>c});var n=t(96540);const a={},s=n.createContext(a);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);