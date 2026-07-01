# 3. Les frameworks comme réponses possibles

## Question de recherche

Comment les frameworks et approches existants tentent-ils de résoudre les problèmes fondamentaux identifiés au chapitre 1, et quels principes universels du chapitre 2 implémentent-ils réellement ?

## Intention du chapitre

Les chapitres précédents ont volontairement évité de partir des frameworks. Cette décision n'était pas un rejet des méthodes existantes, mais une précaution analytique. À grande échelle, le risque est de confondre trois niveaux :

- le problème à résoudre ;
- le principe organisationnel qui permet d'y répondre ;
- la forme particulière proposée par un framework.

Ce chapitre réintroduit les frameworks, mais comme des réponses possibles à des problèmes connus. SAFe, LeSS, Nexus, Scrum of Scrums, Kanban, Team Topologies, Flight Levels, FAST Agile, Disciplined Agile, Shape Up ou le Spotify Model ne sont pas analysés comme des doctrines à adopter ou à rejeter. Ils sont analysés comme des assemblages de mécanismes.

La question utile n'est donc pas :

> Quel framework est le meilleur ?

Elle devient :

> Quel problème chaque approche rend-elle visible, quel mécanisme propose-t-elle, quel coût introduit-elle, et dans quel contexte ce compromis devient-il acceptable ?

Cette posture est importante pour deux raisons.

Premièrement, beaucoup de critiques adressées aux frameworks portent moins sur le problème qu'ils tentent de résoudre que sur leur mise en oeuvre : surcharge cérémonielle, vocabulaire opaque, rôle mal compris, outil transformé en système de reporting, adoption mimétique. Ces critiques peuvent être légitimes sans invalider le besoin sous-jacent.

Deuxièmement, beaucoup d'organisations qui "sortent d'un framework" conservent, parfois sans le nommer, une partie de ses mécanismes : synchronisation multi-équipes, arbitrage de portefeuille, gestion explicite des dépendances, standards d'ingénierie, communautés de pratique, revues de flux. Le travail de simplification consiste alors à distinguer ce qui était nécessaire de ce qui était seulement hérité.

## 3.1 Méthode d'analyse

Chaque approche est analysée selon neuf dimensions :

1. philosophie directrice ;
2. problèmes principalement adressés ;
3. hypothèses implicites sur l'organisation ;
4. mécanismes utilisés ;
5. problèmes bien traités ;
6. problèmes moins bien traités ;
7. compromis introduits ;
8. contextes où l'approche tend à bien fonctionner ;
9. contextes où elle tend à produire de la friction.

Cette grille évite de comparer les frameworks sur leur complétude apparente. Une approche légère peut être très pertinente si elle traite le bon problème avec peu de coût. Une approche complète peut être utile dans un contexte fortement couplé, mais excessive dans un contexte où les équipes sont déjà autonomes, les plateformes matures et le flux bien maîtrisé.

Les niveaux de preuve doivent également être distingués.

| Type d'information | Utilisation dans ce chapitre |
|---|---|
| Fait établi | Principes issus de la théorie des organisations, de la modularité, du Lean, de la théorie des files d'attente ou de l'ingénierie logicielle |
| Évidence empirique | Résultats issus de recherches ou rapports industriels, par exemple DORA ou Accelerate |
| Documentation officielle | Indique l'intention d'un framework, mais ne prouve pas son efficacité |
| Retour d'expérience | Utile pour comprendre les conditions de succès ou d'échec |
| Opinion praticienne | Utile pour identifier les controverses, mais insuffisante seule |
| Revendication fournisseur | À traiter comme une hypothèse ou une description d'intention |

## 3.2 Lecture transversale des approches

Avant d'examiner chaque framework, il est utile de les classer par orientation dominante. Cette classification n'est pas exclusive : une même approche peut couvrir plusieurs dimensions.

| Orientation dominante | Approches représentatives | Problème principal visé |
|---|---|---|
| Synchronisation multi-équipes | SAFe, Nexus, Scrum of Scrums | Coordination, dépendances, intégration |
| Simplification organisationnelle | LeSS, FAST Agile | Réduction des rôles, apprentissage, responsabilité produit |
| Flux et arbitrage | Kanban à grande échelle, Flight Levels | WIP, visibilité, priorisation, gouvernance du flux |
| Design socio-technique | Team Topologies | Frontières d'équipes, charge cognitive, architecture organisationnelle |
| Modèle hybride ou contextuel | Disciplined Agile, modèles internes d'entreprise | Adaptation au contexte, combinaison de pratiques |
| Cadence produit limitée | Shape Up | Engagement sélectif, cycles bornés, réduction du backlog |
| Culture organisationnelle observée | Spotify Model | Autonomie, communautés, alignement culturel |

Cette table montre déjà une limite des comparaisons génériques. LeSS et SAFe ne partent pas du même diagnostic. Team Topologies n'est pas un framework de planification. Kanban ne prescrit pas une structure d'équipes. Shape Up n'est pas conçu comme un operating model complet pour plusieurs centaines de développeurs. Flight Levels ne remplace pas une architecture d'équipes, mais cherche à connecter stratégie, coordination et exécution par le flux.

Une organisation qui cherche un "framework de scaling" risque donc de poser une question trop large. Elle doit plutôt identifier la nature du déficit :

- déficit d'alignement stratégique ;
- excès de dépendances ;
- manque de visibilité du flux ;
- trop de travail en cours ;
- intégration tardive ;
- ownership flou ;
- gouvernance trop lente ;
- architecture trop couplée ;
- charge cognitive excessive ;
- absence de mécanisme d'apprentissage transversal.

Les frameworks deviennent alors des bibliothèques de mécanismes, non des réponses totales.

## 3.3 SAFe

### Philosophie directrice

SAFe propose un modèle explicite de coordination à grande échelle, structuré autour d'unités stables de plusieurs équipes, de cadences communes, de planification périodique, de rôles de coordination, de principes Lean-Agile et de mécanismes de portefeuille.

Sa philosophie implicite est que, dans une grande organisation, l'alignement, la visibilité, la synchronisation et l'arbitrage ne peuvent pas être laissés à des interactions informelles. Ils doivent être rendus explicites par un système opérationnel commun.

### Problèmes principalement adressés

SAFe vise surtout :

- l'alignement entre plusieurs équipes ;
- la planification de dépendances ;
- la synchronisation d'un ensemble d'équipes travaillant sur une même chaîne de valeur ;
- la visibilité pour le management ;
- l'arbitrage de portefeuille ;
- la gouvernance de travaux transverses ;
- la coordination entre produit, architecture, développement, qualité et exploitation.

Il répond donc principalement à la complexité de coordination et à la complexité décisionnelle. Il touche aussi la complexité opérationnelle lorsqu'il insiste sur l'intégration fréquente et la qualité intégrée, mais son efficacité sur ce point dépend fortement de la maturité technique réelle de l'organisation.

