import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const root = "C:/dev/large-scale-software-coordination";
const outputDir = path.join(root, "outputs");
const previewDir = path.join(outputDir, "large-scale-coordination-presentation-preview");
const finalPptx = path.join(outputDir, "large-scale-software-coordination-presentation-en.pptx");

const W = 1280;
const H = 720;
const M = 54;
const ink = "#111111";
const muted = "#565656";
const panel = "#EDEDED";
const rule = "#B8BCC4";
const accent = "#FF6B35";
const font = "Helvetica Neue";

function addText(slide, text, x, y, w, h, opts = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position: { left: x, top: y, width: w, height: h },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = {
    fontFace: font,
    fontSize: opts.size ?? 22,
    bold: opts.bold ?? false,
    color: opts.color ?? ink,
    alignment: opts.align ?? "left",
    verticalAlignment: opts.valign ?? "top",
  };
  return shape;
}

function addRule(slide, x, y, w, color = rule, height = 2) {
  slide.shapes.add({
    geometry: "rect",
    position: { left: x, top: y, width: w, height },
    fill: color,
    line: { style: "solid", fill: color, width: 0 },
  });
}

function addPill(slide, label, x, y, w, color = ink) {
  slide.shapes.add({
    geometry: "rect",
    position: { left: x, top: y, width: w, height: 28 },
    fill: color,
    line: { style: "solid", fill: color, width: 0 },
  });
  addText(slide, label, x + 10, y + 5, w - 20, 20, {
    size: 13,
    bold: true,
    color: "#FFFFFF",
  });
}

function addFooter(slide, n) {
  addRule(slide, M, 650, W - 2 * M, rule, 1);
  addText(slide, "Rethinking large-scale software coordination", M, 662, 760, 24, {
    size: 13,
    color: muted,
  });
  addText(slide, String(n).padStart(2, "0"), W - M - 44, 662, 44, 24, {
    size: 13,
    color: muted,
    align: "right",
  });
}

function addTitle(slide, eyebrow, title, subtitle, n) {
  addText(slide, eyebrow.toUpperCase(), M, 40, 520, 28, {
    size: 14,
    bold: true,
    color: muted,
  });
  addText(slide, title, M, 84, 780, 112, { size: 42, bold: true });
  addText(slide, subtitle, M, 206, 770, 70, { size: 20, color: muted });
  addFooter(slide, n);
}

function addBullet(slide, text, x, y, w, index, color = ink) {
  addText(slide, String(index), x, y + 1, 30, 30, { size: 17, bold: true, color: accent });
  addText(slide, text, x + 42, y, w - 42, 52, { size: 20, color });
}

function addChapterSlide(presentation, cfg, n) {
  const slide = presentation.slides.add();
  slide.background.fill = "#FFFFFF";
  addTitle(slide, cfg.chapter, cfg.title, cfg.subtitle, n);
  addPill(slide, cfg.tag, 884, 52, 300, accent);

  const leftX = M;
  const rightX = 770;
  slide.shapes.add({
    geometry: "rect",
    position: { left: rightX, top: 302, width: 410, height: 252 },
    fill: panel,
    line: { style: "solid", fill: panel, width: 0 },
  });

  addText(slide, cfg.claim, leftX, 316, 630, 76, { size: 30, bold: true });
  cfg.points.forEach((point, i) => addBullet(slide, point, leftX, 420 + i * 54, 650, i + 1));

  addText(slide, cfg.rightTitle, rightX + 30, 326, 350, 38, {
    size: 22,
    bold: true,
  });
  cfg.rightItems.forEach((item, i) => {
    addRule(slide, rightX + 30, 382 + i * 44, 36, i === 0 ? accent : ink, 4);
    addText(slide, item, rightX + 78, 372 + i * 44, 282, 36, { size: 18, color: ink });
  });

  slide.speakerNotes.textFrame.setText(cfg.notes);
  slide.speakerNotes.setVisible(true);
  return slide;
}

