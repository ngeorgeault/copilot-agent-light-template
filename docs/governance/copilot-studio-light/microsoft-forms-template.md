# Microsoft Forms — Template : Soumission d'un agent Copilot Studio Light

Objectif : Collecter toutes les métadonnées et le ZIP exporté de l'agent afin d'automatiser l'enregistrement dans SharePoint et de lancer le workflow d'évaluation.

Remarques générales :
- Formulaire obligatoire pour toute mise à disposition au-delà du créateur.
- La pièce jointe ZIP est obligatoire et doit être validée (extension .zip).
- Le contenu ci-dessous donne : étiquette (label visible), nom interne (pour mapping automatisé), type, obligatoire (Oui/Non), aide/consigne.

Champs (ordre du formulaire)

1. Titre de l'agent
- internalName: Title
- type: Texte (Réponse courte)
- required: Oui
- aide: Nom court et explicite (ex. "Assistant RH - Congés")

2. Description courte
- internalName: DescriptionShort
- type: Texte (Réponse longue)
- required: Oui
- aide: 1-2 phrases : objectif métier et résumé des capacités.

3. Objectif métier
- internalName: BusinessObjective
- type: Choix (liste déroulante) + option "Autre" avec champ complémentaire
- required: Oui
- choices: ["Support Utilisateur", "RH", "Finance", "Opérations", "Commercial", "Autre"]

4. Propriétaire / Product Owner (PO)
- internalName: ProductOwner
- type: Personne / Texte (nom + courriel)
- required: Oui
- aide: Nom et courriel de la personne responsable du contenu métier.

5. Responsable technique (si applicable)
- internalName: TechnicalOwner
- type: Personne / Texte
- required: Non
- aide: Contact technique pour dépannages.

6. Pièce jointe : ZIP exporté de l'agent
- internalName: AgentZip
- type: Pièce jointe (Fichier unique)
- required: Oui
- validation: extension .zip, maxSize (configurable, ex. 100 MB)
- aide: Exportez depuis Copilot Studio Light puis joignez le fichier .zip.

7. Sources de connaissance utilisées
- internalName: KnowledgeSources
- type: Cases à cocher (multi)
- required: Oui (au moins 1)
- choices: ["SharePoint", "OneDrive", "Base de données interne", "API interne", "Web externe", "Autre"]
- aide: Précisez pour chaque source les emplacements / URL.

8. Données sensibles / PII accessibles via ces sources ?
- internalName: ContainsPII
- type: Choix (Oui / Non)
- required: Oui
- aide: Si "Oui", décrire les types de données (PII, santé, financières, etc.) dans le champ suivant.

9. Détails sur les données sensibles (si applicable)
- internalName: PIIDetails
- type: Texte (Réponse longue)
- required: Conditionnel (si ContainsPII = Oui)
- aide: Exemples : colonnes, tables, chemin SharePoint, types de données.

10. Connecteurs externes requis
- internalName: ExternalConnectors
- type: Cases à cocher + champ libre
- required: Oui (même si "Aucun")
- choices: ["API externe", "Service cloud tiers", "SharePoint hors tenant", "Autre", "Aucun"]
- aide: Si externe, fournir URL/endpoint et info d'authentification requise.

11. Permissions demandées / scopes
- internalName: RequestedPermissions
- type: Texte (Réponse longue)
- required: Oui
- aide: Lister les scopes / permissions demandées (lecture fichiers, envoi mail, accès API, etc.).

12. Public cible
- internalName: TargetAudience
- type: Choix (Equipe restreinte / Département / Organisation / Externe)
- required: Oui

13. Classification souhaitée
- internalName: RequestedClassification
- type: Choix (Basse / Moyenne / Haute)
- required: Oui
- aide: Proposition du créateur — l'admin peut reclasser.

14. Impact potentiel sur le business en cas de mauvaise utilisation
- internalName: BusinessImpact
- type: Texte (Réponse longue)
- required: Oui
- aide: Décrire conséquences opérationnelles, réputationnelles, financières.

15. Instructions d'utilisation et limites connues
- internalName: UsageInstructions
- type: Texte (Réponse longue)
- required: Oui

16. Date de première mise en production souhaitée
- internalName: TargetGoLiveDate
- type: Date
- required: Non

17. Acceptation de la charte & conditions d'utilisation
- internalName: TermsAccepted
- type: Oui/Non (case à cocher)
- required: Oui
- texte: "Je certifie que les informations fournies sont exactes et que je respecte les politiques internes de l'entreprise."

18. Commentaires complémentaires
- internalName: AdditionalNotes
- type: Texte (Réponse longue)
- required: Non

Mapping recommandé vers SharePoint (colonne cible)
- Title -> Title
- Description courte -> DescriptionShort
- ProductOwner -> PO (Person)
- TechnicalOwner -> TechnicalOwner (Person)
- AgentZip -> Lien vers fichier dans la bibliothèque "Agent-ZIP-Files"
- KnowledgeSources -> SourcesConnaissance
- ContainsPII -> DonneesSensibles (Yes/No)
- PIIDetails -> PIIDetails
- ExternalConnectors -> ConnecteursExterieurs
- RequestedPermissions -> PermissionsDemandees
- TargetAudience -> PublicCible
- RequestedClassification -> ClassificationDemandee
- BusinessImpact -> BusinessImpact
- UsageInstructions -> UsageInstructions
- TargetGoLiveDate -> DateSouhaitee
- TermsAccepted -> TermsAccepted
- AdditionalNotes -> Commentaires

Bonnes pratiques pour le formulaire :
- Rendre jointure ZIP obligatoire.
- Ajouter logique conditionnelle (afficher PIIDetails seulement si ContainsPII = Oui).
- Valider l'extension du fichier (Power Automate peut effectuer une validation additionnelle).
- Intégrer message d'information et lien vers le playbook (page SharePoint) en haut du formulaire.
