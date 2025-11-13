# Documentation – Agents Copilot Studio (Lite)
Ce dossier regroupe la documentation de référence pour les agents Lite :
- `implementation.md` – étapes d’implémentation & packaging.
- `architecture.md` – schéma d’architecture et flux.
- `knowledge-sources.md` – inventaire des sources, critères de qualité, cycle de vie.
- `governance-knowledge.md` – gouvernance des sources, DLP, étiquettes, accès.
- `glossary.md` – vocabulaire normalisé (FR‑CA).

# Structure de dépôt
copilot-agents/
├─ agents/
│  └─ agent-faq-interne/
│     ├─ manifest.json                    # PROD (valide JSON)
│     ├─ manifest.template.jsonc          # Commenté pour les rédacteurs
│     ├─ declarativeAgent_0.json          # PROD (valide JSON)
│     ├─ declarativeAgent_0.template.jsonc# Commenté pour les rédacteurs
│     └─ assets/
│        └─ icons/
│           ├─ icon-color.png             # 192×192 recommandé (PNG, fond transparent)
│           └─ icon-outline.png           # 32×32 recommandé (PNG, fond transparent)
├─ docs/
│  ├─ implementation.md
│  ├─ architecture.md
│  ├─ knowledge-sources.md
│  ├─ governance-knowledge.md
│  └─ glossary.md
├─ scripts/
│  ├─ validate-json.sh                    # Vérification JSON (jq)
│  └─ lint-manifest.js                    # Règles Lite (longueurs nom/desc/instructions)
├─ .github/
│  └─ workflows/
│     └─ validate.yml                     # CI: validation JSON + lint longueur Lite
├─ README.md
└─ LICENCE.md