### Hypothèses organisationnelles

SAFe suppose généralement que l'organisation a besoin d'un modèle commun explicite, que plusieurs équipes contribuent à des objectifs partagés, que les dépendances ne peuvent pas toutes être supprimées à court terme, et qu'une partie des arbitrages doit être rendue visible à un niveau supérieur à l'équipe.

Il suppose aussi que l'organisation accepte un certain coût de structure : vocabulaire commun, rôles de coordination, cérémonies périodiques, niveaux de planification et artefacts partagés.

### Mécanismes utilisés

Les mécanismes les plus importants sont :

- des unités stables de coordination multi-équipes ;
- une planification périodique multi-équipes ;
- des objectifs communs à horizon intermédiaire ;
- une identification explicite des dépendances ;
- des rôles de facilitation et de coordination ;
- des revues de système et d'inspection ;
- une articulation entre stratégie, portefeuille et exécution ;
- des pratiques d'ingénierie et de qualité intégrée, au moins dans l'intention.

### Problèmes bien traités

SAFe est particulièrement utile lorsqu'une organisation souffre d'un manque de modèle opérationnel commun. Dans des environnements où les dépendances sont nombreuses, les priorités opaques et les arbitrages dispersés, il peut fournir une structure qui rend les problèmes visibles.

Sa force est moins d'être "agile" au sens léger du terme que d'offrir une grammaire commune à des acteurs nombreux : produit, technologie, architecture, finance, conformité, management et équipes de développement.

### Problèmes moins bien traités

SAFe ne réduit pas automatiquement le couplage technique. Il peut rendre les dépendances visibles, mais si l'organisation ne modifie pas son architecture, ses frontières d'équipes ou ses plateformes, les cérémonies risquent de devenir un système permanent de gestion du couplage.

Il peut également traiter imparfaitement la charge cognitive locale si les équipes reçoivent simultanément des objectifs de programme, des contraintes de portefeuille, des initiatives transverses et des engagements de livraison.

### Compromis introduits

Le principal compromis est entre explicitation et lourdeur. SAFe donne de la visibilité, mais cette visibilité a un coût. Il crée un système de coordination lisible, mais peut aussi créer une incitation à la conformité au modèle.

Le risque le plus fréquent n'est pas seulement "trop de cérémonies". Il est que l'organisation confonde présence des cérémonies et résolution des problèmes. Une planification multi-équipes peut révéler les dépendances ; elle ne les supprime pas. Un rôle de coordination peut fluidifier les arbitrages ; il ne remplace pas des frontières d'ownership claires.

### Contextes favorables

SAFe tend à mieux fonctionner lorsque :

- l'organisation est grande et fortement interdépendante ;
- les contraintes réglementaires ou budgétaires exigent une visibilité explicite ;
- plusieurs équipes contribuent à des produits ou plateformes communes ;
- la direction a besoin d'un langage opérationnel partagé ;
- l'organisation accepte d'investir dans la discipline technique, pas seulement dans la structure de gouvernance.

### Contextes défavorables

SAFe tend à produire de la friction lorsque :

- le couplage pourrait être réduit mais reste institutionnalisé ;
- l'adoption devient principalement terminologique ;
- les rôles de coordination remplacent la responsabilité des équipes ;
- les outils de reporting dominent les conversations sur le flux réel ;
- l'organisation cherche un modèle léger, expérimental ou très orienté produit autonome.

## 3.4 LeSS

### Philosophie directrice

LeSS part d'une intuition presque inverse de SAFe : au lieu d'ajouter une structure de coordination à mesure que l'organisation grandit, il cherche à conserver les principes de Scrum avec le moins d'ajouts possible. Sa philosophie est la simplicité organisationnelle, la responsabilité produit commune et la réduction des mécanismes de coordination superflus.

LeSS met l'accent sur l'idée que la complexité organisationnelle est souvent une conséquence de structures existantes : silos, équipes composants, ownership fragmenté, spécialisation excessive, files d'attente entre fonctions.

### Problèmes principalement adressés

LeSS traite surtout :

- la fragmentation produit ;
- l'optimisation locale des équipes ;
- la multiplication des rôles et processus ;
- les transferts entre silos ;
- la perte d'apprentissage global ;
- les structures d'équipe qui renforcent le couplage.

Il répond donc fortement à la complexité cognitive et sociale, et indirectement à la complexité de coordination par simplification.

### Hypothèses organisationnelles

LeSS suppose que l'organisation peut accepter une transformation structurelle plus profonde : équipes orientées client ou produit, backlog produit commun, réduction des rôles intermédiaires, apprentissage collectif, responsabilité partagée.

Cette hypothèse est exigeante. Elle implique que l'organisation soit prête à remettre en cause des structures existantes plutôt qu'à simplement coordonner leur interaction.

### Mécanismes utilisés

Les mécanismes typiques incluent :

- un backlog produit commun ;
- un Product Owner pour un produit large ;
- plusieurs équipes travaillant sur le même produit ;
- des événements de synchronisation minimaux ;
- une rétrospective globale ;
- une attention à la suppression des rôles de coordination inutiles ;
- une transformation des structures d'équipes vers plus d'orientation produit.

### Problèmes bien traités

LeSS est fort lorsqu'une organisation souffre d'une complexité créée par elle-même : trop de rôles, trop de couches, trop de spécialisation, trop de transferts. Il pousse à demander pourquoi une dépendance existe au lieu de seulement la gérer.

Il est aussi cohérent avec le principe "réduire les dépendances avant de les gérer".

### Problèmes moins bien traités

LeSS peut être difficile à appliquer lorsque l'organisation doit gérer des contraintes fortes de portefeuille, de conformité, de financement ou de dépendances techniques héritées. Son minimalisme peut laisser un vide si les mécanismes d'arbitrage et de gouvernance ne sont pas conçus ailleurs.

Il suppose également une capacité réelle à construire des équipes capables de travailler sur un périmètre produit large. Dans un système très ancien, très réglementé ou très spécialisé, cette évolution peut être lente.

### Compromis introduits

LeSS réduit le coût de structure, mais augmente l'exigence de maturité. Moins de rôles et moins de couches signifient que les équipes, le Product Owner et l'organisation doivent absorber davantage de complexité directement.

Le compromis central est donc entre simplicité formelle et capacité réelle. Une structure légère peut être puissante si les équipes disposent des compétences, de l'accès aux décisions et des frontières techniques nécessaires. Sinon, elle peut devenir une simplification déclarative.

### Contextes favorables

LeSS tend à mieux fonctionner lorsque :

