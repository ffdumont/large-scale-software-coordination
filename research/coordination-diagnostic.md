# Coordination Model Diagnostic — Survey & Interview Guide

*Working instrument. Not part of the published paper (kept out of `paper.json`, so the bilingual CI ignores it).*

**Purpose of this document.** A neutral, evidence-based instrument to understand how our large-scale coordination actually works today — what to **preserve**, what to **repair**, and what to **retire** — as we evolve our operating model. It is built to be defensible: a skeptic should be able to read it and find no leading questions.

---

## 0. Respondent-facing introduction (put this at the top of the survey)

> We are evolving how we coordinate work across teams at scale. This short survey helps us decide — **on evidence, not opinion** — what we should **preserve, repair, or retire** in the way we work. No option is ruled out in advance, and nothing here assumes a predetermined answer.
>
> It takes about **8–10 minutes**. Answers are analysed by role, not by name. You may optionally leave your name at the end if you're open to a follow-up interview.
>
> There are no right answers. Where something works, say so; where it frictions, say so plainly.

*(Framing decided: "transition assumed, open target" — honest that change is coming, neutral on any specific framework. The words "SAFe", "PI Planning", "Solution Sync" etc. deliberately do not appear in any scored item; see §1.)*

---

## 1. Methodological note (for co-reviewers — not shown to respondents)

This instrument is designed so that no one can fairly call it a push poll. The design rests on five research techniques:

- **Jobs-to-be-Done** — we never ask "do you like ceremony X?". We measure the *function* people rely on it for. Function and form are scored separately.
- **Importance–Performance Analysis (IPA)** — every coordination function gets two independent scores: how *important* it is, and how *well it works today*. The gap between them, not any opinion about a framework, drives the conclusions.
- **Appreciative Inquiry** — we deliberately ask what *works and must be kept*, not only what hurts, to avoid a "burn it all down" bias that would take load-bearing functions with it.
- **Laddering** and **Critical Incident Technique** — the interview starts from concrete recent episodes and ladders up ("why does that matter?") to the underlying need, cutting ideology at the root.

**Neutrality rules enforced throughout:**
1. No scored item names a framework, ceremony, role, or tool.
2. *Importance* and *current performance* are measured as separate questions.
3. Scales carry no leading adjectives.
4. At least one "what works, keep it" question balances the "what to cut" questions.

The twelve functions below map to the coordination mechanisms argued as necessary in the paper (ch. 6–8) and to the five clusters of the existing role-based retrospective. That mapping is internal; respondents see only plain-language functions.

---

## 2. Survey

### Part A — About you

- **Role** *(select one)*: Developer / Engineer · Tech Lead · Dev Manager · Product Owner / Manager · Architect · Scrum Master · RTE · Solution level (STE / Solution Mgmt / Solution Architect) · Business Owner · Other: ___
- **ART / domain**: ___
- **Time in this organization**: < 1 year · 1–3 years · 3+ years

### Part B — Coordination functions: importance vs. how well it works today

For each function, give **two** independent ratings.

- **Importance** — how essential is this function for us to work well at scale?
  `1 = nice-to-have · 2 · 3 · 4 · 5 = essential · (N/A)`
- **Works today** — regardless of *how* we do it, how well is this function actually delivered right now?
  `1 = very poorly · 2 · 3 · 4 · 5 = very well · (don't know)`

Circle one number in each of the two columns. `N/A` = not applicable · `?` = don't know.

| # | Function (rate importance **and** how well it works today) | Importance<br>(1 nice-to-have → 5 essential) | Works today<br>(1 very poorly → 5 very well) |
|---|---|:---:|:---:|
| 1 | Every team clearly knows the current priorities **and the reasoning behind them** | 1 · 2 · 3 · 4 · 5 · N/A | 1 · 2 · 3 · 4 · 5 · ? |
| 2 | Teams that depend on each other **plan together over a shared horizon** | 1 · 2 · 3 · 4 · 5 · N/A | 1 · 2 · 3 · 4 · 5 · ? |
| 3 | Dependencies between teams are **visible before** they block work | 1 · 2 · 3 · 4 · 5 · N/A | 1 · 2 · 3 · 4 · 5 · ? |
| 4 | Committed work stays **within real capacity** — we can say no or stop things | 1 · 2 · 3 · 4 · 5 · N/A | 1 · 2 · 3 · 4 · 5 · ? |
| 5 | Decisions affecting **several ARTs / domains** are handled in one clear place | 1 · 2 · 3 · 4 · 5 · N/A | 1 · 2 · 3 · 4 · 5 · ? |
| 6 | Teams can **decide for themselves** on what falls within their scope, without escalation | 1 · 2 · 3 · 4 · 5 · N/A | 1 · 2 · 3 · 4 · 5 · ? |
| 7 | **Technical / architectural coherence** is maintained across teams | 1 · 2 · 3 · 4 · 5 · N/A | 1 · 2 · 3 · 4 · 5 · ? |
| 8 | Quality and integration are ensured **continuously**, not only at the end of a cycle | 1 · 2 · 3 · 4 · 5 · N/A | 1 · 2 · 3 · 4 · 5 · ? |
| 9 | The **real progress** of work is visible without heavy status reporting | 1 · 2 · 3 · 4 · 5 · N/A | 1 · 2 · 3 · 4 · 5 · ? |
| 10 | The organization **regularly reviews and improves** its own way of working | 1 · 2 · 3 · 4 · 5 · N/A | 1 · 2 · 3 · 4 · 5 · ? |
| 11 | Our **tools** (Jira, etc.) help rather than add overhead | 1 · 2 · 3 · 4 · 5 · N/A | 1 · 2 · 3 · 4 · 5 · ? |
| 12 | **Design / UX work** has a structured place to be shared and challenged | 1 · 2 · 3 · 4 · 5 · N/A | 1 · 2 · 3 · 4 · 5 · ? |

