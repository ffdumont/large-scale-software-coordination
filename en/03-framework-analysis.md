<!-- source-hash: sha256:5db590e7563ec3c419ac0aa1f20b0e3ea89b900a384466e50a4a3e58640bbb05 -->

# 3. Frameworks as possible answers

## Research question

How do existing frameworks and approaches attempt to solve the fundamental problems identified in Chapter 1, and what universal principles from Chapter 2 do they actually implement?

## Intent of the chapter

The previous chapters have deliberately avoided starting from frameworks. This decision was not a rejection of existing methods, but an analytical precaution. On a large scale, the risk is to confuse three levels:

- the problem to be solved;
- the organizational principle which makes it possible to respond to it;
- the particular form proposed by a framework.

This chapter reintroduces frameworks, but as possible answers to known problems. SAFe, LeSS, Nexus, Scrum of Scrums, Kanban, Team Topologies, Flight Levels, FAST Agile, Disciplined Agile, Shape Up or the Spotify Model are not analyzed as doctrines to adopt or reject. They are analyzed as assemblages of mechanisms.

The useful question is therefore not:

> Which framework is the best?

It becomes:

> What problem does each approach make visible, what mechanism does it propose, what cost does it introduce, and in what context does this compromise become acceptable?

This posture is important for two reasons.

First, many criticisms leveled at frameworks focus less on the problem they are trying to solve than on their implementation: ceremonial overload, opaque vocabulary, poorly understood role, tool transformed into a reporting system, mimetic adoption. These criticisms can be legitimate without invalidating the underlying need.

Second, many organizations that "exit a framework" retain, sometimes without naming it, part of its mechanisms: multi-team synchronization, portfolio arbitration, explicit dependency management, engineering standards, communities of practice, flow reviews. The work of simplification then consists of distinguishing what was necessary from what was only inherited.

## 3.1 Analysis method

Each approach is analyzed according to nine dimensions:

1. guiding philosophy;
2. problems mainly addressed;
3. implicit assumptions about the organization;
4. mechanisms used;
5. problems well handled;
6. problems less well addressed;
7. compromises introduced;
8. contexts where the approach tends to work well;
9. contexts where it tends to produce friction.

This grid avoids comparing frameworks on their apparent completeness. A lightweight approach can be very relevant if it addresses the right problem with little cost. A complete approach can be useful in a highly coupled context, but excessive in a context where the teams are already autonomous, the platforms are mature and the flow is well controlled.

The levels of proof must also be distinguished.

| Information Type | Use in this chapter |
|---|---|
| Established fact | Principles from organization theory, modularity, Lean, queuing theory or software engineering |
| Empirical evidence | Results from research or industrial reports, for example DORA or Accelerate |
| Official documentation | Indicates the intent of a framework, but does not prove its effectiveness |
| Feedback | Useful for understanding the conditions for success or failure |
| Practitioner opinion | Useful for identifying controversies, but insufficient alone |
| Supplier claim | To be treated as a hypothesis or description of intention |

## 3.2 Cross-cutting analysis of the approaches

Before examining each framework, it is helpful to categorize them by dominant orientation. This classification is not exclusive: the same approach can cover several dimensions.

| Dominant orientation | Representative approaches | Main problem addressed |
|---|---|---|
| Multi-team synchronization | SAFe, Nexus, Scrum of Scrums | Coordination, dependencies, integration |
| Organizational simplification | LeSS, FAST Agile | Role reduction, learning, product responsibility |
| Flow and arbitrage | Large-Scale Kanban, Flight Levels | WIP, visibility, prioritization, flow governance |
| Socio-technical design | Team Topologies | Team boundaries, cognitive load, organizational architecture |
| Hybrid or contextual model | Disciplined Agile, internal organizational models | Adaptation to context, combination of practices |
| Limited product throughput | Shape Up | Selective engagement, bounded cycles, backlog reduction |
| Organizational culture observed | Spotify Model | Autonomy, communities, cultural alignment |

This table already shows a limit of generic comparisons. LeSS and SAFe do not start from the same diagnosis. Team Topologies is not a planning framework. Kanban does not prescribe a team structure. Shape Up is not intended as a complete operating model for several hundred developers. Flight Levels does not replace a teams architecture, but seeks to connect strategy, coordination and execution through flow.

An organization looking for a “scaling framework” therefore risks asking too broad a question. Rather, it must identify the nature of the deficit:

- strategic alignment deficit;
- excess dependencies;
- lack of visibility of the flow;
- too much work in progress;
- late integration;
- fuzzy ownership;
- governance too slow;
- overly coupled architecture;
- excessive cognitive load;
- absence of cross-team learning mechanism.

Frameworks then become libraries of mechanisms, not total answers.

## 3.3 SAFe

### Guiding philosophy

SAFe provides an explicit model for large-scale coordination, structured around stable units of multiple teams, common cadences, periodic planning, coordination roles, Lean-Agile principles, and portfolio mechanisms.

Its implicit philosophy is that, in a large organization, alignment, visibility, synchronization and arbitration cannot be left to informal interactions. They must be made explicit by a common operational system.

### Primary problems addressed

SAFe aims above all:

