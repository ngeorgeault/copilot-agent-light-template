# Étape 1 — Soumission via Microsoft Forms

Description :
- Le créateur soumet le ZIP de l'agent et les métadonnées obligatoires via le Microsoft Forms dédié.
- Un flux Power Automate capture la soumission et enregistre le ZIP et les métadonnées dans une liste/bibliothèque SharePoint.

Champs obligatoires (extrait) :
- Titre, Description, PO, Pièce jointe (ZIP), Sources, Données sensibles (Oui/Non), Connecteurs, Permissions, Public cible.

Automatisation suggérée :
- Power Automate : Trigger Forms -> Save ZIP to SharePoint -> Create approval request -> Notify approvers.

Lien vers le guide principal : ../copilot-studio-light-governance-plan.md