- le produit peut être réellement partagé par plusieurs équipes ;
- l'organisation veut réduire les rôles et couches intermédiaires ;
- le management accepte de modifier la structure plutôt que de seulement ajouter une gouvernance ;
- les équipes peuvent progressivement développer des compétences transverses ;
- le système technique permet, ou peut permettre, un ownership produit plus intégré.

### Contextes défavorables

LeSS tend à être difficile lorsque :

- les contraintes de portefeuille sont fortes et non traitées ailleurs ;
- l'organisation ne veut pas remettre en cause ses structures existantes ;
- les équipes restent organisées autour de composants très spécialisés ;
- le backlog unique devient trop large pour produire des arbitrages clairs ;
- les fonctions de gouvernance externe imposent des cycles et validations lourds.

## 3.5 Nexus

### Philosophie directrice

Nexus est une extension relativement légère de Scrum pour coordonner plusieurs équipes travaillant sur un même produit. Sa philosophie est de préserver Scrum tout en ajoutant un mécanisme explicite d'intégration et de résolution des dépendances.

Contrairement à SAFe, Nexus ne cherche pas à fournir un modèle complet de portefeuille ou d'organisation d'entreprise. Il se concentre sur la coordination d'un ensemble limité d'équipes autour d'un incrément intégré.

### Problèmes principalement adressés

Nexus vise principalement :

- l'intégration entre équipes Scrum ;
- la détection des dépendances ;
- la cohérence d'un incrément produit commun ;
- la coordination des travaux d'un nombre limité d'équipes ;
- la réduction des surprises en fin de sprint.

Il répond donc surtout à la complexité de coordination et à la complexité opérationnelle à l'échelle d'un produit.

### Hypothèses organisationnelles

Nexus suppose que Scrum est déjà une base de fonctionnement pertinente, que plusieurs équipes travaillent sur un même produit, et que le problème principal se situe au niveau de l'intégration plutôt qu'au niveau du portefeuille ou de la stratégie.

### Mécanismes utilisés

Les mécanismes incluent :

- un backlog produit commun ;
- un objectif commun ;
- une équipe ou un rôle de coordination de l'intégration ;
- des événements adaptés pour planifier, synchroniser et inspecter l'incrément intégré ;
- une attention explicite aux dépendances et à la définition de "Done".

### Problèmes bien traités

Nexus est utile pour rendre visibles les problèmes d'intégration que des équipes Scrum isolées peuvent masquer. Il rappelle qu'un sprint localement réussi n'a pas beaucoup de valeur si l'incrément global n'est pas intégré.

### Problèmes moins bien traités

Nexus ne traite pas en profondeur la conception des frontières d'équipes, la gouvernance de portefeuille, la transformation d'architecture ou la stratégie produit multi-domaines. Il peut donc être insuffisant lorsque les problèmes dépassent l'intégration d'un produit.

### Compromis introduits

Le compromis de Nexus est sa portée limitée. Cette limitation est une force lorsqu'elle évite la lourdeur, mais une faiblesse lorsqu'une organisation attend d'un framework léger qu'il résolve des problèmes systémiques plus larges.

### Contextes favorables

Nexus tend à bien convenir lorsque :

- trois à neuf équipes travaillent sur un même produit ;
- Scrum est déjà bien compris ;
- le principal problème est l'intégration ;
- les enjeux de portefeuille sont traités par ailleurs ;
- l'organisation veut éviter un modèle de scaling plus lourd.

### Contextes défavorables

Nexus tend à être insuffisant lorsque :

- l'organisation compte de nombreux produits interdépendants ;
- les arbitrages de portefeuille sont le problème dominant ;
- les équipes sont organisées autour de composants fortement couplés ;
- l'intégration technique reste tardive malgré les événements de coordination.

## 3.6 Scrum of Scrums

### Philosophie directrice

Scrum of Scrums est moins un framework complet qu'un mécanisme de coordination. Son idée est simple : lorsque plusieurs équipes Scrum travaillent sur un périmètre commun, des représentants se synchronisent pour partager les dépendances, obstacles et risques.

Sa philosophie est pragmatique : ajouter un point de coordination inter-équipes sans redessiner toute l'organisation.

### Problèmes principalement adressés

Scrum of Scrums vise :

- la visibilité des dépendances ;
- la résolution de blocages inter-équipes ;
- la synchronisation opérationnelle ;
- la circulation d'informations entre équipes.

Il répond surtout à la complexité de coordination, mais de manière superficielle si les dépendances sont structurelles.

### Hypothèses organisationnelles

L'approche suppose que les équipes sont déjà relativement autonomes et que les dépendances peuvent être gérées par échange régulier. Elle fonctionne moins bien si les dépendances sont nombreuses, permanentes ou liées à des décisions de portefeuille.

### Mécanismes utilisés

Le mécanisme central est une réunion périodique entre représentants d'équipes, centrée sur :

- ce qui peut bloquer d'autres équipes ;
- ce qui bloque l'équipe représentée ;
- les dépendances à venir ;
- les décisions ou escalades nécessaires.

### Problèmes bien traités

Scrum of Scrums est utile comme mécanisme léger de visibilité. Il peut réduire les surprises et accélérer la résolution de blocages simples.

### Problèmes moins bien traités

Il ne modifie pas les causes profondes des dépendances. Il ne fournit pas non plus de mécanisme robuste pour prioriser, arbitrer ou réduire le WIP à l'échelle.

### Compromis introduits

Le compromis est entre légèreté et profondeur. Le mécanisme coûte peu, mais sa capacité de transformation est limitée.

### Contextes favorables

Scrum of Scrums convient lorsque :

- peu d'équipes doivent se synchroniser ;
- les dépendances sont limitées ;
- les équipes ont déjà une bonne autonomie ;
- l'organisation cherche un mécanisme opérationnel simple.

### Contextes défavorables

Il devient insuffisant lorsque :

- les mêmes dépendances réapparaissent à chaque réunion ;
- les représentants n'ont pas l'autorité de décider ;
- les problèmes relèvent du portefeuille, de l'architecture ou de l'ownership ;
- la réunion devient un reporting de statut plutôt qu'un mécanisme de déblocage.

## 3.7 Kanban à grande échelle

### Philosophie directrice

Kanban part du flux de travail réel. Sa philosophie n'est pas de prescrire une structure d'équipe ou une cadence, mais de rendre visible le travail, limiter le travail en cours, mesurer le délai et améliorer progressivement le système.

À grande échelle, cette approche est particulièrement importante parce qu'elle traite un problème souvent sous-estimé : la saturation du système par excès d'initiatives simultanées.

### Problèmes principalement adressés

Kanban traite :

- la visibilité du flux ;
- le travail en cours excessif ;
- les files d'attente ;
- les goulets d'étranglement ;
- les classes de service ;
- les politiques d'entrée et de sortie ;
- l'amélioration continue par observation du système.

Il répond fortement à la complexité de coordination et à la complexité décisionnelle.

### Hypothèses organisationnelles

