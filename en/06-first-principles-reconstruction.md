<!-- source-hash: sha256:b711876c06e1e7e7d334b45f0376b62bb3e3827262595d59fbc70b69fc1b11d7 -->

# 6. Reconstruction by first principles

## Research question

If existing frameworks did not exist, what minimal organization would we design to coordinate several hundred developers?

## Intent of the chapter

Previous chapters have established three ideas.

First idea: the difficulties of large-scale software development do not come primarily from frameworks. They come from structural problems: dependencies, coupling, prioritization, integration, quality, visibility, decisions, learning and cognitive load.

Second idea: frameworks are assemblies of mechanisms. Some mechanisms are useful, others are contextual, still others become costly when adopted out of compliance rather than need.

Third idea: the 2025-2026 market confirms a decomposition of complete models. Organizations retain needs for alignment, portfolio, platforms, integrated quality, flow metrics and technical governance, but they seek to express them in a more sober vocabulary more adapted to their context.

This chapter therefore reconstructs a minimal model from fundamental problems. The question is not: “What practices do we want to keep?” The question is: "What mechanisms become necessary if several hundred people must evolve an interdependent software system without losing alignment, quality and adaptability?"

## 6.1 Reconstruction method

Reconstruction follows a strict rule: introduce a mechanism only when a problem warrants it.

Each mechanism is evaluated according to six questions:

1. What problem does it address?
2. Why does it have to exist on this scale?
3. What happens if it is removed?
4. What minimal form can it take?
5. What level of evidence supports it?
6. What assumptions must be true for it to work?

This method avoids two symmetrical errors.

The first mistake would be to rebuild a complete framework under another name. An organization can remove proprietary vocabulary while keeping the same decision-making burden, the same meetings and the same implicit roles. This is not a simplification; it's a translation.

The second mistake would be to remove visible structures without replacing the functions they provided. Heavy scheduling can be problematic, but if it was the only place where dependencies were exposed, removing it can make the system less coordinated. A coordination role may be poorly defined, but if no one takes responsibility for resolving inter-team blockages, the cost reappears elsewhere.

The reconstruction must therefore distinguish:

- the problems that remain present;
- the principles that remain valid;
- the mechanisms which must be preserved in a minimal form;
- ceremonies, roles and artifacts that can be simplified, merged or removed.

## 6.2 Context hypotheses

The reconstructed model targets an organization of several hundred developers. It therefore assumes:

- several dozen teams;
- a portfolio of products, platforms, components or capabilities;
- significant technical and functional dependencies;
- quality, security, operation and compliance constraints;
- business demand greater than available capacity;
- an architecture that cannot be made perfectly modular in the short term;
- decision cycles involving product, technology, operations, security and financing.

These assumptions are important. An organization of four teams on a relatively autonomous product does not need the same system. Conversely, an organization of a thousand people, highly regulated, with hardware, suppliers and security constraints, will probably need more explicit mechanisms than those presented here.

The minimal model is therefore not universal in the sense of a recipe. It is minimal for a context of scale where the fundamental problems have already appeared.

## 6.3 Guiding principle: reduce coordination before organizing it

Most organizations start by organizing dependencies: synchronization meetings, dependency tables, coordination roles, arbitration committees. These mechanisms may be necessary, but they often treat the symptom.

The first principle of reconstruction is inverse:

> The best coordination mechanism is one that makes coordination unnecessary.

This principle stems from Conway, Parnas, Lean thinking and modern approaches to organizational architecture. When team boundaries correspond to stable technical boundaries, when interfaces are explicit, when platforms reduce local variance, and when testing provides rapid feedback, fewer decisions need to be synchronized per meeting.

This does not mean that coordination disappears. On a large scale, there will always be priority decisions, architectural choices, shared investments, cross-functional risks and common objectives. But these coordinations must be reserved for subjects which cannot be resolved by division, automation, standard or local responsibility.

The reconstruction is therefore based on a hierarchy:

