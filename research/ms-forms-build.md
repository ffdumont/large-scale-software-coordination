# Microsoft Forms — build spec

*How to reproduce `coordination-diagnostic.md` as a Microsoft Form. MS Forms has no file import, so this is a click-by-click spec. Budget ~15 min.*

**Two shortcuts that do most of the work:**
- **Part B → use the `Likert` question type** (not 24 separate ratings). One Likert = 12 rows (functions) + a shared 1–5 column scale. Two of them (Importance, Works-today).
- **Choice questions → bulk-paste options.** Paste a newline-separated list into the first option box; Forms splits it into separate options automatically.

**Global settings (⚙ Settings, top-right):**
- Record name: **Off** (anonymous). Names are collected only via the optional field in §7, so responses stay analysed by role.
- One response per person: Off (don't force sign-in — kills anonymity trust).
- Shuffle questions: Off.

---

## Form title & description

- **Title:** `Coordination Model Diagnostic`
- **Description:**
  > We are evolving how we coordinate work across teams at scale. This short survey helps us decide — on evidence, not opinion — what to **preserve, repair, or retire**. No option is decided in advance. ~8–10 min. Answers are analysed by role, not by name. There are no right answers.

---

## Section 1 — About you

**Q1 · Choice · required** — `Your role`
Paste these options:
```
Developer / Engineer
Tech Lead
Dev Manager
Product Owner / Manager
Architect
Scrum Master
RTE
Solution level (STE / Solution Mgmt / Solution Architect)
Business Owner
```
→ turn on **"Other"** option.

**Q2 · Text (short) · optional** — `Your ART / domain`

**Q3 · Choice · required** — `Time in this organization`
```
Less than 1 year
1–3 years
3+ years
```

---

## Section 2 — How each function works today

*(Add a Section header with this subtitle:)*
> Rate each function twice: how **important** it is, and — regardless of how we currently do it — how well it **works today**. Leave a row blank if it doesn't apply to you or you don't know.

**Q4 · Likert · not required** — `How IMPORTANT is each function?`
- **Statements (rows)** — paste the 12:
```
Every team clearly knows the current priorities and the reasoning behind them
Teams that depend on each other plan together over a shared horizon
Dependencies between teams are visible before they block work
Committed work stays within real capacity — we can say no or stop things
Decisions affecting several ARTs / domains are handled in one clear place
Teams can decide for themselves on what falls within their scope, without escalation
Technical / architectural coherence is maintained across teams
Quality and integration are ensured continuously, not only at the end of a cycle
The real progress of work is visible without heavy status reporting
The organization regularly reviews and improves its own way of working
Our tools (Jira, etc.) help rather than add overhead
Design / UX work has a structured place to be shared and challenged
```
- **Options (columns):** `1 — nice-to-have` · `2` · `3` · `4` · `5 — essential`

**Q5 · Likert · not required** — `How well does each function WORK TODAY?`
- **Statements (rows):** *the same 12 as Q4* (paste again).
- **Options (columns):** `1 — very poorly` · `2` · `3` · `4` · `5 — very well`

**Q6 · Text (long) · optional** — `Explain your low scores`
- Subtitle: `For any function you rated low on "works today" (1–2), name it and say in a line what specifically goes wrong.`

> **Why "not required" on the Likert grids:** a blank row = "not applicable / don't know", which keeps parity with the master's N/A / ? escape values without adding a 6th column. If you want strict parity, add an `N/A` column instead and keep the question required.

---

## Section 3 — Where the effort goes

**Q7 · Choice · Multiple answers ON · required** — `Which 2–3 functions cost more time/effort than they are worth today?`
- Options: paste the same 12 function statements (or short labels `1. Priorities`, `2. Cross-team planning`, … if you prefer compact — but keep wording consistent with Q4/Q5).
- Subtitle: `Pick 2–3.`

**Q8 · Text (short) · optional** — `In a word or two, why?`

---

## Section 4 — In your own words

All **Text (long), optional**:

- **Q9** 🔪 `Name one recurring meeting, role, or artifact that, if it disappeared tomorrow, no one would miss. Why?`
- **Q10** 🛡️ `Name one thing in how we coordinate that genuinely works and must be preserved.`
- **Q11** 🔬 `Describe the last time a dependency or a priority change blocked you. What actually happened?`
- **Q12** ✨ `If you could change only one thing about how we coordinate, what would it be?`
- **Q13** 🗒️ `Anything about how we coordinate that these questions didn't let you say?`

---

## Section 5 — Follow-up (optional)

**Q14 · Choice · required** — `Open to a 45-minute follow-up interview?`
```
Yes
No
```
→ **Add branching** on this question: `Yes` → continue to Q15; `No` → End of form.

**Q15 · Text (short) · optional** — `Your name`
**Q16 · Text (short) · optional** — `Best way to reach you`
- Section subtitle: `Optional. Your survey answers stay analysed by role either way.`

---

## Shortcut option — draft with Copilot in Forms

If your tenant has Copilot in Forms ("New Form → Draft with Copilot"), paste the prompt below to get a first draft, **then fix it against this spec** — Copilot will not reliably produce the two separate Likert grids or hold the neutral wording, so treat its output as scaffolding only.

> Create an anonymous internal survey titled "Coordination Model Diagnostic" to assess how we coordinate software work across many teams. Sections: (1) role, ART/domain, tenure; (2) two Likert grids over these 12 functions — first rating IMPORTANCE (1 nice-to-have to 5 essential), second rating HOW WELL IT WORKS TODAY (1 very poorly to 5 very well): priorities clarity; cross-team planning; dependency visibility before blocking; work within capacity / ability to say no; cross-ART decision-making in one place; team decision autonomy without escalation; architectural coherence across teams; continuous quality and integration; work progress visible without heavy reporting; regular improvement of ways of working; tooling that helps not hinders; a structured forum for design/UX work; (3) multi-select of the 2–3 costliest functions plus an optional why; (4) open questions: one thing to cut, one thing to keep, a recent blocking incident, one change, anything else; (5) optional interview consent with optional name and contact. Do not name any framework, ceremony, role, or tool in any rated item. Keep all wording neutral, with no leading adjectives.
