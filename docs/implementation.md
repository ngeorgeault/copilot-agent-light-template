# Implémentation – Agent FAQ Interne (Lite)

## Objectif
Déployer et maintenir un agent **Copilot Studio Lite** pour répondre aux questions internes, avec ancrage sur SharePoint/intranet.

## Prérequis
- Accès au **Microsoft 365 Copilot** (utilisateurs finaux visés).
- Accès **Copilot Studio** (maker) dans l’environnement géré (Managed Environment recommandé).
- Bibliothèque SharePoint cible (`Sites/KBase/Shared Documents/Procedures`), pages intranet (`/faq`, `/politiques`).
- Icônes PNG (couleur/contour), fond transparent, lisibles clair/sombre. [2](https://afiformation1com-my.sharepoint.com/personal/nicolas_georgeault_afiexpertise_com/_layouts/15/Doc.aspx?sourcedoc=%7BC25922D1-8ED6-443B-B949-D436744A7B1A%7D&file=Atelier%201%20-%20Mise%20en%20place%20du%20framework%20des%20agents%20et%20id%C3%A9ation%20-%20Afi.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1)

## Étapes (Lite)
1. **Créer l’agent** dans M365 Copilot → *Créer un agent*.
2. **Configurer** le nom (≤30), description (~1 000), **instructions** (≤8 000, concision). [1](https://afiformation1com-my.sharepoint.com/personal/nicolas_georgeault_afiexpertise_com/_layouts/15/Doc.aspx?sourcedoc=%7BC25922D1-8ED6-443B-B949-D436744A7B1A%7D&file=Atelier%201%20-%20Mise%20en%20place%20du%20framework%20des%20agents%20et%20id%C3%A9ation%20-%20Afi.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1)
3. **Ajouter les connaissances** : bibliothèques SharePoint ciblées + URLs intranet (allowlist).
4. **Déclarer les outils** : `Ticketing_Flow` (Power Automate), `Recherche_SP`.
5. **Tester** : cas d’usage, citations, taux de confiance; ajuster les instructions et les métadonnées des sources.
6. **Publier** pour M365 Copilot / Teams.
7. **Surveiller** (KPIs, agrégats) et **mettre à jour** (sources, instructions, versions).

## Packaging GitHub → Studio (Lite)
- Ce dépôt conserve les **fichiers de référence** (`manifest.json`, `declarativeAgent_0.json`) et la **doc**.
- La **publication** se fait dans M365 Copilot/Studio Lite (pas d’import ZIP de solution Dataverse pour Lite).
- Utilisez la CI fournie pour valider la longueur des champs (nom/desc/instructions).

## Validation (CI)
- `scripts/validate-json.sh` : vérifie la validité JSON avec `jq`.
- `scripts/lint-manifest.js` : règles Lite (nom ≤30, instructions ≤8000, description ≈1000).

