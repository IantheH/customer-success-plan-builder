# Customer Success Plan Builder

A lightweight, interactive, platform-agnostic tool for Customer Success Managers and Technical Account Managers to generate structured, professional customer success plans directly in the browser — no backend, no dependencies, no install required.

---

## Live Demo

[Open the Customer Success Plan Builder](https://iantheh.github.io/customer-success-plan-builder/)

---

## Purpose

Customer success planning is often inconsistent across teams — some CSMs use decks, others use spreadsheets, and many write plans from scratch for every new account. This tool standardizes the process by turning key customer inputs into a structured, shareable success plan in seconds.

This is a Customer Success and Technical Account Management portfolio project that shows how customer goals can be turned into onboarding plans, adoption priorities, stakeholder alignment, technical workflow needs, risk mitigation, and measurable business value.

---

## Fictional Demo Scenario

**SaaS Product: FlowPilot CRM**
FlowPilot CRM is a fictional CRM and workflow automation platform for small and mid-sized service businesses. It helps teams manage contacts, automate follow-up, track stakeholder activity, and improve visibility across customer workflows.

**Sample Customer: PeopleFirst HR Partners**
PeopleFirst HR Partners is a growing HR consulting firm that provides recruiting support, employee onboarding, compliance reminders, and HR advisory services to small and mid-sized companies. They are adopting FlowPilot CRM to replace manual spreadsheet tracking, automate client follow-up, and gain visibility into open HR workflows.

Click **Load Sample Data** in the app to populate the form with this scenario and generate a full plan instantly.

> All names, companies, and scenarios in this project are entirely fictional and used for demonstration purposes only.

---

## Features

- **10-field input form** covering all core success plan components
- **Load Sample Data** — pre-fills the form with the PeopleFirst HR Partners scenario
- **Generate Success Plan** — produces a structured 9-section plan from your inputs
- **Copy to Clipboard** — paste the plan into any CRM, email, or document tool
- **Download as Markdown** — save a `.md` file for offline use or version control
- **Clear Form** — reset all inputs and outputs with one click
- **Mobile responsive** — works on desktop, tablet, and phone
- **No dependencies** — open `index.html` directly in any browser, no server needed

---

## Generated Plan Sections

Every generated plan includes:

| # | Section | Description |
|---|---|---|
| 1 | Executive Summary | Narrative overview of the engagement, CSM ownership, and plan intent |
| 2 | Customer Goals | Verbatim goals as entered — preserved for stakeholder alignment |
| 3 | Stakeholder Map | Named stakeholders with roles and responsibilities |
| 4 | Primary Use Cases | Key workflows and features in scope for this customer |
| 5 | 30/60/90-Day Priorities | Auto-derived action items per phase based on goals and use cases |
| 6 | Adoption Risks & Mitigations | Identified blockers with a standard mitigation framing |
| 7 | Success Criteria | Quantitative metrics to measure progress and validate outcomes |
| 8 | Recommended Next Steps | Numbered immediate action list to drive momentum post-kickoff |
| 9 | Next Review Date | Confirmed review date with agenda framing |

---

## How to Use

### Live Demo

Open the live demo here:

[Customer Success Plan Builder](https://iantheh.github.io/customer-success-plan-builder/)

### Using the App

1. Open the live demo link.
2. Fill in the customer details form, or click **Load Sample Data** to use the PeopleFirst HR Partners demo scenario.
3. Click **Generate Success Plan**.
4. Review the plan in the output panel.
5. Use **Copy to Clipboard** or **Download .md** to share or save the plan.

Required fields: Customer Name, Primary Contact, and Business Goals. All other fields are optional but improve plan quality.

### Local Use

To run locally, download the repository and open `index.html` in any modern browser.
---

## Project Files

```
customer-success-plan-builder/
├── index.html    — App structure and markup
├── styles.css    — All visual design and responsive layout
├── script.js     — Plan logic, sample data, and interactivity
└── README.md     — This file
```

---

## What This Demonstrates

### Customer Success

This project demonstrates a working knowledge of the Customer Success function:

- **Customer success planning** — Translating business goals into a structured, time-bound engagement plan
- **SaaS onboarding strategy** — The 30/60/90-day framework reflects common SaaS onboarding practice: Foundation → Expansion → Value Realization
- **Product adoption planning** — Surfacing use cases, first-value milestones, and adoption risks shows awareness that adoption is not automatic — it requires planning and monitoring
- **Stakeholder alignment** — Mapping executive sponsors, technical owners, and internal champions reflects the multi-threaded relationship management needed to reduce dependency on a single contact and support stronger account health
- **Risk identification** — Naming adoption blockers early (change resistance, unclear ownership, process gaps) demonstrates proactive risk management rather than reactive firefighting
- **Success metrics definition** — Tying metrics to business outcomes rather than just product usage shows maturity in the CS practice
- **Value realization** — The 90-day QBR framing and metric validation step reflects an outcome-focused, long-term, value-focused engagement model

### Technical Account Management

This project also demonstrates skills relevant to TAM roles:

- **Technical fluency through a simple interactive tool** — Building a functional web app from scratch shows comfort with frontend technologies and the ability to create practical, demonstrable tooling
- **Process documentation and repeatability** — The template structure mirrors how TAMs codify best practices into scalable, repeatable frameworks across a customer base
- **Data-driven customer conversations** — Quantitative success metrics and structured milestones reflect the analytical approach TAMs bring to customer reviews and escalations
- **Platform-agnostic thinking** — The tool is intentionally not tied to any real product, demonstrating the ability to apply CS/TAM methodology across different platforms and industries
- **Communication and presentation** — The clean, structured plan output is designed to be shared directly with customers and stakeholders, reflecting TAM-level written communication standards

---

## Future Improvement Ideas

- **Save and load plans** — LocalStorage or file import/export to persist plans across sessions
- **Multiple plan templates** — Options for startup onboarding, enterprise expansion, and renewal plans
- **Risk scoring** — Let users rate adoption risks by likelihood and impact
- **PDF export** — Generate a formatted PDF version of the plan for executive sharing
- **Editable output** — Allow direct editing of the generated plan before download
- **Progress tracker** — A simple checklist view of the 30/60/90-day items to track in-flight
- **CRM integration hooks** — Export plan data as structured JSON for import into Salesforce, HubSpot, or Gainsight

---

## Design System

| Token | Color | Usage |
|---|---|---|
| Navy | `#0d1b2a` | Page background |
| Navy Mid | `#1a2e45` | Panel backgrounds |
| Blue | `#2979ff` | Primary actions, focus states |
| Gold | `#f0b429` | Accents, section highlights |
| White | `#ffffff` | Body text |
| Success Green | `#26c6a2` | Confirmations, download button |

---

## License

MIT — free to use, adapt, and include in your portfolio.