- alignment between several teams;
- planning of outbuildings;
- the synchronization of a set of teams working on the same value chain;
- visibility for management;
- portfolio prioritization;
- governance of cross-functional work;
- coordination between product, architecture, development, quality and operation.

It therefore mainly responds to coordination complexity and decision-making complexity. It also touches on operational complexity when it emphasizes frequent integration and integrated quality, but its effectiveness on this point depends heavily on the actual technical maturity of the organization.

### Organizational assumptions

SAFe generally assumes that the organization needs an explicit common model, that multiple teams contribute to shared goals, that not all dependencies can be removed in the short term, and that some tradeoffs need to be made visible at a level above the team.

It also assumes that the organization accepts a certain cost of structure: common vocabulary, coordination roles, periodic ceremonies, planning levels and shared artifacts.

### Mechanisms used

The most important mechanisms are:

- stable multi-team coordination units;
- periodic multi-team planning;
- common objectives with an intermediate horizon;
- explicit identification of dependencies;
- facilitation and coordination roles;
- system and inspection reviews;
- a connection between strategy, portfolio and execution;
- integrated engineering and quality practices, at least by intention.

### Problems addressed well

SAFe is particularly useful when an organization suffers from a lack of a common operating model. In environments where dependencies are many, priorities opaque, and trade-offs scattered, it can provide a structure that makes problems visible.

Its strength is less in being "agile" in the light sense of the term than in offering a common grammar to numerous stakeholders: product, technology, architecture, finance, compliance, management and development teams.

### Problems less well addressed

SAFe does not automatically reduce technical coupling. It can make dependencies visible, but if the organization doesn't change its architecture, team boundaries, or platforms, ceremonies risk becoming a permanent system for managing coupling.

It may also imperfectly address local cognitive load if teams are simultaneously given program objectives, portfolio constraints, cross-functional initiatives, and delivery commitments.

### Compromises introduced

The main compromise is between explicitness and heaviness. SAFe provides visibility, but this visibility comes at a cost. It creates a readable system of coordination, but can also create an incentive for conformity to the model.

The most common risk is not just “too much ceremony”. It is that the organization confuses the presence of ceremonies and resolution of problems. Multi-team planning can reveal dependencies; it does not remove them. A coordination role can streamline arbitration; it does not replace clear ownership boundaries.

### Favorable contexts

SAFe tends to work best when:

- the organization is large and highly interdependent;
- regulatory or budgetary constraints require explicit visibility;
- several teams contribute to common products or platforms;
- management needs a shared operational language;
- the organization agrees to invest in technical discipline, not just governance structure.

### Unfavorable contexts

SAFe tends to produce friction when:

- coupling could be reduced but remains institutionalized;
- adoption becomes mainly terminological;
- coordination roles replace team responsibility;
- reporting tools dominate conversations about real flow;
- the organization is looking for a light, experimental or very autonomous product-oriented model.

## 3.4 LeSS

### Guiding philosophy

LeSS starts from an almost opposite intuition of SAFe: instead of adding a coordination structure as the organization grows, it seeks to retain the principles of Scrum with as few additions as possible. Its philosophy is organizational simplicity, common product responsibility and the reduction of unnecessary coordination mechanisms.

LeSS emphasizes the idea that organizational complexity is often a consequence of existing structures: silos, component teams, fragmented ownership, excessive specialization, queues between functions.

### Primary problems addressed

LeSS mainly deals with:

- product fragmentation;
- local optimization of teams;
- the multiplication of roles and processes;
- transfers between silos;
- loss of overall learning;
- team structures that strengthen coupling.

It therefore responds strongly to cognitive and social complexity, and indirectly to coordination complexity through simplification.

### Organizational assumptions

LeSS assumes that the organization can accept a deeper structural transformation: customer or product oriented teams, common product backlog, reduction of intermediate roles, collective learning, shared responsibility.

This hypothesis is demanding. It implies that the organization is ready to challenge existing structures rather than simply coordinating their interaction.

### Mechanisms used

Typical mechanisms include:

- a common product backlog;
- a Product Owner for a large product;
- several teams working on the same product;
- minimal synchronization events;
- a global retrospective;
- attention to removing unnecessary coordination roles;
- a transformation of team structures towards more product orientation.

### Problems addressed well

LeSS is strong when an organization suffers from self-created complexity: too many roles, too many layers, too much specialization, too many handoffs. It pushes you to ask why an addiction exists instead of just managing it.

It is also consistent with the principle “reduce dependencies before managing them”.

### Problems less well addressed

LeSS can be difficult to apply when the organization must manage strong portfolio constraints, compliance, financing or legacy technical dependencies. Its minimalism may leave a void if arbitration and governance mechanisms are not designed elsewhere.

It also requires a real ability to build teams capable of working on a broad product scope. In a very old, highly regulated or very specialized system, this evolution can be slow.

### Compromises introduced

LeSS reduces the structural cost, but increases the maturity requirement. Fewer roles and fewer layers mean teams, the Product Owner, and the organization must absorb more complexity directly.

The central compromise is therefore between formal simplicity and real capacity. A lean structure can be powerful if teams have the necessary skills, access to decisions, and technical boundaries. Otherwise, it can become a declarative simplification.

