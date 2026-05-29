/* ── Sample Data ─────────────────────────────────────────────── */
const SAMPLE = {
  customerName:    "PeopleFirst HR Partners",
  customerIndustry:"HR Consulting",
  primaryContact:  "Dana Okafor, Director of Client Operations",
  stakeholders:
`• Dana Okafor (Director of Client Operations) — Executive Sponsor & Primary Decision Maker
• Marcus Webb (Senior HR Consultant) — Internal Champion & Day-to-Day Power User
• Priya Nair (Operations Coordinator) — Admin & Workflow Owner
• Lena Torres (Recruiting Lead) — Candidate Tracking Use Case Owner
• IT Contractor (TBD) — Technical Setup & SSO Support`,
  businessGoals:
`• Improve follow-up consistency with employer clients and HR contacts
• Track candidate and employee onboarding tasks more reliably
• Automate reminders for missing documents, meetings, and next steps
• Increase visibility into client activity and open HR workflows
• Reduce manual spreadsheet tracking and inbox-based follow-up`,
  useCases:
`• Automated onboarding follow-up workflows for new employer clients
• Candidate and employee record tracking through recruitment and onboarding stages
• Scheduled reminders for document collection, compliance deadlines, and check-ins
• Centralized contact and activity log for all HR client relationships
• Dashboard visibility into open tasks, overdue follow-ups, and pipeline status`,
  firstValue:
    "Launch an automated onboarding follow-up workflow and track the first 25 HR client or candidate records through FlowPilot CRM",
  adoptionRisks:
`• Inconsistent CRM usage across the consulting team — staff may revert to spreadsheets
• Unclear workflow ownership between senior consultants and operations staff
• Limited internal process documentation to map into the platform
• Manual tracking habits carried over from email and spreadsheet workflows
• Low initial visibility into open tasks and overdue follow-ups until records are migrated`,
  successMetrics:
`• Follow-up completion rate ≥ 85% by Day 60
• Onboarding task completion rate tracked weekly from Day 30
• ≥ 4 active users logging into FlowPilot CRM weekly by Day 45
• 25+ records tracked through at least one automated workflow by Day 30
• Reduction in overdue follow-ups by 50% by Day 90
• Workflow adoption rate (% of new clients entered directly into CRM) ≥ 90% by Day 90
• Positive stakeholder feedback at 60-day check-in`,
  reviewDate: "2026-07-15",
  csmName:    "Jordan Reyes",
};

/* ── Field IDs ───────────────────────────────────────────────── */
const FIELDS = [
  "customerName", "customerIndustry", "primaryContact", "stakeholders",
  "businessGoals", "useCases", "firstValue", "adoptionRisks",
  "successMetrics", "reviewDate", "csmName",
];

const REQUIRED = ["customerName", "primaryContact", "businessGoals"];

/* ── Utilities ───────────────────────────────────────────────── */
const $ = (id) => document.getElementById(id);
const val = (id) => ($(`field-${id}`)?.value || "").trim();

