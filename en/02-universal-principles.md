<!-- source-hash: sha256:4e23440c4dd6388b0a4b76769f3b815e4019e063eff4c6c523725af64c01daff -->

# 2. Universal principles of large-scale software coordination

## Research question

What principles appear recurrently in successful large-scale software organizations, regardless of the framework they use?

## Intent of the chapter

The previous chapter identified the fundamental problems that emerge when a software organization grows from a few teams to several hundred developers: structural complexity, inter-team coordination, decision-making trade-offs, operational integration, knowledge distribution, and social tensions.

This chapter seeks to formulate the principles that address these problems without presupposing a particular method. This is not yet about discussing SAFe, LeSS, Nexus, Team Topologies, Flight Levels, Kanban or any other framework. These approaches will be analyzed later as possible implementations. Here, the goal is to identify constraints and heuristics that seem valid beyond method vocabularies.

A principle is not a ceremony. A principle is not a role. A principle is not a reporting artifact. It’s a rule of organizational design that remains relevant even when names, tools, or rituals are changed.

For example :

- “reducing dependencies” is a principle;
- “organize multi-team quarterly planning” is a possible mechanism;
- "PI Planning" is a specific implementation in a given framework.

This distinction is essential to avoid two common errors.

The first consists of confusing a principle with its visible form. An organization can reject a vocabulary or ceremony while retaining the underlying need: align teams, make dependencies visible, limit work in progress, or integrate frequently.

The second is to adopt a practice because it exists in a framework, without checking whether the problem it addresses is actually present in the context. On a large scale, the challenge is not to apply generic practices, but to design a coordination system proportionate to real constraints.

## 2.1 Criteria for a universal principle

A principle will be considered universal in this paper if it satisfies four criteria.

First, it responds to a structural problem identified in Chapter 1. It is not a cultural preference or a methodological habit, but a response to an observable constraint: dependencies, queues, uncertainty, coupling, quality, learning or arbitration.

Second, it can be implemented in several ways. If an idea can only exist within a given framework, it is more a matter of mechanism or vocabulary.

Third, it maintains its relevance in different contexts, even if its intensity varies. A heavily regulated organization, a digitally native business, and a software company will not have the same practices, but they will all need to address alignment, quality, feedback, ownership, and dependencies.

Fourth, it introduces explicit trade-offs. A true organizing principle is not free. More autonomy requires more clarity about boundaries. More standardization reduces some friction but can limit local adaptation. More planning improves coordination but can delay learning.

These criteria make it possible to distinguish three levels:

| Level | Definition | Example |
|---|---|---|
| Principle | Durable constraint or heuristic | Limit work in progress |
| Mechanism | Concrete way of applying a principle | Shared Flow Chart, WIP Policy, Portfolio Review |
| Specific implementation | Form specific to a method or context | Ceremony, role, tool or particular vocabulary |

The rest of the chapter presents the principles that most directly structure large-scale software coordination.

## 2.2 Explicit alignment

At scale, alignment cannot rely on informal communication alone. Teams must understand the common goals, relative priorities, non-negotiable constraints and trade-offs that guide decisions.

Explicit alignment primarily addresses decision complexity. When several dozen teams work in parallel, the absence of clear direction does not produce autonomy; it often produces an implicit competition between local priorities.

Good alignment does not mean that all teams execute a centrally defined detailed plan. It means that teams have a sufficiently clear framework to make local decisions consistent with the overall intention.

[Established fact] Organizations are limited by the bounded rationality of the actors: no one person can know all the relevant information. The work of Herbert Simon and, more broadly, organization theory remind us that decision structures serve precisely to make action possible despite this limitation.

In a software organization, alignment must therefore make explicit at least:

- the desired business results;
- strategic constraints;
- relative priorities between initiatives;
- capacity limits;
- the risks accepted or not accepted;
- critical dependencies;
- prioritization criteria when everything cannot be done.

The risk of insufficient alignment is fragmentation. Each team optimizes its backlog, its indicators or its emergencies, but the overall system delivers less integrated value.

The opposite risk is excessive centralization. If alignment becomes a detailed plan imposed on all teams, it reduces local learning and turns teams into execution units.

The operational principle can therefore be formulated as follows:

> The larger the organization, the more explicit the intention must be; but the greater the uncertainty, the more adaptable the execution must remain.

Possible mechanisms include shared objectives, periodic review of priorities, product strategy broken down by domains, OKRs, multi-team planning or portfolio governance. Their value comes not from their form, but from their ability to clarify choices.

