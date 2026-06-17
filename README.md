# Customer Success Plan Builder

A lightweight, interactive, platform-agnostic experience for creating structured customer success plans directly in the browser — no backend, dependencies, or installation required.

---

## Live Demo

[Open the Customer Success Plan Builder](https://iantheh.github.io/customer-success-plan-builder/)

This live demo uses fictional customer and company data created for portfolio demonstration purposes only.

---

## Purpose

Customer success planning is often inconsistent across teams. Some Customer Success Managers use presentations, others use spreadsheets, and many create plans from scratch for every new account.

This experience standardizes the process by turning key customer inputs into a structured, shareable success plan in seconds.

This Customer Success and Technical Account Management portfolio experience demonstrates how customer goals can be translated into onboarding plans, adoption priorities, stakeholder alignment, technical workflow needs, risk mitigation, and measurable business value.

---

## Fictional Demo Scenario

### SaaS Product: FlowPilot CRM

FlowPilot CRM is a fictional CRM and workflow automation platform for small and mid-sized service businesses. It helps teams manage contacts, automate follow-up, track stakeholder activity, and improve visibility across customer workflows.

### Sample Customer: PeopleFirst HR Partners

PeopleFirst HR Partners is a fictional growing HR consulting firm that provides recruiting support, employee onboarding, compliance reminders, and HR advisory services to small and mid-sized companies.

The company is adopting FlowPilot CRM to replace manual spreadsheet tracking, automate client follow-up, and improve visibility into open HR workflows.

Click **Load Sample Data** in the app to populate the form with this scenario and generate a complete customer success plan.

> All names, companies, customer details, and scenarios in this project are fictional and used for demonstration purposes only.

---

## Features

- **10-field input form** covering core customer success plan components
- **Load Sample Data** — pre-fills the form with the PeopleFirst HR Partners scenario
- **Generate Success Plan** — creates a structured 9-section plan from customer inputs
- **Copy to Clipboard** — copies the generated plan for use in a CRM, email, or document
- **Download as Markdown** — saves the generated plan as a `.md` file for review or recordkeeping
- **Clear Form** — resets all inputs and generated content
- **Responsive design** — works across desktop, tablet, and mobile
- **No dependencies** — runs directly in the browser with no backend or build process

---

## Generated Plan Sections

Every generated plan includes:

| # | Section | Description |
|---|---|---|
| 1 | Executive Summary | Narrative overview of the engagement, ownership, and plan intent |
| 2 | Customer Goals | Customer goals preserved for stakeholder alignment |
| 3 | Stakeholder Map | Named stakeholders with roles and responsibilities |
| 4 | Primary Use Cases | Key workflows and product capabilities in scope |
| 5 | 30/60/90-Day Priorities | Action items organized by implementation and adoption phase |
| 6 | Adoption Risks & Mitigations | Identified blockers with recommended mitigation approaches |
| 7 | Success Criteria | Quantitative and qualitative measures for tracking progress |
| 8 | Recommended Next Steps | Immediate actions designed to maintain momentum |
| 9 | Next Review Date | Confirmed review timing with agenda context |

---

## How to Use

### Live Demo

Open the live experience:

[Customer Success Plan Builder](https://iantheh.github.io/customer-success-plan-builder/)

### Using the Experience

1. Open the live demo.
2. Enter the customer details, goals, stakeholders, use cases, risks, and success measures.
3. Or click **Load Sample Data** to use the fictional PeopleFirst HR Partners scenario.
4. Click **Generate Success Plan**.
5. Review the generated plan in the output panel.
6. Use **Copy to Clipboard** or **Download .md** to save the generated output for review.

Required fields:

- Customer Name
- Primary Contact
- Business Goals

All other fields are optional but improve the quality and completeness of the generated plan.

### Local Review

For portfolio review, the project may be inspected directly in this repository or viewed through the live demo.

No installation, server, build process, or external dependency is required.

---

## Project Files

```text
customer-success-plan-builder/
├── index.html    — Application structure and markup
├── styles.css    — Visual design and responsive layout
├── script.js     — Plan generation logic, sample data, and interactivity
└── README.md     — Project documentation

## Usage Notice

© 2026 Ianthe Hernandez. All rights reserved.

This repository is publicly available for portfolio review, recruiter evaluation, professional discussion, and demonstration purposes only.

No permission is granted to copy, modify, adapt, redistribute, republish, commercialize, incorporate into another project, or present the content, structure, templates, or framework as your own.

Written permission from Ianthe Hernandez is required for any reuse, modification, redistribution, publication, commercial use, or derivative work.

Public access to this repository does not constitute permission to use the content, structure, templates, or framework.