### Favorable contexts

LeSS tends to work best when:

- the product can actually be shared by several teams;
- the organization wants to reduce intermediate roles and layers;
- management agrees to modify the structure rather than just adding governance;
- teams can gradually develop transversal skills;
- the technical system allows, or can allow, more integrated product ownership.

### Unfavorable contexts

SS tends to be difficult when:

- portfolio constraints are strong and not addressed elsewhere;
- the organization does not want to call into question its existing structures;
- the teams remain organized around very specialized components;
- the single backlog becomes too large to produce clear decisions;
- external governance functions impose heavy cycles and validations.

## 3.5 Nexus

### Guiding philosophy

Nexus is a relatively lightweight extension of Scrum for coordinating multiple teams working on the same product. Its philosophy is to preserve Scrum while adding an explicit mechanism for integration and dependency resolution.

Unlike SAFe, Nexus does not seek to provide a complete portfolio or business organization model. It focuses on coordinating a limited set of teams around an integrated increment.

### Primary problems addressed

Nexus mainly aims to:

- integration between Scrum teams;
- detection of dependencies;
- the coherence of a common product increment;
- coordination of the work of a limited number of teams;
- reduction of surprises at the end of the sprint.

It therefore mainly responds to the coordination complexity and operational complexity at the level of a product.

### Organizational assumptions

Nexus assumes that Scrum is already a relevant operating basis, that several teams are working on the same product, and that the main problem is at the integration level rather than at the portfolio or strategy level.

### Mechanisms used

Mechanisms include:

- a common product backlog;
- a common objective;
- an integration coordination team or role;
- events adapted to plan, synchronize and inspect the integrated increment;
- explicit attention to dependencies and the definition of "Done".

### Problems addressed well

Nexus is useful for making visible integration issues that isolated Scrum teams can hide. He reminds us that a locally successful sprint does not have much value if the global increment is not integrated.

### Problems less well addressed

Nexus does not cover team boundary design, portfolio governance, architecture transformation, or multi-domain product strategy in depth. It may therefore be insufficient when the problems go beyond the integration of a product.

### Compromises introduced

The tradeoff of Nexus is its limited scope. This limitation is a strength when avoiding heaviness, but a weakness when an organization expects a lightweight framework to solve broader systemic problems.

### Favorable contexts

Nexus tends to be a good fit when:

- three to nine teams work on the same product;
- Scrum is already well understood;
- the main problem is integration;
- portfolio issues are addressed elsewhere;
- the organization wants to avoid a heavier scaling model.

### Unfavorable contexts

Nexus tends to be insufficient when:

- the organization has many interdependent products;
- portfolio prioritization is the dominant problem;
- teams are organized around strongly coupled components;
- technical integration remains late despite coordination events.

## 3.6 Scrum of Scrums

### Guiding philosophy

Scrum of Scrums is less a complete framework than a coordination mechanism. Its idea is simple: when several Scrum teams work on a common scope, representatives synchronize to share dependencies, obstacles and risks.

Its philosophy is pragmatic: add a point of inter-team coordination without redesigning the entire organization.

### Primary problems addressed

Scrum of Scrums aims:

- visibility of dependencies;
- resolving inter-team blockages;
- operational synchronization;
- the circulation of information between teams.

It mainly responds to the complexity of coordination, but in a superficial way if the dependencies are structural.

### Organizational assumptions

The approach assumes that teams are already relatively autonomous and that dependencies can be managed through regular exchange. It works less well if the dependencies are numerous, permanent or linked to portfolio decisions.

### Mechanisms used

The central mechanism is a periodic meeting between team representatives, focused on:

- which can block other teams;
- what blocks the represented team;
- future dependencies;
- the necessary decisions or escalations.

### Problems addressed well

Scrum of Scrums is useful as a lightweight visibility mechanism. It can reduce surprises and speed up the resolution of simple blockages.

### Problems less well addressed

It does not change the root causes of dependencies. It also does not provide a robust mechanism to prioritize, arbitrate, or reduce WIP at scale.

### Compromises introduced

The compromise is between lightness and depth. The mechanism costs little, but its transformation capacity is limited.

### Favorable contexts

Scrum of Scrums is suitable when:

- few teams need to synchronize;
- outbuildings are limited;
- the teams already have good autonomy;
- the organization is looking for a simple operational mechanism.

### Unfavorable contexts

It becomes insufficient when:

- the same dependencies reappear at each meeting;
- representatives do not have the authority to decide;
- the problems relate to the portfolio, architecture or ownership;
- the meeting becomes a status report rather than a release mechanism.

## 3.7 Large-scale Kanban

### Guiding philosophy

Kanban starts from the actual workflow. Its philosophy is not to prescribe a team structure or cadence, but to make the work visible, limit the work in progress, measure the deadline and gradually improve the system.

On a large scale, this approach is particularly important because it addresses an often underestimated problem: system saturation with too many simultaneous initiatives.

### Primary problems addressed

Kanban processes:

- visibility of the flow;
- excessive work in progress;
- queues;
- bottlenecks;
- classes of service;
- entry and exit policies;
- continuous improvement by observation of the system.

It responds strongly to coordination complexity and decision-making complexity.