Kanban suppose que le système réel peut être observé, que les acteurs acceptent de rendre visibles les files d'attente et que les décisions peuvent être améliorées par des politiques explicites.

Il ne suppose pas nécessairement une transformation immédiate des rôles ou structures.

### Mécanismes utilisés

Les mécanismes incluent :

- visualisation du flux ;
- limites de WIP ;
- politiques explicites ;
- mesure du délai et du débit ;
- gestion des classes de service ;
- revues de flux ;
- amélioration continue des goulets d'étranglement.

### Problèmes bien traités

Kanban est puissant pour révéler que le problème n'est pas le manque d'activité, mais l'excès de travail engagé. Il donne aussi un langage neutre pour discuter de capacité, d'attente et de priorisation sans dépendre d'un vocabulaire agile spécifique.

### Problèmes moins bien traités

Kanban ne dit pas à lui seul comment structurer les équipes, comment concevoir l'architecture, comment définir une stratégie produit ou comment organiser l'ownership de bout en bout. Il peut rendre visible un problème sans fournir toute la solution organisationnelle.

### Compromis introduits

Le compromis est entre évolution incrémentale et transformation structurelle. Kanban permet de commencer avec le système existant, mais cette force peut devenir une limite si l'organisation se contente d'optimiser un système fondamentalement mal conçu.

### Contextes favorables

Kanban convient particulièrement lorsque :

- le travail est varié et difficile à cadencer uniformément ;
- le système est saturé par trop de demandes ;
- les dépendances et files d'attente sont invisibles ;
- l'organisation veut améliorer sans changer immédiatement toute sa structure ;
- des fonctions de support, plateformes, sécurité ou architecture créent des goulets d'étranglement.

### Contextes défavorables

Kanban peut être insuffisant lorsque :

- l'organisation refuse de limiter réellement le WIP ;
- les tableaux deviennent des outils de reporting sans politiques de décision ;
- les équipes n'ont pas le pouvoir d'agir sur les goulets d'étranglement ;
- les problèmes principaux sont des problèmes d'architecture ou de stratégie non arbitrée.

## 3.8 Team Topologies

### Philosophie directrice

Team Topologies propose de concevoir l'organisation logicielle à partir du flux de changement, de la charge cognitive des équipes et des modes d'interaction entre équipes. Sa philosophie est socio-technique : l'architecture, les équipes et les chemins de communication doivent être conçus ensemble.

L'approche distingue notamment des équipes alignées sur le flux, des équipes plateforme, des équipes de sous-systèmes complexes et des équipes d'enabling. Elle insiste aussi sur des modes d'interaction explicites : collaboration, X-as-a-Service et facilitation.

### Problèmes principalement adressés

Team Topologies traite :

- la complexité cognitive ;
- les frontières d'équipes ;
- le couplage organisationnel ;
- la conception de plateformes ;
- les modes d'interaction ;
- la réduction du besoin de coordination permanente ;
- l'alignement entre architecture et organisation.

Il répond donc principalement à la complexité structurelle et cognitive, avec un effet direct sur la complexité de coordination.

### Hypothèses organisationnelles

L'approche suppose que l'organisation peut agir sur ses frontières d'équipes et sur son architecture. Elle suppose également que la charge cognitive est une contrainte réelle de conception, pas seulement un problème individuel de compétence.

### Mécanismes utilisés

Les mécanismes incluent :

- typologie d'équipes ;
- cartographie des flux de valeur ;
- conception de plateformes internes ;
- explicitation des modes d'interaction ;
- limitation de la charge cognitive ;
- évolution conjointe de l'organisation et de l'architecture.

### Problèmes bien traités

Team Topologies est particulièrement fort pour traiter les dépendances récurrentes comme des signaux de mauvais design organisationnel ou technique. Il donne un langage précis pour distinguer une équipe qui livre de la valeur, une équipe qui fournit une plateforme, une équipe qui facilite une transition et une équipe qui détient une expertise complexe.

Il applique directement le principe "réduire les dépendances avant de les gérer".

### Problèmes moins bien traités

Team Topologies ne fournit pas un modèle complet de portefeuille, de planification périodique ou de gouvernance d'investissement. Il ne remplace donc pas les mécanismes d'arbitrage nécessaires dans une grande entreprise.

### Compromis introduits

Le compromis central est que l'approche demande une capacité de design organisationnel continu. Redessiner les frontières d'équipes, construire une plateforme ou réduire la charge cognitive ne produit pas des résultats immédiats. C'est un investissement structurel.

### Contextes favorables

Team Topologies convient lorsque :

- les dépendances récurrentes ralentissent le flux ;
- l'architecture et l'organisation sont désalignées ;
- les équipes subissent une charge cognitive excessive ;
- l'organisation veut construire des plateformes internes utiles ;
- la direction accepte de traiter l'organisation comme un système évolutif.

### Contextes défavorables

L'approche peut être difficile lorsque :

- l'organisation cherche surtout une cérémonie de planification ;
- les structures d'équipe sont politiquement figées ;
- les plateformes sont construites comme des silos de contrôle plutôt que comme des produits internes ;
- les arbitrages de portefeuille ne sont pas traités par ailleurs.

## 3.9 Flight Levels

### Philosophie directrice

Flight Levels cherche à connecter plusieurs niveaux de flux : stratégie, coordination inter-équipes et exécution opérationnelle. Sa philosophie est que beaucoup d'organisations ont des équipes localement agiles mais restent globalement lentes parce que le niveau de coordination et le niveau stratégique ne sont pas conçus comme des systèmes de flux.

L'approche ne prescrit pas une méthode d'équipe. Elle observe comment le travail circule entre niveaux et cherche à créer les boucles de feedback appropriées.

### Problèmes principalement adressés

Flight Levels traite :

- la déconnexion entre stratégie et exécution ;
- la visibilité du portefeuille ;
- la coordination multi-équipes ;
- le WIP à plusieurs niveaux ;
- les boucles de feedback entre niveaux ;
- les décisions de priorisation.

Il répond fortement à la complexité décisionnelle et à la complexité de coordination.

### Hypothèses organisationnelles

L'approche suppose que les problèmes de performance ne se situent pas uniquement dans les équipes. Elle suppose aussi que l'organisation accepte de rendre visible le flux au niveau du portefeuille et des dépendances inter-équipes.

### Mécanismes utilisés

Les mécanismes incluent :

- visualisation du travail à plusieurs niveaux ;
- limites de WIP adaptées aux niveaux ;
- cadences de revue ;
- politiques explicites de priorisation ;
- connexion entre stratégie, coordination et exécution ;
- amélioration continue du système de flux.

### Problèmes bien traités

Flight Levels est utile pour les organisations qui ont déjà beaucoup investi dans l'agilité d'équipe mais constatent peu d'amélioration globale. Il déplace la conversation vers les niveaux où les décisions de capacité, de priorité et de dépendance sont réellement prises.

