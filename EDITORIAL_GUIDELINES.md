# Editorial Guidelines

## Languages and synchronization

The paper is published in French and English. French is the canonical editorial source; source titles and quotations may remain in their original language.

Every semantic change to a French document must be reflected in its English counterpart in the same pull request. After both versions have been reviewed, refresh the chapter fingerprint with `python scripts/update_translation_hashes.py <chapter-id>` and run `python scripts/check_translations.py`.

The fingerprint is a drift detector, not evidence of translation quality. Refreshing it confirms that a human has reviewed the semantic synchronization. When a concept has no exact equivalent, preserve the intended meaning and document the terminology choice rather than translating word for word.

## Writing style

The paper should be precise, analytical, and readable by senior technology, product, and transformation leaders.

Avoid:

- vendor vocabulary when a neutral term exists;
- framework-first explanations;
- unsupported claims;
- generic statements such as "best practice" or "modern organizations".

Prefer:

- problem-first reasoning;
- neutral mechanisms;
- explicit trade-offs;
- evidence-based wording.

## Evidence labels

Use the following labels when useful:

| Label | Meaning |
|---|---|
| Established fact | Strongly supported by research or widely accepted theory |
| Empirical evidence | Supported by studies, measurements, or survey data |
| Experience report | Supported by public company case studies or credible practitioner reports |
| Hypothesis | Reasoned interpretation requiring validation |
| Controversy | Area where evidence or expert opinion is divided |
| Vendor claim | Claim primarily coming from a vendor, method owner, or consultant |

## Preferred wording

Instead of:

> SAFe solves alignment.

Write:

> SAFe provides several mechanisms intended to address alignment across teams, including periodic planning, shared objectives, and explicit coordination roles.

Instead of:

> Teams should use Team Topologies.

Write:

> Team Topologies offers one implementation of a broader principle: reducing coordination costs by aligning team boundaries with the architecture and the flow of change.

## Neutral vocabulary

| Framework-specific term | Neutral term |
|---|---|
| ART | Stable team-of-teams coordination unit |
| PI | Intermediate planning horizon |
| PI Planning | Periodic multi-team planning |
| Solution Train | Multi-domain coordination layer |
| Scrum Master | Team facilitation and flow improvement role |
| RTE | Cross-team coordination facilitation role |
| Lean Portfolio Management | Explicit investment and portfolio arbitration mechanism |

## Referencing rules

Important claims should be linked to one of:

- research literature;
- empirical reports;
- public experience reports;
- official framework documentation;
- clearly identified practitioner opinion.

When evidence is weak or indirect, say so.

## Mermaid diagrams

Use Mermaid for conceptual diagrams so that GitHub can render them directly.
