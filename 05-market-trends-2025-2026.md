# 5. Tendances de marche 2025-2026

## Question de recherche

Que font effectivement les grandes organisations en 2025-2026 pour organiser le developpement logiciel a grande echelle ?

## Intention du chapitre

Les chapitres precedents ont distingue les problemes fondamentaux de coordination, les principes generiques et les frameworks disponibles. Le chapitre 4 a ensuite decompose SAFe pour separer les mecanismes utiles de leur vocabulaire et de leurs ceremonies. Le present chapitre change de focale : il ne cherche plus a savoir ce qu'un framework prescrit, mais ce que le marche semble faire.

Cette distinction est importante. Une organisation peut declarer utiliser SAFe tout en le simplifiant fortement. Une autre peut rejeter SAFe tout en conservant des mecanismes proches : planification multi-equipes, portefeuille explicite, synchronisation periodique, roles de coordination, gouvernance d'architecture. Une troisieme peut ne plus parler d'agilite a l'echelle, mais investir massivement dans des plateformes internes, des pratiques DevOps, des metriques de flux, des equipes produit et des assistants d'IA. Dans les faits, ces trajectoires peuvent repondre aux memes problemes.

La question n'est donc pas :

> Quel framework gagne le marche ?

Elle devient :

> Quels mecanismes les grandes organisations conservent-elles, simplifient-elles, remplacent-elles ou automatisent-elles lorsqu'elles cherchent a coordonner plusieurs centaines ou milliers de personnes autour de produits logiciels ?

## 5.1 Limites de preuve et prudence methodologique

Le marche de l'organisation logicielle est difficile a observer directement. Les donnees disponibles sont fragmentaires, souvent biaisees, et rarement comparables.

Les sources utilisables se repartissent en cinq categories.

Premierement, les enquetes de marche donnent des signaux larges, mais elles reposent sur des repondants volontaires, des definitions variables et parfois des sponsors interesses. Le State of Agile de Digital.ai, les rapports DORA, les enquetes Stack Overflow ou les rapports d'editeurs sont utiles pour detecter des tendances, mais pas pour prouver l'efficacite d'un modele organisationnel.

Deuxiemement, les rapports de recherche comme DORA sont plus robustes sur certains liens entre pratiques, performance et experience developpeur. Ils restent toutefois des etudes observationnelles : ils indiquent des correlations et des modeles plausibles, pas des recettes universelles.

Troisiemement, les retours d'experience publics d'entreprises sont precieux pour comprendre les mecanismes concrets. Mais ils sont selectifs : les organisations publient plus volontiers des transformations reussies que des echecs, et elles attribuent parfois les resultats a un programme visible alors que les causes sont multiples.

Quatriemement, les prises de position de consultants, cabinets et editeurs signalent les termes dominants du marche : platform engineering, product operating model, AI-assisted delivery, value streams, DevEx, outcome-based planning. Ces termes doivent etre traites comme des indicateurs de demande et de langage, non comme des preuves.

Cinquiemement, la documentation officielle des frameworks et fournisseurs montre leur evolution. Par exemple, le fait que SAFe mette en avant en 2026 un "AI-Native SAFe" en acces anticipe montre que le framework cherche a absorber la vague IA, mais cela ne prouve pas que les entreprises l'adoptent ni que le modele soit efficace.

| Type de source | Ce qu'elle permet de dire | Ce qu'elle ne permet pas de dire |
|---|---|---|
| Enquetes de marche | Tendances declarees, vocabulaire dominant, priorites percues | Efficacite causale d'un framework |
| DORA et recherche empirique | Relations plausibles entre pratiques, performance et experience | Modele organisationnel complet a copier |
| Retours d'experience publics | Mecanismes concrets, conditions de succes, trajectoires | Representativite du marche |
| Documentation fournisseur | Intention, evolution d'une offre, vocabulaire commercial | Preuve independante d'impact |
| Blogs d'ingenierie | Pratiques reelles dans certains contextes | Generalisation a toute grande organisation |

La conclusion methodologique est la suivante : les tendances 2025-2026 doivent etre lues comme des directions convergentes, pas comme une photographie exhaustive du marche.

## 5.2 Synthese courte : ce qui change vraiment

Trois mouvements dominent la periode 2025-2026.

