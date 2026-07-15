<!-- source-hash: sha256:71e5b15f6d972343af664a66f67dc9214e78689bc0c11e8dc10f7c86743f441f -->

# 4. SAFe: analytical decomposition

## Research question

What problems is SAFe trying to solve, and what elements of the framework are actually principles, mechanisms, ceremonies, roles, or just vocabulary?

## Intent of the chapter

The previous chapter analyzed several frameworks as possible answers to large-scale coordination problems. SAFe appeared as the most complete approach, but also as the one which concentrates the most controversies. This tension warrants a separate chapter.

The goal is not to promote SAFe, nor to reject it in principle. SAFe should be treated as a dense assembly of organizational responses to real-world problems: alignment, dependencies, portfolio governance, multi-team synchronization, capacity visibility, integration, architecture, and quality.

The right question is therefore not:

> Should you be for or against SAFe?

It becomes:

> Which SAFe mechanisms address necessary problems, which are contextual, which can be simplified, and which risk becoming organizational theater if adopted without technical discipline or real decision rights?

This distinction is essential for the rest of the paper. An organization that wants to move away from a SAFe model can remove its vocabulary without removing the problems it made visible. Conversely, an organization that adopts SAFe may install roles and ceremonies without addressing the root causes of dependencies, excessive WIP, or late onboarding.

## 4.1 What SAFe seeks to solve

SAFe first responds to a situation typical of large organizations: several dozen teams work on interdependent products, platforms or systems; financing decisions are made at a different level than technical decisions; dependencies are not always visible; priorities change faster than capabilities; management demands predictability; teams demand autonomy; and the architecture does not always allow independent delivery.

In this context, the dominant problems are:

- align numerous teams on a common intention;
- make dependencies visible before they block execution;
- synchronize teams that contribute to the same value stream;
- link strategy, portfolio and teamwork;
- arbitrate a limited capacity;
- give management usable visibility without transforming the organization into a reporting machine;
- maintain consistency of architecture and quality;
- coordinate several levels of organization when the system goes beyond the scope of a single product or domain.

SAFe offers a structured response to these problems. The official documentation notably presents the Agile Release Train as a sustainable unit composed of several teams aligned on common objectives, generally in the order of 50 to 125 people, and the PI Planning as a periodic event intended to align teams and stakeholders around a shared mission, vision and plan. It also presents Lean Portfolio Management as a mechanism for aligning strategy, financing, portfolio operations and governance. These descriptions are useful for understanding the intent of the framework, but they do not constitute proof of effectiveness in themselves.

The important point is that SAFe does not start with a single problem. It aggregates several families of problems:

| Problem family | Typical SAFe response | Nature of the response |
|---|---|---|
| Multi-team roster | Agile Release Train, common goals, PI Planning | Synchronization mechanism |
| Dependencies | Planning board, inter-team coordination, facilitation roles | Visibility and management |
| Capacity arbitrage | Portfolio, prioritization, planning by horizon | Decision governance |
| Predictability | Cadence, goals, reviews, metrics | Reduction of perceived uncertainty |
| Integration | increments, system demonstrations, integrated quality | Technical discipline and feedback |
| Architecture | architectural roles, architectural runway, transversal decisions | Technical governance |
| Very broad coordination | Solution Train, suppliers, compliance | Additional coordination layer |

This broad coverage explains both the attractiveness of SAFe and its risks. The framework provides a visible response to many organizational shortcomings. But it can also give the impression that a problem is being addressed because it has a name, a role or a ceremony.

## 4.2 Level of proof and status of sources

The SAFe analysis must distinguish four types of information.

First, some principles claimed by SAFe are strongly established outside of SAFe: systems thinking, limiting WIP, reducing batch sizes, rapid feedback, decentralized decisions, socio-technical alignment, frequent integration. These principles are consistent with Lean, DevOps, queuing theory, modularity, the work of Conway and Parnas, and the DORA or Accelerate results.

Second, the official SAFe documentation describes the intent of the framework. It explains what roles, events, and artifacts are supposed to do. This is a relevant source for understanding the model, but it should be classified as framework documentation, not independent empirical evidence.

Third, public feedback is useful for understanding the conditions for success and failure, but it is often incomplete. Success attributed to SAFe can also come from simultaneous investment in engineering, portfolio clarification, leadership, or WIP reduction. A failure attributed to SAFe can come from bureaucratic adoption, a very constrained context or poor execution.