### Problèmes moins bien traités

Comme Kanban, Flight Levels ne fournit pas à lui seul un modèle détaillé d'architecture d'équipes ou de pratiques d'ingénierie. Il doit être combiné avec des mécanismes de design socio-technique et de qualité intégrée.

### Compromis introduits

Le compromis est que Flight Levels rend visibles des décisions souvent politiquement inconfortables : trop d'initiatives, priorités contradictoires, capacité rare, arbitrages implicites. Son efficacité dépend de la volonté de prendre ces décisions, pas seulement de visualiser le flux.

### Contextes favorables

Flight Levels convient lorsque :

- les équipes sont actives mais le système global livre lentement ;
- la stratégie ne se traduit pas clairement en flux de travail ;
- le portefeuille est saturé ;
- les dépendances entre domaines sont fortes ;
- l'organisation veut améliorer sans imposer une méthode unique aux équipes.

### Contextes défavorables

L'approche devient limitée lorsque :

- les dirigeants ne veulent pas limiter le WIP ;
- les visualisations de portefeuille deviennent du reporting ;
- les problèmes de couplage technique ne sont pas traités ;
- l'organisation cherche une prescription complète de rôles et cérémonies.

## 3.10 FAST Agile

### Philosophie directrice

FAST Agile propose une approche de coordination par auto-organisation à plus grande échelle, avec des cycles courts, une vision partagée et une réallocation dynamique des personnes autour du travail. Sa philosophie est de réduire la rigidité des équipes fixes lorsque le problème demande une collaboration plus fluide.

### Problèmes principalement adressés

FAST Agile traite :

- l'alignement fréquent autour d'une intention commune ;
- la formation dynamique de groupes de travail ;
- la réduction des files d'attente entre équipes spécialisées ;
- l'adaptation rapide à l'information nouvelle ;
- l'apprentissage collectif.

Il répond surtout à la complexité de coordination et à la complexité cognitive et sociale.

### Hypothèses organisationnelles

L'approche suppose une culture forte d'auto-organisation, une transparence élevée, une capacité à travailler avec des frontières d'équipes plus fluides et un niveau de confiance suffisant pour que les personnes se réallouent au travail important.

### Mécanismes utilisés

Les mécanismes incluent :

- une vision partagée ;
- des cycles courts de planification et d'inspection ;
- des groupes temporaires autour du travail ;
- une coordination collective régulière ;
- une attention à la fluidité du système plutôt qu'à la stabilité stricte des équipes.

### Problèmes bien traités

FAST Agile peut être puissant lorsque les dépendances proviennent de frontières d'équipes trop rigides et que le travail nécessite une collaboration intense entre compétences.

### Problèmes moins bien traités

Il peut être moins adapté lorsque la stabilité d'équipe, l'ownership long terme, l'exploitation de services ou la connaissance profonde d'un domaine sont critiques. La fluidité peut aussi augmenter la charge cognitive si elle n'est pas maîtrisée.

### Compromis introduits

Le compromis est entre fluidité et stabilité. Une organisation trop rigide crée des files d'attente ; une organisation trop fluide peut fragiliser l'ownership, la continuité et la responsabilité de bout en bout.

### Contextes favorables

FAST Agile convient lorsque :

- le travail change rapidement ;
- la collaboration interdisciplinaire est centrale ;
- les frontières d'équipes existantes créent des attentes ;
- la culture d'auto-organisation est forte ;
- l'organisation peut maintenir une vision claire malgré la fluidité.

### Contextes défavorables

L'approche est risquée lorsque :

- les services nécessitent un ownership opérationnel stable ;
- les domaines métier sont complexes et demandent de la continuité ;
- l'organisation manque de confiance ou de transparence ;
- les personnes sont réallouées si souvent que l'apprentissage local se disperse.

## 3.11 Disciplined Agile

### Philosophie directrice

Disciplined Agile se présente comme une boîte à outils de choix contextuels plutôt que comme une méthode unique. Sa philosophie est que les organisations doivent choisir leur manière de travailler en fonction du contexte : cycle de vie, criticité, distribution, réglementation, culture, maturité technique.

### Problèmes principalement adressés

Disciplined Agile traite :

- l'adaptation au contexte ;
- la combinaison de pratiques agiles, Lean et traditionnelles ;
- les choix de cycle de vie ;
- la gouvernance organisationnelle ;
- l'intégration avec des fonctions d'entreprise.

Il répond surtout à la complexité contextuelle et à la nécessité de ne pas appliquer un modèle unique à tous les environnements.

### Hypothèses organisationnelles

L'approche suppose que l'organisation est capable de faire des choix éclairés. Une boîte à outils contextuelle est utile si les décideurs comprennent les compromis ; elle devient confuse si elle est utilisée comme catalogue de pratiques sans logique de conception.

### Mécanismes utilisés

Les mécanismes incluent :

- des objectifs de processus ;
- des options de pratiques ;
- des cycles de vie alternatifs ;
- une gouvernance adaptable ;
- des recommandations contextuelles.

### Problèmes bien traités

Disciplined Agile aide à éviter le dogmatisme. Il reconnaît que toutes les équipes ne sont pas dans le même contexte et que la même méthode peut être inadaptée selon le risque, la réglementation, la distribution ou la nature du produit.

### Problèmes moins bien traités

Sa richesse peut devenir une complexité supplémentaire. Si l'organisation ne dispose pas d'une capacité de discernement, elle peut accumuler des pratiques sans simplifier le système.

### Compromis introduits

Le compromis est entre flexibilité et lisibilité. Plus les options sont nombreuses, plus il faut une gouvernance claire pour éviter l'incohérence.

### Contextes favorables

Disciplined Agile convient lorsque :

- l'organisation contient des contextes très différents ;
- une méthode unique serait artificielle ;
- les équipes ont besoin de choix guidés ;
- la gouvernance accepte des variations locales explicites.

### Contextes défavorables

L'approche peut produire de la confusion lorsque :

- l'organisation cherche une forte simplicité opérationnelle ;
- les choix ne sont pas reliés à des problèmes explicites ;
- chaque équipe sélectionne des pratiques sans cohérence globale ;
- la boîte à outils devient un référentiel de conformité.

## 3.12 Shape Up

### Philosophie directrice

Shape Up propose une approche de développement produit centrée sur la définition préalable du problème, le cadrage d'un pari, des cycles de travail bornés et une forte limitation du travail engagé. Sa philosophie est de réduire la gestion continue de backlog et de protéger les équipes par des engagements sélectifs.

Shape Up n'est pas un framework de scaling d'entreprise au sens classique. Son intérêt pour ce papier vient surtout de ses mécanismes de limitation du WIP, de cadrage amont et de cycles bornés.