Le premier est la normalisation de l'hybridation. Les grandes organisations utilisent rarement un framework pur. Elles combinent des elements d'agile, de DevOps, de produit, de lean portfolio management, de platform engineering, de gouvernance d'architecture et, de plus en plus, d'IA assistee. Le State of Agile 2023 signalait deja que les grandes et moyennes organisations etaient plus enclines a utiliser des modeles hybrides qu'un modele agile standardise. L'edition 2025, telle que rapportee par ITPro a partir du 18e State of Agile, indique que 74 % des repondants utilisent des modeles hybrides, melanges ou internes, et que 41 % ont augmente leurs investissements agile sur les deux dernieres annees. [Source : Digital.ai 17th State of Agile](https://digital.ai/resource-center/analyst-reports/state-of-agile-report/) ; [Source : ITPro sur le 18th State of Agile](https://www.itpro.com/software/development/ai-is-transforming-agile-development-practices-as-teams-battle-mounting-delivery-cycle-pressure-and-roi-concerns).

Le deuxieme est le deplacement de l'attention du framework vers le systeme de livraison. Les rapports DORA 2024 et 2025 ne recommandent pas un framework de coordination a grande echelle ; ils insistent plutot sur les fondamentaux : petites tailles de lot, tests robustes, priorites stables, leadership transformationnel, plateformes internes, orientation utilisateur, apprentissage continu, mesure du flux et de la stabilite. Le rapport DORA 2025 resume l'IA comme un amplificateur des forces et faiblesses existantes de l'organisation, ce qui renforce l'idee que l'outillage ne compense pas un systeme de livraison mal concu. [Source : DORA 2024](https://dora.dev/research/2024/dora-report/) ; [Source : DORA 2025](https://dora.dev/research/2025/dora-report/).

Le troisieme est l'arrivee de l'IA comme sujet d'organisation, pas seulement comme outil individuel. Les assistants de code, agents de developpement, outils de revue, generation de tests, recherche documentaire et workflows semi-autonomes modifient les points de friction. Mais ils ne suppriment pas les problemes de coordination : ils les deplacent vers la verification, la gouvernance, la tracabilite, la securite, la qualite des donnees et la capacite a donner du contexte fiable aux outils. L'enquete Stack Overflow 2025 montre une adoption tres elevee des outils d'IA dans le developpement, mais aussi une confiance limitee dans leurs resultats : 84 % des repondants utilisent ou prevoient d'utiliser des outils d'IA, tandis que davantage de developpeurs disent se mefier de l'exactitude des sorties qu'y faire confiance. [Source : Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/ai).

Ces trois mouvements convergent vers une hypothese forte :

> Le marche ne remplace pas massivement SAFe par un autre grand framework unique. Il fragmente les frameworks en mecanismes, puis recompose des modeles internes plus proches du produit, du flux, de la plateforme et de la gouvernance de l'IA.

## 5.3 SAFe : persistance, simplification et repositionnement

SAFe reste present dans les grandes organisations, en particulier la ou la complexite organisationnelle, la conformite, les fournisseurs, les budgets pluriannuels et les dependances multi-domaines rendent attractive une structure explicite. Il serait premature d'annoncer sa disparition. Le framework continue d'etre maintenu, commercialise, enseigne et adapte. En 2026, le site officiel presente Core SAFe comme un modele operationnel pour l'echelle Lean-Agile et met en avant AI-Native SAFe comme extension en acces anticipe. [Source : Scaled Agile Framework](https://framework.scaledagile.com/).

Mais le signal de marche le plus interessant n'est pas seulement la persistance de SAFe. C'est sa mise sous pression.

Cette pression vient de plusieurs directions.

La premiere est la fatigue processuelle. Les organisations qui ont adopte SAFe de maniere extensive constatent souvent que le vocabulaire, les roles et les ceremonies peuvent devenir plus visibles que les decisions qu'ils sont censes faciliter. Les critiques recurrentes portent sur la lourdeur, le risque de centralisation, la perte d'autonomie des equipes, l'exces de planification et la transformation de l'agilite en conformite.

La deuxieme est l'exigence de resultats mesurables. Dans un contexte de ralentissement economique relatif, de pression sur les budgets technologiques et d'attentes fortes autour de l'IA, les directions demandent moins "sommes-nous conformes a un framework ?" et davantage "livrons-nous plus vite, avec moins de risques, sur les bons sujets ?". Cette question favorise les metriques de flux, de valeur, de qualite et de satisfaction, plutot que les indicateurs d'adoption ceremonielle.

La troisieme est la concurrence des modeles internes. Beaucoup d'organisations conservent certains mecanismes de SAFe tout en renommant ou simplifiant l'ensemble. Un "train" devient un domaine produit, une value stream, une tribu, un groupe de capacite ou une ligne de produit. Un PI Planning devient un cycle de planification trimestriel ou bimestriel. Un portefeuille SAFe devient un systeme d'arbitrage des initiatives. Le vocabulaire SAFe recule parfois alors que les problemes qu'il traitait restent traites.

La quatrieme est l'arrivee de l'IA et du platform engineering. Si une partie de la coordination peut etre reduite par des plateformes internes, des golden paths, de meilleurs feedback loops, une meilleure observabilite, des tests plus fiables et des assistants de developpement, alors une partie de la charge ceremonielle peut etre remise en question. Le besoin d'alignement ne disparait pas, mais il peut etre supporte par des mecanismes plus continus.

La trajectoire dominante n'est donc pas "SAFe ou rien". Elle ressemble plutot a ceci :

| Trajectoire | Description | Lecture prudente |
|---|---|---|
| Adoption continue | SAFe reste le modele explicite, souvent dans les environnements regules ou tres grands | Persistant, surtout lorsque l'organisation veut un langage commun et une structure de transformation |
| Simplification | Les roles, ceremonies et termes sont reduits ; les mecanismes centraux sont conserves | Frequent lorsque le framework devient trop visible ou trop couteux |
| Hybridation | SAFe est combine avec Team Topologies, DevOps, platform engineering, produit et OKR | Probablement la trajectoire la plus courante dans les grandes organisations matures |
| Adoption partielle | Seuls certains mecanismes sont gardes : planification multi-equipes, portefeuille, dependances, demos systeme | Souvent plus robuste que l'adoption nominale complete |
| Abandon du vocabulaire | L'organisation retire le label SAFe mais conserve des mecanismes equivalents | A ne pas confondre avec une disparition des besoins de coordination |

L'implication pour ce papier est directe : une organisation qui veut sortir de SAFe ne doit pas seulement supprimer les noms. Elle doit identifier quels problemes etaient effectivement geres par le dispositif, puis concevoir des mecanismes plus legers pour les traiter.

## 5.4 Le modele produit devient le langage dominant

Une tendance forte de 2025-2026 est le passage d'un langage de projet et de programme vers un langage de produit, de domaine et de flux de valeur.

Ce mouvement n'est pas nouveau, mais il devient plus explicite. Les grandes organisations cherchent a stabiliser des equipes autour de produits, plateformes, parcours ou domaines metier plutot qu'autour de projets temporaires. L'objectif est de reduire les couts de transaction : moins de handoffs, moins de reformation d'equipes, moins de perte de connaissance, plus de responsabilite de bout en bout.

Dans ce langage, les questions centrales deviennent :

- qui possede durablement le produit ou le domaine ?
- quelles interfaces cette equipe expose-t-elle aux autres ?
- quelle partie du flux peut-elle livrer sans attendre d'autres equipes ?
- quels objectifs business ou utilisateur justifient son travail ?
- quels investissements de plateforme reduisent la charge cognitive des equipes ?
- quelles decisions doivent rester au niveau portefeuille ?

Cette evolution converge avec les principes du chapitre 2 : alignement explicite, autonomie avec frontieres, reduction des dependances, feedback rapide, decision au bon niveau. Elle converge aussi avec Team Topologies, qui propose de penser l'organisation comme un systeme de flux entre equipes, avec des modes d'interaction explicites.

Le point important est que le "modele produit" ne remplace pas automatiquement les mecanismes de coordination. Il deplace la coordination vers les frontieres.

Une organisation peut creer des equipes produit et conserver les memes dependances si l'architecture reste fortement couplee, si le financement reste par projet, si les priorites changent toutes les deux semaines ou si les plateformes internes ne permettent pas de livrer de maniere autonome. Dans ce cas, le vocabulaire produit masque une realite de programme.

Le signal de maturite n'est donc pas l'existence de product managers ou de product operating model. C'est la capacite a donner aux equipes un perimetre stable, une responsabilite claire, des interfaces explicites, une capacite de livraison reelle et des arbitrages coherents au niveau portefeuille.

## 5.5 Platform engineering : la coordination deplacee dans l'infrastructure interne

Le platform engineering est l'une des tendances les plus structurantes de la periode. Il ne s'agit pas seulement de creer une equipe d'outillage. Il s'agit de transformer une partie de la coordination organisationnelle en capacites self-service, standards techniques, chemins recommandes et interfaces internes.

L'idee centrale est simple : si chaque equipe doit comprendre seule l'infrastructure, la securite, le deploiement, l'observabilite, la conformite, les environnements, les pipelines et les conventions d'architecture, alors l'autonomie locale devient couteuse. Les equipes passent du temps a resoudre des problemes similaires, les standards divergent, les risques augmentent et les dependances informelles se multiplient.

Une plateforme interne bien concue reduit cette charge. Elle offre des "golden paths" pour les cas frequents, des services reutilisables, des templates, des pipelines, des controles de securite integres, de l'observabilite et une experience developpeur plus fluide. Elle ne supprime pas la responsabilite des equipes produit ; elle leur donne un environnement plus previsible.

Le rapport DORA 2024 donne un signal nuance : les plateformes internes peuvent ameliorer la productivite individuelle, la performance d'equipe et la performance organisationnelle, mais elles peuvent aussi degrader la stabilite et le debit si elles sont mal implementees ou si elles reduisent l'independance des developpeurs. [Source : DORA 2024](https://dora.dev/research/2024/dora-report/).

Cette nuance est essentielle. Le platform engineering peut devenir une forme moderne de centralisation si la plateforme impose trop de contraintes, ignore les besoins des equipes ou devient un passage oblige pour toute evolution. A l'inverse, il peut etre un accelerateur puissant s'il est traite comme un produit interne, avec des utilisateurs, des boucles de feedback, des mesures d'adoption, une documentation claire et une capacite a accepter des exceptions.

| Probleme de coordination | Reponse processuelle classique | Reponse par plateforme |
|---|---|---|
| Divergence des pratiques de deploiement | Standards, comites, revues | Pipelines reutilisables et self-service |
| Dependances sur experts infrastructure | Tickets et files d'attente | Capacites exposees par API ou portail |
| Securite tardive | Gates de validation en fin de cycle | Controles integres dans les templates et pipelines |
| Environnements incoherents | Coordination manuelle | Provisioning automatise |
| Faible observabilite | Demandes aux equipes operations | Instrumentation par defaut |
| Onboarding lent | Documentation dispersee | Templates, exemples, reference applications |

Le marche semble donc deplacer une partie de la question "comment coordonner les equipes ?" vers "quelles capacites communes permettent aux equipes de moins se coordonner ?". C'est un changement profond : la meilleure coordination est parfois celle qui devient inutile parce que l'interface technique et operationnelle est stable.

## 5.6 IA : acceleration locale, nouveaux goulots globaux

L'IA assistee est le changement le plus visible de 2025-2026. Les donnees disponibles indiquent une adoption rapide. Stack Overflow 2025 rapporte que 84 % des repondants utilisent ou prevoient d'utiliser des outils d'IA dans leur processus de developpement, et que 51 % des developpeurs professionnels les utilisent quotidiennement. Mais la meme enquete montre une confiance limitee : davantage de developpeurs declarent se mefier de l'exactitude des resultats que leur faire confiance, et les usages restent plus faibles pour les taches a responsabilite systemique comme le deploiement, le monitoring ou la planification projet. [Source : Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/ai).

Le rapport DORA 2025 formule un point encore plus important pour les grandes organisations : l'IA agit comme un amplificateur. Elle augmente les forces d'une organisation deja disciplinee, mais elle expose aussi plus vite ses faiblesses : mauvaise qualite des tests, documentation obsolete, dette technique, priorites instables, architecture peu modulaire, gouvernance faible, flux de revue sature. [Source : DORA 2025](https://dora.dev/research/2025/dora-report/).

Ce constat change la lecture de l'agilite a l'echelle. L'IA peut accelerer l'ecriture de code, la generation de tests, la recherche dans une base documentaire, la creation de prototypes, l'analyse de logs, la preparation de tickets, la migration de code ou la revue preliminaire. Mais si le systeme de livraison ne sait pas absorber ce flux supplementaire, le goulot se deplace.

Les nouveaux goulots typiques sont :

- revue de code et verification ;
- qualite des tests et pertinence des assertions ;
- securite du code genere ;
- tracabilite des decisions et des changements ;
- coherence avec l'architecture cible ;
- gestion des secrets et donnees sensibles ;
- qualite du contexte donne aux agents ;
- explosion de variantes locales non maintenables ;
- saturation des mainteneurs seniors charges de valider.

Thoughtworks place en 2026 plusieurs pratiques liees a ces enjeux dans son Technology Radar : context engineering, instructions partagees pour les equipes logicielles, feedback sensors pour agents de code, mutation testing et usage prudent des metriques DORA pour eviter de mesurer la productivite par lignes de code generees. [Source : Thoughtworks Technology Radar Vol. 34](https://www.thoughtworks.com/radar/techniques).

L'implication organisationnelle est forte : l'IA ne reduit pas le besoin de discipline technique. Elle le rend plus visible.

Dans les organisations matures, l'IA pousse vers :

- des instructions partagees par repository, domaine ou plateforme ;
- des reference applications qui servent de source de verite ;
- des tests automatises plus fiables ;
- des controles de securite integres ;
- des politiques de donnees et de confidentialite ;
- des workflows de revue adaptes ;
- des metriques de flux et de rework ;
- des environnements de developpement capables de fournir le bon contexte aux agents.

Dans les organisations moins matures, l'IA risque de produire l'effet inverse : plus de code, plus de changements, plus de dette, plus de revue, plus de risques. La productivite locale peut augmenter pendant que la performance systemique baisse.

## 5.7 Metriques : retour du flux, de la stabilite et de la valeur

Une autre tendance 2025-2026 est la mefiance croissante envers les metriques d'activite. Les grandes organisations ont longtemps mesure l'agilite a travers des indicateurs comme le nombre de story points, le respect de ceremonies, la velocite locale, le taux d'occupation ou la livraison d'engagements de planification. Ces mesures sont faciles a produire, mais elles peuvent encourager des comportements faibles : gonfler les estimations, maximiser l'activite, cacher l'incertitude, ou optimiser une equipe au detriment du systeme.

L'IA rend ce probleme plus aigu. Si du code peut etre genere plus vite, mesurer le volume de code devient encore moins pertinent. Thoughtworks insiste explicitement sur le fait que la productivite ne doit pas etre mesuree par les lignes de code generees par l'IA, mais par des effets visibles dans le flux et la stabilite. Le Technology Radar 2026 rappelle l'utilite des metriques DORA : lead time, frequence de deploiement, temps de restauration, taux d'echec des changements, et rework rate. [Source : Thoughtworks Technology Radar Vol. 34](https://www.thoughtworks.com/radar/techniques).

Le signal de marche est donc le passage de metriques de conformite vers des metriques de capacite.

| Question de management | Metrique faible | Metrique plus utile |
|---|---|---|
| Les equipes travaillent-elles ? | Taux d'occupation, nombre de tickets | Debit, WIP, blocages, temps d'attente |
| Livrons-nous plus vite ? | Velocite, points termines | Lead time, frequence de deploiement |
| Livrons-nous mieux ? | Nombre de releases | Taux d'echec, rework, incidents, satisfaction utilisateur |
| L'IA aide-t-elle ? | Lignes de code generees, prompts utilises | Impact sur lead time, qualite, revue, rework, satisfaction developpeur |
| Le portefeuille est-il maitrise ? | Nombre d'initiatives lancees | WIP portefeuille, delai de decision, taux d'arret, valeur realisee |

La prudence reste necessaire. Les metriques DORA elles-memes peuvent etre mal utilisees si elles deviennent un outil de comparaison punitive entre equipes. Leur valeur principale est d'ouvrir une conversation d'amelioration : ou attendons-nous ? ou cassons-nous ? ou retravaillons-nous ? quelles contraintes empechent une livraison plus fluide ?

La tendance la plus saine est donc l'usage de metriques comme instruments de diagnostic systemique, pas comme tableau de classement.

## 5.8 Secteurs : trajectoires differenciees

Les tendances ne se manifestent pas de la meme maniere selon les secteurs. Les contraintes de risque, de regulation, d'architecture, de cycle d'investissement et de culture de management produisent des trajectoires distinctes.

### Grandes entreprises logicielles et cloud

Les grands acteurs logiciels et cloud privilegient generalement des modeles internes plutot que des frameworks commerciaux complets. Ils investissent dans les plateformes internes, les outils de developpement, l'automatisation, l'observabilite, les systemes de build, les pratiques de revue et l'IA assistee. Leurs contraintes principales sont l'echelle technique, la fiabilite, la securite, la productivite developpeur et la coherence de plateformes tres larges.

Dans ces environnements, le vocabulaire dominant est rarement celui de SAFe. On parle davantage de plateformes, de services, de proprietaires de composants, de reliability, de developer productivity, de paved roads, de standards d'architecture, de revues techniques et d'outillage interne. La coordination est souvent encodee dans des APIs, des plateformes, des standards et des processus de revue plutot que dans un framework unique.

L'IA y progresse vite, mais sous controle humain. Les declarations publiques de Google depuis 2024 sur la part de code generee par IA, puis revu par des ingenieurs, illustrent cette direction : l'enjeu n'est pas seulement d'ecrire plus vite, mais de maintenir un systeme de verification et de responsabilite. [Source : The Verge sur les declarations Google 2024](https://www.theverge.com/2024/10/29/24282757/google-new-code-generated-ai-q3-2024).

### Entreprises cloud-native et digital-native

Les organisations digital-native ont souvent moins besoin d'un framework d'echelle formel, surtout lorsqu'elles ont grandi avec des architectures modulaires, des equipes produit stables et des pratiques DevOps fortes. Leur risque principal n'est pas l'absence de ceremonies, mais la fragmentation : trop d'autonomie locale, duplication d'outils, divergence des pratiques, dette de plateforme, incoherence de l'experience utilisateur.

Leur trajectoire typique est donc l'ajout progressif de mecanismes de coordination : plateformes internes, standards de securite, architecture decision records, revues transverses, communautes de pratique, planning par domaine, gestion explicite des dependances entre plateformes et produits.

Elles illustrent un point important : meme les organisations qui refusent les grands frameworks finissent par creer des mecanismes d'echelle. La difference est que ces mecanismes naissent souvent de contraintes techniques et produit plutot que d'un programme de transformation central.

### Banque, assurance et services financiers

Les services financiers combinent plusieurs contraintes : regulation, auditabilite, cybersecurite, heritage applicatif, dependances fortes entre domaines, besoins de tracabilite et pression concurrentielle sur le numerique. Ce contexte explique la persistance de modeles explicites de coordination, y compris SAFe ou des modeles proches.

Mais la tendance n'est pas seulement a la standardisation. Les banques et assureurs cherchent aussi a accelerer la livraison par plateformes internes, DevSecOps, automatisation des controles, cloud hybride, engineering excellence, gestion de portefeuille plus explicite et modeles produit. Dans ce secteur, l'IA est adoptee avec prudence : les cas d'usage internes progressent, mais la gouvernance, la confidentialite, l'audit et la validation restent determinants.

La trajectoire la plus plausible est hybride : conserver une couche de gouvernance forte, simplifier les ceremonies lorsque possible, automatiser les controles repetitifs, renforcer les plateformes et mesurer davantage le flux que la conformite agile.

### Industrie, automobile, aeronautique et systemes embarques

Les entreprises industrielles ont des contraintes differentes : cycles materiels longs, integration systeme, fournisseurs, exigences de securite, normes, verification, synchronisation hardware-software, lignes de produits et dependances physiques. Dans ces contextes, l'agilite logicielle pure se heurte a des horizons d'integration plus longs.

SAFe et les modeles de coordination multi-domaines restent attractifs car ils donnent un langage pour synchroniser logiciel, materiel, fournisseurs, architecture et portefeuille. Mais la encore, l'efficacite depend moins du framework que de la capacite a modulariser les architectures, integrer plus frequemment, simuler, tester automatiquement et reduire les dependances.

Le mouvement 2025-2026 dans l'industrie ressemble a une hybridation entre systemes engineering, DevOps, plateformes, gestion de produit et coordination a grande echelle. Les pratiques logicielles avancent, mais elles doivent composer avec des contraintes de verification et de supply chain plus fortes que dans le logiciel pur.

### Telecommunications

Les telecoms combinent systemes critiques, reseaux, plateformes, operations, fournisseurs, regulation et forte pression sur les couts. Elles ont souvent adopte des frameworks de transformation a grande echelle, mais elles investissent aussi dans l'automatisation reseau, les plateformes cloud, l'observabilite, la simplification du portefeuille applicatif et les modeles produit.

La coordination y reste necessaire car les dependances techniques et operationnelles sont nombreuses. La tendance n'est donc pas a l'autonomie totale des equipes, mais a une autonomie encadree par des plateformes, des standards d'architecture, des cycles de planification et des controles operationnels.

### Secteur public et environnements fortement regules

Le secteur public et les environnements fortement regules privilegient souvent les mecanismes explicites : gouvernance, comites, budget, conformite, audit, fournisseurs, documentation. Les frameworks a grande echelle peuvent y etre attractifs parce qu'ils donnent une structure visible de transformation.

Mais ces environnements souffrent aussi particulierement lorsque les frameworks deviennent du theatre organisationnel. Si les droits de decision restent separes des equipes, si les fournisseurs sont pilotes par contrats rigides, si l'architecture impose des dependances fortes et si les controles restent tardifs, les ceremonies agiles n'ameliorent pas le flux.

La trajectoire la plus robuste pour ces secteurs est l'adaptation prudente : conserver la tracabilite et les controles necessaires, mais reduire les lots, automatiser les preuves, clarifier les frontieres de responsabilite, renforcer la capacite technique interne et eviter de confondre reporting et pilotage.

## 5.9 Typologie des trajectoires observees

Les organisations ne se repartissent pas proprement entre "SAFe", "Scrum", "DevOps" et "produit". Elles suivent plutot des trajectoires.

| Trajectoire | Description | Mecanisme conserve | Risque principal |
|---|---|---|---|
| Framework explicite | SAFe ou modele equivalent reste le langage officiel | Alignement, planification, portefeuille, roles de coordination | Conformite processuelle |
| Framework simplifie | Le framework est reduit a quelques mecanismes utiles | Synchronisation, dependances, objectifs, arbitrage | Perdre des controles necessaires sans les remplacer |
| Modele produit interne | L'organisation structure les equipes autour de produits/domaines | Ownership durable, objectifs, flux de valeur | Produit de nom seulement, financement toujours par projet |
| Platform-led | La coordination est reduite par plateformes internes et self-service | Standards, golden paths, automatisation, DevEx | Plateforme centrale devenue goulet |
| DevOps/flow-led | Le pilotage se fait par flux, qualite, fiabilite et livraison continue | CI/CD, metriques, observabilite, tests | Optimisation technique sans arbitrage portefeuille |
| AI-augmented | L'IA assiste l'ecriture, la revue, les tests, la documentation et l'analyse | Agents, contexte, verification, gouvernance | Acceleration du rework et des risques |
| Regulated hybrid | Gouvernance forte combinee a des pratiques produit, DevSecOps et plateformes | Audit, conformite, portefeuille, automatisation | Lourdeur persistante et faible autonomie |

Cette typologie montre que les organisations matures ne choisissent pas un seul axe. Elles combinent plusieurs trajectoires, mais avec une hierarchie claire. Par exemple, une banque peut etre "regulated hybrid", utiliser certains mecanismes SAFe, construire une plateforme interne, adopter des metriques DORA et experimenter l'IA. Une entreprise cloud-native peut etre "platform-led" et "AI-augmented" sans jamais utiliser le vocabulaire agile a l'echelle.

Le choix pertinent n'est donc pas un choix d'etiquette. C'est un choix d'architecture organisationnelle.

## 5.10 Ce que les organisations abandonnent vraiment

Le marche ne semble pas abandonner les problemes d'echelle. Il abandonne progressivement certaines reponses faibles.

Premier abandon : la croyance qu'un framework suffit. Les organisations sont plus attentives aux conditions techniques et organisationnelles qui rendent un framework utile : architecture, tests, CI/CD, priorites stables, capacite de decision, leadership, plateformes, qualite du portefeuille.

Deuxieme abandon : la mesure d'activite comme proxy de performance. Les story points, la velocite locale, le taux d'occupation ou le nombre de lignes de code perdent de leur credibilite, surtout avec l'IA. Les metriques de flux, de stabilite, de rework, de valeur et d'experience developpeur deviennent plus pertinentes.

Troisieme abandon : l'autonomie sans interfaces. Les organisations comprennent mieux que l'autonomie d'equipe n'est productive que si les frontieres sont claires, les dependances reduites et les plateformes suffisantes. Sinon, l'autonomie devient de la negociation permanente.

Quatrieme abandon : le pilotage de transformation par ceremonies. Les ceremonies ne sont conservees que lorsqu'elles produisent des decisions, de l'apprentissage ou de la synchronisation utile. Les organisations cherchent a reduire les reunions qui ne changent ni les priorites, ni les dependances, ni les risques.

Cinquieme abandon : l'IA comme simple outil individuel. L'IA devient un sujet de systeme : contexte, verification, gouvernance, securite, tracabilite, cout, donnees et standards d'usage.

Ces abandons ne sont pas uniformes. Beaucoup d'organisations restent prisonnieres d'anciens reflexes. Mais la direction du marche est visible : moins de foi dans les formes, plus d'attention aux mecanismes.

## 5.11 Implications pour la reconstruction du chapitre 6

Pour construire un modele minimal au chapitre suivant, il faut tenir compte de quatre enseignements du marche.

Premierement, les grandes organisations conservent un besoin d'alignement intermediaire. Meme lorsqu'elles rejettent les grands frameworks, elles ont besoin d'un horizon de planification, d'objectifs partages, d'arbitrage de capacite et de visibilite sur les dependances. Le chapitre 6 ne peut donc pas proposer une autonomie purement locale.

Deuxiemement, la reduction des dependances doit primer sur leur gestion. Le marche se tourne vers les plateformes, les frontieres produit, les interfaces, les architectures modulaires et les golden paths parce que la coordination par reunion atteint vite ses limites. Le modele cible doit donc traiter l'organisation et l'architecture ensemble.

Troisiemement, la gouvernance de portefeuille est indispensable. Beaucoup d'echecs attribues a l'agile viennent en realite d'un exces de travail engage, de priorites instables ou d'une incapacité a arreter des initiatives. Un modele minimal doit inclure un mecanisme explicite de limitation du WIP au niveau portefeuille.

Quatriemement, l'IA renforce les fondamentaux. Elle ne remplace ni les tests, ni la qualite, ni l'architecture, ni la responsabilite produit, ni la gouvernance. Elle augmente la valeur d'un systeme bien structure et augmente le cout d'un systeme mal structure.

La reconstruction du chapitre 6 devra donc eviter deux erreurs symetriques :

- reconstruire un framework complet sous un autre nom ;
- croire qu'une combinaison d'equipes autonomes, d'outils modernes et d'IA suffit a coordonner une grande organisation.

Le modele minimal devra etre plus sobre : quelques mecanismes obligatoires, justifies par les problemes qu'ils resolvent, et adaptables selon le niveau de couplage, de regulation et de maturite technique.

## Conclusion du chapitre

Le marche 2025-2026 ne montre pas une sortie simple de SAFe vers un successeur unique. Il montre une decomposition. Les organisations conservent les problemes d'echelle, mais elles recomposent les reponses : produit, plateformes internes, DevOps, metriques de flux, gouvernance de portefeuille, architecture evolutive et IA assistee.

SAFe reste present, surtout dans les environnements tres grands ou regules, mais il est souvent simplifie, hybridise ou traduit dans un vocabulaire interne. Les organisations les plus matures semblent moins chercher un framework total qu'un systeme de livraison coherent.

Le point decisif est le suivant : en 2025-2026, la coordination logicielle a grande echelle se gagne moins par l'ajout de ceremonies que par la reduction structurelle du besoin de coordination. Cela passe par des frontieres d'equipe plus claires, des plateformes internes utiles, des architectures moins couplees, des priorites plus stables, des boucles de feedback plus rapides, des metriques de flux, et une gouvernance de l'IA centree sur la verification.

Autrement dit, le marche confirme l'intuition centrale de ce papier : les frameworks ne sont pas les fondations. Les fondations sont les problemes, les principes et les mecanismes. Les frameworks ne sont qu'une maniere possible, parfois utile et parfois couteuse, de les assembler.