function addCover(presentation) {
  const slide = presentation.slides.add();
  slide.background.fill = "#FFFFFF";
  addText(slide, "45-MINUTE PRESENTATION", M, 52, 420, 28, {
    size: 14,
    bold: true,
    color: muted,
  });
  addText(
    slide,
    "Rethinking large-scale software coordination",
    M,
    130,
    850,
    190,
    { size: 56, bold: true },
  );
  addText(
    slide,
    "A first-principles reading for simplifying without losing the mechanisms that scale requires.",
    M,
    342,
    760,
    78,
    { size: 24, color: muted },
  );
  slide.shapes.add({
    geometry: "rect",
    position: { left: 914, top: 108, width: 238, height: 434 },
    fill: panel,
    line: { style: "solid", fill: panel, width: 0 },
  });
  ["Problems", "Principles", "Mechanisms", "Target model"].forEach((label, i) => {
    addRule(slide, 954, 176 + i * 76, 88, i === 0 ? accent : ink, 6);
    addText(slide, label, 954, 188 + i * 76, 150, 32, { size: 20, bold: i === 0 });
  });
  addFooter(slide, 1);
  slide.speakerNotes.textFrame.setText(
    "Script, 2 minutes. Open with the core tension: we want to simplify large-scale software organizations, but we cannot remove the problems that their structures were trying to solve. Explain that the presentation follows the paper in eight chapters. The throughline is simple: start from the constraints of scale, identify principles, decompose frameworks, then reconstruct a minimal operating model. Make clear that the goal is not to choose between SAFe and anti-SAFe, but to distinguish useful mechanisms from forms that have become costly.",
  );
  slide.speakerNotes.setVisible(true);
}