## 2.3 Autonomy with boundaries

Autonomy is necessary because a central organization cannot absorb all local decisions. But autonomy without clear boundaries creates inconsistency, duplication and integration conflicts.

The principle is therefore not absolute autonomy. It is situated autonomy: each team must have an explicit decision-making space, understandable by others, compatible with the architecture and linked to common objectives.

This principle addresses both coordination complexity, cognitive complexity and structural complexity. A team can only be truly autonomous if its scope is sufficiently coherent and if its dependencies are limited or controlled.

[Established fact] Conway's law and the work on modularity, notably that of Parnas, suggest that organizational boundaries and technical boundaries are strongly linked. When components are strongly coupled, organizational autonomy remains partial, regardless of the rituals employed.

Autonomy with boundaries requires clarifying:

- what the team has;
- what decisions she can make alone;
- which interfaces it must respect;
- what standards are common;
- what risks must be escalated;
- how liability conflicts are resolved.

In a large organization, unclear ownership is one of the most underestimated costs. When an incident, technical debt, or cross-functional dependency has no clear owner, coordination shifts toward escalation, negotiation, and sometimes avoidance.

The central compromise is the following: the more autonomous the teams, the more explicit the interfaces must be. Autonomy does not reduce the need for discipline; it shifts the discipline towards contracts, boundaries, integrated quality and minimum standards.

Possible mechanisms include domain-aligned teams, API contracts, ownership maps, service catalogs, lightweight architecture rules, communities of practice, and explicit support policies.

## 2.4 Dependency reduction before dependency management

All large organizations have to manage dependencies. But a successful organization does not just coordinate them better; it first seeks to reduce them.

This principle is a direct consequence of chapter 1. Dependencies are costly because they create waiting, uncertainty, rework and trade-offs. Making them visible is necessary, but insufficient. If the organization stops at visibility, it risks institutionalizing the problem.

[Established fact] The principles of modularity and information hiding formulated by Parnas aim precisely to reduce the impact of a local change on the rest of the system. In software organization, this logic translates into technical and organizational boundaries that minimize the need for permanent coordination.

Reducing dependencies can take several forms:

- division into coherent business areas;
- stable and explicit interfaces;
- internal platforms that absorb shared complexity;
- self-service capabilities;
- automation of environments and validations;
- clarification of ownership;
- reduction in the number of simultaneous cross-functional initiatives;
- scalable architecture allowing localized changes.

Dependency management remains necessary for residual dependencies. Some dependencies are legitimate: regulatory constraints, common platforms, consistency of user experience, security, shared data, technical migrations or major product developments.

But we must distinguish two situations.

In the first, the dependence is temporary and can be driven by an explicit coordination mechanism. In the second, it is permanent and often reveals a problem of division, architecture or ownership.

The principle can therefore be formulated as follows:

> A recurring dependency should not only be planned for; it must be analyzed as a signal of organizational or technical design.

This idea is particularly important when an organization is looking to simplify an existing framework. Removing dependency meetings without reducing dependencies creates invisible coordination. Reducing dependencies makes some meetings unnecessary.

## 2.5 Work transparency and flow visibility

At scale, it’s not enough to know whether people are busy. You need to understand how work flows, where it waits, where it gets stuck, where it gets picked up, and where real capacity is consumed.

Flow transparency addresses coordination complexity and decision-making complexity. Without visibility, decisions are based on impressions, declarative statuses or local indicators which do not necessarily reflect overall performance.

[Established Fact] Lean approaches and queuing theory show that a system's lead time is highly dependent on work in progress, queues, variability, and bottlenecks. Reinertsen’s work explicitly applies these principles to product development.

Relevant visibility therefore does not only concern dates. It covers:

- incoming demand;
- the work actually undertaken;
- outbuildings;
- queues;
- blockages;
- repeats;
- bottlenecks;
- end-to-end delay;
- the capacity absorbed by support, debt, incidents and emergencies.

An organization can have many dashboards and still be opaque if those dashboards don't show actual flow. Reporting can even mask problems when it aggregates too early, transforms uncertainty into binary statuses, or incentivizes teams to report progress rather than expose risks.

The principle is not to measure everything. It is to make visible the information necessary for better collective decisions.

The compromise is delicate. Too little transparency creates late surprises. Too much reporting creates administrative burden, encourages the showcasing of progress, and distracts from the actual work.

