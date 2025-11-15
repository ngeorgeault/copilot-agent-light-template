# Étape 3 — Export de l'agent au format ZIP

Description :
- Une fois l'agent testé dans l'interface Copilot, l'auteur doit exporter l'agent au format ZIP. Le ZIP contient le manifest, les instructions, les exemples et les liens vers les sources configurées.

Vérifications recommandées avant export :
- S'assurer que le manifest ne contient pas d'URLs externes non autorisées.
- Vérifier l'absence de secrets ou d'informations de connexion dans les prompts ou les fichiers.
- Documenter la version de l'agent et un changelog sommaire.

Format attendu :
- manifest.json
- instructions.md / prompts
- metadata.json (PO, description, classification)

Lien vers le plan de gouvernance : ../../copilot-studio-light-governance-plan.md
