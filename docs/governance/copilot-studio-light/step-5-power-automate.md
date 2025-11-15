# Étape 5 — Flux Power Automate (ingestion & notifications)

Description :
- Le flux Power Automate traite les soumissions Forms, stocke le ZIP, crée l'item SharePoint, effectue un scan initial (optionnel via Azure Function) et lance la procédure d'approbation (Approvals).

Composants :
- Trigger : When a new response is submitted (Microsoft Forms)
- Actions : Get response details, Create file (SharePoint), Create item (SharePoint list), Start and wait for an approval, Update item selon outcome, Notify PO et Admins.

Sécurité :
- Restreindre les actions du flux avec des comptes de service restreints.
- Ne pas stocker de secrets dans les actions ; utiliser Azure Key Vault si nécessaire.

Lien vers le plan de gouvernance : ../../copilot-studio-light-governance-plan.md