Possible mechanisms include flow charts, delay metrics, dependency reviews, WIP indicators, capacity maps, portfolio visualizations, and operational reviews focused on blockages rather than compliance.

## 2.6 Limitation of work in progress

Work in progress is one of the most powerful and overlooked levers of performance at scale. When an organization launches more initiatives than its capacity allows, it does not create more throughput; it creates queues, multitasking, delays and loss of concentration.

This principle responds to decision-making complexity and coordination complexity. At scale, excess work commitments manifest as unresolved dependencies, competing priorities, saturated experts, fragmented teams, and lengthening delivery cycles.

[Established Fact] Queuing theory states that as the utilization of a resource approaches maximum capacity, delays increase disproportionately. In software development, this resource can be a team, an expert, a test environment, a platform, a validation capacity or an decision-making body.

Limiting work in progress does not mean reducing ambition. This means protecting actual throughput against the temptation to start too many things simultaneously.

The symptoms of excessive WIP are well known:

- many topics started, few topics completed;
- frequent changes of priority;
- mutually blocking dependencies;
- experts constantly called upon;
- coordination meetings which are increasing;
- teams working on several incompatible objectives;
- inability to predict an end date despite a high level of activity.

The principle can be stated simply:

> At constant capacity, starting fewer things is often the condition for finishing more things.

The difficulty is political as well as technical. Limiting WIP requires the organization to explain what will not be done now. This makes visible the trade-offs that many organizations prefer to leave implicit.

Possible mechanisms include WIP limits per team, per domain or per portfolio, intake policies, capacity reviews, classes of service, rules for temporarily freezing new requests or regular trade-offs on ongoing initiatives.

## 2.7 Fast feedback and frequent integration

Because software is a discovery activity, an organization must quickly learn whether its product, technical, and operational decisions are correct. The later the feedback, the more expensive the errors are.

This principle primarily addresses operational complexity and uncertainty. On a large scale, late feedback is dangerous because an incorrect hypothesis can be replicated by several teams before being invalidated.

[Empirical Evidence] DORA research and work synthesized in *Accelerate* consistently associates better delivery performance with practices like continuous integration, automated testing, frequent deployment, small change size, and the ability to quickly restore service. Like all empirical industrial research, these results must be interpreted with caution, but they constitute a solid basis for linking technical practices and organizational performance.

Rapid feedback concerns several loops:

- code feedback through testing and integration;
- architectural feedback based on actual use and development constraints;
- feedback produced by users and business results;
- operational feedback through observability and incidents;
- organizational feedback through flow metrics and retrospectives.

Frequent integration is particularly important. An organization can have many agile teams locally while remaining slow overall if integration is delayed. In this case, local speed produces an integration debt.

The principle can be formulated as follows:

> The value of a decision increases when it can be validated quickly; its risk increases when it remains unintegrated for a long time.

Possible mechanisms include continuous integration, automated testing, trunk-based development when the context allows, feature flags, reliable test environments, observability, frequent deployments, incident reviews and product experiments.

The compromise concerns the necessary investment. Rapid feedback requires technical discipline and appropriate architecture. Without this investment, the organization often compensates with late validation phases and manual coordination.

## 2.8 Integrated quality

At scale, quality cannot be added at the end of the process. It must be integrated into the way work is designed, developed, tested, deployed and operated.

This principle responds to operational and structural complexity. The larger the system, the more costly late defects are because they can cross multiple components, teams, and environments.

Integrated quality does not mean absence of defects. It means that the organizational system detects problems early, reduces their spread and learns from their occurrence.

It includes:

- explicit quality criteria;
- relevant automated tests;
- design and code reviews proportionate to risk;
- integrated security in the development cycle;
- observability;
- management of technical debt;
- rollback or restoration capacity;
- clear ownership in production;
- learning after incident.

[Empirical Evidence] DevOps and DORA research suggests that speed and stability are not necessarily opposites. High-performing organizations can deliver frequently while maintaining good stability when they invest in the appropriate technical and organizational capabilities.

The important point is that quality is a property of the system, not just the teams. A team can produce good code locally, but if environments are unstable, interface contracts unclear, or integration tests weak, overall quality will remain fragile.

The tradeoff is between control and accountability. Too little control creates systemic risks. Too much centralized control slows feedback and pushes teams to shift responsibility for quality to an external function.

Possible mechanisms include automated quality gates, engineering standards, risk-oriented architecture reviews, DevSecOps practices, internal platforms, SLOs, post-incident reviews and debt management policies.