1. reduce structural dependencies;
2. make the remaining dependencies explicit;
3. coordinate only what cannot be made autonomous;
4. continuously learn which coordinations can be removed.

## 6.4 Mechanism 1: stable flow-oriented teams

### Problem addressed

Without stable teams, the organization loses domain memory, end-to-end accountability, and the ability to locally improve its work system. People are moved according to projects, knowledge is fragmented and dependencies increase because no one has a coherent scope in the long term.

### Why the mechanism exists

On a large scale, the stability of teams is a dampener of complexity. It allows:

- lasting knowledge of the product or field;
- a clearer relationship with users, operations and stakeholders;
- explicit responsibility for quality and maintainability;
- local learning capacity;
- a reduction in reformation and transfer costs.

Teams should be oriented toward an identifiable value stream, domain, product capability, or platform. The focal point is not the name of the team, but its ability to deliver meaningful changes with a limited number of external dependencies.

### Risk if the mechanism is removed

If teams become temporary groups assigned to projects, several effects appear:

- dilution of ownership;
- multiplication of handovers;
- local prioritization by project rather than by product;
- technical debt without clear owner;
- loss of long-term feedback;
- increased dependence on external coordination roles.

The typical result is an organization that seems flexible on paper, but becomes slow because each initiative must reconstruct its context.

### Minimal form

The minimum form is a sustainable team of reasonable size, responsible for an explicit scope, with a visible backlog or workflow, understandable objectives and an ability to act on the quality of what it delivers.

This team does not need any particular vocabulary. It needs four clarifications:

- what she owns;
- the decisions she can make alone;
- interfaces with other teams;
- the objectives and constraints which govern its autonomy.

### Level of evidence

**Established fact / Empirical evidence.** The logic is supported by literature on modularity, end-to-end accountability, Conway, Team Topologies, DevOps and DORA research on delivery capabilities. The exact level of evidence depends on how teams are divided and empowered.

### Operating assumptions

The mechanism works if the teams have a sufficiently coherent scope to learn and decide. It fails if the organization declares autonomous teams while leaving them with permanent dependencies, unstable priorities and no power over architecture or quality.

## 6.5 Mechanism 2: explicit ownership boundaries

### Problem addressed

When boundaries are blurred, decisions slow down. The same components are modified by several teams, support responsibilities are ambiguous, trade-offs are escalated unnecessarily and dependencies are discovered late.

### Why the mechanism exists

Autonomy does not exist without boundaries. A team cannot be responsible for a result if it does not know what it owns, what it shares and what it consumes.

The ownership boundaries must cover at least:

- functional areas;
- components or services;
- the data;
- interfaces;
- environments and platforms;
- operational responsibilities;
- local architectural decisions.

These boundaries must not become walls. They define who is responsible by default, who must be consulted and which interfaces allow others to move forward without permanent negotiation.

### Risk if the mechanism is removed

Without explicit ownership, the organization compensates by:

- more committees;
- more climbing;
- more informal coordination;
- no more rework;
- more conflicts between local priorities;
- no more orphan technical debt.

The cost is not always visible as a budget line. It appears in the form of decision delays, waiting times, clarification times, defect leakage and organizational fatigue.

### Minimal form

The minimum form is a maintained ownership map, linked to the architecture and the portfolio. It must answer simple questions:

- Who owns this domain or component?
- Who decides on major changes?
- Who supports production?
- Which interfaces are public?
- What changes require cross-functional consultation?

This map can be implemented in a service catalog, architectural documentation, a portfolio tool or a simple maintained repository. The form matters less than freshness and actual use.

### Level of evidence

**Established fact.** The principles of modularity, information hiding and organization-architecture alignment are well established. The empirical evidence is less about the mapping artifact than about the accountability clarification mechanism.

### Operating assumptions

The mechanism assumes that boundaries can be discussed and modified. An ownership map that only describes the organizational chart quickly becomes decorative.