### Problèmes principalement adressés

Shape Up traite :

- l'excès de backlog ;
- les engagements flous ;
- le démarrage de trop de sujets ;
- la dérive de périmètre ;
- la difficulté à donner de l'autonomie à une équipe pendant un cycle ;
- la séparation entre cadrage du problème et exécution.

Il répond principalement à la complexité décisionnelle et à la limitation du travail en cours.

### Hypothèses organisationnelles

L'approche suppose que l'organisation peut sélectionner peu de paris à la fois, accepter de ne pas tout planifier en détail, et donner aux équipes un espace de décision pendant un cycle.

### Mécanismes utilisés

Les mécanismes incluent :

- cadrage amont du problème ;
- appétit de temps plutôt qu'estimation détaillée ;
- cycles bornés ;
- période de cooldown ;
- décision explicite de ce qui entre ou non dans le cycle ;
- autonomie d'exécution dans le cadre défini.

### Problèmes bien traités

Shape Up est fort pour combattre la saturation par backlog et la dérive des engagements. Il oblige à décider ce qui ne sera pas fait maintenant.

### Problèmes moins bien traités

Il ne traite pas directement les dépendances entre dizaines d'équipes, la gouvernance de portefeuille complexe, l'architecture partagée ou la conformité. Il doit donc être adapté avec prudence dans une grande organisation.

### Compromis introduits

Le compromis est entre focalisation et coordination. Des cycles autonomes fonctionnent bien si les dépendances sont limitées. Si les équipes sont fortement couplées, l'autonomie du cycle peut être perturbée par des besoins externes.

### Contextes favorables

Shape Up convient lorsque :

- le produit peut être découpé en paris relativement autonomes ;
- l'organisation souffre d'un backlog trop volumineux ;
- les équipes ont besoin d'espace pour résoudre le problème ;
- le leadership accepte de limiter les engagements simultanés.

### Contextes défavorables

L'approche est moins adaptée lorsque :

- les dépendances entre équipes sont nombreuses ;
- la livraison doit être synchronisée avec de lourdes contraintes externes ;
- l'organisation a besoin d'une planification multi-domaines explicite ;
- les cycles bornés masquent des risques d'intégration tardive.

## 3.13 Spotify Model

### Philosophie directrice

Le Spotify Model doit être traité avec prudence. Il ne s'agit pas d'un framework prescriptif conçu pour être adopté tel quel, mais d'un ensemble de pratiques observées et popularisées à partir d'un contexte particulier. Son vocabulaire, notamment squads, tribes, chapters et guilds, a souvent été repris sans les conditions culturelles et techniques qui lui donnaient sens.

Sa philosophie apparente est l'autonomie alignée : donner beaucoup de responsabilité aux équipes tout en maintenant une cohérence par la mission, la culture, les communautés et certaines structures de coordination.

### Problèmes principalement adressés

Le modèle traite :

- l'autonomie d'équipe ;
- la cohérence transversale des compétences ;
- les communautés de pratique ;
- l'alignement culturel ;
- la coordination légère entre équipes proches.

Il répond surtout à la complexité cognitive et sociale, et partiellement à la complexité de coordination.

### Hypothèses organisationnelles

Le modèle suppose une culture de confiance, une forte compétence des équipes, une architecture permettant l'autonomie, et une capacité à maintenir la cohérence sans contrôle lourd.

Ces hypothèses sont précisément ce qui rend les copies mécaniques fragiles.

### Mécanismes utilisés

Les mécanismes incluent :

- équipes autonomes orientées mission ;
- regroupements d'équipes proches ;
- communautés de compétences ;
- guildes transverses ;
- leadership culturel fort ;
- forte transparence.

### Problèmes bien traités

Le modèle met en lumière l'importance de la culture, de la confiance et des communautés de pratique. Il rappelle que la coordination ne passe pas seulement par des cérémonies formelles.

### Problèmes moins bien traités

Comme modèle répliqué, il traite mal les contextes où l'architecture, la gouvernance, la conformité ou le portefeuille imposent des contraintes fortes. Copier les noms sans reproduire les conditions systémiques crée souvent une organisation séduisante sur le papier mais floue dans la pratique.

### Compromis introduits

Le compromis est entre autonomie et cohérence. Sans mécanismes explicites d'arbitrage et d'architecture, l'autonomie peut produire de la fragmentation.

### Contextes favorables

Les idées associées au Spotify Model peuvent être utiles lorsque :

- l'organisation cherche à renforcer l'autonomie ;
- les communautés de compétence sont faibles ;
- la culture d'apprentissage est centrale ;
- l'architecture permet déjà une certaine indépendance des équipes.

### Contextes défavorables

Le modèle devient risqué lorsque :

- il est adopté comme vocabulaire plutôt que comme système ;
- les équipes n'ont pas de vrais droits de décision ;
- les dépendances techniques restent fortes ;
- les mécanismes de portefeuille et d'arbitrage sont absents.

## 3.14 Modèles hybrides d'entreprise

### Philosophie directrice

La plupart des grandes organisations ne fonctionnent pas strictement avec un framework unique. Elles combinent des éléments de plusieurs approches : planification périodique inspirée de SAFe, équipes produit inspirées de l'agilité ou de Team Topologies, portefeuille Lean, pratiques DevOps, communautés de pratique, Kanban pour les plateformes, gouvernance spécifique à la réglementation.

Ces modèles hybrides sont souvent critiqués parce qu'ils semblent impurs. Mais l'hybridation n'est pas nécessairement un problème. Elle devient problématique seulement lorsqu'elle juxtapose des mécanismes contradictoires sans principe directeur.

### Problèmes principalement adressés

Les modèles hybrides tentent de traiter simultanément :

- les contraintes d'entreprise ;
- la diversité des produits et technologies ;
- la coexistence de systèmes historiques et modernes ;
- les exigences de conformité ;
- les différences de maturité entre domaines ;
- le besoin de gouvernance et d'autonomie.

### Hypothèses organisationnelles

Un modèle hybride suppose que l'organisation dispose d'une capacité de conception interne. Elle ne peut pas simplement acheter une méthode ; elle doit comprendre ses propres problèmes et maintenir la cohérence de son operating model.

### Mécanismes utilisés

Les mécanismes peuvent inclure :

- portefeuille explicite ;
- équipes produit stables ;
- plateformes internes ;
- synchronisation périodique seulement là où les dépendances l'exigent ;
- Kanban pour les flux de demandes ;
- communautés de pratique ;
- standards minimaux d'ingénierie ;
- gouvernance de risque proportionnée ;
- revues de dette et d'architecture.

### Problèmes bien traités

Un bon modèle hybride peut être plus réaliste qu'un framework pur. Il permet d'adapter l'intensité de coordination au couplage réel, de différencier les contextes et de conserver les mécanismes utiles sans importer tout un vocabulaire.

