---
title: 📝 Proposition de projet (10%)
description: Semaine 5
---

Cette semaine marque un **jalon important** du cours.

Vous devez remettre une **proposition de projet scientifique**, qui présente clairement :

- le **problème ou phénomène étudié**
- la **question de recherche**
- les **données ou l’expérience envisagée**
- la **démarche scientifique prévue**

👉 Cette proposition servira de **base officielle** pour la suite du projet.  
Elle pourra évoluer, mais toute modification majeure devra être **justifiée et validée**.

:::info-nt
## 🎯 Objectifs de la proposition

La proposition de projet vise à vérifier que :

- votre projet est **scientifiquement pertinent**
- la question de recherche est **claire et bien formulée**
- les données ou expériences sont **réalistes et accessibles**
- la démarche est **cohérente avec le temps et le niveau du cours**

👉 Il ne s’agit **pas encore** de l’article scientifique final, mais d’un **engagement scientifique initial**.
:::

## 📌 Modalités

:::tip-nt
### 📄 Format du document

- Travail **en équipe**
- Document rédigé avec **Typst**
- Utilisation du **gabarit de projet 4A3**
- Rédaction et collaboration dans **Typst Web**
- Remise en format **PDF**

👉 Téléchargez le [gabarit de projet 4A3](/ressources/gabarits/gabarit_projet.zip).

📌 Référez-vous à la section [Écrire en Typst](/methodes/typst) pour savoir comment utiliser Typst Web, travailler en équipe, ajouter des références, des figures ou des équations et exporter votre PDF.
:::

:::warning-nt
### 🔁 Un même document pendant toute la session

Le projet Typst créé pour cette proposition doit être **conservé pendant toute la session**.

Après la remise de la proposition :

- vous continuerez à travailler dans **le même `article.typ`**
- vous réviserez les sections existantes selon la rétroaction reçue
- vous ajouterez progressivement vos références et vos figures
- votre proposition évoluera jusqu’à devenir votre **article scientifique final**

👉 Ne créez pas un nouveau document Typst pour l’article scientifique final.
:::

:::info-nt
### 📌 Longueur attendue

- **3 à 5 pages maximum**, références exclues
- Qualité > quantité
- Clarté et rigueur scientifique priorisées

👉 Un document trop long ou trop vague sera pénalisé.
:::

## 🧩 Contenu attendu

:::info-nt
### 1. Introduction

Présentez :

- le **contexte général** du projet
- le phénomène ou problème étudié
- pourquoi ce sujet est pertinent scientifiquement
- votre **question de recherche principale**
- une ou deux sous-questions, si nécessaire

👉 Cette section doit permettre de comprendre **pourquoi le projet mérite d’être étudié et ce que vous cherchez à découvrir**.

📌 Référez-vous à [Formuler de bonnes questions de recherche](/methodes/questions-recherche).
:::

:::tip-nt
### 2. Données ou expérience envisagée

Décrivez :

- le **type de données** : réelles ou générées
- leur provenance, si elles existent déjà
- ou le principe de la simulation / expérience numérique
- le volume approximatif
- les contraintes connues

📌 Référez-vous à [Comment évaluer la qualité d’un jeu de données?](/methodes/source-donnees).
:::

:::info-nt
### 3. Méthodologie prévue

Expliquez :

- comment vous comptez répondre à la question de recherche
- les grandes étapes de l’expérience numérique
- les algorithmes, modèles ou simulations envisagés
- les paramètres à étudier, si applicable
- les types d’analyses envisagées
- les mesures, comparaisons ou visualisations prévues

👉 Il n’est **pas nécessaire** de fournir des détails techniques exhaustifs à ce stade.
:::

:::warning-nt
### 4. Faisabilité et limites

Discutez brièvement :

- des défis techniques anticipés
- des limites possibles des données ou du modèle
- des hypothèses importantes
- des éléments du projet qui pourraient devoir être ajustés

👉 Identifier des limites est un **signe de maturité scientifique**, pas une faiblesse.
:::

:::tip-nt
### Références

Incluez notamment :

- les sources de données
- les articles ou ressources scientifiques utilisées
- les ressources explicatives pertinentes
- la documentation utile au projet

Les références doivent être ajoutées dans `references.bib` et citées dans le texte.

👉 Il n’est **pas attendu** que vous citiez des articles de recherche avancés que vous ne comprenez pas.
:::

## 🧮 Grille d’évaluation (10%)

:::info-nt

<table style={{ width: '100%', tableLayout: 'auto' }}>
    <tr>
        <th>Critère évalué</th>
        <th>Description</th>
        {['Absent', 'Insatisfaisant', 'Acceptable', 'Très satisfaisant', 'Excellent'].map((titre) => (
            <th
                style={{
                    width: '1%',
                    minWidth: '32px',
                    height: '150px',
                    verticalAlign: 'bottom',
                    textAlign: 'center',
                    padding: '4px',
                }}
            >
                <div
                    style={{
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                        whiteSpace: 'nowrap',
                        margin: '0 auto',
                    }}
                >
                    {titre}
                </div>
            </th>
        ))}
    </tr>

    <tr>
        <td><strong>Introduction et question de recherche</strong></td>
        <td>
            Présente clairement le contexte, la pertinence scientifique et la question de recherche.
        </td>
        <td>0</td><td>0,5</td><td>1,5</td><td>2,5</td><td>3</td>
    </tr>

    <tr>
        <td><strong>Données ou expérience envisagée</strong></td>
        <td>
            Décrit clairement les données ou l’expérience envisagée et leur provenance ou génération.
        </td>
        <td>0</td><td>0,5</td><td>1</td><td>1,5</td><td>2</td>
    </tr>

    <tr>
        <td><strong>Méthodologie prévue</strong></td>
        <td>
            Propose une démarche cohérente avec la question de recherche et les données.
        </td>
        <td>0</td><td>0,5</td><td>1</td><td>1,5</td><td>2</td>
    </tr>

    <tr>
        <td><strong>Faisabilité et limites</strong></td>
        <td>
            Évalue avec réalisme les contraintes, limites et hypothèses du projet.
        </td>
        <td>0</td><td>0,25</td><td>0,5</td><td>0,75</td><td>1</td>
    </tr>

    <tr>
        <td><strong>Références</strong></td>
        <td>
            Utilise des références pertinentes et les cite correctement.
        </td>
        <td>0</td><td>0,25</td><td>0,5</td><td>0,75</td><td>1</td>
    </tr>

    <tr>
        <td><strong>Qualité du français écrit</strong></td>
        <td>
            Communique les idées clairement dans un français de qualité.
        </td>
        <td>0</td><td>0,25</td><td>0,5</td><td>0,75</td><td>1</td>
    </tr>

    <tr>
        <td><strong>Total</strong></td>
        <td colSpan="6" style={{ textAlign: 'right' }}><strong>/ 10</strong></td>
    </tr>
</table>

:::

:::tip-nt
## 👉 Et après?

Après la remise de la proposition :

- vous recevrez une **rétroaction**
- certains projets devront être **ajustés**
- la version validée deviendra la **base officielle** du projet
- vous continuerez à faire évoluer **le même document Typst** pendant la session

📌 Cette proposition constitue la **première version de votre article scientifique final**.

👉 Finalisez maintenant votre [Présentation de projet](/cours/semaine6) pour la semaine prochaine!

:::