## 6.6 Mechanism 3: light strategic alignment

### Problem addressed

When dozens of teams work in parallel, local autonomy can produce divergence. Teams optimize for different objectives, priorities change without explicit logic, trade-offs are made by influence or urgency, and cross-functional investments are postponed.

### Why the mechanism exists

The organization needs an explicit link between strategic intention, portfolio choice, objectives by area and team work. This link doesn't need to be heavy, but it should be visible.

The minimum strategic alignment must clarify:

- the expected results;
- non-negotiable constraints;
- relative priorities;
- product bets or hypotheses;
- the necessary technical investments;
- topics that the organization chooses not to do now.

Alignment is not a cascade of control. This is a reduction of ambiguity.

### Risk if the mechanism is removed

Without explicit alignment, teams can stay very busy while pulling the system in incompatible directions. Typical consequences are:

- too many initiatives launched;
- late decisions;
- unanticipated dependencies;
- conflicts between product, technical and operational objectives;
- impression of lack of strategy;
- increased reporting to compensate for the lack of clear intention.

### Minimal form

The minimal form is a reduced set of objectives per horizon, connected to capacity choices.

A quarterly or six-monthly horizon may be sufficient depending on the context. The important thing is that the organization explains:

- the few most important objectives;
- the capacity allocated to large areas;
- dependencies or major risks;
- open decisions;
- the criteria for success.

Goals must be stable enough to guide teams, but revisable enough to learn.

### Level of evidence

**Established fact / Experience report.** The need for alignment is strongly supported by organization theory and the experience of major transformations. Specific forms, like OKR or periodic planning, have a more variable level of proof.

### Operating assumptions

The mechanism works if leaders agree to make real choices. A system of objectives that adds priorities without removing them does not reduce ambiguity; he institutionalizes it.

## 6.7 Mechanism 4: portfolio with explicit WIP limits

### Problem addressed

In large organizations, demand almost always exceeds capacity. Without a portfolio mechanism, too many initiatives are launched in parallel. Teams disperse, dependencies multiply, deadlines lengthen and trade-offs become political.

### Why the mechanism exists

Limiting WIP isn't just a team practice. It is even more critical at the portfolio level. If the organization funds and announces more initiatives than it can absorb, teams will not be able to compensate with better local practices.

A minimum portfolio must:

- make the initiated request visible;
- compare this demand to the actual capacity;
- limit the number of active initiatives;
- reserve capacity for technical debt, security, platform and reliability;
- explicitly stop or delay certain work;
- revise choices based on learning.

### Risk if the mechanism is removed

The main risk is systemic congestion. It manifests itself by:

- invisible queues;
- unpredictable delivery times;
- multitasking between initiatives;
- unresolved dependencies;
- permanent pressure on the teams;
- inability to finance non-visible technical works;
- increase in coordination costs.

The system may then appear to lack productivity when it suffers above all from an excess of committed work.

### Minimal form

The minimal form is a limited portfolio table, with simple categories:

- options or ideas;
- in framing;
- engaged ;
- in delivery;
- in validation;
- stops or postpones.

Each initiative must have an owner, a value hypothesis, an approximate size, a capacity consumed, major dependencies and a decision to continue or stop within a defined horizon.

The deciding point is the limit. An unlimited portfolio of WIP becomes a political inventory.

### Level of evidence

**Established fact / Empirical evidence.** Lean principles, queuing theory and Reinertsen strongly support limiting WIP and reducing batches. The exact application to portfolio governance depends on the context.

### Operating assumptions

The mechanism assumes that decision-makers agree to make trade-offs visible. If it's impossible to say no, the portfolio becomes a wish list.

## 6.8 Mechanism 5: proportionate multi-team planning

### Problem addressed

Even with stable teams and clear boundaries, some initiatives cross multiple domains. Dependencies, risks, integrations, architecture choices and capacity constraints must be addressed before they become bottlenecks.

### Why the mechanism exists