## 2.9 Proportionate cadence and synchronization

Cadence is a mechanism for reducing time complexity. It lets teams know when decisions will be made, when dependencies will be discussed, when priorities will be reviewed, and when results will be inspected.

This principle responds to coordination complexity and decision-making complexity. Without cadence, coordination becomes opportunistic: decisions are made when a problem becomes urgent or when one person manages to get the necessary attention.

A useful cadence does not mean that all teams must work at the same pace or deliver at the same time. It means that certain synchronization moments are sufficiently predictable to reduce the coordination cost.

Cadences can exist at several levels:

- strategic review;
- portfolio prioritization;
- multi-team planning;
- review of dependencies;
- technical synchronization;
- flow review;
- inspection of results;
- improvement loop.

The danger is to transform the cadence into an automatic ritual. A recurring meeting that changes no decisions, reveals no risks, and releases no work is an organizational burden.

The principle can therefore be formulated as follows:

> Synchronization should be regular enough to avoid surprises, but light enough not to become the main work.

The right level of cadence depends on coupling, uncertainty and risk. A very decoupled organization may sync less often. An organization that is highly coupled, regulated or undergoing profound transformation will need more explicit points, at least temporarily.

## 2.10 Decision as close as possible to information, escalation as close as possible to the conflict

A large organization cannot centralize all decisions without creating bottlenecks. She also cannot delegate everything without creating inconsistencies. The principle consists of placing decisions at the level where relevant information is most available, while providing a clear escalation mechanism when objectives come into conflict.

This principle responds to decisional and cognitive complexity. Teams close to the work often better understand technical and operational constraints. More global levels better understand the trade-offs between areas, investments, risks and priorities.

The difficulty is to distinguish local decisions from systemic decisions.

A decision is rather local when it:

- primarily affects a team or component;
- can be corrected without major impact;
- does not have a lasting commitment to architecture;
- does not consume a shared critical capacity;
- does not modify a promise made to other teams.

A decision becomes systemic when it:

- affects several domains;
- creates or removes dependencies;
- commits to a common platform or architecture;
- modifies the priorities of other teams;
- changes a security, compliance or operational risk;
- consumes a rare ability.

The principle can be formulated as follows:

> Decentralize reversible and local decisions; explain irreversible, transversal or conflicting decisions.

Possible mechanisms include explicit decision rights, architecture decision records, escalation rules, decision forums, risk reviews, delegation policies and coordination roles.

The risk of poor application is twofold: centralization by reflex, which slows everything down; or ambiguous delegation, which leaves conflicts unresolved until they become costly.

## 2.11 Continuous organizational learning

A large-scale software organization cannot be designed once and for all. Products evolve, technologies change, regulatory constraints shift, teams are reorganized and architectures age. The coordination system must therefore learn.

This principle responds to cognitive and social complexity. Without a learning mechanism, the organization accumulates rules, exceptions and processes that corresponded to past problems but are no longer necessarily appropriate.

[Established fact] Work on learning organizations and complex systems emphasizes that an adaptive system must have feedback loops and correction mechanisms. In software, this idea is found in retrospectives, continuous improvement, incident reviews and Lean approaches.

Organizational learning is not limited to team retrospectives. On a large scale, it must also cover:

- the division of teams;
- recurring dependencies;
- bottlenecks;
- governance rules;
- technical standards;
- incidents;
- the metrics used;
- the unexpected effects of coordination mechanisms.

A sign of maturity is the ability to remove or modify a mechanism when it is no longer justified. Many organizations add processes after each issue, but rarely remove them when the context changes.

The principle can be formulated as follows:

> Any coordination mechanism must be inspectable, adjustable and removable if it no longer addresses a real problem.

Possible mechanisms include multi-team retrospectives, system reviews, flow analyses, communities of practice, no-blame postmortems, limited organizational experimentation, and periodic reviews of governance rules.

## 2.12 Minimum standardization

Standardization is ambivalent. It can reduce coordination costs, facilitate mobility, simplify operation and improve quality. But it can also rigidify the organization, ignore local contexts and produce conformity without performance.

The useful principle is therefore not “standardize” but “standardize the minimum necessary”.

This principle responds to structural and operational complexity. On a large scale, certain local decisions have global effects: security, observability, integration, data, interfaces, environments, tooling, developer experience. Letting each team define everything alone can make the system unmanageable.