### Organizational assumptions

Kanban assumes that the real system can be observed, that actors agree to make queues visible, and that decisions can be improved by explicit policies.

It does not necessarily imply an immediate transformation of roles or structures.

### Mechanisms used

Mechanisms include:

- flow visualization;
- WIP limits;
- explicit policies;
- measurement of delay and flow;
- management of classes of service;
- flow reviews;
- continuous improvement of bottlenecks.

### Problems addressed well

Kanban is powerful in revealing that the problem is not lack of activity, but too much work committed. It also gives a neutral language to discuss capacity, expectation and prioritization without depending on specific agile vocabulary.

### Problems less well addressed

Kanban alone does not tell you how to structure teams, how to design architecture, how to define a product strategy or how to organize end-to-end ownership. It can make a problem visible without providing the entire organizational solution.

### Compromises introduced

The trade-off is between incremental evolution and structural transformation. Kanban allows you to start with the existing system, but this strength can become a limitation if the organization simply optimizes a fundamentally poorly designed system.

### Favorable contexts

Kanban is particularly suitable when:

- the work is varied and difficult to pace uniformly;
- the system is saturated by too many requests;
- dependencies and queues are invisible;
- the organization wants to improve without immediately changing its entire structure;
- support functions, platforms, security or architecture create bottlenecks.

### Unfavorable contexts

Kanban may be insufficient when:

- the organization refuses to actually limit WIP;
- tables become reporting tools without decision policies;
- teams do not have the power to act on bottlenecks;
- the main problems are architectural or non-arbitrated strategy problems.

## 3.8 Team Topologies

### Guiding philosophy

Team Topologies proposes to design the software organization based on the flow of change, the cognitive load of the teams and the modes of interaction between teams. Its philosophy is socio-technical: architecture, teams and communication paths must be designed together.

The approach distinguishes in particular between flow-aligned teams, platform teams, complex subsystem teams and enablement teams. It also emphasizes explicit modes of interaction: collaboration, X-as-a-Service and facilitation.

### Primary problems addressed

Team Topologies deals with:

- cognitive complexity;
- team boundaries;
- organizational coupling;
- platform design;
- modes of interaction;
- reducing the need for permanent coordination;
- alignment between architecture and organization.

It therefore mainly responds to structural and cognitive complexity, with a direct effect on coordination complexity.

### Organizational assumptions

The approach assumes that the organization can act on its team boundaries and its architecture. It also assumes that cognitive load is a real design constraint, not just an individual skill problem.

### Mechanisms used

Mechanisms include:

- typology of teams;
- value flow mapping;
- design of internal platforms;
- explanation of modes of interaction;
- limitation of cognitive load;
- joint evolution of the organization and the architecture.

### Problems addressed well

Team Topologies is particularly strong at treating recurring dependencies as signals of poor organizational or technical design. It provides precise language to distinguish a team that delivers value, a team that provides a platform, a team that facilitates a transition, and a team that holds complex expertise.

It directly applies the principle "reduce dependencies before managing them".

### Problems less well addressed

Team Topologies does not provide a comprehensive portfolio, periodic planning or investment governance model. It therefore does not replace the decision mechanisms necessary in a large company.

### Compromises introduced

The central tradeoff is that the approach requires ongoing organizational design capability. Redrawing team boundaries, building a platform, or reducing cognitive load does not produce immediate results. It is a structural investment.

### Favorable contexts

Team Topologies is suitable when:

- recurring dependencies slow down the flow;
- architecture and organization are misaligned;
- teams experience excessive cognitive load;
- the organization wants to build useful internal platforms;
- management agrees to treat the organization as an evolving system.

### Unfavorable contexts

The approach can be difficult when:

- the organization is mainly looking for a planning ceremony;
- team structures are politically fixed;
- platforms are built as silos of control rather than internal products;
- portfolio prioritizations are not addressed elsewhere.

## 3.9 Flight Levels

### Guiding philosophy

Flight Levels seeks to connect multiple levels of flow: strategy, inter-team coordination and operational execution. His philosophy is that many organizations have locally agile teams but remain sluggish overall because the coordination level and the strategic level are not designed as flow systems.

The approach does not prescribe a team method. She observes how work flows between levels and seeks to create the appropriate feedback loops.

### Primary problems addressed

Flight Levels covers:

- the disconnect between strategy and execution;
- portfolio visibility;
- multi-team coordination;
- WIP at several levels;
- feedback loops between levels;
- prioritization decisions.

It responds strongly to decision complexity and coordination complexity.

### Organizational assumptions

The approach assumes that performance problems are not just within teams. It also assumes that the organization agrees to make the flow visible at the portfolio level and inter-team dependencies.

### Mechanisms used

Mechanisms include:

- visualization of work at several levels;
- WIP limits adapted to the levels;
- review rates;
- explicit prioritization policies;
- connection between strategy, coordination and execution;
- continuous improvement of the flow system.

### Problems addressed well

Flight Levels is useful for organizations that have already invested heavily in team agility but are seeing little overall improvement. It moves the conversation to the levels where capacity, priority, and dependency decisions are actually made.

### Problems less well addressed