A large organization needs synchronization cadence. This cadence is not intended to plan every task. It is used to:

- share the intention;
- expose dependencies;
- check the capacity;
- identify risks;
- arbitrate conflicts;
- adjust the objectives;
- create a reasonable commitment over a limited horizon.

Multi-team scheduling is justified when the cost of being out of sync is greater than the cost of meeting.

### Risk if the mechanism is removed

Without periodic synchronization, dependencies are often discovered too late. Teams move forward locally, then get stuck during integration, validation or release. Managers then demand more reporting, which adds burden without necessarily improving decisions.

### Minimal form

The minimum form is planning by domain or group of domains, over an intermediate horizon. It must produce few artifacts, but clear outputs:

- objectives by area or team;
- explicit dependencies;
- risks and expected decisions;
- available capacity;
- work not retained;
- necessary synchronization points.

Duration and frequency must be proportionate. Decoupled domains may synchronize slightly. Very tight or regulated areas may need more formal planning.

### Level of evidence

**Experience report / Established fact.** The need for proportionate synchronization is well established in organizational theory and the experience of large organizations. Specific ceremonies have a lower level of evidence and must be judged by their outputs.

### Operating assumptions

Planning works if it produces decisions and reduces uncertainty. It fails when it becomes an exercise in detailed promising, reporting or theater of engagement.

## 6.9 Mechanism 6: flow visibility and diagnostic metrics

### Problem addressed

In complex organizations, real work becomes invisible. Queues, rework, blockages, dependencies, and decision delays are scattered across tools, meetings, and conversations. Without visibility, leaders drive by perception, status or pressure.

### Why the mechanism exists

Visibility of the flow allows you to understand where the system is waiting, overloading, blocking or degrading. It must make visible:

- work in progress;
- waiting times;
- outbuildings;
- blockages;
- lead time;
- the rework rate;
- the stability of releases;
- incidents and user feedback;
- capacity consumed by support, debt and emergencies.

Metrics should not replace judgment. They must guide the investigation.

### Risk if the mechanism is removed

Without visibility, the organization compensates with narrative reporting. Teams spend time explaining their status, but the system doesn't see its constraints. Discussions become individual: which team is behind? who doesn't have a book? Instead of systemic questions: where is the bottleneck? why is work waiting? what constraint prevents the flow?

### Minimal form

The minimal form combines:

- a flow table by domain;
- some delivery and stability metrics;
- a regular diagnostic-oriented review;
- explicit improvement actions.

Possible metrics include lead time, throughput, WIP, item age, deployment frequency, change failure rate, restore time, rework, incidents, and user satisfaction. The choice must remain parsimonious.

### Level of evidence

**Empirical evidence.** DORA research, Lean/Kanban literature, and flow work strongly support the use of diagnostic metrics. The risk of misuse is also well documented: a punitive metric destroys the quality of information.

### Operating assumptions

The mechanism assumes a culture where metrics are used to improve the system, not to rank teams. If metrics become local goals, they will be locally optimized and lose their value.

## 6.10 Mechanism 7: integrated quality and frequent integration

### Problem addressed

On a large scale, late defects and late integration produce disproportionate costs. The slower the feedback, the longer false assumptions, technical incompatibilities and regressions remain hidden.

### Why the mechanism exists

Quality cannot be added at the end by external control. It must be integrated into the work system:

- automated tests;
- continuous integration;
- code review;
- security analysis;
- performance verification;
- observability;
- clear definition of production criteria;
- operational feedback;
- end-to-end accountability.

These practices reduce the need for human coordination because they make incompatibilities visible sooner.

### Risk if the mechanism is removed

Without integrated quality, the organization creates stabilization phases, late testing campaigns, release boards, freezes, escalations and risk trade-offs. It may then believe that it needs more governance when above all it needs faster technical feedback.

### Minimal form

The minimal form is a delivery chain that provides a reliable and frequent signal on the status of the system. It must cover critical paths, not necessarily automate everything immediately.

