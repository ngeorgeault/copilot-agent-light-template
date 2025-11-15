# Étape 2 — Agent Copilot Studio Light (modèle déclaratif)

Description :
- Le modèle d’agent est principalement déclaratif : instructions, exemples, configurations de sources (RAG), policies de sécurité. Les auteurs doivent s'appuyer sur les bonnes pratiques du Copilot Studio Guidance (Microsoft Learn) : limiter les instructions, fournir des exemples, définir la granularité des sources.

Points clés (Microsoft Learn) :
- Conception centrée sur l'utilisateur et sur les tâches.
- Ingestion et configuration des sources de connaissance (RAG), privilégier les sources approuvées.
- Utilisation d'instructions claires, éviter les ambigüités et les instructions qui demandent un accès à des données sensibles sans justification.

Bonnes pratiques :
- Séparer les instructions métier des instructions techniques.
- Documenter les prompts système et les exemples fournis.
- Versionner le modèle d'agent et conserver l'historique des exports ZIP.

Lien vers le plan de gouvernance : ../../copilot-studio-light-governance-plan.md