Like Kanban, Flight Levels does not provide a detailed model of team architecture or engineering practices on its own. It must be combined with socio-technical design and integrated quality mechanisms.

### Compromises introduced

The trade-off is that Flight Levels makes visible decisions that are often politically uncomfortable: too many initiatives, conflicting priorities, scarce capacity, implicit trade-offs. Its effectiveness depends on the willingness to make these decisions, not just visualize the flow.

### Favorable contexts

Flight Levels is suitable when:

- the teams are active but the overall system delivers slowly;
- the strategy does not clearly translate into workflow;
- the portfolio is saturated;
- dependencies between domains are strong;
- the organization wants to improve without imposing a single method on the teams.

### Unfavorable contexts

The approach becomes limited when:

- managers do not want to limit WIP;
- portfolio visualizations become reporting;
- technical coupling problems are not addressed;
- the organization seeks a complete prescription of roles and ceremonies.

## 3.10 FAST Agile

### Guiding philosophy

FAST Agile offers a coordination approach through self-organization on a larger scale, with short cycles, a shared vision and dynamic reallocation of people around the work. Its philosophy is to reduce the rigidity of fixed teams when the problem requires more fluid collaboration.

### Primary problems addressed

FAST Agile addresses:

- frequent alignment around a common intention;
- the dynamic formation of working groups;
- reduction of queues between specialized teams;
- rapid adaptation to new information;
- collective learning.

It mainly responds to coordination complexity and cognitive and social complexity.

### Organizational assumptions

The approach assumes a strong culture of self-organization, high transparency, an ability to work with more fluid team boundaries, and a sufficient level of trust for people to reallocate to important work.

### Mechanisms used

Mechanisms include:

- a shared vision;
- short planning and inspection cycles;
- temporary groups around work;
- regular collective coordination;
- attention to the fluidity of the system rather than the strict stability of the teams.

### Problems addressed well

FAST Agile can be powerful when dependencies come from overly rigid team boundaries and the work requires intense collaboration across skillsets.

### Problems less well addressed

It may be less suitable when team stability, long-term ownership, service operation or deep domain knowledge are critical. Fluency can also increase cognitive load if not mastered.

### Compromises introduced

The compromise is between fluidity and stability. Too rigid an organization creates queues; an organization that is too fluid can weaken ownership, continuity and end-to-end accountability.

### Favorable contexts

FAST Agile is suitable when:

- work changes quickly;
- interdisciplinary collaboration is central;
- existing team boundaries create expectations;
- the culture of self-organization is strong;
- the organization can maintain a clear vision despite fluidity.

### Unfavorable contexts

The approach is risky when:

- the services require stable operational ownership;
- business areas are complex and require continuity;
- the organization lacks trust or transparency;
- people are reallocated so often that local learning becomes dispersed.

## 3.11 Disciplined Agile

### Guiding philosophy

Disciplined Agile presents itself as a toolbox of contextual choices rather than as a single method. Its philosophy is that organizations must choose their way of working according to the context: life cycle, criticality, distribution, regulation, culture, technical maturity.

### Primary problems addressed

Disciplined Agile addresses:

- adaptation to the context;
- the combination of agile, Lean and traditional practices;
- life cycle choices;
- organizational governance;
- integration with business functions.

Above all, it responds to contextual complexity and the need not to apply a single model to all environments.

### Organizational assumptions

The approach assumes that the organization is capable of making informed choices. A contextual toolkit is useful if decision-makers understand the trade-offs; it becomes confusing if used as a catalog of practices without design logic.

### Mechanisms used

Mechanisms include:

- process objectives;
- practice options;
- alternative life cycles;
- adaptable governance;
- contextual recommendations.

### Problems addressed well

Disciplined Agile helps avoid dogmatism. It recognizes that not all teams are in the same context and that the same method may be unsuitable depending on the risk, regulations, distribution or nature of the product.

### Problems less well addressed

Its richness can become an additional complexity. If the organization does not have the capacity for discernment, it can accumulate practices without simplifying the system.

### Compromises introduced

The tradeoff is between flexibility and readability. The more options there are, the more clear governance is required to avoid inconsistency.

### Favorable contexts

Disciplined Agile is suitable when:

- the organization contains very different contexts;
- a single method would be artificial;
- teams need guided choices;
- governance accepts explicit local variations.

### Unfavorable contexts

The approach can produce confusion when:

- the organization seeks strong operational simplicity;
- the choices are not linked to explicit problems;
- each team selects practices without overall consistency;
- the toolbox becomes a compliance benchmark.

## 3.12 Shape Up

### Guiding philosophy

Shape Up offers a product development approach centered on the prior definition of the problem, the framing of a bet, limited work cycles and a strong limitation of the work involved. Its philosophy is to reduce ongoing backlog management and protect teams through selective commitments.

Shape Up is not an enterprise scaling framework in the traditional sense. Its interest in this paper comes mainly from its mechanisms for limiting WIP, upstream framing and bounded cycles.

### Primary problems addressed

Shape Up addresses:

- excess backlog;
- unclear commitments;
- starting too many topics;
- perimeter drift;
- the difficulty in giving autonomy to a team during a cycle;
- the separation between problem framing and execution.