Fourth, practitioner critiques are important because they point out recurring risks: heaviness, centralization, loss of autonomy, invasive vocabulary, illusion of agility. But they do not all prove that the mechanism is intrinsically bad. They must be analyzed as signals of possible failure.

| Affirmation | Level of evidence | Careful reading |
|---|---|---|
| The Lean, flow, DevOps and systems principles mobilized by SAFe are relevant on a large scale | Established fact / empirical evidence according to the principle | Strong, but independent of SAFe |
| SAFe provides an explicit operational model for coordinating multiple teams | Official documentation / practitioner observation | Strong as description |
| SAFe mechanically improves performance | Supplier claim or feedback | To be validated context by context |
| SAFe is inherently bureaucratic | Practitioner opinion / controversy | Possible, but depends on design and adoption |
| SAFe can become bureaucratic in large organizations | Feedback / strong hypothesis | Plausible and frequent |
| SAFe reduces dependencies | Weak if isolated | SAFe makes them visible; their reduction depends on the architecture and team boundaries |

The methodological conclusion is simple: we can favorably analyze certain SAFe mechanisms without accepting the overall claims of the framework.

## 4.3 The principles that SAFe implements

SAFe claims to be based on Lean-Agile principles: economic vision, systemic thinking, preservation of options, rapid learning cycles, objective evaluation by functional systems, flow, cadence, intrinsic motivation, decentralized decision-making and organization around value.

These principles are largely compatible with those of chapter 2. The difficulty is not at the level of the declared principles. It appears in their organizational translation.

| Universal Principle of Chapter 2 | typical SAFe translation | Translation risk |
|---|---|---|
| Explicit alignment | train goals, PI Planning, portfolio | alignment transformed into imposed plan |
| Autonomy with boundaries | agile teams, ART, product roles and architecture | local autonomy limited by too many dependencies |
| Reduce dependencies before managing them | organization around value, architecture, platforms | dependencies only planned, not reduced |
| Flow Visibility | tables, objectives, reviews, portfolio | status reporting rather than flow management |
| Limit work in progress | planning by capacity, portfolio, WIP | too many initiatives undertaken despite the ceremony |
| Quick Feedback | increments, demos, DevOps, integrated quality | ceremonial feedback without real technical integration |
| Decide at the right level | decentralized decision making with guardrails | persistent escalation or disguised centralization |
| Scalable architecture | architectural runway, System Architect, communities | architecture governance separated from the delivery flow |
| Continuous learning | inspect and adapt, retrospectives, metrics | improvement limited to process compliance |

The heart of the analysis is here: SAFe contains several useful mechanisms, but their usefulness depends on their ability to preserve the underlying principle. If the mechanism becomes detached from the principle, it becomes a burden.

For example, multi-team planning is useful if it clarifies dependencies, adjusts capacity, and produces decisions. It becomes costly if it forces a premature commitment on a horizon that is too uncertain. Likewise, a coordination role is useful if it speeds up the resolution of blockages. It becomes problematic if it removes responsibility from teams to directly deal with their interfaces.

## 4.4 Decomposition of SAFe elements

The following table separates the main SAFe elements according to their nature. The same element can combine several dimensions: principle, mechanism, ceremony, role or vocabulary.

