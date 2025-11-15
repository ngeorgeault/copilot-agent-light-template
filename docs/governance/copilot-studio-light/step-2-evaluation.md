# Étape 2 — Évaluation administrative / sécurité

Description :
- Les administrateurs M365 et l'équipe Sécurité évaluent la soumission : manifest, prompts, endpoints, connecteurs et accès aux sources.
- Une grille de criticité est appliquée (Basse / Moyenne / Haute) selon exposition de données sensibles, permissions et audience.

Checklist (extrait) :
- Vérifier manifest et références externes
- Confirmer l'absence d'exposition PII ou prévoir mesures compensatoires
- Valider permissions demandées (principe du moindre privilège)
- Appliquer Sensitivity Label / DLP si nécessaire
- Effectuer tests fonctionnels simples

Décisions possibles : Rejeter / Retourner à l'auteur / Approuver restreint / Approuver organisationnel

Lien vers le guide principal : ../copilot-studio-light-governance-plan.md