Minimum viable:

- a reproducible build;
- automated tests on the main risks;
- frequent integration;
- basic security controls;
- sufficient observability;
- a clear incident and postmortem management process;
- explicit criteria for declaring a change ready.

### Level of evidence

**Empirical evidence.** DevOps and DORA research strongly supports the association between technical practices, delivery performance, and stability. The quality of implementation remains decisive.

### Operating assumptions

The mechanism requires continuous investment. If the organization treats CI/CD, testing or observability as one-off projects, the signal deteriorates and trust disappears.

## 6.11 Mechanism 8: light technical governance

### Problem addressed

Local technical autonomy can produce excessive divergence: incompatible choices, duplication of tools, fragmentation of data, variable security standards, difficult to operate architectures. Conversely, centralized governance can slow down teams and move decisions away from information.

### Why the mechanism exists

Minimum technical governance must protect systemic properties that teams cannot optimize alone:

- security ;
- resilience ;
- interoperability;
- maintainability;
- observability;
- operating cost;
- data consistency;
- reduction of coupling;
- delivery standards.

It should not approve every local decision. It must define constraints, standards and preferred paths that reduce overall risk.

### Risk if the mechanism is removed

Without technical governance, the organization risks fragmentation. Each team optimizes locally, but the overall system becomes more expensive to maintain, secure, operate and evolve.

If governance is too cumbersome, the opposite risk appears: approval queues, workarounds, late decisions, loss of autonomy and unclear accountability.

### Minimal form

The minimum form is a small set of explicit decisions and standards:

- architectural principles;
- security and compliance standards;
- operability criteria;
- recommended technologies;
- exception process;
- decision records architecture for significant choices;
- technical review proportionate to the risks.

Architects or technical leaders must act as decision facilitators and guardians of systemic constraints, not as a universal approval committee.

### Level of evidence

**Established fact / Experience report.** The need to govern systemic properties is well established. Effective forms vary greatly depending on the context.

### Operating assumptions

The mechanism works if governance is close to the field and if the standards are testable or observable. A standard that no one can easily apply becomes a source of debt or circumvention.

## 6.12 Mechanism 9: internal platforms and preferred paths

### Problem addressed

Teams lose a lot of capacity when they have to solve the same problems separately: environments, pipelines, security, observability, deployment, secrets management, compliance, templates, documentation, infrastructure and developer tools.

### Why the mechanism exists

An internal platform reduces the cost of coordination by transforming organizational standards into usable capabilities. It allows teams to move faster while respecting common constraints.

The principle is not to centralize all technical work. The idea is to provide preferred paths, good enough for teams to voluntarily adopt, and governed enough to reduce overall risk.

### Risk if the mechanism is removed

Without a platform, teams duplicate solutions, diverge technically and place greater demands on central experts. Safety and operational controls become more manual. The organization pays the same cost several times.

Another risk exists: a poorly designed platform can become a bottleneck. If it imposes without serving, the teams bypass it.

### Minimal form

The minimal form is a set of self-service capabilities for the most frequent needs:

- creation of service or component;
- build and deployment pipeline;
- basic observability;
- management of secrets;
- integrated security controls;
- standardized environments;
- documentation and support;
- templates and examples maintained.

The platform should be treated as an internal product, with users, adoption metrics, feedback loops, and explicit prioritization.

### Level of evidence

**Experience report / Empirical indirect evidence.** Industrial reports, DevOps, Team Topologies and platform engineering practices strongly support the mechanism, but the results strongly depend on the product quality of the platform.

### Operating assumptions

The mechanism assumes that the platform has sufficient capacity, a clear mandate and a customer relationship with the teams. An imposed platform without feedback becomes a new layer of technical bureaucracy.

## 6.13 Mechanism 10: architecture-organization evolution loop

### Problem addressed

Organizations change, products evolve, architectures age. A team breakdown that is relevant today may become inappropriate in a year. Without an evolution loop, dependencies accumulate to the point of requiring heavy coordination.