| SAFe element | Underlying principle | Actual mechanism | Ceremony | Role | Vocabulary | Can be simplified? |
|---|---|---|---|---|---|---|
| Agile Release Train | alignment, autonomy with boundaries, organization around value | stable multi-team coordination unit | No | No | Yes | Yes, in "domain", "value stream" or "product group" |
| PI Planning | explicit alignment, synchronization, dependency management | multi-team periodic planning | Yes | No | Yes | Yes, if the horizon, duration and participants are suitable |
| Planning Interval | cadence, feedback, capacity allocation | intermediate planning horizon | No | No | Yes | Yes, in "planning cycle" |
| ART PI Objectives | shared intention, arbitration | common goals and team goals | No | No | Yes | Yes, in domain or increment goals |
| Program Board | transparency of dependencies | visualization of dependencies and milestones | No | No | Yes | Yes, in dependency map |
| Release Train Engineer | facilitation, flow improvement | facilitation of inter-team coordination | No | Yes | Yes | Yes, depending on maturity and size |
| Product Management | product alignment, prioritization | product arbitration at multi-team level | No | Yes | Partially | Contextual |
| System Architect | technical consistency, scalable architecture | lightweight architecture governance and decision support | No | Yes | Partially | Contextual |
| Business Owners | business alignment, economic responsibility | involvement of decision-makers in priorities and trade-offs | No | Yes | Yes | Yes, as sponsors or business decision-makers |
| System Demo | rapid feedback, objective integration | regular demonstration of an integrated system | Yes | No | Yes | Keep if it shows a real increment |
| Inspect and Adapt | continuous learning | systemic review and improvement | Yes | No | Yes | Yes, if focused on systemic causes |
| Lean Portfolio Management | strategic arbitration, WIP, financing | portfolio governance mechanism | No | May include roles | Yes | To be strongly adapted to the context |
| Epic | demand slicing, investment | significant work unit requiring analysis and arbitration | No | No | Yes | Yes, in initiative or product bet |
| Portfolio Kanban | flow visibility, WIP limitation | management of the flow of major initiatives | No | No | Yes | Yes, in portfolio flow system |
| Solution Train | multi-domain coordination | coordination layer for very large systems | No | No | Yes | Only if the coupling requires it |
| Communities of Practice | cross-team learning | competence network | No | No | Little | Yes, often useful outside of SAFe |
| Built-in Quality | integrated quality, fast feedback | technical standards and engineering practices | No | No | Yes | No in principle; yes on vocabulary |

This decomposition shows that SAFe mixes three things.

It first contains robust principles already known: flow, feedback, quality, WIP, systemic thinking, decision at the right level.

It then contains organizational mechanisms that can be useful on a large scale: stable coordination units, multi-team planning, explicit portfolio, integration reviews, facilitation roles.

Finally, it contains a vocabulary and a method architecture. This layer can help an organization that lacks a common language, but it can also become a cost of entry and an object of cultural rejection.

## 4.5 Analysis of central mechanisms

### 4.5.1 Agile Release Train

The Agile Release Train is the central unit of SAFe. Analyzed without SAFe vocabulary, it corresponds to a stable coordination unit bringing together several teams who contribute to the same value stream, product, platform or system.

The problem addressed is real. When an organization has several hundred developers, the team alone is no longer always the sufficient unit to align objectives, dependencies, architecture and capacity. Often there needs to be a middle level between the team and the portfolio.

The useful mechanism is not the name "train". It is the stability of a multi-team perimeter with:

- an understandable mission;
- shared objectives;
- explicit interfaces with other domains;
- a known capacity;
- decision mechanisms;
- minimum common practices;
- responsibility for an integrated result.

The risk appears when this unit becomes an administrative layer rather than a value perimeter. If the breakdown is based on the organization chart, historical components or managerial availability, it can reinforce dependencies instead of reducing them.

Simplification criterion: retain the idea of ​​a stable group of several teams only when it corresponds to a real flow of change. The name, exact size and associated roles are secondary.

### 4.5.2 PI Planning

PI Planning is probably the most visible element of SAFe. Official documentation describes it as a periodic event, often held every 8-12 weeks, bringing together a train's teams and stakeholders to align on a mission, vision, plan, goals, and dependencies.

Analytically, this is a synchronization mechanism. It addresses four issues:

- align teams on a common intention;
- compare demand with capacity;
- make dependencies visible;
- accelerate certain decisions by bringing together the right players.

This mechanism can be powerful in an organization where dependencies are numerous and decisions are slow. It forces a conversation that organizations often put off: what can we actually do with the available capacity?

But the same mechanism can become dangerous if it transforms uncertainty into artificial commitment. The longer the horizon, the more exploratory the domain, the more poorly understood the dependencies, the more the plan risks becoming an artifact of reassurance.

The question is therefore not whether to keep or eliminate periodic planning. The question is to size its intensity:

| Context | Adapted planning form |
|---|---|
| Strong interdependence, regulatory constraints, coordinated releases | structured multi-team planning |
| Digital product with relatively autonomous teams | leaner planning focused on critical objectives and dependencies |
| Exploratory or very uncertain area | shorter horizon, less detailed commitments, frequent review of assumptions |
| Internal platform with continuous flow of requests | Portfolio Kanban and More Frequent Capacity Reviews |

