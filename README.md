# Documentation – Agents Copilot Studio (Lite/Full/Declaraive)
Ce dossier regroupe la documentation de référence pour les agents Lite :
- `implementation.md` – étapes d’implémentation & packaging.
- `architecture.md` – schéma d’architecture et flux.
- `knowledge-sources.md` – inventaire des sources, critères de qualité, cycle de vie.
- `governance-knowledge.md` – gouvernance des sources, DLP, étiquettes, accès.
- `glossary.md` – vocabulaire normalisé (FR‑CA).

# Structure de dépôt

```plaintext
copilot-agents/
├─ agents/
│  └─ agent-faq-interne/
│     ├─ manifest.json                    # Fichier manifeste (production)
│     ├─ manifest.template.jsonc          # Modèle commenté pour les rédacteurs
│     ├─ declarativeAgent_0.json          # Fichier agent (production)
│     ├─ declarativeAgent_0.template.jsonc# Modèle commenté pour les rédacteurs
│     └─ assets/
│        └─ icons/
│           ├─ icon-color.png             # Icône couleur (PNG, fond transparent)
│           └─ icon-outline.png           # Icône contour (PNG, fond transparent)
├─ docs/
│  ├─ implementation.md                   # Guide d’implémentation
│  ├─ architecture.md                     # Schéma d’architecture et flux
│  ├─ knowledge-sources.md                # Inventaire des sources de connaissances
│  ├─ governance-knowledge.md             # Plan de gouvernance des sources
│  ├─ glossary.md                         # Glossaire des termes clés
│  └─ notes-implementation.md             # Bonnes pratiques et recommandations
├─ scripts/
│  ├─ validate-json.sh                    # Script de validation JSON
│  └─ lint-manifest.js                    # Script de contrôle des longueurs Lite
├─ .github/
│  └─ workflows/
│     └─ validate.yml                     # Workflow CI pour validation et lint
├─ LICENCE.md                             # Fichier de licence MIT
└─ README.md                              # Documentation générale