### Why the mechanism exists

Technical coupling and organizational coupling reinforce each other. We therefore need an explicit loop which observes:

- recurring dependencies;
- queues between teams;
- incidents linked to interfaces;
- areas of high volatility;
- overly shared components;
- teams in cognitive overload;
- modularization opportunities.

This loop helps decide when to change architecture, team boundaries, or platforms.

### Risk if the mechanism is removed

Without architecture-organization evolution, the organization compensates for the obsolescence of the division with more coordination. Meetings are increasing because boundaries no longer match the flow of change.

### Minimal form

The minimum form is a periodic review of structural dependencies, associated with an improvement budget. It must produce concrete decisions:

- extract a capacity;
- modify an interface;
- transfer ownership;
- create or strengthen a platform;
- decompose a component;
- merge or redefine perimeters;
- finance a coupling reduction initiative.

### Level of evidence

**Established fact / Hypothesis applied.** The foundations are solid in Conway, Parnas and systems theory. Specific cadences and artifacts are more about the experience.

### Operating assumptions

The mechanism assumes that the organization agrees to invest in reducing the need for coordination. If all capacity is consumed by short-term functional demands, the coupling will continue to increase.

## 6.14 Mechanism 11: organizational improvement loop

### Problem addressed

An operating model is deteriorating. Meetings pile up, roles become more rigid, metrics are distorted, exceptions become the norm and mechanisms sometimes stop addressing the problems that justified them.

### Why the mechanism exists

A large-scale organization must learn about itself. It must inspect not only the products delivered, but the system that delivers those products.

The organizational improvement loop must regularly pose:

- what mechanisms effectively reduce the coordination cost?
- which ceremonies no longer produce a decision?
- which dependencies come up too often?
- which teams are overloaded?
- which metrics do not trigger any action?
- which rules slow down without reducing the risk?
- what controls can be automated?

### Risk if the mechanism is removed

Without organizational improvement, the target model gradually becomes a local framework. Practices created to simplify are transformed into obligations, then into routines defended for their own sake.

### Minimal form

The minimum form is a quarterly or half-yearly review of the operating model, separate from delivery reporting. It must have the right to modify:

- cadences;
- roles;
- artifacts;
- portfolio limits;
- standards;
- team boundaries;
- governance mechanisms;
- metrics.

It must result in few but real actions.

### Level of evidence

**Established fact / Experience report.** The principles of organizational learning, Lean and system thinking strongly support this loop. The difficulty is less conceptual than political.

### Operating assumptions

The mechanism assumes that the organization can call into question its own structures. If the ceremonies become untouchable, the improvement is limited to the teams and leaves the system intact.

## 6.15 Mechanism 12: governance of assisted AI

### Problem addressed

AI increases the speed of local production, but it can also increase the volume of code, documentation, superficial testing, poorly verified decisions, and implicit dependencies. On a large scale, local acceleration can become a systemic risk.

### Why the mechanism exists

AI must be governed as a socio-technical capability, not as a simple individual tool. The critical questions are:

- what uses are authorized?
- what data can be exposed?
- what human verification is required?
- how to trace decisions or sensitive content?
- how to measure the impact on quality, rework and deadlines?
- what review, testing and security standards must be strengthened?

AI does not replace previous mechanisms. It makes them more important.

### Risk if the mechanism is removed

Without governance, practices diverge, privacy risks increase, quality can become more variable, and teams can confuse rapid generation with reliable delivery.

However, overly restrictive governance has a cost: it can prevent useful learning and push practices into the informal sector.

### Minimal form

The minimum form is a clear usage policy, combined with approved environments, verification standards and some impact metrics:

- authorized and prohibited use cases;
- rules on sensitive data;
- human review requirements;
- integration into testing and security practices;
- minimal training;
- measurement of rework, incidents and developer experience.

### Level of evidence

