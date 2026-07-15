<!-- source-hash: sha256:e47528b3789630d584d3c0271b91583e2e1993e93fdea9e6f61c9fa608c16247 -->

# 5. Market Trends 2025-2026

## Research question

What are large organizations actually doing in 2025-2026 to organize software development on a large scale?

## Intent of the chapter

The previous chapters have distinguished the fundamental coordination problems, the generic principles and the available frameworks. Chapter 4 then broke down SAFe to separate useful mechanisms from their vocabulary and ceremonies. This chapter changes focus: it no longer seeks to know what a framework prescribes, but what the market seems to do.

This distinction is important. An organization can declare that it uses SAFe while greatly simplifying it. Another may reject SAFe while retaining similar mechanisms: multi-team planning, explicit portfolio, periodic synchronization, coordination roles, architecture governance. A third may no longer talk about agility at scale, but invest heavily in internal platforms, DevOps practices, flow metrics, product teams and AI assistants. In fact, these trajectories can respond to the same problems.

So the question is not:

> Which framework is winning the market?

It becomes:

> What mechanisms do large organizations retain, simplify, replace or automate when seeking to coordinate several hundred or thousands of people around software products?

## 5.1 Limits of evidence and methodological caution

The software organization market is difficult to observe directly. The available data is fragmentary, often biased, and rarely comparable.

The sources that can be used are divided into five categories.

First, market surveys provide broad signals, but they rely on voluntary respondents, variable definitions and sometimes interested sponsors. Digital.ai's State of Agile, DORA reports, Stack Overflow surveys or publisher reports are useful for detecting trends, but not for proving the effectiveness of an organizational model.

Second, research reports like DORA are more robust on certain links between practices, performance and developer experience. However, they remain observational studies: they indicate correlations and plausible models, not universal recipes.

Thirdly, public feedback from companies is valuable for understanding the concrete mechanisms. But they are selective: organizations are more likely to publish successful transformations than failures, and they sometimes attribute the results to a visible program when the causes are multiple.

Fourth, the positions taken by consultants, firms and publishers signal the dominant market terms: platform engineering, product operating model, AI-assisted delivery, value streams, DevEx, outcome-based planning. These terms should be treated as indicators of demand and language, not as evidence.

Fifth, the official documentation of frameworks and providers shows their evolution. For example, the fact that SAFe is promoting an “AI-Native SAFe” in early access in 2026 shows that the framework seeks to absorb the AI ​​wave, but this does not prove that companies are adopting it or that the model is effective.

| Source Type | What it allows us to say | What it does not allow to say |
|---|---|---|
| Market surveys | Stated trends, dominant vocabulary, perceived priorities | Causal effectiveness of a framework |
| DORA and empirical research | Plausible relationships between practices, performance and experience | Complete organizational model to copy |
| Public feedback | Concrete mechanisms, conditions for success, trajectories | Market representativeness |
| Supplier documentation | Intention, evolution of an offer, commercial vocabulary | Independent evidence of impact |
| Engineering Blogs | Actual practices in certain contexts | Generalization to any large organization |

The methodological conclusion is as follows: the 2025-2026 trends must be read as converging directions, not as an exhaustive snapshot of the market.

## 5.2 Short summary: what really changes

Three movements dominate the 2025-2026 period.

