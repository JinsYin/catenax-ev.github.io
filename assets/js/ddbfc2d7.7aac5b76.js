"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[5535],{29614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(74848),i=t(28453);const o={},a="CX-0106 Aspect Model IotSensorData v1.0.0",r={id:"standards/CX-0106-AspectModelIoTSensorData/CX-0106-AspectModelIoTSensorData",title:"CX-0106 Aspect Model IotSensorData v1.0.0",description:"FOR WHOM IS THE STANDARD DESIGNED",source:"@site/versioned_docs/version-24.03/standards/CX-0106-AspectModelIoTSensorData/CX-0106-AspectModelIoTSensorData.md",sourceDirName:"standards/CX-0106-AspectModelIoTSensorData",slug:"/standards/CX-0106-AspectModelIoTSensorData/",permalink:"/docs/standards/CX-0106-AspectModelIoTSensorData/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0105 Asset Tracking: Triangle Document 1.0.0",permalink:"/docs/standards/CX-0105-AssetTrackingTriangleDocument/"},next:{title:"CX-0107-AspectModelReuseCertificate v1.0.0",permalink:"/docs/standards/CX-0107-AspectModelReuseCertificate/"}},l={},d=[{value:"FOR WHOM IS THE STANDARD DESIGNED",id:"for-whom-is-the-standard-designed",level:2},{value:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD",id:"comparison-with-the-previous-version-of-the-standard",level:2},{value:"ABSTRACT",id:"abstract",level:2},{value:"1 INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT AND ARCHITECTURE FIT",id:"12-context-and-architecture-fit",level:3},{value:"1.3 CONFORMANCE AND PROOF OF CONFORMITY",id:"13-conformance-and-proof-of-conformity",level:3},{value:"1.4 EXAMPLES",id:"14-examples",level:3},{value:"1.5 TERMINOLOGY",id:"15-terminology",level:3},{value:"2 ASPECT MODEL &quot;IotSensorData v2.0.0&quot;",id:"2-aspect-model-iotsensordata-v200",level:2},{value:"2.1 INTRODUCTION",id:"21-introduction",level:3},{value:"2.2 SPECIFICATION ARTIFACTS",id:"22-specification-artifacts",level:3},{value:"2.3 LICENSE",id:"23-license",level:3},{value:"2.4 IDENTIFER OF SEMANTIC MODEL",id:"24-identifer-of-semantic-model",level:3},{value:"2.5 FORMATS OF SEMANTIC MODEL",id:"25-formats-of-semantic-model",level:3},{value:"2.5.1 RDF TURTLE",id:"251-rdf-turtle",level:4},{value:"2.5.2 JSON SCHEMA",id:"252-json-schema",level:4},{value:"2.5.3 AASX",id:"253-aasx",level:4},{value:"2.6 SEMANTIC MODEL",id:"26-semantic-model",level:3},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"cx-0106-aspect-model-iotsensordata-v100",children:"CX-0106 Aspect Model IotSensorData v1.0.0"}),"\n",(0,s.jsx)(n.h2,{id:"for-whom-is-the-standard-designed",children:"FOR WHOM IS THE STANDARD DESIGNED"}),"\n",(0,s.jsx)(n.p,{children:"Please refer to AUDIENCE & SCOPE."}),"\n",(0,s.jsx)(n.h2,{id:"comparison-with-the-previous-version-of-the-standard",children:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD"}),"\n",(0,s.jsx)(n.p,{children:"This is the initial version of the standard."}),"\n",(0,s.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,s.jsx)(n.p,{children:"The asset tracking use case aims to design a standard solution how diverse IoT solutions, available on the free market, can be incorporated into the Catena-X network keeping the interoperability and data souvereignty requirements respected. Although the main goal was always to track company assets with the various IoT devices, based on the set of standards designed by asset tracking use case team, there is a potential to fully use these in any use case in the Catena-X environment and beyond. The model opens the door for any IoT device manufacturer and any network provider to be part of the Catena-X network."}),"\n",(0,s.jsx)(n.p,{children:"The data model \u201cIotSensorData\u201d represents a set of data collected from IoT sensor devices. The definition of IoT Sensor Devices is provided in a separate data model \u201cIotSensorDeviceDefinition\u201d. The sensor values have a normalized format independently from the origin network. The sensor data is the output of a device that detects and responds to some type of input from the physical environment (temperature, light, humidity, movement, etc.). The output may be used to provide input information to another system (e.g. an application to track assests) or to guide a process (e.g. support root cause analysis for quality issues with the tracked assets)."}),"\n",(0,s.jsx)(n.h2,{id:"1-introduction",children:"1 INTRODUCTION"}),"\n",(0,s.jsx)(n.p,{children:"This document describes a semantic model to support the exchange of IoT sensor data between different companies via Catena-X network. The Asset Tracking Platform receives data from IoT networks, and transforms it to this semantic model."}),"\n",(0,s.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The standard is relevant for the following roles:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n",(0,s.jsx)(n.li,{children:"Business Application Provider"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The data model \u201cIotSensorData\u201d represents a set of data collected from IoT sensor devices. The sensor data is the output of a device that detects and responds to some type of input from the physical environment  (temperature, light, humidity, movement, etc.). The output may be used to provide input information to another system (e.g. an application to track assests) or to guide a process (e.g. support root cause analysis for quality issues with the tracked assets)."}),"\n",(0,s.jsx)(n.p,{children:"The model counts with various transmission methods how data can be collected from sensors, e.g. LPWAN, WiFi, Cellular/Satellite, Bluetooth, Zigbee, W-Wave,etc."}),"\n",(0,s.jsx)(n.h3,{id:"12-context-and-architecture-fit",children:"1.2 CONTEXT AND ARCHITECTURE FIT"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The purpose of the Asset Tracking product is to track individual assets with various IoT sensor devices. The data model \u201cIotSensorData\u201d represents a set of data collected from IoT sensor devices. The sensor values are interpretable only in relation to the assets which they are attached to."}),"\n",(0,s.jsx)(n.p,{children:"The challenge is to cover various network solutions used by sensors to provide data, like LPWAN, WiFi, Cellular/Satellite, Bluetooth, Zigbee, W-Wave, etc."}),"\n",(0,s.jsx)(n.p,{children:"One of the important sensor values represent the GPS coordinates, which allows to locate assets in real time. The traceability of assets allows to improve business planning processes, e.g. geographical location of a returnable container allows production planners to better estimate arrival time of raw materials."}),"\n",(0,s.jsx)(n.p,{children:"Beside of the geographical location another sensor values, like humidity, light conditions, filling level, acceleration, etc. are playing key role to improve supply chain processes. Sensor value-based documentation of the asset lifecycle supports complaint management, e.g. proven shock can impact the functionality or quality of an asset; extreme weather conditions during transportation can damage material quality in returnable containers, what should be reflected in the product shelf-life, etc."}),"\n",(0,s.jsx)(n.p,{children:"The huge volume of data produced and transmitted from sensor devices provides a lot of information that is often critical to enterprise decision-making."}),"\n",(0,s.jsx)(n.h3,{id:"13-conformance-and-proof-of-conformity",children:"1.3 CONFORMANCE AND PROOF OF CONFORMITY"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams,\nexamples, and notes in this specification are non-normative. Everything else in\nthis specification is normative."}),"\n",(0,s.jsxs)(n.p,{children:["The key words ",(0,s.jsx)(n.strong,{children:"MAY"}),", ",(0,s.jsx)(n.strong,{children:"MUST"}),", ",(0,s.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,s.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,s.jsx)(n.strong,{children:"RECOMMENDED"}),",\n",(0,s.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,s.jsx)(n.strong,{children:"SHOULD"})," and ",(0,s.jsx)(n.strong,{children:"SHOULD NOT"})," in this document document are to be\ninterpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they\nappear in all capitals, as shown here."]}),"\n",(0,s.jsxs)(n.p,{children:["All participants and their solutions ",(0,s.jsx)(n.strong,{children:"MUST"})," proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."]}),"\n",(0,s.jsx)(n.p,{children:"The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data."}),"\n",(0,s.jsx)(n.h3,{id:"14-examples",children:"1.4 EXAMPLES"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "sensorRuntimeData" : [ {\n    "sensorData" : [ {\n      "sensorValue" : 32.00,\n      "sensorUnit" : "unit:Celsius",\n      "sensorType" : "Temperature"\n    } ],\n    "sensorGeoLocation" : {\n      "altitude" : 280.20,\n      "geoDataTimestamp" : "2023-02-04T14:48:54",\n      "latitude" : 40.20361,\n      "longitude" : 11.3102\n    },\n    "batteryLevel" : 50.00,\n    "timestamp" : "2023-02-04T14:48:54",\n    "transmissionMethod" : "LoRaWAN"\n  } ],\n  "catenaXId" : "urn:uuid:ed85f17e-29dd-473c-9cb8-d7ad1dc44d2f"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"15-terminology",children:"1.5 TERMINOLOGY"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"catenaXId:"}),"\nThe fully anonymous Catena-X ID of the device, valid for the Catena-X dataspace."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"sensorRuntimeData:"}),"\nThe information collected by a Sensor device at an instance in time."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"sensorData:"}),"\nThe data collected by an IoT Sensor Device."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"sensorType:"}),"\nDifferent types of sensors that are commonly used in various applications, measuring one of the physical properties like Temperature, Pressure,  Resistance, Shock, Conduction, Heat Transfer etc."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"sensorValue:"}),"\nThe measured value of the sensor type."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"sensorUnit:"}),"\nContains a reference to one of the units in the Unit Catalog."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"sensorGeoLocation:"}),"\nGeodata, geographic data or geospatial data, refers to data and information that has explicit or implicit association with a location relative to Earth."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"altitude:"}),"\nAntenna Altitude above/below mean-sea-level (geoid)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"geoDataTimestamp:"}),"\nThe timestamp of the latest sensor reading of the geo data."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"latitude:"}),"\nThe angle between zenith and a plane parallel to the equator."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"longitude:"}),"\nGeographic coordinate that specifies the east-west position of a point on the Earth's surface."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"timestamp:"}),"\nThe timestamp of the latest sensor reading of the geo data."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"batteryLevel:"}),"\nThe battery level displays how much charge of the battery has been left."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"transmissionMethod:"}),"\nThe method under which the sensing data is transmitted from the source to the remote node."]}),"\n",(0,s.jsx)(n.p,{children:"Additional terminology used in this standard can be looked up in the glossary on\nthe association homepage."}),"\n",(0,s.jsx)(n.h2,{id:"2-aspect-model-iotsensordata-v200",children:'2 ASPECT MODEL "IotSensorData v2.0.0"'}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"21-introduction",children:"2.1 INTRODUCTION"}),"\n",(0,s.jsx)(n.p,{children:"The purpose of the Asset Tracking product is to track Individual assets with Various IoT sensor devices. The data model \u201cIotSensorData\u201d represents a set of data collected from IoT sensor devices. The sensor values are interpretable only in relation to the assets which they are attached to."}),"\n",(0,s.jsx)(n.h3,{id:"22-specification-artifacts",children:"2.2 SPECIFICATION ARTIFACTS"}),"\n",(0,s.jsxs)(n.p,{children:['The modeling of the semantic model specified in this document was done in\naccordance to the "semantic driven workflow" to create a submodel template\nspecification ',(0,s.jsx)(n.a,{href:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf",children:"SMT"})]}),"\n",(0,s.jsx)(n.p,{children:"This aspect model is written SAMM as a modeling language and like all Catena-X data models, this model is available in a machine-readable format on GitHub2F2F\nconformant to CX-0003."}),"\n",(0,s.jsx)(n.h3,{id:"23-license",children:"2.3 LICENSE"}),"\n",(0,s.jsx)(n.p,{children:"This Catena-X data model is an outcome of Catena-X use case group Circular Economy - Asset Tracking (CAT).\nThis Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons4F4F."}),"\n",(0,s.jsx)(n.h3,{id:"24-identifer-of-semantic-model",children:"2.4 IDENTIFER OF SEMANTIC MODEL"}),"\n",(0,s.jsx)(n.p,{children:"The semantic model has the unique identifier"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["urn:samm",":io",".catenax.iot_sensor_data:2.0.0"]})}),"\n",(0,s.jsx)(n.h3,{id:"25-formats-of-semantic-model",children:"2.5 FORMATS OF SEMANTIC MODEL"}),"\n",(0,s.jsx)(n.h4,{id:"251-rdf-turtle",children:"2.5.1 RDF TURTLE"}),"\n",(0,s.jsx)(n.p,{children:"The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating\nadditional file formats and serializations."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.iot_sensor_data/2.0.0/IotSensorData.ttl",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.iot_sensor_data/2.0.0/IotSensorData.ttl"})}),"\n",(0,s.jsx)(n.p,{children:"The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation\nof other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel\nTemplate or a HTML documentation."}),"\n",(0,s.jsx)(n.h4,{id:"252-json-schema",children:"2.5.2 JSON SCHEMA"}),"\n",(0,s.jsx)(n.p,{children:'A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only\npayload of the Asset Administration Shell for the API operation "GetSubmodel".'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.iot_sensor_data/2.0.0/gen/IotSensorData-schema.json",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.iot_sensor_data/2.0.0/gen/IotSensorData-schema.json"})}),"\n",(0,s.jsx)(n.h4,{id:"253-aasx",children:"2.5.3 AASX"}),"\n",(0,s.jsxs)(n.p,{children:["A AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested\nartifacts for a Submodel Template Specification conformant to [[SMT][(",(0,s.jsx)(n.a,{href:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf",children:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf"}),")]."]}),"\n",(0,s.jsx)(n.h3,{id:"26-semantic-model",children:"2.6 SEMANTIC MODEL"}),"\n",(0,s.jsx)(n.p,{children:"The data model is described in SAMM.\nThe generated documentation can be found here:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.iot_sensor_data/2.0.0/gen",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.iot_sensor_data/2.0.0/gen"})}),"\n",(0,s.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,s.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,s.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["[SMT] How to create a submodel template specification. Guideline. Download from: ",(0,s.jsx)(n.a,{href:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf",children:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf"})]}),"\n",(0,s.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,s.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Alt text",src:t(77190).A+"",width:"1293",height:"924"})}),"\n",(0,s.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,s.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,s.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},77190:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/iotsensordata-31053867a3d72d87a84b3ca7214313e4.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);