**Hypothesis / Emerging empirical evidence.** Uses are evolving rapidly. The principle of verification and governance is robust, but the optimal forms remain in learning.

### Operating assumptions

The mechanism assumes that the organization observes the real effects of AI, not just its adoption. The number of users or prompts is not enough to prove an improvement in the system.

## 6.16 What can be deliberately removed

A minimal reconstruction should not only say what to keep. It must also identify what can be removed when the context allows it.

Can often be removed or greatly simplified:

- proprietary vocabulary when neutral terms are sufficient;
- ceremonies whose exit does not modify any decision;
- coordination roles without clear responsibility;
- duplicative reporting;
- framework adoption metrics;
- planning that is too detailed beyond the useful horizon;
- committees which validate decisions already taken late;
- standards not applied or not testable;
- coordination layers which compensate for obsolete cutting without correcting it.

The removal rule is simple:

> A structure can be removed when the problem it addressed has disappeared, or when a lighter mechanism treats the same problem with less cost.

Conversely, removing a structure without addressing the underlying problem creates organizational debt.

## 6.17 Minimum matrix of mechanisms

| Fundamental problem | Minimal mechanism | Risk if absent | Lightest form |
|---|---|---|---|
| Divergence of the teams | Light strategic alignment | Inconsistent local optimization | Objectives and constraints by horizon |
| Too much work involved | Wallet with WIP limit | Systemic congestion | Limit Portfolio Chart |
| Cross-team dependencies | Proportionate planning | Late blockages | Synchronization by domain |
| Unclear ownership | Explicit boundaries | Climbs and rework | Ownership card maintained |
| Technical coupling | Architecture-organization loop | Permanent coordination | Review of structural dependencies |
| Technical fragmentation | Light technical governance | Divergence and systemic risk | Standards, ADR, exceptions |
| Duplication of abilities | Internal platform | Local reimplementation | Self-service preferred paths |
| Late integration | Integrated quality | Heavy stabilization | CI, tests, security, observability |
| Invisible flow | Diagnostic Metrics | Control by perception | Lead time, WIP, stability, rework |
| Model degradation | Organizational improvement | Local bureaucracy | Periodic review of the model |
| Uncontrolled AI acceleration | AI governance | Rework and increased risk | Policy, verification, impact measurement |

This matrix is ​​not an adoption checklist. It is used to verify that each critical problem has at least one treatment mechanism.

## 6.18 The minimal model as an operating system

The result of this reconstruction is not a framework. It looks more like an organizational operating system:

- an explicit management layer: strategy, portfolio, objectives;
- a layer of responsibility: domains, teams, ownership;
- a coordination layer: proportionate planning, dependencies, trade-offs;
- a technical layer: architecture, platforms, quality, integration;
- an observation layer: flows, metrics, user and operational feedback;
- a learning layer: continuous improvement of the model.

Each layer should be kept minimal. But none can be ignored without consequences in an organization of several hundred developers.

Simplification therefore consists of making these layers more readable, less ceremonious, better connected to decisions and closer to real work.

## 6.19 Summary

A large-scale software organization does not need a comprehensive framework by default. It needs a small number of robust mechanisms that deal with the inevitable problems.

The mechanisms reconstructed in this chapter are:

- stable flow-oriented teams;
- explicit ownership boundaries;
- light strategic alignment;
- portfolio with WIP limits;
- proportionate multi-team planning;
- flow visibility and diagnostic metrics;
- integrated quality and frequent integration;
- light technical governance;
- internal platforms and preferred paths;
- architecture-organization evolution loop;
- organizational improvement loop;
- governance of assisted AI.

Their value does not come from their name. It comes from the problem they are solving.

The practical conclusion is this: the target should not be "less structure" in the abstract sense. It must be a fairer structure. Less vocabulary, less ceremony, less reporting, but more clarity on priorities, boundaries, capacity, dependencies, quality, architecture and learning.

The next chapter transforms this reconstruction into the target organizational architecture.
