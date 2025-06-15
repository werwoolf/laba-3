import{L as s,j as e}from"./entry.client-BBsQz3mK.js";const l=[{depth:3,value:"3. Specific Requirements",id:"3-specific-requirements",children:[{depth:4,value:"3.1 External Interface Requirements",id:"31-external-interface-requirements"},{depth:4,value:"3.2 Functional Requirements",id:"32-functional-requirements"},{depth:4,value:"3.3 Performance Requirements",id:"33-performance-requirements"},{depth:4,value:"3.4 Design Constraints",id:"34-design-constraints"},{depth:4,value:"3.5 Software System Attributes",id:"35-software-system-attributes"},{depth:4,value:"3.6 Other Requirements",id:"36-other-requirements"}]}],c=void 0;function r(i){const n={h3:"h3",h4:"h4",hr:"hr",li:"li",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"3-specific-requirements",children:"3. Specific Requirements"}),`
`,e.jsx(n.h4,{id:"31-external-interface-requirements",children:"3.1 External Interface Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User Interfaces"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Web-based interface using React and Tailwind CSS."}),`
`,e.jsx(n.li,{children:"Intuitive design for issuing, verifying, and viewing credentials."}),`
`,e.jsx(n.li,{children:"Multilingual support (English and Ukrainian minimum)."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hardware Interfaces"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Standard computing devices (no specialized hardware required)."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Software Interfaces"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Solana blockchain integration via Anchor framework."}),`
`,e.jsx(n.li,{children:"React Query for efficient data fetching and caching."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Communication Interfaces"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"HTTP/HTTPS for web communication."}),`
`,e.jsx(n.li,{children:"WebSocket for real-time notifications."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"32-functional-requirements",children:"3.2 Functional Requirements"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"ID"}),e.jsx(n.th,{children:"Requirement"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"FR1"})}),e.jsx(n.td,{children:"Authorized issuers shall create and issue credentials on the Solana blockchain."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"FR2"})}),e.jsx(n.td,{children:"Verifiers shall validate credentials by querying the blockchain."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"FR3"})}),e.jsx(n.td,{children:"Credentials shall be stored securely and immutably on the blockchain."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"FR4"})}),e.jsx(n.td,{children:"Users shall search and view their own credentials."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"FR5"})}),e.jsx(n.td,{children:"Only authorized users shall issue or verify credentials."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"FR6"})}),e.jsx(n.td,{children:"Issuers shall revoke credentials if necessary."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"FR7"})}),e.jsx(n.td,{children:"Smart contracts shall manage credential issuance and verification."})]})]})]}),`
`,e.jsx(n.h4,{id:"33-performance-requirements",children:"3.3 Performance Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Handle at least 1000 transactions per second."}),`
`,e.jsx(n.li,{children:"Credential verification response time under 2 seconds."}),`
`,e.jsx(n.li,{children:"System availability of 99.9%."}),`
`]}),`
`,e.jsx(n.h4,{id:"34-design-constraints",children:"3.4 Design Constraints"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Backend: Rust, Solana, Anchor, Cargo test framework."}),`
`,e.jsx(n.li,{children:"Frontend: React, React Query, Tailwind CSS."}),`
`,e.jsx(n.li,{children:"Blockchain: Solana with Anchor framework."}),`
`,e.jsx(n.li,{children:"All tests must pass using Cargo test framework."}),`
`]}),`
`,e.jsx(n.h4,{id:"35-software-system-attributes",children:"3.5 Software System Attributes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Security"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Data encryption for sensitive information."}),`
`,e.jsx(n.li,{children:"Role-based access control."}),`
`,e.jsx(n.li,{children:"Smart contract security audits."}),`
`,e.jsx(n.li,{children:"Multi-signature wallets for critical operations."}),`
`,e.jsx(n.li,{children:"Regular system security audits."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reliability"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Minimal downtime with robust data integrity."}),`
`,e.jsx(n.li,{children:"Backup and recovery mechanisms."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Maintainability"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Well-documented, modular code."}),`
`,e.jsx(n.li,{children:"Adherence to coding best practices."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Portability"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Web-based frontend accessible on modern browsers."}),`
`,e.jsx(n.li,{children:"Backend deployable on Rust- and Solana-compatible servers."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"36-other-requirements",children:"3.6 Other Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"OR1"}),": Compliance with data protection regulations (e.g., GDPR)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"OR2"}),": Comprehensive user and developer documentation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"OR3"}),": Scalability to support growing user and transaction volumes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"OR4"}),": User control over personal data per privacy laws."]}),`
`]}),`
`,e.jsx(n.hr,{})]})}function d(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{d as default,c as frontmatter,l as tableOfContents};
//# sourceMappingURL=requirements-3XrufBUP.js.map