It mainly responds to decision-making complexity and limitation of work in progress.

### Organizational assumptions

The approach assumes that the organization can select few bets at a time, agree not to plan everything in detail, and give teams decision space during a cycle.

### Mechanisms used

Mechanisms include:

- upstream framing of the problem;
- appetite for time rather than detailed estimation;
- bounded cycles;
- cooldown period;
- explicit decision of what enters or not in the cycle;
- autonomy of execution within the defined framework.

### Problems addressed well

Shape Up is strong in combating backlog saturation and commitment drift. It forces us to decide what will not be done now.

### Problems less well addressed

It does not directly address dependencies between dozens of teams, complex portfolio governance, shared architecture, or compliance. It must therefore be adapted with caution in a large organization.

### Compromises introduced

The tradeoff is between focus and coordination. Autonomous cycles work well if dependencies are limited. If the teams are strongly coupled, the autonomy of the cycle can be disrupted by external needs.

### Favorable contexts

Shape Up is suitable when:

- the product can be divided into relatively autonomous bets;
- the organization suffers from a backlog that is too large;
- teams need space to solve the problem;
- leadership agrees to limit simultaneous commitments.

### Unfavorable contexts

The approach is less suitable when:

- there are numerous dependencies between teams;
- delivery must be synchronized with heavy external constraints;
- the organization needs explicit multi-domain planning;
- limited cycles mask risks of late integration.

## 3.13 Spotify Model

### Guiding philosophy

The Spotify Model should be treated with caution. It is not a prescriptive framework designed to be adopted as is, but a set of practices observed and popularized from a particular context. Its vocabulary, notably squads, tribes, chapters and guilds, has often been taken up without the cultural and technical conditions which gave it meaning.

Its apparent philosophy is aligned autonomy: giving a lot of responsibility to teams while maintaining coherence through mission, culture, communities and certain coordination structures.

### Primary problems addressed

The model addresses:

- team autonomy;
- transversal coherence of skills;
- communities of practice;
- cultural alignment;
- light coordination between close teams.

It responds mainly to cognitive and social complexity, and partially to coordination complexity.

### Organizational assumptions

The model assumes a culture of trust, strong team competence, an architecture allowing autonomy, and an ability to maintain consistency without heavy control.

These assumptions are precisely what makes mechanical copies fragile.

### Mechanisms used

Mechanisms include:

- autonomous mission-oriented teams;
- groupings of close teams;
- communities of skills;
- transversal guilds;
- strong cultural leadership;
- high transparency.

### Problems addressed well

The model highlights the importance of culture, trust and communities of practice. He reminds us that coordination does not only involve formal ceremonies.

### Problems less well addressed

As a replicated model, it poorly handles contexts where architecture, governance, compliance or portfolio impose strong constraints. Copying names without reproducing systemic conditions often creates an organization that is attractive on paper but unclear in practice.

### Compromises introduced

The trade-off is between autonomy and consistency. Without explicit arbitration and architecture mechanisms, autonomy can produce fragmentation.

### Favorable contexts

Ideas associated with the Spotify Model can be useful when:

- the organization seeks to strengthen autonomy;
- the communities of competence are weak;
- the learning culture is central;
- the architecture already allows a certain independence of the teams.

### Unfavorable contexts

The model becomes risky when:

- it is adopted as a vocabulary rather than as a system;
- the teams do not have real decision-making rights;
- technical dependencies remain strong;
- portfolio and arbitrage mechanisms are absent.

## 3.14 Hybrid organizational models

### Guiding philosophy

Most large organizations don't operate strictly with a single framework. They combine elements of several approaches: periodic planning inspired by SAFe, product teams inspired by agility or Team Topologies, Lean portfolio, DevOps practices, communities of practice, Kanban for platforms, governance specific to regulations.

These hybrid models are often criticized because they seem impure. But hybridization is not necessarily a problem. It only becomes problematic when it juxtaposes contradictory mechanisms without a guiding principle.

### Primary problems addressed

Hybrid models attempt to simultaneously address:

- business constraints;
- the diversity of products and technologies;
- the coexistence of historical and modern systems;
- compliance requirements;
- differences in maturity between fields;
- the need for governance and autonomy.

### Organizational assumptions

A hybrid model assumes that the organization has internal design capability. She can't just buy a method; it must understand its own problems and maintain the consistency of its operating model.

### Mechanisms used

Mechanisms may include:

- explicit portfolio;
- stable product teams;
- internal platforms;
- periodic synchronization only where dependencies require it;
- Kanban for request flows;
- communities of practice;
- minimum engineering standards;
- proportionate risk governance;
- debt and architecture reviews.

### Problems addressed well

A good hybrid model can be more realistic than a pure framework. It makes it possible to adapt the coordination intensity to the real coupling, to differentiate the contexts and to preserve the useful mechanisms without importing an entire vocabulary.

### Problems less well addressed

The risk is inconsistency. Without explicit principles, the hybrid model becomes an accumulation of practices: a little SAFe, a little Scrum, a little Kanban, a little OKR, a little DevOps, without clear logic.

### Compromises introduced

The tradeoff is between adaptation and complexity. The more the model is adapted locally, the more it is necessary to clarify what remains common: interfaces, quality criteria, portfolio governance, flow metrics, decision rights.