### Problèmes moins bien traités

Le risque est l'incohérence. Sans principes explicites, le modèle hybride devient une accumulation de pratiques : un peu de SAFe, un peu de Scrum, un peu de Kanban, un peu d'OKR, un peu de DevOps, sans logique claire.

### Compromis introduits

Le compromis est entre adaptation et complexité. Plus le modèle est adapté localement, plus il faut clarifier ce qui reste commun : interfaces, critères de qualité, gouvernance de portefeuille, métriques de flux, droits de décision.

### Contextes favorables

Les modèles hybrides conviennent lorsque :

- l'organisation est trop diverse pour une méthode unique ;
- les contraintes réglementaires varient selon les domaines ;
- certains produits sont matures et d'autres exploratoires ;
- des systèmes hérités coexistent avec des plateformes modernes ;
- l'organisation a une capacité interne de design organisationnel.

### Contextes défavorables

Ils deviennent fragiles lorsque :

- les pratiques sont choisies par préférence locale plutôt que par problème ;
- le vocabulaire diffère sans traduction commune ;
- les mécanismes de décision ne sont pas explicites ;
- l'hybridation sert à éviter les arbitrages difficiles.

## 3.15 Matrice comparative

La matrice suivante ne classe pas les frameworks. Elle indique quels mécanismes chaque approche met typiquement en avant pour traiter les problèmes fondamentaux.

| Problème fondamental | Principe associé | Mécanismes typiques | SAFe | LeSS | Nexus | Scrum of Scrums | Kanban | Team Topologies | Flight Levels |
|---|---|---|---|---|---|---|---|---|---|
| Dépendances | Réduire avant de gérer | Domaines, interfaces, plateformes, visualisation des dépendances | Gère explicitement les dépendances ; réduction dépend du design | Cherche à réduire par simplification et équipes produit | Rend les dépendances visibles autour d'un produit | Rend les blocages visibles | Visualise les dépendances et files | Traite les dépendances comme problème de design | Visualise les dépendances entre niveaux |
| Alignement | Intention explicite | Objectifs, stratégie, portefeuille, planification | Fort mécanisme d'alignement périodique | Alignement par produit commun | Alignement par backlog et objectif produit | Alignement opérationnel limité | Alignement par politiques de flux | Alignement par flux et frontières d'équipes | Alignement stratégie-exécution |
| Intégration | Feedback rapide | CI/CD, incrément intégré, tests, release | Intention explicite, dépend de la maturité technique | Intégration par produit partagé | Focalisation forte sur l'incrément intégré | Peu prescriptif | Mesure le flux, pas les pratiques techniques | Indirect par architecture et plateformes | Indirect par boucles de feedback |
| WIP | Limiter le travail engagé | Limites, arbitrage, politiques d'entrée | Portefeuille et planification peuvent aider, mais risque de surcharge | Backlog commun peut aider à arbitrer | Limité au périmètre produit | Peu traité | Principe central | Indirect par charge cognitive et flux | Principe central à plusieurs niveaux |
| Ownership | Responsabilité claire | Équipes produit, domaines, ownership de services | Définit des rôles et niveaux, risque de dilution si trop complexe | Responsabilité produit collective | Responsabilité produit commune | Dépend du contexte | Rend les files visibles, pas l'ownership | Principe central | Clarifie les niveaux de décision |
| Architecture | Alignement socio-technique | Modularité, plateformes, ADR, standards | Inclut architecture, mais peut rester gouvernance | Encourage la simplification structurelle | Peu prescriptif | Peu traité | Révèle les contraintes de flux | Principe central | Révèle l'impact sur le flux |
| Décision | Décider au bon niveau | Droits de décision, escalade, portefeuille | Mécanismes explicites de gouvernance | Décision proche du produit, moins de couches | Décision produit limitée | Escalade opérationnelle | Politiques explicites | Décisions liées aux frontières | Décisions par niveaux de flux |
| Apprentissage | Ajuster le système | Rétrospectives, revues, métriques | Présent mais risque de conformité | Fort accent sur amélioration systémique | Inspection de l'incrément | Apprentissage limité | Amélioration continue centrale | Évolution continue des topologies | Amélioration du système de flux |

## 3.16 Patterns communs derrière les frameworks

Malgré leurs différences, les approches convergent sur plusieurs mécanismes récurrents.

### 3.16.1 Rendre visible ce qui est invisible

Tous les frameworks utiles rendent quelque chose visible : dépendances, flux, priorités, risques, ownership, capacité, charge cognitive, décisions, architecture. Cette visibilité est une condition de l'action collective.

Mais la visibilité n'est pas suffisante. Une organisation peut rendre visibles les dépendances sans jamais les réduire, rendre visible le WIP sans jamais dire non, ou rendre visibles les risques sans arbitrer.

### 3.16.2 Créer une cadence de décision

La plupart des approches introduisent une forme de cadence : sprint, cycle, planification périodique, revue de flux, revue de portefeuille, synchronisation multi-équipes. La cadence réduit le coût de coordination parce que les acteurs savent quand les sujets seront discutés.

Mais une cadence utile doit modifier des décisions. Une cadence qui ne fait que produire du statut devient une charge.

### 3.16.3 Définir des frontières

Les frameworks tentent tous, directement ou indirectement, de clarifier des frontières : équipe, produit, domaine, flux, plateforme, portefeuille, tribe, train, niveau de vol. Ces frontières sont indispensables parce qu'elles réduisent l'ambiguïté.

Mais une frontière mal placée crée des dépendances. La question n'est pas seulement de nommer les unités organisationnelles, mais de vérifier si elles correspondent au flux de changement.

### 3.16.4 Arbitrer la capacité

À grande échelle, tout framework sérieux finit par rencontrer la même limite : la capacité est finie. Les mécanismes de portefeuille, limites de WIP, cycles bornés, backlogs communs ou politiques de service sont des manières différentes de forcer l'arbitrage.

Lorsqu'un framework échoue, c'est souvent parce que l'organisation conserve l'illusion qu'elle peut tout démarrer. Le framework devient alors un système de suivi de la surcharge.

### 3.16.5 Intégrer plus tôt

Les approches diffèrent sur le vocabulaire, mais toutes les organisations performantes doivent réduire le risque d'intégration tardive. Les mécanismes peuvent être techniques, organisationnels ou les deux : CI/CD, incréments intégrés, feature flags, plateformes, standards de qualité, ownership de bout en bout.

Un framework qui améliore la planification sans améliorer l'intégration peut donner une impression de contrôle tout en laissant le risque opérationnel intact.

## 3.17 Anti-patterns d'adoption

L'analyse des frameworks doit aussi identifier les échecs typiques. Ces anti-patterns ne sont pas propres à un framework ; ils peuvent apparaître dans presque tous les modèles.

