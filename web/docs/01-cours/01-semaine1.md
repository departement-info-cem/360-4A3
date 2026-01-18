---
title: Semaine 1
description: Lancement du projet scientifique
---

# 🚀 Lancement du projet scientifique

:::info Objectifs
### 🎯 Objectifs
Aujourd'hui, vous allez :
- comprendre ce qu’est un **projet scientifique** en informatique
- former une **équipe de travail**
- explorer des **pistes de projets**
- identifier des **sources de données potentielles**
- amorcer une **démarche scientifique réaliste**
:::

::::note Déroulement typique d'une semaine
## 🗓️ Déroulement d'une semaine
### ⏳ Temps en classe (3 heures)
:::danger Rencontres hebdomadaires obligatoires
Chaque semaine, je rencontrerai chaque équipe de 15 à 20 minutes pour :
- faire le point sur l'avancement du projet
- discuter des difficultés rencontrées
- valider les choix méthodologiques
- orienter la démarche scientifique
- soutenir la progression du projet
- valider les prochaines étapes
- échanger des idées
- etc.
:::
Vous passerez le reste du temps de cours à travailler en équipe sur votre projet.

👉 À la fin de chaque cours, avant de quitter, vous devez déterminer clairement les tâches de chaque membre de l’équipe d'ici à la prochaine rencontre.<br/>
Vous devez noter ces tâches dans un fichier texte de suivi de projet facile à trouver dans votre repo GitHub, dans l'un de ces langages :
- [Markdown (.md)](https://info.cegepmontpetit.ca/420-SN1/recettes/creer-markdown)
- Typst (.typ)
- LaTeX (.tex)

### ⏳ Travail entre les cours (3 hrs)
En plus du travail en classe, vous devrez aussi consacrer du temps entre les cours pour :
- avancer sur les tâches assignées
- faire des recherches sur des aspects spécifiques du projet
- préparer la prochaine rencontre avec moi

👉 Il vous est aussi possible de vous faire des rencontres d'équipe en dehors des heures de cours lorsque nécessaire.
::::

:::info Qu’est-ce qu’un projet scientifique en informatique ?
## 🧠 Projet scientifique en informatique
Un projet scientifique en informatique ne consiste **pas** simplement à programmer une application ou à apprendre une nouvelle technologie.

Il repose sur la mise en place d’une **expérience numérique**, qui peut prendre différentes formes :
- l’analyse de **données réelles existantes** (bases de données, images, sons, mesures, etc.)
- la **génération de données** par simulation ou par modèles
- la **comparaison d’algorithmes ou de méthodes** à l’aide de protocoles contrôlés

Dans tous les cas, le projet doit produire des **résultats mesurables**, qui seront analysés, interprétés et discutés de façon rigoureuse.

👉 Peu importe l’approche choisie, on doit toujours retrouver :
- une **question de recherche**
- un **protocole** (comment l’expérience est réalisée)
- des **résultats observables**
- une **analyse critique des limites**

### 🧭 Démarche scientifique :
```mermaid
flowchart TD
A[💡 Phénomène ou problème à étudier] --> B[❓ Question de recherche]
B --> C[🧪 Expérience numérique]

C --> C1[📂 Données réelles :<br/>bases de données, images, sons, mesures]
C --> C2[🧬 Données générées :<br/>simulations, données synthétiques]
C --> C3[⚙️ Comparaison d’algorithmes :<br/>protocoles contrôlés]

C1 --> D[📊 Résultats mesurables]
C2 --> D
C3 --> D

D --> E[🔍 Analyse et visualisation]
E --> F[🧠 Interprétation scientifique]
F --> G[⚠️ Limites, biais et validité]
G --> H[🔁 Pistes d’amélioration ou nouvelles questions]
```
:::

::::tip Les équipes
## 👥 Formation des équipes
- Les équipes seront composées de **3 personnes**
- Si le nombre total `n` d’étudiants n’est pas un multiple de 3 (`n % 3 != 0`) :
  - si `n % 3 == 2`, alors **1 équipe de 2** sera aussi formée
  - si `n % 3 == 1`, alors **2 équipes de 2** seront aussi formées
- Vous devez m'indiquer vos équipes **avant la fin du cours aujourd'hui**.

👉 Travaillez avec des personnes :
- avec qui vous pouvez communiquer facilement
- avec qui vous êtes capables de vous organiser
- qui ont des forces complémentaires

:::warning repo GitHub commun
### 🐙 Repo GitHub
Chaque équipe devra créer un **repo GitHub commun** pour le projet.  

Aussitôt votre équipe formée :
- **Un membre** doit créer le repo GitHub et inviter les autres membres de l’équipe à y collaborer.
- Tous les membres de l’équipe doivent avoir des **droits d’écriture** sur ce repo.
- Votre repo doit être **privé** pour protéger la confidentialité de votre travail.
- Vous devez aussi m’inviter comme collaborateur!
  - avant de la fin du cours aujourd'hui 
  - je vais écrire mon nom d’utilisateur GitHub sur le tableau
  :::
  ::::

:::info Présentation des projets proposés
## 🧪 Projets proposés
[Plusieurs projets](/projets/projets) vous sont proposés comme **points de départ**.  
Chaque projet :
- est volontairement **ouvert**
- peut être abordé selon différents angles
- devra être **délimité et validé**

👉 Vous n’êtes **pas obligés** de suivre un projet à la lettre :  
vous devrez le **transformer en question de recherche** adaptée à vos intérêts et aux données disponibles.
:::

:::tip Activité en classe
## 🔍 Exploration initiale
En équipe :

1. Parcourez les projets proposés sur le site du cours  
2. Discutez d'autres idées de projets qui pourraient vous intéresser
3. Retenez **2 à 3 projets** à explorer plus en détail (y compris des projets hors liste)
4. Pour chacun, discutez :
   - du phénomène étudié
   - du type de données possibles
   - des questions de recherche envisageables
   - de ce que vous comprenez… et de ce qui est flou

👉 L’objectif n’est **pas** de décider définitivement, mais d’explorer.
:::

::::info Recherche de sources de données (important)
## 📂 Sources de données
Certains projets de recherche en informatique ne nécessitent pas de données réelles (ex. simulations, protocoles contrôlés).  

Cependant, la plupart des projets **s’appuient sur des données existantes**.
Pour de tels projets, les équipes sont responsables de **chercher des sources de données** pour leur projet.

Vous pouvez utiliser :
- des portails de données ouvertes
- des bases de données scientifiques accessibles
- des jeux de données institutionnels
- des données issues de projets de recherche ou de vulgarisation

👉 À ce stade, il ne s’agit **pas** d’analyser les données, mais de vérifier :
- qu’elles existent
- qu’elles sont accessibles
- qu’elles semblent exploitables

Voici quelques exemples de sources de données ouvertes qui pourraient vous être utiles :
- Données gouvernementales :
  - [Données Québec](https://www.donneesquebec.ca/)
  - [Gouvernement ouvert](https://ouvert.canada.ca/) (Canada)
  - [Data.gov](https://www.data.gov/) (États-Unis)
- Données scientifiques institutionnelles :
  - [NASA Open Data](https://data.nasa.gov/)
  - [Global Biodiversity Information Facility](https://www.gbif.org/)
  - [USGS – Seismology](https://earthquake.usgs.gov/)
- Répertoires de jeux de données pour l’apprentissage automatique :
  - [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/index.php)
  - [Kaggle Datasets](https://www.kaggle.com/datasets)
- Plateformes de dépôt de données de recherche :
  - [Zenodo](https://zenodo.org/)
  - [Figshare](https://figshare.com/)
- Moteur de recherche de jeux de données :
  - [Google Dataset Search](https://datasetsearch.research.google.com/)

👉 Toutes les sources ne sont pas également documentées ou adaptées à un projet scientifique. La **qualité**, la **provenance** et la **compréhension** des données sont plus importantes que leur **quantité**.

:::warning Validation obligatoire des sources de données
### ✅ Validation des données
Les sources de données devront être **validées par moi** le plus tôt possible dans le projet.

Vous devez être en mesure de préciser :
- la provenance des données
- le type de données (texte, image, audio, numérique, etc.)
- le volume approximatif
- les conditions d’utilisation (si connues)

👉 Pour vous aider à garder un projet réaliste, si une source de données ne semble pas appropriée, le projet devra être ajusté ou redéfini.
:::
::::

:::success Rencontre de la semaine prochaine
## 👉 Pour la semaine prochaine
Pour la rencontre de votre équipe avec moi la semaine prochaine, vous devez être prêts à présenter :
- le projet sur lequel vous vous êtes mis d’accord d'explorer (si vous avez fait un choix)
  - ça peut être un projet proposé ou une idée originale de votre équipe
- deux projets entre lesquels vous hésitez (si vous n’avez pas fait de choix définitif)
- pour chaque projet retenu :
  - une description du phénomène ou problème à étudier
  - des pistes de sources de données potentielles
  - des idées de questions de recherche possibles
:::