### Favorable contexts

Hybrid models are suitable when:

- the organization is too diverse for a single method;
- regulatory constraints vary depending on the area;
- some products are mature and others exploratory;
- legacy systems coexist with modern platforms;
- the organization has an internal capacity for organizational design.

### Unfavorable contexts

They become fragile when:

- practices are chosen by local preference rather than by problem;
- the vocabulary differs without a common translation;
- the decision mechanisms are not explicit;
- hybridization serves to avoid difficult trade-offs.

## 3.15 Comparative matrix

The following matrix does not rank frameworks. It indicates which mechanisms each approach typically puts forward to address fundamental problems.

| Fundamental problem | Associated principle | Typical mechanisms | SAFe | LeSS | Nexus | Scrum of Scrums | Kanban | Team Topologies | Flight Levels |
|---|---|---|---|---|---|---|---|---|---|
| Dependencies | Reduce before managing | Domains, interfaces, platforms, dependency visualization | Explicitly manages dependencies; discount depends on design | Seeks to reduce through simplification and product teams | Makes dependencies visible around a product | Makes blockages visible | Visualize dependencies and files | Treat dependencies as a design problem | Visualize dependencies between levels |
| Alignment | Explicit intent | Objectives, strategy, portfolio, planning | Strong periodic alignment mechanism | Alignment by common product | Alignment by backlog and product objective | Limited operational alignment | Alignment by flow policies | Alignment by flow and team boundaries | Strategy-Execution Alignment |
| Integration | Quick Feedback | CI/CD, integrated increment, testing, release | Explicit intention, depends on technical maturity | Integration by shared product | Strong focus on integrated increment | Not very prescriptive | Measure flow, not technical practices | Indirect by architecture and platforms | Indirect by feedback loops |
| WIP | Limit the work involved | Limits, arbitrage, entry policies | Portfolio and planning can help, but risk overload | Common backlog can help arbitrate | Limited to product scope | Little processed | Central principle | Indirect by cognitive load and flow | Central multi-level principle |
| Ownership | Clear responsibility | Product teams, domains, service ownership | Defines roles and levels, risk of dilution if too complex | Collective product responsibility | Joint product responsibility | Depends on context | Make files visible, not ownership | Central principle | Clarifies decision levels |
| Architecture | Socio-technical alignment | Modularity, platforms, ADR, standards | Includes architecture, but can remain governance | Encourages structural simplification | Not very prescriptive | Little processed | Reveals flow constraints | Central principle | Reveals impact on flow |
| Decision | Decide at the right level | Decision rights, escalation, portfolio | Explicit governance mechanisms | Decision close to the product, fewer layers | Limited product decision | Operational escalation | Explicit policies | Border decisions | Decisions by flow levels |
| Learning | Adjust the system | Retrospectives, reviews, metrics | Present but compliance risk | Strong focus on systemic improvement | Increment Inspection | Limited learning | Central continuous improvement | Continuous evolution of topologies | Improved flow system |

## 3.16 Common patterns behind frameworks

Despite their differences, the approaches converge on several recurring mechanisms.

### 3.16.1 Making visible what is invisible

All useful frameworks make something visible: dependencies, flows, priorities, risks, ownership, capacity, cognitive load, decisions, architecture. This visibility is a condition for collective action.

But visibility is not enough. An organization can make dependencies visible without ever reducing them, make WIP visible without ever saying no, or make risks visible without arbitrating.

### 3.16.2 Create a decision cadence

Most approaches introduce some form of cadence: sprint, cycle, periodic planning, flow review, portfolio review, multi-team synchronization. Cadence reduces the cost of coordination because actors know when topics will be discussed.

But a useful cadence must modify decisions. A cadence that only produces status becomes a burden.

### 3.16.3 Define boundaries

Frameworks all attempt, directly or indirectly, to clarify boundaries: team, product, domain, flow, platform, portfolio, tribe, train, flight level. These boundaries are essential because they reduce ambiguity.

But a poorly placed border creates dependencies. The question is not just to name the organizational units, but to check whether they correspond to the flow of change.

### 3.16.4 Arbitrate capacity

On a large scale, any serious framework ends up encountering the same limit: capacity is finite. Portfolio mechanisms, WIP limits, bounded cycles, common backlogs or service policies are different ways of forcing arbitrage.

When a framework fails, it's often because the organization maintains the illusion that it can start anything. The framework then becomes an overload monitoring system.

### 3.16.5 Integrate earlier

Approaches differ on vocabulary, but all successful organizations must reduce the risk of late onboarding. The mechanisms can be technical, organizational or both: CI/CD, integrated increments, feature flags, platforms, quality standards, end-to-end ownership.

A framework that improves planning without improving integration can provide a sense of control while leaving operational risk intact.

## 3.17 Adoption anti-patterns

Framework analysis should also identify typical failures. These anti-patterns are not specific to a framework; they can appear in almost any model.

### 3.17.1 Adoption by vocabulary

The organization adopts names, roles and ceremonies without modifying the actual mechanisms of decision, ownership, quality or flow. The change is visible in flowcharts and tools, but little in delivery time or learning capacity.

