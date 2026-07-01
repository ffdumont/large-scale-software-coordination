# 1. Fundamental Problems of Large-Scale Software Development

## Research question

What problems emerge naturally when a software organization grows from a few teams to several hundred developers?

## Intent

This section must avoid starting from frameworks. It should identify the structural problems that any large software organization must solve, regardless of its chosen methodology.

## Proposed taxonomy

### 1. Structural complexity

- architecture;
- coupling;
- shared platforms;
- data dependencies;
- integration points.

### 2. Coordination complexity

- team-to-team dependencies;
- sequencing of work;
- synchronization of releases;
- cross-team decision-making.

### 3. Decision complexity

- strategic alignment;
- prioritization;
- trade-offs;
- portfolio governance;
- allocation of scarce capacity.

### 4. Operational complexity

- continuous integration;
- quality;
- deployment;
- incident management;
- risk control.

### 5. Cognitive and social complexity

- knowledge distribution;
- communication paths;
- ownership;
- autonomy;
- local optimization.

## Standard analysis template

Each problem should be analyzed using the same structure:

1. Why does the problem appear?
2. At what scale does it become critical?
3. What happens if it is not addressed?
4. What tensions does it create with autonomy, speed, innovation, quality, and predictability?
5. How can the organization detect that the problem is becoming systemic?

## First-principles thesis

The fundamental driver of large-scale software complexity is not team size alone, but the interaction between technical coupling, organizational coupling, decision latency, and feedback delay.
