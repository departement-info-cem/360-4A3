---
title: 🛠️ Développement et analyse (15%)
description: Semaines 7 à 12
---

Les semaines 7 à 12 constituent la **phase principale de développement du projet**.

Votre objectif est maintenant de mettre en œuvre la démarche proposée, de produire des résultats, de les analyser et d’ajuster votre approche lorsque nécessaire.

👉 Le projet continuera probablement à évoluer : votre démarche doit rester **rigoureuse, documentée et guidée par votre question de recherche**.

:::info-nt
## 🎯 Objectifs

Durant cette période, vous devez :

- développer votre expérience numérique, simulation ou analyse
- préparer, générer ou traiter les données nécessaires
- tester et ajuster votre méthodologie
- produire des résultats pertinents
- analyser et valider ces résultats
- résoudre les problèmes rencontrés
- contribuer activement au travail de l’équipe
- documenter votre travail individuel

👉 Cette période est évaluée **individuellement**, même si le projet est réalisé en équipe.
:::

## 🧭 Développer le projet

:::tip-nt
### 💻 Mettre en œuvre la méthodologie

À partir de votre proposition de projet, développez progressivement votre démarche.

Selon votre projet, cela peut notamment inclure :

- la préparation ou le nettoyage des données
- la génération de données
- le développement d’une simulation
- l’implantation d’algorithmes ou de modèles
- l’exécution d’expériences numériques
- l’analyse statistique
- la production de visualisations

👉 Travaillez de façon **progressive** : développez, testez, observez, puis ajustez.
:::

:::info-nt
### 🧪 Tester et valider

Ne vous contentez pas d’obtenir un résultat.

Vous devez chercher à déterminer :

- si votre méthode fonctionne comme prévu
- si vos résultats sont cohérents
- si certaines valeurs sont inattendues
- si vos paramètres influencent les résultats
- si vos résultats permettent réellement de répondre à votre question

👉 Un résultat intéressant doit être **compris et interprété**, pas seulement produit.
:::

:::warning-nt
### 🔄 Ajuster la démarche

Il est normal de devoir modifier certains choix pendant le développement.

Vous pourriez devoir :

- changer une méthode
- modifier certains paramètres
- simplifier une expérience
- nettoyer les données différemment
- ajouter un test
- abandonner une piste qui ne fonctionne pas

👉 Ces ajustements font partie de la démarche scientifique. L’important est de pouvoir expliquer **pourquoi** vous les avez faits.
:::

## 📓 Journal de bord individuel

:::tip-nt
Continuez à tenir votre **journal de bord individuel** dans le repo GitHub de votre équipe :

```text
journal/prenom-nom.md
```

Pendant les semaines 7 à 12, ajoutez régulièrement de courtes entrées permettant de suivre votre travail.

Utilisez toujours le même format :

```md
## 3 novembre

**Travail réalisé**
- Test de trois valeurs du paramètre
- Modification de la fonction de simulation
- Production d’un nouveau graphique

**Résultat / problème**
Les résultats deviennent instables lorsque le paramètre dépasse 0,8.

**Prochaine étape**
Vérifier si l’instabilité vient du modèle ou de l’algorithme.
```

👉 Le journal doit rester **bref**. Quelques lignes suffisent pour laisser une trace claire de votre travail.
:::

:::info-nt
### 🔎 À quoi sert le journal?

Le journal constitue une **trace de votre travail individuel**.

Il sera utilisé avec les autres traces du projet — commits GitHub, fichiers, code, analyses, graphiques, résultats, etc. — pour évaluer votre contribution et votre progression.

Vous n’êtes pas évalué sur la qualité du français dans le journal. Il doit simplement être **régulier, clair et fidèle au travail réalisé**.
:::

## 📊 Produire et analyser les résultats

:::tip-nt
Au fur et à mesure du développement :

- conservez les résultats pertinents
- produisez des graphiques lisibles
- comparez les résultats lorsque pertinent
- identifiez les tendances importantes
- notez les résultats inattendus
- vérifiez si vos observations répondent à votre question de recherche

👉 Ne gardez pas uniquement les résultats qui confirment ce que vous espériez observer.
:::

## 📝 Faire évoluer votre article scientifique

:::info-nt
Continuez à travailler dans **le même projet Typst** que celui utilisé pour votre proposition.

Ne créez pas un nouveau document.

Pendant le développement :

- révisez votre **Introduction** selon la rétroaction reçue
- transformez progressivement la **Méthodologie prévue** en méthodologie réellement utilisée
- intégrez les informations pertinentes sur vos données ou votre expérience à la **Méthodologie**
- ajoutez progressivement vos figures et tableaux
- ajoutez vos nouvelles sources dans `references.bib`
- commencez à rédiger vos **Résultats** lorsque ceux-ci deviennent suffisamment stables

👉 Votre proposition évolue progressivement pour devenir votre **article scientifique final**.
:::

## 🤝 Rencontres hebdomadaires

:::info-nt
Chaque semaine, votre rencontre d’équipe avec moi servira à :

- présenter votre progression
- discuter des résultats obtenus
- identifier les difficultés
- valider vos choix méthodologiques
- planifier les prochaines étapes

👉 Venez préparés à montrer **du travail concret** : code, données, graphiques, essais ou résultats.
:::

## 🧮 Grille d’évaluation individuelle (15%)

:::info-nt

Cette évaluation est **individuelle**, même si le développement est réalisé dans le cadre d’un projet d’équipe.

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
        <td><strong>Contribution au développement</strong></td>
        <td>
            Contribue concrètement et régulièrement au développement scientifique et technique du projet.
        </td>
        <td>0</td><td>1</td><td>2,5</td><td>4</td><td>5</td>
    </tr>
    
    <tr>
        <td><strong>Démarche et rigueur scientifique</strong></td>
        <td>
            Réalise des essais pertinents, résout les problèmes rencontrés et analyse ses résultats avec rigueur.
        </td>
        <td>0</td><td>1</td><td>2</td><td>3</td><td>4</td>
    </tr>
    
    <tr>
        <td><strong>Autonomie et progression</strong></td>
        <td>
            Progresse de façon autonome et ajuste efficacement son travail au fil du projet.
        </td>
        <td>0</td><td>1</td><td>2</td><td>3</td><td>4</td>
    </tr>
    
    <tr>
        <td><strong>Journal de bord</strong></td>
        <td>
            Documente régulièrement et clairement son travail, ses résultats ou problèmes et ses prochaines étapes.
        </td>
        <td>0</td><td>0,5</td><td>1</td><td>1,5</td><td>2</td>
    </tr>

    <tr>
        <td><strong>Total</strong></td>
        <td colSpan="6" style={{ textAlign: 'right' }}><strong>/ 15</strong></td>
    </tr>
</table>

:::

## 📌 À la fin de cette période

À la fin de la semaine 12, vous devriez avoir :

- une méthodologie suffisamment stable
- les principaux développements terminés
- des résultats exploitables
- des analyses permettant de répondre à votre question de recherche
- un journal de bord à jour
- un article scientifique déjà bien amorcé

👉 La semaine suivante sera consacrée à la finalisation et la remise de votre [Article scientifique](/cours/semaine13).
