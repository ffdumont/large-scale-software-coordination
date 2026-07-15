# Questions ouvertes

Ce fichier recense les questions de recherche ouvertes qui ne doivent pas être transformées prématurément en conclusions.

## Coordination et échelle

- À partir de combien d’équipes la planification explicite inter-équipes devient-elle plus précieuse que son coût de coordination ?
- Comment mesurer objectivement le coût d'une dépendance ?
- Quelle est la relation entre le couplage architectural et la charge de coordination organisationnelle ?
- Quelles formes de coordination restent nécessaires même avec une excellente chaîne CI/CD et une architecture modulaire ?

## Simplification des frameworks

- Lorsque les entreprises simplifient SAFe, quels mécanismes conservent-elles généralement ?
- Les entreprises qui abandonnent SAFe abandonnent-elles la planification périodique, ou uniquement le vocabulaire et les rôles spécifiques à SAFe ?
- Quelles critiques de SAFe sont étayées par des preuves plutôt que par la seule perception des praticiens ?

## Pratiques d'ingénierie

- Dans quelle mesure l'ingénierie de plateforme peut-elle réduire les coûts de coordination ?
- Quelles métriques DORA sont le plus fortement corrélées à une réduction des coûts de coordination entre les équipes ?
- Dans quelle mesure la structure organisationnelle peut-elle être supprimée lorsque l'intégration est entièrement automatisée ?

## Tendances du marché

- Les grandes organisations s'éloignent-elles des frameworks nommés ou se contentent-elles de renommer les hybrides internes ?
- Les pratiques issues de Team Topologies et du Product Operating Model remplacent-elles les frameworks de mise à l'échelle ou les complètent-elles ?
- En quoi les industries réglementées diffèrent-elles des organisations natives du numérique dans leurs trajectoires de simplification ?

## Organisation cible

- Quel est l'ensemble minimal viable de mécanismes de coordination pour plusieurs centaines de développeurs ?
- Quels mécanismes sont indispensables uniquement en raison du couplage architectural actuel ?
- Quels mécanismes devraient servir de soutien transitoire plutôt que devenir des éléments permanents du modèle opérationnel ?

## Intelligence artificielle et coordination agentique

Cette rubrique prolonge une lecture critique du papier selon l'angle des méthodes de développement agent-natives (par exemple BMad-Method), qui traitent l'IA non comme un outil accélérant des humains, mais comme un acteur tenant des rôles du cycle de vie. Le papier prend l'IA au sérieux comme risque à gouverner (mécanisme 12) et comme amplificateur des forces et faiblesses existantes (chapitre 5), mais il ne l'examine pas comme une reconfiguration possible de la structure organisationnelle. Les questions et pistes suivantes restent délibérément ouvertes ; leur niveau de preuve est faible (hypothèse, parfois revendication d'éditeur) et elles ne doivent pas être converties en recommandations tant qu'elles ne sont pas validées à l'échelle visée.

### Questions ouvertes

- L'IA modifie-t-elle la variable de dimensionnement du problème ? Le cadrage « plusieurs centaines de développeurs » est-il invariant à l'IA, ou le problème bascule-t-il vers « quelques dizaines d'humains orchestrant des centaines d'agents » ?
- Comment évolue le ratio entre effectif humain et volume de production livrable, et quels mécanismes de coordination ce ratio rend-il indispensables ou superflus ?
- La coordination humain-agent et agent-agent (orchestration, mémoire partagée entre agents) constitue-t-elle une couche de coordination nouvelle, distincte de la coordination équipe-équipe traitée dans le papier ?
- La vérification humaine est-elle une contrainte fixe ou une capacité ré-industrialisable ? À l'échelle, la saturation des mainteneurs seniors chargés de valider le code généré devient-elle le facteur limitant du système ?
- L'ingénierie du contexte (instructions partagées par dépôt, applications de référence, spécifications portant l'architecture) est-elle un mécanisme réducteur de coordination, au même titre que les plateformes internes et les golden paths du chapitre 5 ?
- Si l'on décompose un paradigme agent-natif en mécanismes plutôt qu'en marque, quels mécanismes survivent une fois retirés le vocabulaire et les cérémonies propres à l'éditeur ?

### Piste de refonte : chapitre 3 (survey des frameworks)

- Constat : le chapitre 3 décompose une douzaine de frameworks de coordination humaine, mais aucun paradigme de développement agent-natif, alors que le chapitre 5 qualifie l'IA de changement le plus visible de 2025-2026.
- Proposition : ajouter une section (3.x) « Paradigmes de développement assistés par agents », traitée dans le format des autres frameworks — problème traité, mécanismes, à conserver, à écarter, niveau de preuve.
- Mécanismes candidats à extraire : spécialisation par rôles-agents ; document comme source de vérité et code comme artefact temporel ; ingénierie du contexte ; orchestration et mémoire partagée ; vérification humaine dans la boucle.
- Précaution méthodologique : ces méthodes ne sont pas éprouvées à l'échelle de plusieurs centaines de développeurs ; les présenter comme mécanismes candidats (hypothèse / revendication d'éditeur), pas comme réponse validée, conformément à la règle du papier — décomposer en mécanismes plutôt qu'adopter une marque.

### Piste de refonte : mécanisme 12 (gouvernance de l'IA assistée)

- Constat : le mécanisme 12 est aujourd'hui purement défensif — usages autorisés, données exposables, revue humaine requise, métriques d'impact. Il gouverne l'IA sans la faire entrer dans la conception du modèle opératoire.
- Proposition : élargir le mécanisme de « gouvernance » à « gouvernance et ingénierie du contexte », en ajoutant un volet génératif à côté du volet de contrôle.
- Volet à ajouter : traiter les artefacts de contexte (instructions partagées par dépôt, applications de référence, spécifications et architecture faisant source de vérité) comme un substrat qui réduit le besoin de coordination, par un parallèle explicite avec les plateformes et les golden paths du chapitre 5.
- Forme minimale à reformuler : intégrer des standards de contexte, une source de vérité documentaire versionnée et une conception de la vérification (échantillonnage, audit, tests comme artefacts) plutôt que la seule exigence de « revue humaine ».
- Tension à arbitrer : jusqu'où formaliser ce volet sans réintroduire un framework de marque, ce que le papier refuse par principe.