function formatDate(iso) {
  if (!iso) return "TBD";
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

function today() {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

function slug(str) {
  return (str || "plan")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .slice(0, 40);
}

/* ── Load Sample Data ────────────────────────────────────────── */
function loadSample() {
  FIELDS.forEach((key) => {
    const el = $(`field-${key}`);
    if (el && SAMPLE[key] !== undefined) el.value = SAMPLE[key];
  });
  clearErrors();
  showToast("✓ Sample data loaded — click Generate to see the plan");
}

/* ── Clear Form ──────────────────────────────────────────────── */
function clearForm() {
  FIELDS.forEach((key) => {
    const el = $(`field-${key}`);
    if (el) el.value = "";
  });
  clearErrors();
  hidePlan();
}

/* ── Validation ──────────────────────────────────────────────── */
function validate() {
  clearErrors();
  const missing = REQUIRED.filter((id) => !val(id));
  missing.forEach((id) => {
    const el = $(`field-${id}`);
    if (el) el.classList.add("field-error");
  });
  if (missing.length) {
    $(`field-${missing[0]}`)?.focus();
    shakeEl($("form-actions"));
    return false;
  }
  return true;
}

function clearErrors() {
  REQUIRED.forEach((id) => $(`field-${id}`)?.classList.remove("field-error"));
}

function shakeEl(el) {
  if (!el) return;
  el.style.animation = "none";
  void el.offsetHeight;
  el.style.animation = "shake 0.4s ease";
}

/* ── Plan Builder ────────────────────────────────────────────── */
function buildPlan() {
  const name       = val("customerName");
  const industry   = val("customerIndustry") || "Not specified";
  const contact    = val("primaryContact");
  const stakehold  = val("stakeholders")     || "Not specified";
  const goals      = val("businessGoals");
  const useCases   = val("useCases")         || "Not specified";
  const firstValue = val("firstValue")       || "Not specified";
  const risks      = val("adoptionRisks")    || "Not specified";
  const metrics    = val("successMetrics")   || "Not specified";
  const reviewDate = formatDate(val("reviewDate"));
  const csm        = val("csmName")          || "Customer Success Manager";
  const planDate   = today();

  /* Derive 30/60/90 bullets from goals & use cases */
  const goalLines  = goals.split("\n").filter(Boolean);
  const caseLines  = useCases.split("\n").filter(Boolean);
  const riskLines  = risks.split("\n").filter(Boolean);
  const metricLines= metrics.split("\n").filter(Boolean);

  const indent = (lines, prefix = "    ") =>
    lines.map((l) => prefix + l).join("\n");

  const phase30 = [
    "• Complete account setup, user provisioning, and any required integrations",
    firstValue !== "Not specified"
      ? `• Achieve first-value milestone: ${firstValue}`
      : "• Define and pursue first-value milestone with customer team",
    caseLines[0]
      ? `• Activate primary use case: ${caseLines[0].replace(/^[•\-*]\s*/, "")}`
      : "• Activate primary use case",
    "• Deliver admin and champion enablement training",
    `• Establish weekly check-in cadence with ${contact}`,
    "• Document any configuration decisions and open action items",
  ];

  const phase60 = [
    "• Expand platform usage to second user cohort or workflow",
    caseLines[1]
      ? `• Roll out use case: ${caseLines[1].replace(/^[•\-*]\s*/, "")}`
      : "• Roll out secondary use cases identified during onboarding",
    riskLines[0]
      ? `• Monitor and address top adoption risk: ${riskLines[0].replace(/^[•\-*]\s*/, "")}`
      : "• Monitor and address identified adoption risks",
    "• Conduct mid-point adoption health check and usage review",
    "• Collect first NPS or CSAT pulse from key stakeholders",
    "• Identify any workflow gaps or feature requests",
  ];

  const phase90 = [
    "• Confirm full rollout across all planned users and workflows",
    metricLines[0]
      ? `• Validate key metric: ${metricLines[0].replace(/^[•\-*]\s*/, "")}`
      : "• Validate success metrics against baseline",
    "• Conduct 90-Day Business Review (QBR) with executive sponsor",
    "• Document outcomes, wins, and remaining gaps",
    "• Define expansion opportunities, renewal path, or case study potential",
    `• Confirm next review date and ongoing success cadence`,
  ];

  const nextSteps = [
    `1. Schedule kickoff call with ${contact} and technical owner within 5 business days`,
    "2. Share onboarding checklist and pre-work requirements with customer team",
    "3. Confirm integration scope, user list, and admin access with IT stakeholder",
    "4. Set up a shared workspace or channel for real-time coordination",
    `5. Book 30-, 60-, and 90-day milestone review dates`,
    reviewDate !== "TBD"
      ? `6. Confirm next scheduled review: ${reviewDate}`
      : "6. Agree on next review date with primary contact",
  ];

  return `
╔══════════════════════════════════════════════════════════════╗
  CUSTOMER SUCCESS PLAN
  ${name.toUpperCase()}
╚══════════════════════════════════════════════════════════════╝

  Prepared by   : ${csm}
  Plan Date     : ${planDate}
  Customer      : ${name}
  Industry      : ${industry}
  Primary Contact : ${contact}
  Next Review   : ${reviewDate}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  1. EXECUTIVE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This Customer Success Plan defines the strategic priorities,
stakeholder alignment, and measurable outcomes for ${name}'s
onboarding and adoption journey. The plan follows a structured
30/60/90-day framework designed to deliver early value, drive
sustained adoption, and ensure long-term ROI realization.

${csm} will serve as the primary Customer Success partner and
will work closely with ${contact} to execute on the priorities
outlined in this plan.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  2. CUSTOMER GOALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${goals}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  3. STAKEHOLDER MAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${stakehold}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  4. PRIMARY USE CASES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${useCases}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  5. 30 / 60 / 90 DAY SUCCESS PRIORITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ▸ DAYS 1–30  |  Foundation & First Value
${indent(phase30)}

  ▸ DAYS 31–60  |  Expand & Validate
${indent(phase60)}

  ▸ DAYS 61–90  |  Scale & Realize Value
${indent(phase90)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  6. ADOPTION RISKS & MITIGATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${risks}

  Mitigation approach: Proactive weekly check-ins, early
  identification of blockers, executive escalation path via
  ${contact}, and champion-led internal enablement.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  7. SUCCESS CRITERIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${metrics}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  8. RECOMMENDED NEXT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${nextSteps.join("\n")}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  9. NEXT REVIEW DATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ${reviewDate}

  Review agenda: Progress against 30/60/90-day priorities,
  success metrics scorecard, stakeholder feedback, and
  alignment on next phase priorities.

══════════════════════════════════════════════════════════════
  Generated by Customer Success Plan Builder · ${planDate}
══════════════════════════════════════════════════════════════
`.trimStart();
}

/* ── Generate Plan ───────────────────────────────────────────── */
function generatePlan() {
  if (!validate()) return;
  const planText = buildPlan();
  $("plan-text").textContent = planText;
  $("output-empty").style.display = "none";
  $("plan-content").style.display = "block";
  $("plan-content").classList.add("fade-in");
  if (window.innerWidth < 960) {
    $("output-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ── Hide Plan (used by clear) ───────────────────────────────── */
function hidePlan() {
  $("output-empty").style.display = "flex";
  $("plan-content").style.display = "none";
  $("plan-text").textContent = "";
}

/* ── Copy ────────────────────────────────────────────────────── */
function copyPlan() {
  const text = $("plan-text").textContent;
  if (!text) return;
  navigator.clipboard.writeText(text)
    .then(() => showToast("✓ Success plan copied to clipboard"))
    .catch(() => showToast("⚠ Copy failed — try selecting and copying manually"));
}

/* ── Download ────────────────────────────────────────────────── */
function downloadMarkdown() {
  const text = $("plan-text").textContent;
  if (!text) return;
  triggerDownload(text, `success-plan-${slug(val("customerName"))}.md`, "text/markdown");
  showToast("✓ Markdown file downloaded");
}

function triggerDownload(content, filename, mime) {
  const url = URL.createObjectURL(new Blob([content], { type: mime }));
  const a = Object.assign(document.createElement("a"), { href: url, download: filename });
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ── Toast ───────────────────────────────────────────────────── */
let toastTimer;
function showToast(message) {
  const el = $("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2800);
}

/* ── Clear field-error on input ──────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  REQUIRED.forEach((id) => {
    const el = $(`field-${id}`);
    if (el) el.addEventListener("input", () => el.classList.remove("field-error"));
  });
});