Simplification criterion: replace “do a PI Planning” with “organize the minimum conversation to align intention, capacity, dependencies and decisions for the next useful horizon”.

### 4.5.3 Coordination roles

SAFe introduces several specific or reinforced roles: Release Train Engineer, Product Management, System Architect, Business Owners, Epic Owners, Solution Train Engineer depending on the configurations.

These roles address a real problem: At scale, some responsibilities extend beyond the individual team. Someone must facilitate coordination, maintain product consistency, help with trade-offs, clarify dependencies, support architectural decisions and make systemic blockages visible.

The risk is substitution. A coordination role becomes problematic when it replaces team accountability instead of amplifying it. For example :

- the inter-team facilitator becomes implicit project manager;
- the central product role absorbs all decisions and reduces team autonomy;
- the architecture becomes a late external validation;
- business sponsors only intervene at the time of commitment, not in continuous learning.

The right test is operational: does this role reduce decision time and improve flow, or does it add an additional interface?

Simplification criterion: maintain explicit responsibility, but avoid creating a permanent role when responsibility can be carried by a forum, a community, a platform team, a product-tech trio or a clear governance decision.

### 4.5.4 Lean Portfolio Management

The portfolio is one of the most important contributions of SAFe when an organization suffers from an excess of initiatives. On a large scale, team problems are often symptoms of portfolio decisions: too many projects started, fragmented funding, competing priorities, saturated experts, incompatible local goals.

The useful mechanism is explicit arbitration of demand before it overloads teams. This includes:

- link strategy and capacity;
- limit the number of initiatives undertaken;
- define prioritization criteria;
- make delay costs and risks visible;
- finance value flows rather than just projects;
- revise decisions when information changes.

SAFe offers vocabulary and artifacts for this level. But the principle is independent of the framework: an organization of several hundred developers needs a portfolio mechanism, whether this mechanism is called LPM or not.

The risk is that the portfolio becomes a slow validation layer. If each initiative must go through a cumbersome process before being tested, the organization gains in apparent control and loses in learning.

Simplification criterion: keep an explicit portfolio, but design it as a system of WIP limitation and economic arbitrage, not as an additional approval committee.

### 4.5.5 Solution Train and additional layers

The Solution Train addresses situations where a single multi-team group is no longer enough: large systems, multiple domains, external suppliers, compliance constraints, cyber-physical systems or products where the cost of failure is high.

The underlying mechanism is a coordination layer between multiple coordination units. It can be legitimate when the coupling is real and difficult to reduce in the short term.

But it’s also one of the places where complexity can get out of hand. Adding a layer of coordination is sometimes necessary; it is rarely a lasting solution if the root cause is poor architecture, an insufficient platform or an overloaded portfolio.

Simplification criterion: only introduce a multi-domain layer for rare, critical and justified dependencies. If it becomes permanent and pervasive, it probably signals a structural problem.

### 4.5.6 Built-in Quality and DevOps

SAFe includes principles and practices around integrated quality, DevOps and the continuous delivery pipeline. This is a dimension often underestimated in governance-focused adoptions.

However, it is a condition of credibility. An organization can perfectly align its teams every three months and still be slow if it integrates late, tests manually, relies on sparse environments, or heavily separates development, security, and operations.

The essential mechanism is not ceremonial. It is technical and socio-technical:

- continuous integration;
- relevant automated tests;
- reproducible environments;
- integrated security early;
- observability;
- operational ownership;
- ability to deploy or release frequently;
- real feedback on the system in operation.

Without this discipline, SAFe can improve reporting predictability without improving delivery performance. With this discipline, some coordination mechanisms can become lighter, because technical feedback reduces uncertainty.

Simplification criterion: never simplify integrated quality as if it were a methodological option. We can change the vocabulary, but not eliminate the need.

## 4.6 Analysis of frequent reviews

There are many criticisms of SAFe. They must be taken seriously, but analyzed with precision. A criticism can target a principle, a mechanism, an implementation, a cultural adoption or a political use of the framework.

### 4.6.1 Bureaucracy and ceremonial overload

Origin: practitioner feedback, agile critiques, adoption experiences in large companies.

Frequency: High in public discussions about SAFe.

