"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[4113],{18262:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(74848),r=i(28453);const s={},o="CX-0009 CX Registration API v1.1.3",a={id:"standards/CX-0009-CXRegistrationAPI/CX-0009-CXRegistrationAPI",title:"CX-0009 CX Registration API v1.1.3",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0009-CXRegistrationAPI/CX-0009-CXRegistrationAPI.md",sourceDirName:"standards/CX-0009-CXRegistrationAPI",slug:"/standards/CX-0009-CXRegistrationAPI/",permalink:"/docs/standards/CX-0009-CXRegistrationAPI/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0008 Relevant standards for conformity assessments v1.1.0",permalink:"/docs/standards/CX-0008-RelevantStandardsForConformityAssessments/"},next:{title:"CX-0010 Business Partner Number v2.0.0",permalink:"/docs/standards/CX-0010-BusinessPartnerNumber/"}},d={},l=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Audience &amp; Scope",id:"11-audience--scope",level:3},{value:"1.2 Context",id:"12-context",level:3},{value:"1.3 Architecture Overview",id:"13-architecture-overview",level:3},{value:"1.4 Conformance",id:"14-conformance",level:3},{value:"1.5 Proof of conformity",id:"15-proof-of-conformity",level:3},{value:"1.6 Terminology",id:"16-terminology",level:3},{value:"2. Catena-X Registration API",id:"2-catena-x-registration-api",level:2},{value:"2.1 Preconditions and dependencies",id:"21-preconditions-and-dependencies",level:3},{value:"2.2 API SPEcification",id:"22-api-specification",level:3},{value:"2.2.1 API-Endpoints",id:"221-api-endpoints",level:4},{value:"2.2.2 Available Data Types",id:"222-available-data-types",level:4},{value:"2.2.3 API resources &amp; endpoints",id:"223-api-resources--endpoints",level:4},{value:"2.2.4 Error Handling",id:"224-error-handling",level:4},{value:"2.2.4.1 Error Messages &amp; Explanation",id:"2241-error-messages--explanation",level:5},{value:"Legal",id:"legal",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cx-0009-cx-registration-api-v113",children:"CX-0009 CX Registration API v1.1.3"}),"\n",(0,t.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(n.p,{children:"To become a participant of Catena-X, each applicant must go through a\nregistration process. Registration is a mandatory requirement for all\nfurther activities within the Catena-X network. The registration\nprocess, along with other services, provide the foundation of trust for\nthe Catena-X network."}),"\n",(0,t.jsx)(n.p,{children:"The Registration Service implements the endpoints that are needed for\nthe registration process."}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsx)(n.p,{children:"To become a participant of Catena-X, each applicant must go through a\nregistration process. Registration is a mandatory requirement for all\nfurther activities within the Catena-X network. The registration\nprocess, along with other services, provide the foundation of trust for\nthe Catena-X network."}),"\n",(0,t.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 Audience & Scope"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This standard is relevant for the following roles:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Core Service Provider"}),"\n",(0,t.jsx)(n.li,{children:"Onboarding Service Provider (for reference)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"12-context",children:"1.2 Context"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The registration API is used as part of the registration process."}),"\n",(0,t.jsx)(n.h3,{id:"13-architecture-overview",children:"1.3 Architecture Overview"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A core service provider operates among other things a registration\nfrontend through which a registering company can enter its data. In the\nfuture, the registration service may be accessed remotely, for example\nby onboarding service provider, so the API needs to be standardized."}),"\n",(0,t.jsx)(n.h3,{id:"14-conformance",children:"1.4 Conformance"}),"\n",(0,t.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines,\ndiagrams, examples, and notes in this specification are non-normative.\nEverything else in this specification is normative."}),"\n",(0,t.jsxs)(n.p,{children:["The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,\nSHOULD and SHOULD NOT in this document are to be interpreted as\ndescribed in\xa0",(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/bcp14",children:"BCP\n14"}),"\xa0[",(0,t.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc2119",children:"RFC2119"}),"]\n[",(0,t.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc8174",children:"RFC8174"}),"] when, and\nonly when, they appear in all capitals, as shown here."]}),"\n",(0,t.jsx)(n.h3,{id:"15-proof-of-conformity",children:"1.5 Proof of conformity"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All participants and their solutions will need to proof, that they are\nconform with the Catena-X standards. To validate that the standards are\napplied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,t.jsx)(n.p,{children:"Core service providers implementing their own registration solution MUST\nproof their conformity by providing:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"An openAPI specification of the endpoints described"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"16-terminology",children:"1.6 Terminology"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Application Programming Interface (API)"})}),"\n",(0,t.jsx)(n.p,{children:"An application programming interface (API) is a way for two or more\ncomputer programs to communicate with each other."}),"\n",(0,t.jsx)(n.p,{children:"Additional terminology used in this standard can be looked up in the\nglossary on the association homepage."}),"\n",(0,t.jsx)(n.h2,{id:"2-catena-x-registration-api",children:"2. Catena-X Registration API"}),"\n",(0,t.jsx)(n.h3,{id:"21-preconditions-and-dependencies",children:"2.1 Preconditions and dependencies"}),"\n",(0,t.jsx)(n.p,{children:"The registration API is exposed to the Internet."}),"\n",(0,t.jsx)(n.h3,{id:"22-api-specification",children:"2.2 API SPEcification"}),"\n",(0,t.jsx)(n.h4,{id:"221-api-endpoints",children:"2.2.1 API-Endpoints"}),"\n",(0,t.jsx)(n.p,{children:"The registration API MUST implement the following endpoints -- in focus\nare the API business logic / content and structure, the path name might change / be\ndifferent but the business logic behind as well as the attributes must\nbe followed. Details to the respective MUST and SHOULD statements may be found below."}),"\n",(0,t.jsx)(n.p,{children:"Enter / verify company data"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["GET /api/registration/legalEntityAddress/{bpn}\nPlease note - this endpoint is currently only Core Service Provider relevant. The Core Service Provider ",(0,t.jsx)(n.strong,{children:"MUST"})," be able to pre-fill the company address data if the user company has a BPN. The endpoint path ",(0,t.jsx)(n.strong,{children:"MUST NOT"})," be followed as long as all validations and processes are implemente"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Request body"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"n/a content inside the path"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Response body"})}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["GET\n/api/registration/application/{applicationId}/companyDetailsWithAddress\nThe Core Service Provider ",(0,t.jsx)(n.strong,{children:"MUST"})," provide the GET /{applicationId}/companyDetailsWithAddress endpoint for a standardized way to share the registration party data."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Request body"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"n/a content inside the path"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Response body"})}),"\n",(0,t.jsx)(n.p,{children:'{\n"companyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n"name": "string",\n"city": "string",\n"streetName": "string",\n"countryAlpha2Code": "string",\n"bpn": "string",\n"shortName": "string",\n"region": "string",\n"streetAdditional": "string",\n"streetNumber": "string",\n"zipCode": "string",\n"countryDe": "string",\n"uniqueIds": [\n{\n"type": "COMMERCIAL_REG_NUMBER",\n"value": "string"\n}\n]\n}'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["GET /api/registration/company/country/{alpha2Code}/uniqueidentifiers\nThe Core Service Provider ",(0,t.jsx)(n.strong,{children:"CAN"})," offer a GET /uniqueidentifiers endpoint to provide supported unique identifier based on the company lega address country alpha2Code."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Request body"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"n/a content inside the path"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Response body"})}),"\n",(0,t.jsx)(n.p,{children:'[\n{\n"id": 0,\n"label": "COMMERCIAL_REG_NUMBER"\n}\n]'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["POST\n/api/registration/application/{applicationId}/companyDetailsWithAddress\nThe Core Service Provider ",(0,t.jsx)(n.strong,{children:"MUST"})," provide the POST /{applicationId}/companyDetailsWithAddress endpoint for a standardized way to store/post the registration party data."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Request body"})}),"\n",(0,t.jsx)(n.p,{children:'{\n"companyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n"name": "string",\n"city": "string",\n"streetName": "string",\n"countryAlpha2Code": "string",\n"bpn": "string",\n"shortName": "string",\n"region": "string",\n"streetAdditional": "string",\n"streetNumber": "string",\n"zipCode": "string",\n"countryDe": "string",\n"uniqueIds": [\n{\n"type": "COMMERCIAL_REG_NUMBER",\n"value": "string"\n}\n]\n}'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Response body"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"success/error"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Company roles and consent"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["GET /api/registration/company/companyRoles\nThe Core Service Provider ",(0,t.jsx)(n.strong,{children:"MUST"})," implement the GEt /companyRoles endpoint."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Request body"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"n/a content inside the path"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Response body"})}),"\n",(0,t.jsx)(n.p,{children:'[\n{\n"companyRole": "string",\n"roleDescription": "string"\n}\n]'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Get: /api/registration/companyRoleAgreementData\nThe Core Service Provider ",(0,t.jsx)(n.strong,{children:"MUST"})," implement the GET /companyRoleAgreementData endpoint."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Request body"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"n/a content inside the path"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Response body"})}),"\n",(0,t.jsx)(n.p,{children:'{\n"companyRoles": [\n{\n"companyRole": "ACTIVE_PARTICIPANT",\n"descriptions": {\n"additionalProp1": "string",\n"additionalProp2": "string",\n"additionalProp3": "string"\n},\n"agreementIds": [\n"uuid"\n]\n}\n],\n"agreements": [\n{\n"agreementId": "uuid",\n"name": "string",\n"documentId": "uuid"\n}\n]\n}'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["POST\n/api/registration/application/{applicationId}/companyRoleAgreementConsents\nThe Core Service Provider ",(0,t.jsx)(n.strong,{children:"MUST"})," implement the GET /companyRoleAgreementConsents endpoint."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Request body"})}),"\n",(0,t.jsx)(n.p,{children:'{\n"companyRoles": [\n"ACTIVE_PARTICIPANT"\n],\n"agreements": [\n{\n"agreementId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n"consentStatus": "ACTIVE"\n}\n]\n}'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Response body"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"success/error"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Registration relevant documents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["GET\n/api/registration/application/{applicationId}/documentType/{documentTypeId}/documents\nThe Core Service Provider ",(0,t.jsx)(n.strong,{children:"SHOULD"})," implement the GET /{documentTypeId}/documents endpoint."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["POST\n/api/registration/application/{applicationId}/documentType/{documentTypeId}/documents\nThe Core Service Provider ",(0,t.jsx)(n.strong,{children:"SHOULD"})," implement the POST /{documentTypeId}/documents endpoint. Depending on the Core Service Provider implemented registration process authentication methods, the document endpoint might change within the endpoint path or business logic."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["DELETE /api/registration/documents/{documentId}\nThe Core Service Provider ",(0,t.jsx)(n.strong,{children:"SHOULD"})," implement the DELETE /{documentTypeId}/documents endpoint to enable the onboarding customer to delete own previous uploaded document again. Important are audit relevant processes. The Core Service Provider ",(0,t.jsx)(n.strong,{children:"MUST"})," ensure that audit guidelines are not violated."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["GET /api/registration/Documents/{documentId}\nThe Core Service Provider ",(0,t.jsx)(n.strong,{children:"MUST"})," support to display the user company loaded documents. The endpoint path might change but the Core Service Provider ",(0,t.jsx)(n.strong,{children:"MUST"})," ensure that validations are implemeneted (e.g. the company user can not access uploaded documents of a second registration company)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Verify and submit registration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["GET\n/api/registration/application/{applicationID}/registrationData\nThe Core Service Provider ",(0,t.jsx)(n.strong,{children:"MUST"})," support a GET /{applicationID}/registrationData endpooint with the reference implemented properties/attributes. This ensures that the company registrationData can be viewed in a standardized model."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Request body"})}),"\n",(0,t.jsx)(n.p,{children:'{\n"companyId": "uuid",\n"name": "string",\n"bpn": "string",\n"shortName": "string",\n"city": "string",\n"region": "string",\n"streetAdditional": "string",\n"streetName": "string",\n"streetNumber": "string",\n"zipCode": "string",\n"countryAlpha2Code": "string",\n"countryDe": "string",\n"companyRoles": [\n"ACTIVE_PARTICIPANT"\n],\n"agreements": [\n{\n"agreementId": "uuid",\n"consentStatus": "ACTIVE"\n}\n],\n"documents": [\n{\n"documentName": "string"\n}\n],\n"uniqueIds": [\n{\n"type": "COMMERCIAL_REG_NUMBER",\n"value": "string"\n}\n]\n}'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Response body"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"success/error"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"POST\n/api/registration/application/{applicationID}/submitregistration"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Registration Application Verification"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Auto Workflow as per the process description:\n",(0,t.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/portal-assets/blob/main/developer/01.%20Onboarding/03.%20Registration%20Approval/03.%20Registration%20Approval%20Process.md",children:"https://github.com/eclipse-tractusx/portal-assets/blob/main/developer/01.%20Onboarding/03.%20Registration%20Approval/03.%20Registration%20Approval%20Process.md"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["POST\n/api/administration/registration/application/{applicationId}/approve\nPlease note - this endpoint is currently only Core Service Provider relevant. The Core Service Provider ",(0,t.jsx)(n.strong,{children:"MUST"})," be able to approve (with message, backend business logic and email information) a registration request. The endpoint path ",(0,t.jsx)(n.strong,{children:"MUST NOT"})," be followed as long as all validations and processes are implemented."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["POST\n/api/administration/registration/application/{applicationId}/decline\nPlease note - this endpoint is currently only Core Service Provider relevant. The Core Service Provider ",(0,t.jsx)(n.strong,{children:"MUST"})," be able to decline (with message and email information) a registration request. The endpoint path ",(0,t.jsx)(n.strong,{children:"MUST NOT"})," be followed as long as all validations and processes are implemented."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["POST /api/administration/registration/application/clearinghouse\nPlease note - this endpoint is currently only Core Service Provider relevant. The Core Service Provider ",(0,t.jsx)(n.strong,{children:"MUST"})," be able to trigger the CH trust anchor. The endpoint path ",(0,t.jsx)(n.strong,{children:"MUST NOT"})," be followed, but the endpoint business logic must be followed to allow a standardized interface with the GXCH."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["POST\n/api/administration/registration/application/{applicationId}/retrigger-clearinghouse\nPlease note - this endpoint is currently only Core Service Provider relevant. The Core Service Provider ",(0,t.jsx)(n.strong,{children:"MUST"})," be able to retrigger/overwrite the CH decision if necessary. The endpoint path ",(0,t.jsx)(n.strong,{children:"MUST NOT"})," be followed, but the endpoint business logic must be followed to allow a standardized interface with the GXCH."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"POST\n/api/administration/registration/application/{applicationId}/trigger-identity-wallet"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"POST\n/api/administration/registration/application/{applicationId}/trigger-bpn"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"POST\n/api/administration/registration/application/clearinghouse/selfDescription"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"222-available-data-types",children:"2.2.2 Available Data Types"}),"\n",(0,t.jsx)(n.p,{children:"The registration API MUST use JSON as the payload transported via HTTP."}),"\n",(0,t.jsx)(n.h4,{id:"223-api-resources--endpoints",children:"2.2.3 API resources & endpoints"}),"\n",(0,t.jsx)(n.p,{children:"The HTTP endpoints introduced in this standard MUST implement\nauthentication and authorization."}),"\n",(0,t.jsx)(n.h4,{id:"224-error-handling",children:"2.2.4 Error Handling"}),"\n",(0,t.jsx)(n.p,{children:"HTTP standard response codes MUST be used."}),"\n",(0,t.jsx)(n.h5,{id:"2241-error-messages--explanation",children:"2.2.4.1 Error Messages & Explanation"}),"\n",(0,t.jsx)(n.p,{children:"The following http response codes MUST be defined for HTTP POST\nendpoint:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Code"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"201"}),(0,t.jsx)(n.td,{children:"Registration message was received successfully"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"400"}),(0,t.jsx)(n.td,{children:"Request body was malformed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"401"}),(0,t.jsx)(n.td,{children:"Not authorized"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"403"}),(0,t.jsx)(n.td,{children:"Forbidden"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"405"}),(0,t.jsx)(n.td,{children:"Method not allowed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"409"}),(0,t.jsx)(n.td,{children:"Error"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,t.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,t.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(96540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);