On the other hand, standardizing choices that do not have a systemic effect can unnecessarily reduce autonomy.

Good standardization focuses on areas where consistency creates more value than variation:

- security ;
- observability;
- integration and delivery;
- interface contracts;
- quality practices;
- incident management;
- critical data;
- shared platforms;
- common developer experience.

The principle can be formulated as follows:

> Standardize interfaces, guarantees and systemic constraints; leave freedom over local resources when the overall risk is low.

Possible mechanisms include engineering standards, internal platforms, golden paths, templates, security policies, API contracts, repositories of practices and communities responsible for evolving the standards.

The quality criterion of a standard is its effect on the flow. A useful standard reduces the cost of coordination, improves quality or accelerates learning. An unnecessary standard adds validation or compliance without improving the system.

## 2.13 Scalable architecture aligned with flow

Architecture is not just a technical matter. On a large scale, it largely determines the possible form of organization. A strongly coupled architecture requires coordination; a modular and scalable architecture allows for greater autonomy.

This principle responds to structural complexity, but also to coordination complexity. Organizations that treat architecture as a subject separate from the organization often miss a major lever for simplification.

[Established fact] The combination of the work of Conway, Parnas and contemporary approaches like Team Topologies supports the idea that the technical structure and the communication structure must be designed jointly.

A flow-aligned architecture seeks to enable frequent, localized, and safe change. She doesn't just seek technical elegance; it seeks to reduce the time between a product intention and a reliable change in production.

This implies:

- comprehensible domain boundaries;
- explicit interfaces;
- a reduction in accidental coupling;
- active management of structural debt;
- platforms that simplify the work of teams;
- attention to cognitive load;
- architectural decision mechanisms proportionate to the risk.

The tradeoff is that scalable architecture requires ongoing investment. If this investment is always sacrificed for immediate functionality, the organization will pay later in the form of dependencies, slowness, and manual coordination.

The principle can be formulated as follows:

> An architecture must be evaluated not only by its internal coherence, but by the coordination cost that it imposes on the organization.

Possible mechanisms include lightweight architecture governance, ADRs, structural debt reviews, platform teams, domain models, interface contracts, and dependency metrics.

## 2.14 End-to-end accountability

End-to-end accountability means that a clearly identified team or set of teams takes responsibility for an outcome, from understanding the need to operating and improving the service.

This principle responds to operational and cognitive complexity. When responsibility is fragmented between analysis, development, testing, security, deployment and operations, defects move between silos and feedback loops lengthen.

End-to-end accountability doesn’t mean each team does everything alone. Certain capabilities must remain shared: platforms, specialized security, infrastructure, transversal architecture, compliance. But these capabilities must increase the capacity of the responsible teams, not remove responsibility for the result from them.

The expected benefits are:

- faster feedback;
- better understanding of real usage;
- reduction of transfers;
- clearer ownership;
- learning after incident;
- more direct arbitration between speed, quality and debt.

The tradeoff is cognitive load. Asking a team to own everything without a platform, support, or clear boundaries can become unrealistic. End-to-end accountability must therefore be supported by tools, standards, platforms and a reasonable definition of the scope.

The principle can be formulated as follows:

> The more a team is responsible for a result, the more it must have access to the feedback, means of action and decision limits necessary to improve it.

Possible mechanisms include the “you build it, you run it” model when appropriate, SLOs, stable product teams, internal platforms, proportionate constraints, incident reviews and results-oriented indicators.

## 2.15 Correspondence table between problems and principles

The preceding principles are not independent. They address multiple issues simultaneously and reinforce each other.

| Fundamental problem | Mainly associated principles | Desired effect |
|---|---|---|
| Structural complexity | Reduction of dependencies, scalable architecture, minimal standardization | Reduce coupling and impact radius of changes |
| Coordination complexity | Explicit alignment, flow visibility, proportional cadence, dependency reduction | Make necessary coordination visible and reduce avoidable coordination |
| Decision complexity | Explicit alignment, WIP limitation, decision at the right level | Clarifying trade-offs and protecting capacity |
| Operational complexity | Fast feedback, built-in quality, end-to-end accountability | Shorten validation loops and reduce delivery risk |
| Cognitive and social complexity | Autonomy with boundaries, organizational learning, clear ownership | Distribute knowledge without creating excessive ambiguity |

This table shows that the principles do not form a list of independent best practices. They constitute a system.