The first is the normalization of hybridization. Large organizations rarely use a pure framework. They combine elements of agile, DevOps, product, lean portfolio management, platform engineering, architecture governance and, increasingly, assisted AI. The State of Agile 2023 already reported that large and medium-sized organizations were more likely to use hybrid models than a standardized agile model. The 2025 edition, as reported by ITPro from the 18th State of Agile, indicates that 74% of respondents are using hybrid, blended, or in-house models, and 41% have increased their agile investments over the past two years. [Source: Digital.ai 17th State of Agile](https://digital.ai/resource-center/analyst-reports/state-of-agile-report/); [Source: ITPro on the 18th State of Agile](https://www.itpro.com/software/development/ai-is-transforming-agile-development-practices-as-teams-battle-mounting-delivery-cycle-pressure-and-roi-concerns).

The second is the shift in focus from the framework to the delivery system. The DORA 2024 and 2025 reports do not recommend a large-scale coordination framework; instead, they emphasize the fundamentals: small batch sizes, robust testing, stable priorities, transformational leadership, internal platforms, user orientation, continuous learning, measuring flow and stability. The DORA 2025 report summarizes AI as an amplifier of the organization's existing strengths and weaknesses, reinforcing the idea that tooling does not compensate for a poorly designed delivery system. [Source: DORA 2024](https://dora.dev/research/2024/dora-report/); [Source: DORA 2025](https://dora.dev/research/2025/dora-report/).

The third is the arrival of AI as an organizational subject, not just as an individual tool. Code wizards, dev agents, review tools, test generation, literature searches, and semi-autonomous workflows are changing the friction points. But they do not eliminate coordination problems: they shift them to verification, governance, traceability, security, data quality and the ability to give reliable context to tools. The Stack Overflow 2025 survey shows very high adoption of AI tools in development, but also limited confidence in their results: 84% of respondents use or plan to use AI tools, while more developers say they distrust the accuracy of the output than trust it. [Source: Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/ai).

These three movements converge towards a strong hypothesis:

> The market is not massively replacing SAFe with another large single framework. It fragments frameworks into mechanisms, then recomposes internal models closer to the product, flow, platform and governance of AI.

## 5.3 SAFe: persistence, simplification and repositioning

SAFe remains present in large organizations, particularly where organizational complexity, compliance, vendors, multi-year budgets and multi-domain dependencies make an explicit structure attractive. It would be premature to announce his disappearance. The framework continues to be maintained, marketed, taught and adapted. In 2026, the official website presents Core SAFe as an operational model for the Lean-Agile scale and highlights AI-Native SAFe as an early access extension. [Source: Scaled Agile Framework](https://framework.scaledagile.com/).

But the most interesting market signal isn't just the persistence of SAFe. It’s putting him under pressure.

This pressure comes from several directions.

The first is process fatigue. Organizations that have adopted SAFe extensively often find that vocabulary, roles, and ceremonies can become more visible than the decisions they are intended to facilitate. Recurring criticisms focus on cumbersomeness, the risk of centralization, loss of team autonomy, excess planning and the transformation of agility into compliance.

The second is the requirement for measurable results. In a context of relative economic slowdown, pressure on technology budgets and high expectations around AI, management is asking less "do we comply with a framework?" and more “are we delivering faster, with less risk, on the right subjects?”. This question favors metrics of flow, value, quality, and satisfaction, rather than indicators of ceremonial adoption.

The third is competition from internal models. Many organizations retain some SAFe mechanisms while renaming or simplifying the whole thing. A “train” becomes a product area, a value stream, a tribe, a capability group or a product line. A PI Planning becomes a quarterly or bimonthly planning cycle. A SAFe portfolio becomes an initiative arbitration system. SAFe vocabulary sometimes recedes while the problems it addressed remain addressed.

The fourth is the arrival of AI and platform engineering. If some of the coordination can be reduced by internal platforms, golden paths, better feedback loops, better observability, more reliable testing and development assistants, then some of the ceremonial burden can be called into question. The need for alignment does not disappear, but it can be supported by more continuous mechanisms.

The dominant trajectory is therefore not “SAFe or nothing”. It looks more like this:

| Trajectory | Description | Careful reading |
|---|---|---|
| Continued Adoption | SAFe remains the explicit model, often in regulated or very large environments | Persistent, especially when the organization wants a common language and transformation structure |
| Simplification | Roles, ceremonies and terms are reduced; the central mechanisms are preserved | Common when the framework becomes too visible or too expensive |
| Hybridization | SAFe is combined with Team Topologies, DevOps, platform engineering, product and OKR | Probably the most common trajectory in large, mature organizations |
| Partial adoption | Only certain mechanisms are kept: multi-team planning, portfolio, dependencies, system demos | Often more robust than full nominal adoption |
| Abandonment of vocabulary | The organization withdraws the SAFe label but retains equivalent mechanisms | Not to be confused with a disappearance of coordination needs |

The implication for this paper is straightforward: an organization that wants to exit SAFe must not only remove names. It must identify which problems were effectively managed by the system, then design lighter mechanisms to deal with them.

## 5.4 The product model becomes the dominant language

A strong trend for 2025-2026 is the shift from a project and program language to a product, domain and value stream language.

This movement is not new, but it is becoming more explicit. Large organizations seek to stabilize teams around products, platforms, paths or business areas rather than around temporary projects. The objective is to reduce transaction costs: fewer handoffs, less team reformation, less loss of knowledge, more end-to-end responsibility.

In this language, the central questions become:

- who permanently owns the product or domain?
- what interfaces does this team expose to others?
- what part of the flow can it deliver without waiting for other teams?
- what business or user objectives justify their work?
- what platform investments reduce the cognitive load of teams?
- what decisions should remain at portfolio level?

This evolution converges with the principles of chapter 2: explicit alignment, autonomy with boundaries, reduction of dependencies, rapid feedback, decision at the right level. It also converges with Team Topologies, which proposes to think of the organization as a system of flows between teams, with explicit modes of interaction.

The important point is that the "product model" does not automatically replace coordination mechanisms. It shifts coordination to the boundaries.

An organization can create product teams and keep the same dependencies if the architecture remains tightly coupled, if funding remains per project, if priorities change every two weeks, or if internal platforms do not allow for autonomous delivery. In this case, the vocabulary produced masks a program reality.

The signal of maturity is therefore not the existence of product managers or a product operating model. It is the ability to give teams a stable scope, clear responsibility, explicit interfaces, real delivery capacity and consistent decisions at the portfolio level.

## 5.5 Platform engineering: coordination moved to internal infrastructure

Platform engineering is one of the most structuring trends of the period. It's not just about building a tooling team. This involves transforming part of the organizational coordination into self-service capabilities, technical standards, recommended paths and internal interfaces.

The core idea is simple: if each team must understand infrastructure, security, deployment, observability, compliance, environments, pipelines, and architectural conventions on their own, then local autonomy becomes expensive. Teams spend time solving similar problems, standards diverge, risks increase, and informal dependencies multiply.

A well-designed internal platform reduces this burden. It offers golden paths for common cases, reusable services, templates, pipelines, built-in security controls, observability and a smoother developer experience. It does not remove responsibility from product teams; it gives them a more predictable environment.

The DORA 2024 report gives a nuanced signal: internal platforms can improve individual productivity, team performance, and organizational performance, but they can also degrade stability and throughput if they are poorly implemented or if they reduce developer independence. [Source: DORA 2024](https://dora.dev/research/2024/dora-report/).

This nuance is essential. Platform engineering can become a modern form of centralization if the platform imposes too many constraints, ignores the needs of the teams or becomes an obligatory step for any evolution. Conversely, it can be a powerful accelerator if treated as an internal product, with users, feedback loops, adoption metrics, clear documentation, and an ability to accommodate exceptions.

| Coordination problem | Classic process response | Response by platform |
|---|---|---|
| Divergence of deployment practices | Standards, committees, reviews | Reusable and self-service pipelines |
| Dependencies on infrastructure experts | Tickets and queues | Capabilities exposed by API or portal |
| Late security | Validation gates at end of cycle | Integrated controls in templates and pipelines |
| Inconsistent environments | Manual coordination | Automated provisioning |
| Low observability | Requests to operations teams | Default instrumentation |
| Slow onboarding | Scattered documentation | Templates, examples, reference applications |

The market therefore seems to shift part of the question "how to coordinate teams?" towards “what common capabilities allow teams to coordinate less?”. This is a profound change: the best coordination is sometimes the one that becomes useless because the technical and operational interface is stable.

## 5.6 AI: local acceleration, new global bottlenecks

Assisted AI is the most visible change of 2025-2026. Available data indicates rapid adoption. Stack Overflow 2025 reports that 84% of respondents use or plan to use AI tools in their development process, and 51% of professional developers use them daily. But the same survey shows limited confidence: more developers say they distrust the accuracy of the results than trust them, and usage remains lower for tasks with systemic responsibility such as deployment, monitoring or project planning. [Source: Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/ai).

The DORA 2025 report makes an even more important point for large organizations: AI acts as an amplifier. It increases the strengths of an already disciplined organization, but it also more quickly exposes its weaknesses: poor quality of tests, obsolete documentation, technical debt, unstable priorities, poorly modular architecture, weak governance, saturated review flow. [Source: DORA 2025](https://dora.dev/research/2025/dora-report/).

This observation changes the reading of agility on a scale. AI can accelerate code writing, test generation, database searching, prototype creation, log analysis, ticket preparation, code migration or preliminary review. But if the delivery system cannot absorb this additional flow, the bottleneck shifts.

Typical new bottlenecks are:

- code review and verification;
- quality of tests and relevance of assertions;
- security of the generated code;
- traceability of decisions and changes;
- consistency with the target architecture;
- management of secrets and sensitive data;
- quality of the context given to the agents;
- explosion of unmaintainable local variants;
- saturation of senior maintainers responsible for validation.

Thoughtworks is placing several practices linked to these issues in its Technology Radar in 2026: context engineering, shared instructions for software teams, feedback sensors for code agents, mutation testing and prudent use of DORA metrics to avoid measuring productivity by generated lines of code. [Source: Thoughtworks Technology Radar Vol. 34](https://www.thoughtworks.com/radar/techniques).

Organizational involvement is strong: AI does not reduce the need for technical discipline. It makes it more visible.

In mature organizations, AI pushes towards:

- instructions shared by repository, domain or platform;
- reference applications which serve as a source of truth;
- more reliable automated tests;
- integrated security controls;
- data and confidentiality policies;
- adapted review workflows;
- flow and rework metrics;
- development environments capable of providing the right context to agents.

In less mature organizations, AI risks producing the opposite effect: more code, more changes, more debt, more reviews, more risks. Local productivity may increase while systemic performance declines.

## 5.7 Metrics: return of flow, stability and value

Another 2025-2026 trend is the growing distrust of activity metrics. Large organizations have long measured agility through indicators such as the number of story points, compliance with ceremonies, local velocity, occupancy rate or delivery of planning commitments. These metrics are easy to produce, but they can encourage weak behaviors: inflating estimates, maximizing activity, hiding uncertainty, or optimizing a team to the detriment of the system.

AI makes this problem more acute. If code can be generated faster, measuring code volume becomes even less relevant. Thoughtworks explicitly emphasizes that productivity should not be measured by lines of code generated by AI, but by visible effects in flow and stability. The Technology Radar 2026 reminds us of the usefulness of DORA metrics: lead time, deployment frequency, restoration time, change failure rate, and rework rate. [Source: Thoughtworks Technology Radar Vol. 34](https://www.thoughtworks.com/radar/techniques).

The go signal is therefore the transition from compliance metrics to capacity metrics.

| Management question | Low metric | More useful metric |
|---|---|---|
| Are the teams working? | Occupancy rate, number of tickets | Throughput, WIP, Blocks, Waiting Times |
| Do we deliver faster? | Velocite, completed points | Lead time, deployment frequency |
| Are we delivering better? | Number of releases | Failure rate, rework, incidents, user satisfaction |
| Does AI help? | Lines of code generated, prompts used | Impact on lead time, quality, review, rework, developer satisfaction |
| Is the portfolio under control? | Number of initiatives launched | WIP portfolio, decision time, shutdown rate, realized value |

Caution remains necessary. DORA metrics themselves can be misused if they become a tool for punitive comparison between teams. Their main value is to open a conversation for improvement: where are we waiting? or do we break? or do we work again? what constraints prevent smoother delivery?

The healthiest trend is therefore the use of metrics as systemic diagnostic instruments, not as a ranking table.

## 5.8 Sectors: differentiated trajectories

Trends do not manifest themselves in the same way depending on the sector. The constraints of risk, regulation, architecture, investment cycle and management culture produce distinct trajectories.

### Large software and cloud companies

Large software and cloud players generally favor internal models rather than complete commercial frameworks. They invest in internal platforms, development tools, automation, observability, build systems, review practices and assisted AI. Their main constraints are technical scale, reliability, security, developer productivity and the coherence of very large platforms.

In these environments, the dominant vocabulary is rarely that of SAFe. We are talking more about platforms, services, component owners, reliability, developer productivity, paved roads, architectural standards, technical reviews and internal tooling. Coordination is often encoded in APIs, platforms, standards and review processes rather than a single framework.

AI is progressing quickly, but under human control. Google's public declarations since 2024 on the portion of code generated by AI, then reviewed by engineers, illustrate this direction: the challenge is not only to write faster, but to maintain a system of verification and accountability. [Source: The Verge on Google 2024 declarations](https://www.theverge.com/2024/10/29/24282757/google-new-code-generated-ai-q3-2024).

### Cloud-native and digital-native companies

Digital-native organizations often have less need for a formal scaling framework, especially when they have grown up with modular architectures, stable product teams, and strong DevOps practices. Their main risk is not the absence of ceremonies, but fragmentation: too much local autonomy, duplication of tools, divergence of practices, platform debt, inconsistency of the user experience.

Their typical trajectory is therefore the progressive addition of coordination mechanisms: internal platforms, security standards, decision records architecture, cross-functional reviews, communities of practice, planning by domain, explicit management of dependencies between platforms and products.

They illustrate an important point: even organizations that refuse large frameworks end up creating scaling mechanisms. The difference is that these mechanisms often arise from technical and product constraints rather than from a central transformation program.

### Banking, insurance and financial services

Financial services combine several constraints: regulation, auditability, cybersecurity, application heritage, strong dependencies between domains, traceability needs and competitive pressure on digital technology. This context explains the persistence of explicit coordination models, including SAFe or similar models.

But the trend is not only towards standardization. Banks and insurers are also looking to accelerate delivery through internal platforms, DevSecOps, automation of controls, hybrid cloud, engineering excellence, more explicit portfolio management and product models. In this sector, AI is being adopted cautiously: internal use cases are progressing, but governance, confidentiality, auditing and validation remain decisive.

The most plausible trajectory is hybrid: maintain a strong governance layer, simplify ceremonies where possible, automate repetitive controls, strengthen platforms and measure flow more than agile compliance.

### Industry, automotive, aeronautics and embedded systems

Industrial companies have different constraints: long hardware cycles, system integration, suppliers, security requirements, standards, verification, hardware-software synchronization, product lines and physical dependencies. In these contexts, pure software agility comes up against longer integration horizons.

SAFe and multi-domain coordination models remain attractive because they provide a language for synchronizing software, hardware, vendors, architecture and portfolio. But here again, efficiency depends less on the framework than on the ability to modularize architectures, integrate more frequently, simulate, automatically test and reduce dependencies.

The 2025-2026 movement in the industry resembles a hybridization between systems engineering, DevOps, platforms, product management and large-scale coordination. Software practices are progressing, but they must deal with verification and supply chain constraints that are stronger than in pure software.

### Telecommunications

Telecoms combine critical systems, networks, platforms, operations, suppliers, regulation and strong pressure on costs. They have often adopted large-scale transformation frameworks, but they are also investing in network automation, cloud platforms, observability, application portfolio simplification and product models.

Coordination remains necessary because the technical and operational dependencies are numerous. The trend is therefore not towards total autonomy of teams, but towards autonomy framed by platforms, architectural standards, planning cycles and operational controls.

### Public sector and highly regulated environments

The public sector and highly regulated environments often favor explicit mechanisms: governance, committees, budget, compliance, audit, suppliers, documentation. Large-scale frameworks can be attractive because they provide a visible structure for transformation.

But these environments also particularly suffer when frameworks become organizational theater. If decision rights remain separated from the teams, if suppliers are controlled by rigid contracts, if the architecture imposes strong dependencies and if controls remain late, agile ceremonies do not improve flow.

The most robust trajectory for these sectors is prudent adaptation: retain traceability and necessary controls, but reduce batches, automate proof, clarify boundaries of responsibility, strengthen internal technical capacity and avoid confusing reporting and management.

## 5.9 Typology of observed trajectories

Organizations do not divide neatly between “SAFe”, “Scrum”, “DevOps” and “product”. Rather, they follow trajectories.

| Trajectory | Description | Mechanism conserves | Main risk |
|---|---|---|---|
| Explicit framework | SAFe or equivalent model remains the official language | Alignment, planning, portfolio, coordination roles | Procedural compliance |
| Framework simplifies | The framework is reduced to a few useful mechanisms | Synchronization, dependencies, objectives, arbitration | Losing necessary controls without replacing them |
| Internal product model | The organization structures teams around products/domains | Sustainable ownership, objectives, value streams | Product in name only, financing always by project |
| Platform-led | Coordination is reduced by internal platforms and self-service | Standards, golden paths, automation, DevEx | Central platform become bottleneck |
| DevOps/flow-led | Management is done by flow, quality, reliability and continuous delivery | CI/CD, metrics, observability, tests | Technical optimization without portfolio prioritization |
| AI-augmented | AI supports writing, review, testing, documentation and analysis | Agents, context, verification, governance | Acceleration of rework and risks |
| Regulated hybrid | Strong governance combined with product, DevSecOps and platform practices | Audit, compliance, portfolio, automation | Persistent heaviness and low autonomy |

This typology shows that mature organizations do not choose a single axis. They combine several trajectories, but with a clear hierarchy. For example, a bank can be regulated hybrid, use certain SAFe mechanisms, build an internal platform, adopt DORA metrics and experiment with AI. A cloud-native business can be “platform-led” and “AI-augmented” without ever using the agile vocabulary at scale.

The relevant choice is therefore not a choice of label. It is a choice of organizational architecture.

## 5.10 What organizations are really giving up

The market does not seem to abandon the problems of scale. He gradually abandons some weak responses.

First abandonment: the belief that a framework is enough. Organizations are more attentive to the technical and organizational conditions that make a framework useful: architecture, testing, CI/CD, stable priorities, decision-making capacity, leadership, platforms, portfolio quality.

Second abandonment: activity measurement as a performance proxy. Story points, local velocity, occupancy rate or the number of lines of code lose credibility, especially with AI. Flow, stability, rework, value, and developer experience metrics become more relevant.

Third abandonment: autonomy without interfaces. Organizations better understand that team autonomy is only productive if boundaries are clear, dependencies reduced, and platforms sufficient. Otherwise, autonomy becomes permanent negotiation.

Fourth abandonment: managing transformation through ceremonies. Ceremonies are only retained when they produce useful decisions, learning, or timing. Organizations seek to reduce meetings that do not change priorities, dependencies, or risks.

Fifth abandonment: AI as a simple individual tool. AI is becoming a system subject: context, verification, governance, security, traceability, cost, data and usage standards.

These abandonments are not uniform. Many organizations remain prisoners of old reflexes. But the direction of the market is visible: less faith in forms, more attention to mechanisms.

## 5.11 Implications for the reconstruction of Chapter 6

To construct a minimal model in the following chapter, four lessons from the market must be taken into account.

First, large organizations retain a need for middle-level alignment. Even when they reject large frameworks, they need a planning horizon, shared objectives, capacity arbitration and visibility on dependencies. Chapter 6 cannot therefore propose purely local autonomy.

Second, reducing dependencies must take precedence over managing them. The market is turning to platforms, product boundaries, interfaces, modular architectures and golden paths because coordination by meeting quickly reaches its limits. The target model must therefore treat the organization and the architecture together.

Third, portfolio governance is essential. Many failures attributed to agile actually come from too much work, unstable priorities or an inability to stop initiatives. A minimal model should include an explicit mechanism for limiting WIP at the portfolio level.

Fourth, AI strengthens the fundamentals. It does not replace testing, quality, architecture, product responsibility or governance. It increases the value of a well-structured system and increases the cost of a poorly structured system.

The reconstruction of chapter 6 must therefore avoid two symmetrical errors:

- rebuild a complete framework under another name;
- believe that a combination of autonomous teams, modern tools and AI is enough to coordinate a large organization.

The minimal model should be more sober: a few mandatory mechanisms, justified by the problems they resolve, and adaptable according to the level of coupling, regulation and technical maturity.

## Chapter conclusion

The 2025-2026 market does not show a simple exit from SAFe to a single successor. It shows decomposition. Organizations retain the problems of scale, but they recompose the answers: product, internal platforms, DevOps, flow metrics, portfolio governance, scalable architecture and assisted AI.

SAFe remains present, especially in very large or regulated environments, but it is often simplified, hybridized or translated into an internal vocabulary. The most mature organizations seem to be looking less for a total framework than for a coherent delivery system.

The decisive point is this: in 2025-2026, large-scale software coordination is won less by the addition of ceremonies than by the structural reduction of the need for coordination. This means clearer team boundaries, useful internal platforms, less coupled architectures, more stable priorities, faster feedback loops, flow metrics, and audit-centric AI governance.

In other words, the market confirms the central intuition of this paper: frameworks are not foundations. The foundations are the problems, principles and mechanisms. Frameworks are just one possible way, sometimes useful and sometimes expensive, of putting them together.