### 3.17.1 Adoption par vocabulaire

L'organisation adopte des noms, rôles et cérémonies sans modifier les mécanismes réels de décision, d'ownership, de qualité ou de flux. Le changement est visible dans les organigrammes et les outils, mais peu dans le délai de livraison ou la capacité d'apprentissage.

### 3.17.2 Coordination qui institutionnalise le couplage

Les dépendances sont mieux gérées, mais jamais réduites. Les réunions deviennent permanentes parce que l'architecture et les frontières d'équipes restent inchangées.

### 3.17.3 Reporting déguisé en transparence

Les artefacts de flux servent d'abord à rassurer le management plutôt qu'à améliorer les décisions. Les équipes apprennent alors à produire un statut acceptable plutôt qu'à exposer les vrais blocages.

### 3.17.4 Autonomie sans droits de décision

Les équipes sont appelées autonomes, mais ne peuvent décider ni des priorités, ni de l'architecture locale, ni de la qualité, ni de la mise en production. L'autonomie devient culturelle dans le discours, mais pas opérationnelle.

### 3.17.5 Standardisation excessive

L'organisation impose une manière unique de travailler à des contextes différents. La cohérence augmente en apparence, mais le système perd sa capacité d'adaptation.

### 3.17.6 Simplification sans mécanisme de remplacement

L'organisation supprime des cérémonies ou rôles associés à un framework, mais ne remplace pas la fonction qu'ils assuraient. Les dépendances, arbitrages ou risques réapparaissent alors sous forme d'escalades, de réunions informelles ou de décisions tardives.

## 3.18 Comment choisir des mécanismes sans choisir un framework

Une organisation qui veut rester indépendante des frameworks peut utiliser une démarche en cinq étapes.

### 3.18.1 Identifier les problèmes dominants

Le point de départ doit être la taxonomie du chapitre 1 :

- complexité structurelle ;
- complexité de coordination ;
- complexité décisionnelle ;
- complexité opérationnelle ;
- complexité cognitive et sociale.

Il faut éviter de traiter un problème de structure par une cérémonie, un problème de décision par un outil, ou un problème d'architecture par un rôle de coordination.

### 3.18.2 Sélectionner les principes nécessaires

Chaque problème doit être relié aux principes du chapitre 2. Par exemple :

- dépendances récurrentes : réduction du couplage, architecture évolutive, ownership clair ;
- surcharge de portefeuille : limitation du WIP, arbitrage explicite, visibilité du flux ;
- intégration tardive : feedback rapide, qualité intégrée, responsabilité de bout en bout ;
- décisions lentes : décision au plus près de l'information, escalade au plus près du conflit ;
- fragmentation des équipes : alignement explicite, autonomie avec frontières, communautés d'apprentissage.

### 3.18.3 Choisir les mécanismes les plus simples

Une fois le principe identifié, plusieurs mécanismes sont possibles. La question devient : quel est le mécanisme le moins coûteux qui traite réellement le problème ?

Une dépendance ponctuelle peut nécessiter une synchronisation légère. Une dépendance permanente peut nécessiter une refonte de frontière d'équipe. Un portefeuille saturé peut nécessiter une limite de WIP, pas seulement une meilleure planification. Une intégration tardive peut nécessiter une amélioration technique, pas seulement une revue de release.

### 3.18.4 Vérifier les effets secondaires

Chaque mécanisme introduit un coût :

- coût de réunion ;
- coût de rôle ;
- coût de reporting ;
- coût de standardisation ;
- coût de changement organisationnel ;
- coût de charge cognitive ;
- coût politique d'arbitrage.

Un mécanisme n'est justifié que s'il réduit un coût plus important que celui qu'il ajoute.

### 3.18.5 Inspecter et retirer

Tout mécanisme de coordination doit être inspectable et supprimable. Si une revue de dépendances ne révèle plus de dépendances significatives, elle doit être réduite ou supprimée. Si une communauté ne modifie plus les pratiques, elle doit être repensée. Si une planification périodique produit seulement du reporting, sa fonction réelle doit être réexaminée.

La maturité ne consiste pas à stabiliser un modèle pour toujours. Elle consiste à ajuster le système de coordination lorsque les problèmes changent.

## 3.19 Synthèse

Les frameworks de mise à l'échelle ne sont ni des solutions universelles ni de simples modes managériales. Ils sont des réponses partielles à de vrais problèmes : dépendances, alignement, intégration, arbitrage, visibilité, ownership, apprentissage et qualité.

SAFe rend explicite la coordination d'entreprise, mais peut devenir lourd s'il institutionnalise les dépendances. LeSS cherche la simplicité structurelle, mais demande une transformation profonde et une forte maturité. Nexus et Scrum of Scrums offrent des mécanismes légers de coordination produit, mais ne traitent pas le portefeuille ou l'architecture. Kanban et Flight Levels rendent visible le flux et le WIP, mais exigent de vrais arbitrages. Team Topologies attaque le problème à la racine socio-technique, mais doit être complété par des mécanismes de décision et de portefeuille. Shape Up apporte une discipline de focalisation, mais n'est pas un operating model complet à grande échelle. Le Spotify Model rappelle l'importance de l'autonomie et de la culture, mais devient dangereux lorsqu'il est copié comme vocabulaire.

La conclusion centrale est la suivante :

> Un framework est utile lorsqu'il fournit un mécanisme proportionné à un problème réel. Il devient coûteux lorsqu'il remplace le diagnostic par la conformité.

La suite du papier peut donc analyser SAFe plus finement, non pour le promouvoir ou le rejeter, mais pour le décomposer en principes, mécanismes, cérémonies, rôles et vocabulaire. Cette décomposition permettra ensuite de décider ce qui doit être conservé, simplifié, remplacé ou supprimé dans une organisation cible.

## Sources initiales à approfondir

- Scaled Agile, Inc. *SAFe Framework documentation*.
- Schwaber, Ken. *Nexus Guide*.
- Larman, Craig; Vodde, Bas. *Large-Scale Scrum: More with LeSS*.
- Anderson, David J. *Kanban: Successful Evolutionary Change for Your Technology Business*.
- Klaus Leopold. *Rethinking Agile: Why Agile Teams Have Nothing To Do With Business Agility*; Flight Levels materials.
- Skelton, Matthew; Pais, Manuel. *Team Topologies*. IT Revolution, 2019.
- Kniberg, Henrik; Ivarsson, Anders. *Scaling Agile @ Spotify*.
- Basecamp. *Shape Up: Stop Running in Circles and Ship Work that Matters*.
- Project Management Institute. *Disciplined Agile materials*.
- Reinertsen, Donald G. *The Principles of Product Development Flow*. Celeritas, 2009.
- Forsgren, Nicole; Humble, Jez; Kim, Gene. *Accelerate*. IT Revolution, 2018.