Probable cause: SAFe makes many roles, events, and artifacts visible. In an organization that is already bureaucratic, this structure can be absorbed by existing reflexes: committees, reporting, validation, compliance with the process.

Level of evidence: medium as a recurring risk; weak if formulated as a universal property.

Analysis: the problem is not only the number of ceremonies. A ceremony can be useful if it replaces dozens of informal coordinations and produces decisions. It becomes bureaucratic when it changes neither priorities, nor dependencies, nor capacity, nor quality.

Diagnosis: if the same dependencies reappear at each cycle, if meetings mainly produce statuses, or if preparation becomes more important than decisions, the organization has transformed a coordination mechanism into a control theater.

### 4.6.2 Too many roles

Origin: practitioners, teams, middle managers.

Frequency: High in organizations adopting SAFe by full structure.

Probable cause: SAFe explicitly names responsibilities that sometimes existed implicitly. This can clarify, but also multiply the interfaces.

Level of evidence: contextual.

Analysis: The number of roles is not the only problem. The question is the clarity of decision-making rights. Three roles with clear responsibilities may be lighter than a single ambiguous role. Conversely, numerous roles without real authority add noise.

Diagnostic: A role is useful if it reduces decision time, clarifies ownership, or improves flow. It is suspect if it is primarily used to prepare artifacts, relay status, or escalate decisions that should be local.

### 4.6.3 Model too top-down

Origin: agile critics, product teams, engineers.

Frequency: High when SAFe is introduced by management or transformation.

Probable cause: SAFe connects portfolio, strategy and teams. This verticality can be used to clarify intention, but also to impose a plan.

Level of evidence: controversy.

Analysis: SAFe states that it supports decentralized decision-making, but its implementation can become centralizing if goals are set down as fixed commitments, if capacity is negotiated politically, or if teams cannot challenge assumptions.

Diagnosis: the test is not the discourse on autonomy. We must observe who can say no, who can change the scope, who can arbitrate quality, who can change the order of work, and who can stop an initiative when assumptions are invalidated.

### 4.6.4 False agility

Origin: agile community, reviews of enterprise agility.

Frequency: high in public debates.

Probable cause: SAFe can be adopted by organizations that want to retain traditional planning and control mechanisms while using an agile vocabulary.

Level of evidence: variable; strong as an anti-pattern, weak as a generalization.

Analysis: false agility appears when cycles, boards and roles change, but the power mechanisms remain the same: fixed plans, project budgets, build/run separation, late validation, weak customer feedback, weak technical autonomy.

Diagnosis: If the organization doesn't reduce its learning time, deploy more frequently, limit WIP better, and give teams more decision-making rights, adoption is likely cosmetic.

### 4.6.5 Excessive planning

Origin: teams working in uncertain or exploratory contexts.

Frequency: medium to high.

Probable cause: Periodic planning is useful for coordination, but can be applied with the same level of detail to jobs of different nature.

Level of proof: consistent with the theory of uncertainty in product development.

Analysis: the greater the uncertainty, the more quickly a detailed plan loses its value. Excessive planning can freeze assumptions that should remain testable.

Diagnosis: If teams spend a lot of time replanning what they knew was uncertain, the horizon or level of detail is too ambitious.

### 4.6.6 Loss of local autonomy

Origin: teams and technical leaders.

Frequency: high when dependencies are strong and objectives centralized.

Probable cause: Multi-team synchronization can reduce local freedom if it becomes a rigid collective commitment.

Level of evidence: contextual, but consistent with organizational theory.

Analysis: autonomy is only possible if the boundaries and interfaces are clear. SAFe can help with alignment, but does not guarantee autonomy. If the architecture imposes permanent dependencies, the teams will remain constrained.

Diagnostic: measure real autonomy by the decisions the team can make without escalation, not by the name of the framework.

### 4.6.7 Vocabulary rejection

Origin: teams, managers, corporate cultures not very sensitive to branded methods.

Frequency: variable, often high in organizations already tired of transformations.

Probable cause: SAFe introduces an abundant lexicon. This lexicon can create a common language, but it can also produce cultural distance.

Level of proof: practitioner observation.

Analysis: vocabulary is not neutral. It influences what actors perceive as legitimate. Too specific vocabulary can exclude stakeholders or make people believe that understanding the words is equivalent to understanding the system.