const slides = [
  {
    chapter: "Chapter 1",
    title: "Scale turns a team problem into a system problem",
    subtitle: "The starting point is not the method, but the constraints that appear when hundreds of developers work on interdependent systems.",
    tag: "Initial diagnosis",
    claim: "An organization can remove a framework; it cannot remove the coordination problems.",
    points: [
      "Interactions, coupling and uncertainty grow faster than team size.",
      "The five key complexities are structural, coordination, decision, operational, cognitive and social.",
      "The right level of coordination depends on coupling, risk and technical maturity.",
    ],
    rightTitle: "Warning signs",
    rightItems: ["Teams waiting", "Late dependencies", "Overloaded experts", "Repeated escalations"],
    notes:
      "Script, 5 minutes. Start by making the shift in scale tangible: eight people can coordinate through shared context; several hundred people cannot. Emphasize that the problem is not primarily methodological. It is systemic: more actors, more possible relationships, and more local decisions with global effects. Present the five families of complexity as the reading grid for the whole paper. Give two concrete examples: coupled architecture creates meetings; an overloaded portfolio creates dependencies and waiting time. Transition: if the problems are systemic, we need principles before we choose frameworks.",
  },
  {
    chapter: "Chapter 2",
    title: "Universal principles sit underneath the ceremonies",
    subtitle: "A visible practice is useful only when it applies a necessary principle to a real problem.",
    tag: "Principles",
    claim: "The paper separates three levels: problem, principle and mechanism.",
    points: [
      "Create explicit alignment without turning the organization into a centralized execution machine.",
      "Grant autonomy inside clear ownership, architecture and decision boundaries.",
      "Limit WIP, make flow visible, integrate often and keep learning continuously.",
    ],
    rightTitle: "Useful question",
    rightItems: ["What problem do we have?", "Which principle applies?", "Which mechanism costs least?", "What risk if removed?"],
    notes:
      "Script, 5 minutes. Explain that chapter 2 builds the analytical vocabulary. A principle is not a ceremony or a role. For example, limiting work in progress is a principle; a portfolio review or a WIP limit is a mechanism; the name given by a framework is a specific implementation. Walk through the most important principles: explicit alignment, autonomy with boundaries, dependency reduction, flow visibility, fast feedback, built-in quality and decision-making at the right level. Stress the tensions: alignment versus autonomy, standardization versus adaptation, feedback versus governance. Transition: frameworks can now be read as assemblies of these principles.",
  },
  {
    chapter: "Chapter 3",
    title: "Frameworks are mechanism libraries, not total answers",
    subtitle: "SAFe, LeSS, Nexus, Kanban, Team Topologies, Flight Levels and Shape Up do not start from the same diagnosis.",
    tag: "Comparative reading",
    claim: "The right comparison is not which framework is best, but which compromise treats which problem.",
    points: [
      "SAFe makes enterprise coordination explicit, but can institutionalize dependencies.",
      "LeSS and Team Topologies focus more on reducing structural complexity.",
      "Kanban and Flight Levels make flow and capacity visible, but require real arbitration.",
    ],
    rightTitle: "Common patterns",
    rightItems: ["Make visible", "Create cadence", "Define boundaries", "Arbitrate capacity"],
    notes:
      "Script, 5 minutes. Reintroduce frameworks after the principles. Explain that each approach highlights a type of problem: multi-team synchronization for SAFe or Nexus, organizational simplification for LeSS, socio-technical design for Team Topologies, flow for Kanban and Flight Levels. The chapter does not rank frameworks; it decomposes them. Emphasize the adoption anti-patterns: adoption by vocabulary, reporting disguised as transparency, autonomy without decision rights, simplification without a replacement mechanism. Transition: because SAFe is often the heaviest and most debated case, the next chapter decomposes it in more detail.",
  },
  {
    chapter: "Chapter 4",
    title: "SAFe should be judged mechanism by mechanism",
    subtitle: "Its strength is making real problems explicit; its weakness is that this explicitness can turn into overhead.",
    tag: "SAFe decomposition",
    claim: "Keep useful functions, simplify forms and make the vocabulary optional.",
    points: [
      "Keep in some form: alignment, dependencies, portfolio, WIP, quality and decisions.",
      "Adapt: cycle length, dedicated roles, unit size and artifact depth.",
      "Remove: ceremonies without decisions, roles without mandates, redundant reporting and compliance jargon.",
    ],
    rightTitle: "Sorting criterion",
    rightItems: ["Does it create a decision?", "Does it reduce WIP?", "Does it clarify ownership?", "Does it speed feedback?"],
    notes:
      "Script, 5 minutes. Present SAFe as an integrated library of mechanisms. Do not caricature it: it addresses real problems in large organizations, especially alignment, dependencies, portfolio and integration. But it becomes costly when ceremonies replace decisions, when vocabulary becomes a marker of compliance, or when planning manages dependencies without reducing them. Use the keep, adapt, remove grid. The key message: we are not SAFe or anti-SAFe; we are looking for mechanisms that truly reduce coordination cost. Transition: current market signals confirm this decomposition into mechanisms.",
  },
  {
    chapter: "Chapter 5",
    title: "The market is not replacing one framework with another; it is recomposing",
    subtitle: "The 2025-2026 trends point toward hybridization, product thinking, platforms, flow metrics and AI governance.",
    tag: "Trends",
    claim: "Organizations are mostly abandoning the belief that a framework is enough.",
    points: [
      "Hybrid and internal models are becoming normal in large organizations.",
      "Attention is shifting to the delivery system: flow, quality, platforms and stable priorities.",
      "AI accelerates local work but increases the need for verification, traceability and governance.",
    ],
    rightTitle: "What is receding",
    rightItems: ["Total framework", "Activity metrics", "Autonomy without interfaces", "Ceremonies without effect"],
    notes:
      "Script, 5 minutes. Present this chapter as an external reality check. The market does not show a simple disappearance of SAFe or the arrival of a single successor. It shows fragmentation: organizations keep some mechanisms, rename them, and combine them with product, DevOps, platforms and Team Topologies. Bring out the main lesson: performance is measured less by ceremonial adoption than by flow, stability, value and developer experience. Be careful with AI: it does not cancel coordination; it moves bottlenecks toward verification, security, data quality and context. Transition: if the market decomposes, chapter 6 reconstructs.",
  },
  {
    chapter: "Chapter 6",
    title: "Reconstruction starts with one rule: reduce coordination before organizing it",
    subtitle: "The minimal model is not looking for less structure in general, but for a more accurate structure.",
    tag: "Reconstruction",
    claim: "The best coordination mechanism is the one that makes coordination unnecessary.",
    points: [
      "Reduce structural dependencies before planning them better.",
      "Keep a small set of robust mechanisms: stable teams, ownership, limited portfolio, quality and platforms.",
      "Remove forms that no longer produce decisions, feedback or risk reduction.",
    ],
    rightTitle: "Operating system",
    rightItems: ["Direction", "Responsibility", "Coordination", "Technical layer", "Observation"],
    notes:
      "Script, 5 minutes. Explain that the reconstruction reverses the usual logic. Instead of starting by organizing dependencies, it tries to reduce them through boundaries, platforms, standards, automation, architecture and ownership. Only then should the remaining necessary coordination be organized. Present the minimum mechanism matrix: lightweight strategic alignment, portfolio with WIP, proportionate planning, flow visibility, built-in quality, lightweight technical governance, platforms, architecture-organization loop, model improvement and AI governance. Stress that this is not a framework checklist: each mechanism exists because there is a risk if it is absent. Transition: chapter 7 turns this reconstruction into a target organizational architecture.",
  },
  {
    chapter: "Chapter 7",
    title: "The target model is an architecture of decisions and feedback",
    subtitle: "Strategy does not directly order team tasks; it guides the portfolio, domains and decision constraints.",
    tag: "Target organization",
    claim: "A simplified organization keeps the mechanisms that let teams move without asking permission everywhere.",
    points: [
      "Strategy, portfolio, domains and teams form a readable responsibility chain.",
      "Platforms, architecture and quality reduce repetitive human coordination.",
      "Cadences and artifacts stay only when they produce decisions, feedback or risk reduction.",
    ],
    rightTitle: "Viability criteria",
    rightItems: ["Explicit priorities", "Limited WIP", "Clear ownership", "Visible flow"],
    notes:
      "Script, 5 minutes. Describe the target model as a system of decisions and feedback. Level 1: strategic intent, which clarifies outcomes and constraints. Level 2: limited portfolio, which turns strategy into choices and trade-offs. Level 3: product domains or capabilities, which organize responsibility. Level 4: stable teams, which deliver within explicit boundaries. Then cover the transverse layers: internal platforms, lightweight technical governance, built-in quality, flow metrics and model improvement. Emphasize minimal cadences: a meeting without an explicit output should change or disappear. Transition: the conclusion brings everything back to the discipline of simplification.",
  },
  {
    chapter: "Chapter 8",
    title: "Simplifying means removing what no longer solves anything and strengthening what remains necessary",
    subtitle: "The target is not the absence of structure; it is a structure adapted to the organization's real problems.",
    tag: "Conclusion",
    claim: "Success is measured by system performance, not by the disappearance of a framework.",
    points: [
      "Frameworks can help when they make indispensable mechanisms visible.",
      "Durable simplification is socio-technical: architecture, quality and platforms matter as much as rituals.",
      "The model must remain revisable, because a useful structure today can become overhead tomorrow.",
    ],
    rightTitle: "Final message",
    rightItems: ["Align without micromanaging", "Empower without abandoning", "Coordinate without bureaucracy", "Measure without punishing"],
    notes:
      "Script, 6 minutes. Recap the full thread: scale creates systemic problems; principles make them understandable; frameworks assemble mechanisms; SAFe must be decomposed; the market recomposes; the minimal model keeps indispensable functions; the target organization is an architecture of decisions and feedback. Emphasize success criteria: clearer priorities, reduced portfolio WIP, dependencies made visible or reduced, decisions at the right level, more frequent integration, earlier quality detection and remaining ceremonies that actually produce decisions. End with the central phrase: simplification is not the absence of structure; it is the discipline of removing structures that no longer solve anything and strengthening those that still let the system deliver, learn and evolve.",
  },
];

async function writeBlob(file, blob) {
  await fs.writeFile(file, new Uint8Array(await blob.arrayBuffer()));
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  await fs.mkdir(previewDir, { recursive: true });

  const presentation = Presentation.create({
    slideSize: { width: W, height: H },
  });

  addCover(presentation);
  slides.forEach((cfg, i) => addChapterSlide(presentation, cfg, i + 2));

  for (const [index, slide] of presentation.slides.items.entries()) {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    await writeBlob(
      path.join(previewDir, `${stem}.png`),
      await presentation.export({ slide, format: "png", scale: 1 }),
    );
    const layout = await slide.export({ format: "layout" });
    await fs.writeFile(path.join(previewDir, `${stem}.layout.json`), await layout.text());
  }

  await writeBlob(
    path.join(previewDir, "montage.webp"),
    await presentation.export({ format: "webp", montage: true, scale: 1 }),
  );

  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(finalPptx);
  console.log(finalPptx);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