### 3.17.2 Coordination that institutionalizes coupling

Dependencies are better managed, but never reduced. Meetings become permanent because the architecture and team boundaries remain unchanged.

### 3.17.3 Reporting disguised as transparency

Flow artifacts primarily serve to reassure management rather than improve decisions. Teams then learn to produce an acceptable status rather than exposing the real blockages.

### 3.17.4 Autonomy without decision-making rights

Teams are called autonomous, but cannot decide on priorities, local architecture, quality or production. Autonomy becomes cultural in discourse, but not operational.

### 3.17.5 Excessive standardization

The organization imposes a unique way of working in different contexts. Consistency apparently increases, but the system loses its ability to adapt.

### 3.17.6 Simplification without replacement mechanism

The organization removes ceremonies or roles associated with a framework, but does not replace the function they provided. Dependencies, trade-offs or risks then reappear in the form of escalations, informal meetings or late decisions.

## 3.18 How to choose mechanisms without choosing a framework

An organization that wants to remain independent of frameworks can use a five-step approach.

### 3.18.1 Identify dominant problems

The starting point should be the taxonomy from Chapter 1:

- structural complexity;
- complexity of coordination;
- decision-making complexity;
- operational complexity;
- cognitive and social complexity.

We must avoid treating a structural problem with a ceremony, a decision problem with a tool, or an architectural problem with a coordination role.

### 3.18.2 Select the necessary principles

Each problem must be linked to the principles of Chapter 2. For example:

- recurring dependencies: reduction of coupling, scalable architecture, clear ownership;
- portfolio overload: WIP limitation, explicit arbitrage, flow visibility;
- late integration: rapid feedback, integrated quality, end-to-end accountability;
- slow decisions: decision as close as possible to information, escalation as close as possible to the conflict;
- team fragmentation: explicit alignment, autonomy with boundaries, learning communities.

### 3.18.3 Choose the simplest mechanisms

Once the principle has been identified, several mechanisms are possible. The question becomes: what is the least expensive mechanism that actually addresses the problem?

A one-time dependency may require lightweight synchronization. An ongoing dependency may require a team boundary overhaul. An overloaded portfolio may require a WIP limit, not just better planning. Late integration may require technical improvement, not just a release review.

### 3.18.4 Check side effects

Each mechanism introduces a cost:

- meeting cost;
- role cost;
- reporting cost;
- standardization cost;
- cost of organizational change;
- cognitive load cost;
- political cost of arbitration.

A mechanism is only justified if it reduces a greater cost than it adds.

### 3.18.5 Inspect and remove

Any coordination mechanism must be inspectable and suppressable. If a dependency review no longer reveals significant dependencies, it should be reduced or removed. If a community no longer changes practices, it needs to be rethought. If periodic planning only produces reporting, its actual function needs to be re-examined.

Maturity is not about stabilizing a model forever. It consists of adjusting the coordination system when problems change.

## 3.19 Summary

Scaling frameworks are neither universal solutions nor simple management fads. They are partial answers to real problems: dependencies, alignment, integration, arbitration, visibility, ownership, learning and quality.

SAFe makes enterprise coordination explicit, but can become cumbersome if it institutionalizes dependencies. LeSS seeks structural simplicity, but requires profound transformation and strong maturity. Nexus and Scrum of Scrums provide lightweight mechanisms for product coordination, but do not address portfolio or architecture. Kanban and Flight Levels make flow and WIP visible, but require real trade-offs. Team Topologies attacks the problem at the socio-technical root, but must be complemented by decision and portfolio mechanisms. Shape Up provides focus discipline, but is not a complete large-scale operating model. The Spotify Model reminds us of the importance of autonomy and culture, but becomes dangerous when copied as vocabulary.

The central conclusion is this:

> A framework is useful when it provides a mechanism proportionate to a real problem. It becomes costly when it replaces diagnosis with compliance.

The rest of the paper can therefore analyze SAFe more finely, not to promote or reject it, but to break it down into principles, mechanisms, ceremonies, roles and vocabulary. This decomposition will then make it possible to decide what should be kept, simplified, replaced or deleted in a target organization.

## Initial sources to explore further

- Scaled Agile, Inc. *SAFe Framework documentation*.
- Schwaber, Ken. *Nexus Guide*.
- Larman, Craig; Vodde, Bas. *Large-Scale Scrum: More with LeSS*.
- Anderson, David J. *Kanban: Successful Evolutionary Change for Your Technology Business*.
-Klaus Leopold. *Rethinking Agile: Why Agile Teams Have Nothing To Do With Business Agility*; Flight Levels materials.
- Skelton, Matthew; Pais, Manuel. *Team Topologies*. ITRevolution, 2019.
- Kniberg, Henrik; Ivarsson, Anders. *Agile Scaling @ Spotify*.
-Basecamp. *Shape Up: Stop Running in Circles and Ship Work that Matters*.
-Project Management Institute. *Disciplined Agile materials*.
- Reinertsen, Donald G. *The Principles of Product Development Flow*. Celeritas, 2009.
- Forsgren, Nicole; Humble, Jez; Kim, Gene. *Accelerate*. ITRevolution, 2018.