Diagnosis: If conversations are more about conforming to vocabulary than about flow, dependencies and decisions, the terminology layer has become too heavy.

### 4.6.8 Compliance with the framework rather than results

Origin: transformations driven by certification, internal audit or deployment objectives.

Frequency: high in large transformation programs.

Probable cause: It is easier to measure the adoption of a framework than the improvement of a socio-technical system.

Level of evidence: strong as generic risk of transformation.

Analysis: Compliance is attractive because it produces visible evidence: training, roles appointed, events organized, artifacts created. But this evidence may be independent of the results.

Diagnostic: replace adoption indicators with flow, quality, learning and decision indicators: end-to-end delay, WIP, integration frequency, recurring dependencies, decision time, incidents, satisfaction of internal teams and customers.

## 4.7 Analysis of possible benefits

The benefits attributed to SAFe must be separated into three categories: intrinsic benefits of the mechanism, benefits linked to good execution discipline, and benefits which simply come from finally having an explicit operating model.

### 4.7.1 Intrinsic benefits of certain mechanisms

Some mechanisms have value independently of SAFe:

- a common cadence reduces the coordination cost;
- multi-team planning makes dependencies visible;
- shared objectives improve alignment;
- explicit portfolio-level decision-making;
- an integration review reveals problems earlier;
- facilitation roles can accelerate the resolution of blockages;
- minimum quality standards reduce dangerous variability.

These benefits are real when the mechanisms produce decisions and feedback.

### 4.7.2 Benefits linked to execution discipline

Successful SAFe adoption is often accompanied by other changes: clarification of priorities, improvement of engineering practices, greater involvement of management, reduction of certain silos, investment in coaching, better visibility of the portfolio.

In this case, it is difficult to attribute the results to the framework alone. SAFe may have served as a vehicle for transformation. But the benefit perhaps comes from more fundamental mechanisms: limiting WIP, integrating more often, aligning decision-makers, clarifying ownership.

This distinction is important for an organization that wants to simplify. It must identify what actually produced the improvement, and then maintain that mechanism even if the vocabulary changes.

### 4.7.3 Benefits of an explicit operating model

In many large organizations, the initial benefit of SAFe comes from simply making the system explicit. Before SAFe, dependencies already existed, but were addressed through informal networking, escalations, ad hoc meetings, and local heroism.

A framework can improve the situation because it forces the organization to name:

- who decides;
- on what horizon;
- with what capacity;
- according to what priorities;
- with what dependencies;
- with what success criteria;
- with which learning loop.

This benefit does not prove that the entire SAFe structure is necessary. It proves that an implicit and fragmented operating model is insufficient on a large scale.

## 4.8 What should be retained, adapted or deleted

An organization that wants to simplify SAFe must avoid two symmetrical mistakes.

The first mistake is to keep everything for safety. It produces a heavy organization, the capacity of which is consumed by the coordination itself.

The second is to remove everything by rejecting the vocabulary. It reintroduces the same problems in invisible form: informal dependencies, implicit portfolio, slow decisions, late integration, overload.

The right approach is to evaluate each element according to five questions:

1. What problem does this item address?
2. Does this problem really exist in our context?
3. Does the current mechanism deal with it effectively?
4. Is there a simpler form to achieve the same effect?
5. What would happen if we removed this item with no alternative?

### 4.8.1 Items generally to be retained in one form or another

Some needs are structural on a large scale:

- a multi-team alignment mechanism;
- explicit visibility of dependencies;
- portfolio prioritization;
- a limitation of the work undertaken;
- minimum engineering standards;
- an integration and feedback loop;
- clarification of decision-making rights;
- a systemic improvement review;
- clear responsibility for architecture and platforms.

These items may change name and form, but their pure removal usually creates organizational debt.

### 4.8.2 Elements to be strongly adapted

Other elements must be sized according to the context:

- duration and frequency of planning cycles;
- size of multi-team units;
- level of formalization of objectives;
- number of dedicated roles;
- depth of the portfolio;
- level of standardization of team practices;
- inter-domain ceremonies;
- reporting artifacts.

The principle of proportionality is central. The more autonomous the teams, the more decoupled the architecture and the measurable flow, the lighter the coordination can be. The more the system is coupled, regulated or dependent on suppliers, the more certain explicit mechanisms remain necessary.