> **Optional — explain your low scores.** For any function you rated **low on "works today" (1–2)**, note its number(s) and, in a line, what specifically goes wrong.
> *(This is where the survey becomes actionable: it tells us the **why** behind a gap, and it pre-loads the interviews.)*
> ___

### Part C — Where the effort goes (cost)

> Of the twelve functions above, which **2–3 cost noticeably more time/effort than they are worth today**? *(select 2–3 by number)*
> ▢1 ▢2 ▢3 ▢4 ▢5 ▢6 ▢7 ▢8 ▢9 ▢10 ▢11 ▢12
> *Optional — in a word or two, why?* ___

*(Kept as a targeted pick rather than a 12-row cost scale, to avoid survey fatigue while still surfacing over-heavy forms.)*

### Part D — In your own words

1. 🛡️ **Keep** — Name up to **three** things in how we coordinate that **genuinely work and must be preserved**.
2. 🔧 **Change** — Name up to **three** things we should **change, stop, or drop**. Why?
3. 🔬 **Diagnose** — Describe the **last time** a dependency or a priority change blocked you. What actually happened?
4. ✨ **Magic wand** — If you could change only **one** thing about how we coordinate, what would it be?
5. 🗒️ *(optional)* **Anything else** — Anything about how we coordinate that these questions didn't let you say?

### Part E — Follow-up (optional)

> Open to a 45-minute interview to go deeper? Leave your name and we'll reach out. *(Optional — your survey answers stay analysed by role either way.)*
> Name: ___  ·  Best contact: ___

---

## 3. Interview guide (semi-structured, 45–60 min)

**Facilitator stance:** you are a researcher, not an advocate. Ask, don't lead. Let silences run. Never defend or attack any current practice. If the interviewee asks "are we killing X?", answer: "no option is decided — that's what this is for."

1. **Warm-up (5')** — role, scope of ownership, who they depend on.
2. **Critical incident (15')** — "Tell me about the last time a dependency, a priority change, or a decision got stuck." Probe: what did you do? who decided? how long was lost? what did you work around?
3. **Jobs-to-be-Done (15')** — pick 2–3 recurring events/roles *they* mention: "When you go to [X], what are you actually trying to get done? What would happen if you didn't go?" → ladder up: "and why does that matter? … and that?"
4. **Subtraction test (10')** — the load-bearing test, in their words:
   - "If we removed [X] tomorrow, what breaks? What would you have to invent to replace it?"
   - inverse: "What do we do that, if it vanished, nobody would even notice?"
5. **Magic wand (5')** — "Change one and only one thing about how we coordinate — what is it?"
6. **Snowball** — "Who else should I talk to, especially someone who'd disagree with you?"

---

## 4. Analysis plan (how answers become defensible conclusions)

**The engine — IPA 2×2** (X = average Importance, Y = average "works today"):

| | Works today: LOW | Works today: HIGH |
|---|---|---|
| **Importance HIGH** | 🔴 **FIX** — load-bearing but broken. *Protect the function, change the form.* | 🟢 **KEEP** — working, do not touch. |
| **Importance LOW** | ⚪ **CUT** (esp. if flagged costly in Part C) — pure overhead. | 🟡 **SIMPLIFY** — over-served; trim effort. |

- **Cost overlay (Part C):** functions that are low-importance **and** frequently flagged costly = priority cut candidates. High-importance + costly = fix, don't cut.
- **Role cross-tabs:** compute per role. **Divergence is itself a finding** — e.g., teams score autonomy (fn. 6) low while managers score it fine. Name the gap.
- **Tenure overlay:** veterans vs. newcomers (Part A) often disagree on what's load-bearing; surface it.
- **Open-question coding:** tally "cut" nominations (Part D.1) and "keep" nominations (Part D.2). Convergent "keep" items are your protected load-bearing walls; convergent "cut" items are your safe early wins. Pull Part D.3 incidents to recruit and pre-brief interviews.

**Output artifact:** one IPA chart + a role-divergence table + a ranked keep/fix/cut list. That, not anyone's opinion, is what goes to leadership.

---

## 5. Pre-launch checklist (do not skip)

- [ ] No scored item names a framework, ceremony, role, or tool.
- [ ] Importance and performance are separate questions for every function.
- [ ] At least one "what works — keep it" question is present.
- [ ] Scales carry no leading adjectives.
- [ ] Respondent intro states change is coming **and** that no option is decided.
