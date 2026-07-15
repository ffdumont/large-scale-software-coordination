<!-- source-hash: sha256:d49043ffc80a5aac225d78fcfebe135b86cd7a734cc82c0e504fc3b2c87e2648 -->

# Open Questions

This file captures open research questions that should not be prematurely converted into conclusions.

## Coordination and scale

- From how many teams does explicit cross-team planning become more valuable than its coordination cost?
- How can the cost of a dependency be measured objectively?
- What is the relationship between architectural coupling and organizational coordination load?
- Which forms of coordination remain necessary even with excellent CI/CD and modular architecture?

## Framework simplification

- When companies simplify SAFe, which mechanisms do they usually keep?
- Do companies that abandon SAFe abandon periodic planning, or only SAFe-specific vocabulary and roles?
- Which critiques of SAFe are supported by evidence rather than practitioner sentiment?

## Engineering practices

- To what extent can platform engineering reduce coordination overhead?
- Which DORA metrics correlate most strongly with reduced cross-team coordination cost?
- How much organizational structure can be removed when integration is fully automated?

## Market trends

- Are large organizations moving away from named frameworks or only rebranding internal hybrids?
- Are Team Topologies and Product Operating Model practices replacing scaling frameworks, or complementing them?
- How do regulated industries differ from digital-native organizations in their simplification trajectories?

## Target organization

- What is the minimal viable set of coordination mechanisms for several hundred developers?
- Which mechanisms are indispensable only because of current architectural coupling?
- Which mechanisms should be temporary transition scaffolding rather than permanent operating model elements?

## Artificial intelligence and agentic coordination

This section extends a critical reading of the paper through the lens of agent-native development methods (for example BMad-Method), which treat AI not as a tool that speeds up humans but as an actor holding roles across the development lifecycle. The paper takes AI seriously as a risk to govern (mechanism 12) and as an amplifier of existing strengths and weaknesses (chapter 5), but it does not examine it as a possible reconfiguration of the organizational structure. The following questions and leads are deliberately left open; their evidence level is weak (hypothesis, sometimes vendor claim) and they should not be turned into recommendations until validated at the intended scale.

### Open questions

- Does AI change the sizing variable of the problem? Is the framing of "several hundred developers" invariant to AI, or does the problem shift toward "a few dozen humans orchestrating hundreds of agents"?
- How does the ratio between human headcount and shippable output evolve, and which coordination mechanisms does that ratio make indispensable or redundant?
- Do human-agent and agent-agent coordination (orchestration, shared memory across agents) constitute a new coordination layer, distinct from the team-team coordination the paper addresses?
- Is human verification a fixed constraint or a re-industrializable capability? At scale, does the saturation of senior maintainers responsible for validating generated code become the system's limiting factor?
- Is context engineering (shared per-repository instructions, reference applications, specifications carrying the architecture) a coordination-reducing mechanism, on the same footing as the internal platforms and golden paths of chapter 5?
- If an agent-native paradigm is decomposed into mechanisms rather than a brand, which mechanisms survive once vendor-specific vocabulary and ceremonies are removed?

### Rework lead: chapter 3 (framework survey)

- Observation: chapter 3 decomposes a dozen human coordination frameworks but no agent-native development paradigm, even though chapter 5 calls AI the most visible change of 2025-2026.
- Proposal: add a section (3.x) "Agent-assisted development paradigms", treated in the format of the other frameworks — problem addressed, mechanisms, what to keep, what to drop, evidence level.
- Candidate mechanisms to extract: specialization by agent roles; document as source of truth and code as a temporal artifact; context engineering; orchestration and shared memory; human verification in the loop.
- Methodological caution: these methods are not proven at the scale of several hundred developers; present them as candidate mechanisms (hypothesis / vendor claim), not a validated answer, in line with the paper's rule — decompose into mechanisms rather than adopt a brand.

### Rework lead: mechanism 12 (governance of AI-assisted work)

- Observation: mechanism 12 is currently purely defensive — permitted uses, exposable data, required human review, impact metrics. It governs AI without letting it enter the design of the operating model.
- Proposal: broaden the mechanism from "governance" to "governance and context engineering", adding a generative facet alongside the control facet.
- Facet to add: treat context artifacts (shared per-repository instructions, reference applications, specifications and architecture acting as source of truth) as a substrate that reduces the need for coordination, through an explicit parallel with the platforms and golden paths of chapter 5.
- Minimal form to reword: incorporate context standards, a versioned documentary source of truth and a design for verification (sampling, audit, tests as artifacts) rather than the sole requirement of "human review".
- Tension to arbitrate: how far to formalize this facet without reintroducing a branded framework, which the paper rejects on principle.