For example, autonomy without scalable architecture will remain limited. The visibility of the flow without limitation of the WIP will mainly produce an observation of congestion. Integrated quality without end-to-end accountability risks becoming an external control function. Cadence without learning capacity will become a ritual.

## 2.16 Tensions between principles

Universal principles do not eliminate tensions; they allow them to be managed explicitly.

| Voltage | Design Question |
|---|---|
| Alignment vs autonomy | What choices must be common, and what choices can remain local? |
| Standardization vs adaptation | Where does consistency reduce overall cost, and where does it create rigidity? |
| Rapid feedback vs governance | What controls can be automated or moved sooner? |
| Cadence vs continuous flow | Which topics require periodic synchronization, and which can advance continuously? |
| Reducing dependencies vs. pooling | Which capabilities should be shared, and which should be brought closer to the teams? |
| End-to-end accountability vs. cognitive load | How much scope can a team really have? |
| Limiting WIP vs. political pressure | How can we make explicit what will not be done now? |

These tensions explain why no framework can be mechanically correct for all contexts. Each framework encodes particular responses to these tensions. Useful analysis involves understanding these responses and then deciding whether they are appropriate for the system being studied.

## 2.17 Implication for the analysis of frameworks

Scaling frameworks can now be analyzed as assemblages of principles, mechanisms, ceremonies, roles and vocabulary.

The same principle can appear in different forms:

- alignment can take the form of OKRs, periodic planning, portfolio strategy or product reviews;
- the reduction of dependencies can take the form of domains, platforms, component teams, APIs or architectural redesign;
- flow visibility can take the form of Kanban, delivery metrics, portfolio reviews or planning tools;
- integrated quality can take the form of CI/CD, engineering standards, DevSecOps or release criteria;
- learning can take the form of retrospectives, postmortems, system reviews or organizational experiments.

This reading avoids asking: “Which framework should we adopt?” Rather, it leads us to ask:

1. What problems do we really have?
2. What principles are necessary to deal with them?
3. What mechanisms apply these principles with the least possible cost?
4. What framework elements are useful, superfluous or poorly suited?
5. What risks appear if we remove a mechanism without an alternative?

This logic will be used in the following chapters to analyze existing frameworks, then to reconstruct a minimal organization from first principles.

## 2.18 Summary

Universal principles of large-scale software coordination are not recipes. They are general responses to systemic constraints.

The most important are:

- make the alignment explicit;
- give autonomy within clear boundaries;
- reduce dependencies before managing them;
- make the actual workflow visible;
- limit work in progress;
- shorten feedback loops;
- integrate quality into the work system;
- synchronize with a proportionate cadence;
- place decisions at the right level;
- learn and adjust the organizational system;
- standardize the minimum necessary;
- evolve the architecture to reduce the coordination cost;
- clarify end-to-end responsibility.

These principles make it possible to judge practices without depending on their vocabulary. A ceremony is useful if it applies a necessary principle to a real problem. A role is useful if it reduces a coordination cost or improves a decision. A standard is useful if it reduces risk or speeds up flow. A metric is useful if it improves collective action.

The central consequence is the following:

> A large-scale organization should not seek to conform to a framework, but to make the principles it needs explicit, then choose the simplest mechanisms capable of bringing them to life.

## Initial sources to explore further

- Brooks, Frederick P. *The Mythical Man-Month: Essays on Software Engineering*. Addison-Wesley, 1975.
- Conway, Melvin E. "How Do Committees Invent?" *Datamation*, 1968.
- Parnas, David L. "On the Criteria To Be Used in Decomposing Systems into Modules." *Communications of the ACM*, 1972.
- Simon, Herbert A. *The Sciences of the Artificial*. MIT Press, 1969.
- Mintzberg, Henry. *Structure in Fives*. Prentice-Hall, 1983.
- Goldratt, Eliyahu M. *The Goal*. North River Press, 1984.
- Reinertsen, Donald G. *The Principles of Product Development Flow*. Celeritas, 2009.
- Forsgren, Nicole; Humble, Jez; Kim, Gene. *Accelerate: The Science of Lean Software and DevOps*. ITRevolution, 2018.
-DORA. *Accelerate State of DevOps Reports*. Google Cloud / DORA research program.
- Skelton, Matthew; Pais, Manuel. *Team Topologies*. ITRevolution, 2019.
-Kersten, Mik. *Project to Product*. ITRevolution, 2018.
- Senge, Peter. *The Fifth Discipline*. Doubleday, 1990.
