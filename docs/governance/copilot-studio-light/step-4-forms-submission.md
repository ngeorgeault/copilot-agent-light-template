# Étape 4 — Soumission via Microsoft Forms

Description :
- L'auteur soumet le ZIP exporté et les métadonnées via le Microsoft Forms dédié. Ce formulaire déclenche un flux Power Automate pour stocker le ZIP dans une bibliothèque SharePoint et créer une entrée dans la liste des soumissions.

Champs obligatoires (extrait) :
- Titre, Description courte, PO, Pièce jointe (ZIP), Sources, Contient PII (Oui/Non), Connecteurs, Permissions demandées, Public cible.

Traitement automatique :
- Power Automate valide l'extension du fichier, enregistre le ZIP dans "Agent-ZIP-Files" et crée l'item dans "Agents-Copilot-Light-Submissions" avec statut "Submitted".

Lien vers le plan de gouvernance : ../../copilot-studio-light-governance-plan.md
