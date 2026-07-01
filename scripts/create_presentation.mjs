import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const root = "C:/dev/large-scale-software-coordination";
const outputDir = path.join(root, "outputs");
const previewDir = path.join(outputDir, "coordination-presentation-preview");
const finalPptx = path.join(outputDir, "coordination-logicielle-grande-echelle.pptx");

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
  addText(slide, "Repenser la coordination logicielle a grande echelle", M, 662, 760, 24, {
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
  addText(slide, "PRESENTATION DE 45 MINUTES", M, 52, 420, 28, {
    size: 14,
    bold: true,
    color: muted,
  });
  addText(
    slide,
    "Repenser la coordination logicielle a grande echelle",
    M,
    130,
    850,
    190,
    { size: 56, bold: true },
  );
  addText(
    slide,
    "Une lecture par premiers principes pour simplifier sans perdre les mecanismes indispensables.",
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
  ["Problemes", "Principes", "Mecanismes", "Modele cible"].forEach((label, i) => {
    addRule(slide, 954, 176 + i * 76, 88, i === 0 ? accent : ink, 6);
    addText(slide, label, 954, 188 + i * 76, 150, 32, { size: 20, bold: i === 0 });
  });
  addFooter(slide, 1);
  slide.speakerNotes.textFrame.setText(
    "Script, 2 minutes. Ouvrir sur la tension centrale : on veut simplifier les organisations logicielles a grande echelle, mais on ne peut pas supprimer les problemes que les structures traitaient. Preciser que la presentation suit le papier en huit chapitres. Le fil rouge est simple : partir des contraintes de l'echelle, identifier les principes, decomposer les frameworks, puis reconstruire un modele minimal. Annoncer que l'objectif n'est pas de choisir entre SAFe et anti-SAFe, mais de distinguer les mecanismes utiles des formes devenues couteuses.",
  );
  slide.speakerNotes.setVisible(true);
}

const slides = [
  {
    chapter: "Chapitre 1",
    title: "L'echelle transforme un probleme d'equipe en probleme de systeme",
    subtitle: "Le point de depart n'est pas la methode, mais les contraintes qui apparaissent quand plusieurs centaines de developpeurs travaillent sur des systemes interdépendants.",
    tag: "Diagnostic initial",
    claim: "Une organisation peut retirer un framework ; elle ne peut pas retirer les problemes de coordination.",
    points: [
      "Les interactions, le couplage et l'incertitude croissent plus vite que la taille des equipes.",
      "Les cinq complexites clefs sont structurelle, coordination, decisionnelle, operationnelle, cognitive et sociale.",
      "Le bon niveau de coordination depend du couplage, des risques et de la maturite technique.",
    ],
    rightTitle: "Signaux faibles",
    rightItems: ["Attentes entre equipes", "Dependances tardives", "Experts satures", "Escalades repetees"],
    notes:
      "Script, 5 minutes. Commencer par faire sentir le changement d'echelle : huit personnes peuvent se coordonner par contexte partage ; plusieurs centaines ne le peuvent plus. Insister sur le fait que le probleme n'est pas d'abord methodologique. Il est systemique : plus d'acteurs, plus de relations possibles, plus de decisions locales qui ont des effets globaux. Presenter les cinq familles de complexite comme la grille de lecture de tout le papier. Donner deux exemples concrets : une architecture couplee cree des reunions ; un portefeuille surcharge cree des dependances et de l'attente. Transition : si les problemes sont systemiques, il faut chercher des principes avant de choisir des frameworks.",
  },
  {
    chapter: "Chapitre 2",
    title: "Les principes universels se situent sous les ceremonies",
    subtitle: "Une pratique visible n'est utile que si elle met en oeuvre un principe necessaire face a un probleme reel.",
    tag: "Principes",
    claim: "Le papier separe trois niveaux : probleme, principe, mecanisme.",
    points: [
      "Aligner explicitement sans transformer l'organisation en machine d'execution centrale.",
      "Donner de l'autonomie dans des frontieres d'ownership, d'architecture et de decision.",
      "Limiter le WIP, rendre le flux visible, integrer souvent et apprendre continuellement.",
    ],
    rightTitle: "Question utile",
    rightItems: ["Quel probleme avons-nous ?", "Quel principe repond au probleme ?", "Quel mecanisme coute le moins ?", "Quel risque si on retire ?"],
    notes:
      "Script, 5 minutes. Expliquer que le chapitre 2 construit le vocabulaire analytique. Un principe n'est ni une ceremonie ni un role. Par exemple, limiter le travail en cours est un principe ; une revue de portefeuille ou une limite WIP sont des mecanismes ; le nom donne par un framework est une implementation. Parcourir les principes les plus importants : alignement explicite, autonomie avec frontieres, reduction des dependances, visibilite du flux, feedback rapide, qualite integree, decision au bon niveau. Insister sur les tensions : alignement contre autonomie, standardisation contre adaptation, feedback contre gouvernance. Transition : les frameworks peuvent maintenant etre lus comme des assemblages de ces principes.",
  },
  {
    chapter: "Chapitre 3",
    title: "Les frameworks sont des bibliotheques de mecanismes, pas des reponses totales",
    subtitle: "SAFe, LeSS, Nexus, Kanban, Team Topologies, Flight Levels ou Shape Up ne partent pas du meme diagnostic.",
    tag: "Lecture comparative",
    claim: "La bonne comparaison n'est pas 'quel framework est meilleur ?', mais 'quel compromis traite quel probleme ?'.",
    points: [
      "SAFe explicite la coordination d'entreprise, mais peut institutionnaliser les dependances.",
      "LeSS et Team Topologies cherchent davantage a reduire la complexite structurelle.",
      "Kanban et Flight Levels rendent le flux et la capacite visibles, mais exigent de vrais arbitrages.",
    ],
    rightTitle: "Patterns communs",
    rightItems: ["Rendre visible", "Creer une cadence", "Definir des frontieres", "Arbitrer la capacite"],
    notes:
      "Script, 5 minutes. Reintroduire les frameworks apres les principes. Expliquer que chaque approche met le projecteur sur un type de probleme : synchronisation multi-equipes pour SAFe ou Nexus, simplification organisationnelle pour LeSS, design socio-technique pour Team Topologies, flux pour Kanban et Flight Levels. Le chapitre ne classe pas les frameworks ; il les decompose. Mettre l'accent sur les anti-patterns : adoption par vocabulaire, reporting deguise en transparence, autonomie sans droits de decision, simplification sans mecanisme de remplacement. Transition : comme SAFe est souvent le cas le plus lourd et le plus discute, le chapitre suivant le decompose plus finement.",
  },
  {
    chapter: "Chapitre 4",
    title: "SAFe doit etre juge mecanisme par mecanisme",
    subtitle: "Sa force est de rendre explicites des problemes reels ; sa faiblesse est de pouvoir transformer cette explicitation en lourdeur.",
    tag: "Decomposition SAFe",
    claim: "Il faut conserver les fonctions utiles, simplifier les formes, et rendre le vocabulaire optionnel.",
    points: [
      "A garder sous une forme ou une autre : alignement, dependances, portefeuille, WIP, qualite, decisions.",
      "A adapter : duree des cycles, roles dedies, taille des unites, profondeur des artefacts.",
      "A supprimer : ceremonie sans decision, role sans mandat, reporting redondant, jargon de conformite.",
    ],
    rightTitle: "Critere de tri",
    rightItems: ["Produit-il une decision ?", "Reduit-il le WIP ?", "Clarifie-t-il l'ownership ?", "Accelere-t-il le feedback ?"],
    notes:
      "Script, 5 minutes. Presenter SAFe comme une bibliotheque integree de mecanismes. Ne pas le caricaturer : il traite de vrais problemes de grandes organisations, notamment l'alignement, les dependances, le portefeuille et l'integration. Mais il devient couteux lorsque les ceremonies remplacent les decisions, lorsque le vocabulaire devient un marqueur de conformite, ou lorsque la planification gere les dependances sans les reduire. Utiliser la grille garder, adapter, supprimer. Le message cle : nous ne sommes pas SAFe ou anti-SAFe ; nous cherchons les mecanismes qui reduisent vraiment le cout de coordination. Transition : le marche actuel confirme cette decomposition en mecanismes.",
  },
  {
    chapter: "Chapitre 5",
    title: "Le marche ne remplace pas un framework par un autre, il recompose",
    subtitle: "Les tendances 2025-2026 pointent vers l'hybridation, le produit, les plateformes, les metriques de flux et la gouvernance de l'IA.",
    tag: "Tendances",
    claim: "Les organisations abandonnent surtout la croyance qu'un framework suffit.",
    points: [
      "Les modeles hybrides et internes deviennent la norme dans les grandes organisations.",
      "L'attention se deplace vers le systeme de livraison : flux, qualite, plateformes, priorites stables.",
      "L'IA accelere le travail local mais renforce les besoins de verification, tracabilite et gouvernance.",
    ],
    rightTitle: "Ce qui recule",
    rightItems: ["Framework total", "Mesure d'activite", "Autonomie sans interfaces", "Ceremonies sans effet"],
    notes:
      "Script, 5 minutes. Presenter ce chapitre comme un test de realite externe. Le marche ne montre pas une disparition simple de SAFe ni l'arrivee d'un successeur unique. Il montre une fragmentation : des organisations conservent certains mecanismes, les renomment, les combinent avec produit, DevOps, plateformes et Team Topologies. Faire ressortir l'enseignement principal : la performance se mesure moins par l'adoption ceremonielle que par le flux, la stabilite, la valeur et l'experience developpeur. Pour l'IA, etre prudent : elle n'annule pas la coordination, elle deplace les goulots vers la verification, la securite, la qualite des donnees et le contexte. Transition : si le marche decompose, le chapitre 6 reconstruit.",
  },
  {
    chapter: "Chapitre 6",
    title: "La reconstruction part d'une regle : reduire la coordination avant de l'organiser",
    subtitle: "Le modele minimal ne cherche pas moins de structure en general, mais une structure plus juste.",
    tag: "Reconstruction",
    claim: "Le meilleur mecanisme de coordination est celui qui rend une coordination inutile.",
    points: [
      "Reduire les dependances structurelles avant de mieux les planifier.",
      "Garder un petit nombre de mecanismes robustes : equipes stables, ownership, portefeuille limite, qualite, plateformes.",
      "Retirer les formes qui ne produisent plus ni decision, ni feedback, ni reduction de risque.",
    ],
    rightTitle: "Operating system",
    rightItems: ["Direction", "Responsabilite", "Coordination", "Technique", "Observation"],
    notes:
      "Script, 5 minutes. Expliquer que la reconstruction inverse la logique habituelle. Au lieu de commencer par organiser les dependances, on cherche a les reduire par frontieres, plateformes, standards, automatisation, architecture et ownership. Ensuite seulement, on coordonne ce qui reste necessaire. Presenter la matrice minimale des mecanismes : alignement strategique leger, portefeuille avec WIP, planification proportionnee, visibility du flux, qualite integree, gouvernance technique legere, plateformes, boucle architecture-organisation, amelioration du modele et gouvernance IA. Insister sur le fait que ce n'est pas une checklist de framework : chaque mecanisme existe parce qu'un risque existe s'il est absent. Transition : le chapitre 7 transforme cette reconstruction en architecture organisationnelle cible.",
  },
  {
    chapter: "Chapitre 7",
    title: "Le modele cible est une architecture de decisions et de feedbacks",
    subtitle: "La strategie n'ordonne pas directement les taches ; elle oriente le portefeuille, les domaines et les contraintes de decision.",
    tag: "Organisation cible",
    claim: "Une organisation simplifiee conserve les mecanismes qui permettent aux equipes d'avancer sans demander permission partout.",
    points: [
      "Strategie, portefeuille, domaines et equipes forment une chaine de responsabilite lisible.",
      "Plateformes, architecture et qualite reduisent les coordinations humaines repetitives.",
      "Les cadences et artefacts restent uniquement s'ils produisent decisions, feedback ou reduction de risque.",
    ],
    rightTitle: "Criteres de viabilite",
    rightItems: ["Priorites explicites", "WIP limite", "Ownership clair", "Flux visible"],
    notes:
      "Script, 5 minutes. Decrire le modele cible comme un systeme de decision et de feedback. Niveau 1 : intention strategique, qui clarifie les resultats et contraintes. Niveau 2 : portefeuille limite, qui traduit la strategie en choix et renoncements. Niveau 3 : domaines produit ou capacites, qui organisent la responsabilite. Niveau 4 : equipes stables, qui livrent dans des frontieres explicites. Puis les couches transverses : plateformes internes, gouvernance technique legere, qualite integree, metriques de flux et amelioration du modele. Insister sur les cadences minimales : une reunion sans sortie explicite doit changer ou disparaitre. Transition : la conclusion ramene tout a la discipline de simplification.",
  },
  {
    chapter: "Chapitre 8",
    title: "Simplifier, c'est retirer ce qui ne resout plus rien et renforcer ce qui reste necessaire",
    subtitle: "La cible n'est pas l'absence de structure ; c'est une structure adaptee aux problemes reels de l'organisation.",
    tag: "Conclusion",
    claim: "Le succes se mesure a la performance du systeme, pas a la disparition d'un framework.",
    points: [
      "Les frameworks peuvent aider lorsqu'ils rendent visibles les mecanismes indispensables.",
      "La simplification durable est socio-technique : architecture, qualite et plateformes comptent autant que les rituels.",
      "Le modele doit rester revisable, car une structure utile aujourd'hui peut devenir une charge demain.",
    ],
    rightTitle: "Message final",
    rightItems: ["Aligner sans micro-manager", "Autonomiser sans abandonner", "Coordonner sans bureaucratiser", "Mesurer sans punir"],
    notes:
      "Script, 6 minutes. Reprendre le fil complet : l'echelle cree des problemes systemiques ; les principes permettent de les comprendre ; les frameworks assemblent des mecanismes ; SAFe doit etre decompose ; le marche recompose ; le modele minimal garde les fonctions indispensables ; l'organisation cible est une architecture de decisions et de feedbacks. Insister sur les criteres de succes : priorites plus claires, WIP portefeuille reduit, dependances visibles ou reduites, decisions au bon niveau, integration plus frequente, qualite detectee plus tot, ceremonies restantes decisives. Terminer avec la phrase centrale : la simplification n'est pas l'absence de structure, c'est la discipline de retirer les structures qui ne resolvent plus rien et de renforcer celles qui permettent encore au systeme de livrer, apprendre et evoluer.",
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