### 4.8.3 Elements that can often be deleted or renamed

Part of SAFe is primarily terminology. It may be deleted or translated if it does not help the organization:

- specific names when neutral terms are sufficient;
- ceremonies whose exit does not change any decision;
- roles that hold neither clear responsibility nor capacity for action;
- artifacts duplicating information already visible elsewhere;
- framework adoption metrics;
- layers of coordination added for compliance rather than need.

Simplification should not, however, be an aesthetic exercise. Deleting a word is only useful if the necessary mechanism is preserved or improved.

## 4.9 Decision model to simplify SAFe

The following table provides an operational reading.

| Element | To keep if... | To simplify if... | To be deleted if... |
|---|---|---|---|
| Stable multi-team unit | it corresponds to a real value flow or domain | name and roles create friction | it only reflects an organizational chart |
| Periodic planning | it produces alignment, decisions and visible dependencies | the horizon or the level of detail is too heavy | it only produces status |
| Inter-team facilitation role | it accelerates the resolution of blockages | it can be shared or rotating | he becomes implicit project manager |
| Explicit portfolio | demand exceeds capacity | the process slows down learning | it only serves to validate politically |
| Transversal architecture | technical decisions have a systemic impact | governance is too distant from the field | it becomes a late validation committee |
| Integration Review | it shows a truly integrated system | it can be replaced by continuous feedback | it shows slides rather than a product |
| Multi-domain layer | the cost of failure or the coupling justifies it | it can be limited to a few critical dependencies | it compensates for permanent bad cutting |
| SAFe Vocabulary | it creates a common language | neutral terms are better understood | it becomes a marker of conformity |

This grid can be applied to each level of the organization. It allows us to move from a question of identity to a question of design:

> We are not trying to be SAFe or anti-SAFe; we seek to retain the mechanisms that actually reduce the cost of coordination.

## 4.10 Analytical summary

SAFe is better understood as an integrated library of coordination mechanisms for large organizations than as an agile method in the light sense of the term. Its strength is to make explicit problems that many organizations poorly manage: dependencies, portfolio, synchronization, capacity, architecture, integration, governance.

This breadth is also its weakness. Because SAFe makes a lot of things explicit, it can become cumbersome. Because it provides a comprehensive vocabulary, it can be adopted as a language rather than a decision system. Because it connects strategy and teams, it can clarify intent or strengthen centralized control. Because it plans for dependencies, it can help treat or institutionalize them.

The most robust judgment is therefore not global. It is mechanism by mechanism.

The underlying principles of SAFe are often strong when they join together Lean, DevOps, systems thinking and flow theory. Mechanisms are useful when they produce better decisions, reduce WIP, accelerate feedback, clarify ownership, and expose dependencies. Ceremonies are justified only if they replace more costly coordination or produce a decision that no other mechanism produces. Roles are only useful if they reduce ambiguity and decision time. Vocabulary is optional.

For an organization that wants to rebuild a simpler model, the conclusion is clear:

- do not copy SAFe as the complete default architecture;
- do not reject its useful mechanisms through cultural reaction;
- translate the elements into neutral vocabulary;
- preserve the mechanisms that deal with real problems;
- reduce or remove elements that produce no decision, no feedback, no simplification;
- invest primarily in architecture, integrated quality, portfolio and team boundaries, because they determine the real need for coordination.

The following chapter can therefore rely on this decomposition. The challenge is no longer to choose between SAFe and another framework, but to rebuild a minimal operating model: explicit enough to coordinate several hundred developers, light enough to preserve autonomy, technical enough to reduce dependencies, and flow-oriented enough to arbitrate real capacity.

## Main sources

- [SAFe Lean-Agile Principles](https://framework.scaledagile.com/safe-lean-agile-principles/)
- [Agile Release Train](https://framework.scaledagile.com/agile-release-train/)
- [PI Planning](https://framework.scaledagile.com/pi-planning/)
- [Lean Portfolio Management](https://framework.scaledagile.com/lean-portfolio-management/)
- [Solution Train](https://framework.scaledagile.com/solution-train/)
- [SAFe Scrum](https://framework.scaledagile.com/safe-scrum/)
- [DevOps in SAFe](https://framework.scaledagile.com/devops/)
