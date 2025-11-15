# Gouvernance — Agents "Copilot Studio Light" (Microsoft 365 Copilot Chat)

Date : 2025-11-15  
Référence principale : https://learn.microsoft.com/fr-ca/microsoft-copilot-studio/guidance/ et documents associés

But : définir une stratégie de gouvernance pour la création, l'évolution et la maintenance des agents Microsoft Copilot Studio Light (interface Microsoft 365 Copilot Chat) — en mettant l'accent sur le processus permettant aux employés non-développeurs de créer et d'améliorer des agents tout en assurant que le partage/déploiement passe impérativement par les administrateurs Microsoft 365 via la gestion des Applications Intégrées.

Ce document couvre :
- Objectifs et périmètre
- Acteurs et responsabilités
- Processus opérationnel (de la création utilisateur au déploiement par l'admin)
- Formulaire Microsoft Forms & schéma SharePoint recommandé
- Critères d'évaluation / classification de criticité
- Contrôles techniques et conformité
- Suivi, révision et exploitation
- Feuille de route d'intégration avec Power Platform / kits CoE & Copilot Studio Kit

---

1) Objectifs et périmètre
- Autoriser la créativité et l'expérimentation par les utilisateurs métier via Copilot Studio Light.
- Imposer un point de contrôle centralisé pour l'exposition/publishing des agents (administration M365).
- Assurer que tout agent mis à disposition organisationnellement respecte sécurité, confidentialité (DLP), conformité et pratiques de gestion du cycle de vie.
- Périmètre initial : uniquement les agents créés via l'interface Copilot Studio Light (export ZIP). Les agents Copilot Studio Full et les agents développés par code sont hors périmètre fonctionnel immédiat (mais interfaces de gouvernance prévues).

2) Acteurs et responsabilités
- Utilisateur créateur (Requestor)
  - Crée l'agent via Copilot Studio Light.
  - Remplit le Microsoft Forms de soumission et attache le ZIP.
  - Fournit informations nécessaires (PO, description, sources, instructions d'utilisation).
- Administrateurs Microsoft 365 (App Management / Intégrées)
  - Reçoivent la soumission, évaluent, classifient et décident du partage/déploiement.
  - Gèrent la publication via Applications Intégrées.
  - Appliquent étiquetage de sensibilité, contrôles d'accès et conditions d'usage.
- Équipe Sécurité & Conformité
  - Évalue risques liés aux sources de connaissance (données sensibles, PII), connexions externes et permissions demandées.
  - Valide mesures DLP/MDCA/CA si nécessaire.
- Data Owner / Product Owner (PO) signalé dans le formulaire
  - Responsable business fonctionnel du contenu et des mises à jour.
- Équipe d'exploitation / Support (IT)
  - Supervise monitoring, incidents, retrait d'un agent si risques ou usages abusifs.
- Power Platform / Copilot Center of Excellence (PowerCAT / CoE)
  - Fournit capacités d'orchestration et kits pour évolution vers gestion centralisée (phase 2).

3) Processus opérationnel proposé (étapes)
- Étape 0 — Création libre
  - Utilisateur crée un agent dans Copilot Chat (Copilot Studio Light).
  - Le système permet l'export au format ZIP (fichier d'agent).
- Étape 1 — Soumission via Microsoft Forms (obligatoire)
  - L'utilisateur complète le formulaire Microsoft Forms et attache le ZIP.
  - Le formulaire doit forcer la saisie des métadonnées obligatoires (PO, description, objectif, sources, classification souhaitée, risques connus, contacts).
  - Envoi → trigger Power Automate pour :
    - Sauvegarder PDF/ZIP & métadonnées dans une SharePoint list/library (case de stockage primaire).
    - Notifier le flux d'approbation (admins + sécurité).
- Étape 2 — Évaluation administrative / sécurité
  - Vérification par l'admin M365 :
    - Examen des métadonnées + ZIP (manifest, prompts, endpoints).
    - Checklist de sécurité & conformité (voir ci-dessous).
    - Attribution d'une classification de criticité.
  - Décision :
    - Rejeter / Retourner à l'auteur (améliorations requises).
    - Approuver pour publication interne restreinte.
    - Approuver pour publication organisationnelle.
- Étape 3 — Publication (via Applications Intégrées M365)
  - L'admin publie l'agent en tant qu'Application Intégrée (Integrated app) ou via mécanisme requis par Microsoft.
  - Appliquer labels de confidentialité, paramètres DLP, restrictions de partage, consentements.
- Étape 4 — Opérations & maintenance
  - Suivi d'usage (télémétrie), rapport mensuel/trimestriel.
  - Processus de demande de changement via même formulaire ou ticket IT (mise à jour ZIP + ré-evaluation).
  - Revue périodique (ex : 6 mois) par PO & sécurité.

4) Microsoft Forms — modèle de formulaire (champs recommandés)
Champs obligatoires :
- Titre de l'agent (texte)
- Description courte (1-2 phrases)
- Objectif métier (liste déroulante / texte)
- Proprietaire / Product Owner (nom, mail)
- Responsable technique (si applicable)
- Pièce jointe : ZIP exporté de l'agent (obligatoire)
- Source(s) de connaissance utilisées (cases à cocher + description) — ex: SharePoint, OneDrive, Bases internes, Web externe
- Est-ce que des données sensibles / PII sont accessibles via les sources ? (Oui/Non + détails)
- Connecteurs externes requis (Yes/No + liste)
- Permissions demandées / scope (ex: accès aux emails, fichiers, API)
- Public cible (personnel, équipe, organisation)
- Classification souhaitée (Basse / Moyenne / Haute)
- Impact potentiel sur le business si mauvaise utilisation (texte)
- Instructions d'utilisation et limites connues
- Date de première mise en production souhaitée
- Acceptation des conditions d'utilisation & chartes (case à cocher)

Conseil : Forcer la jointure du ZIP et validation d'extension sur le formulaire. Utiliser Power Automate pour extraire et valider les données du ZIP (manifest.json).

5) Schéma SharePoint (liste / bibliothèque) recommandé
- Liste "Agents-Copilot-Light-Submissions"
  - Title (Nom agent)
  - SubmissionID (Automatique)
  - PO (Person)
  - Requestor (Person)
  - DateSoumission (Date)
  - FichierZIP (Library link)
  - SourcesConnaissance (MultiChoice)
  - DonneesSensibles (Boolean)
  - ConnecteursExterieurs (MultiChoice)
  - PermissionsDemandees (Multiple lines)
  - ClassificationAdmin (Choice: Basse/Moyenne/Haute)
  - Statut (Choice: Submitted / InReview / Approved / Rejected / Published)
  - DateEvaluation (Date)
  - CommentairesAdmin (Multiple lines)
  - LienPublicationApp (URL)
  - DateDerniereRevue (Date)
  - ProchaineRevue (Date)

6) Critères d'évaluation et grille de criticité (exemple)
- Critère principaux :
  - Exposition de données sensibles / PII → si oui, criticité élevée.
  - Connecteurs externes / accès hors tenant → élève la criticité.
  - Permissions demandées (écrire, supprimer, accès mail) → plus permissif = plus de contrôles.
  - Impact business en cas de mauvaise réponse (ex: processus critique) → élevé.
  - Fréquence d'usage & audience → large audience → contrôles renforcés.
- Classification simplifiée :
  - Basse (internal non-sensitive, audience restreinte) → publication rapide après validation simple.
  - Moyenne (contient données internes non sensibles, audience large) → revue sécurité + DLP.
  - Haute (contient/s’accède à données sensibles, exposé hors tenant, permissions élevées) → approbation formelle sécurité/compliance + tests.

7) Checklist d'analyse administrateur / sécurité (avant publication)
Vérifier :
- Contenu du ZIP : manifest, prompts, points d'intégration, références à endpoints externes.
- Sources de connaissance : sont-elles contrôlées ? contiennent-elles PII ?
- Connexions externes : authentification, stockage des clés/secrets ?
- Permissions demandées vs principe du moindre privilège.
- DLP : la fonctionnalité pourrait-elle extraire des données sensibles hors tenant ?
- Sensitivity label requis ? Besoin d’un MIP label ?
- Consentements et approbations nécessaires (admin consent pour certaines APIs).
- Politique de conservation / suppression (comment retirer l’agent ?).
- Plan de rollback & contact PO en cas d’incident.
- Test fonctionnel : 1-2 scénarios métiers, validation réponses inoffensives (pas d'injection d'info sensibles).
- Journalisation & monitoring activés (logs d'usage, erreurs).

8) Contrôles techniques recommandés
- Restreindre publication : seuls les admins M365 peuvent rendre l'agent "organisationnel".
- Appliquer Sensitivity Labels & DLP policies.
- Configurer Conditional Access (MFA + devices compliant) pour l'accès aux agents sensibles.
- Limiter/monitorer les connectors externes et empêcher les transferts de données non autorisés.
- Intégrer audit : activer logs d’audit M365 pour opérations sur Integrated apps et accès aux sources.
- Stockage ZIP & métadonnées : SharePoint with restricted permissions (accès en lecture pour reviewers uniquement).
- Automatiser validation initiale via Power Automate/Logic Apps (recherche de patterns sensibles dans prompts/manifest).
- Sauvegarde des versions : conserver historique ZIP + notes d'évaluations.

9) Cycle de vie & maintenance
- Mise à jour : Toute modification majeure du ZIP nécessite une nouvelle soumission et une réévaluation.
- Retrait : Procédure claire (administrateur retire l'app ; PO notifié ; SharePoint mis à jour).
- Revue périodique : ex. 6 mois pour agents en production, 3 mois pour agents sensibles.
- Journalisation des changements : SharePoint enregistrant qui a approuvé, quelles versions, dates.
- Tests de régression : inclure scénarios métier après chaque mise à jour majeure.

10) Intégration avec Power Platform & kits CoE (phase ultérieure)
- Prévoir un environnement Power Platform pour :
  - Centraliser inventaire (CoE) et automatiser cycle d'approbation.
  - Déployer Copilot Studio Kits pour inventaire & gouvernance (PowerCAT).
- Définir policy pour environnement : sandbox vs production, approbations obligatoires.
- Déplacer la logique d'évaluation automatisée / scanning dans Power Platform (Power Automate flows + Azure Functions si besoin).

11) Processus d'escalade / incident
- Détecter via logs / signalement utilisateur → réponse immédiate du support IT.
- Si fuite présumée de données sensibles → déclencher procédure incident sécurité + notification interne.
- Retrait temporaire de l'agent en attendant investigation.
- Enregistrer l'incident dans SharePoint/list + registre incidents.

12) Gouvernance opérationnelle et adoption
- Communication : diffuser guide "Comment soumettre un agent" + formation courte à destination des créateurs.
- Templates : fournir un Microsoft Forms pré-rempli + checklists et exemples d'agents acceptables/refusables.
- KPIs & reporting : nombre de soumissions, taux d'approbation, temps moyen d'évaluation, incidents liés aux agents.
- FAQ & catalogue des agents approuvés (SharePoint / intranet) avec métadonnées et owner.

13) Templates & artefacts à produire (livrables)
- Microsoft Forms template (champ listé ci-dessus).
- SharePoint list + library structure (schéma ci-dessus).
- Power Automate flow :
  - Trigger Forms -> Save to SharePoint -> Notify approvers -> Create Approval task -> Update status.
- Admin checklist PDF / playbook.
- Catalogue public des agents approuvés (page SharePoint).
- Processus SLA (temps max d'évaluation : ex. 5 jours ouvrés).

14) Exemples de règles et formulations (policy)
- "Tous les agents Copilot Studio Light destinés à être partagés au-delà de leur créateur doivent être soumis via le formulaire officiel et ne peuvent être publiés pour l'organisation qu'après approbation par les administrateurs Microsoft 365."
- "Les agents ayant accès à données sensibles ne seront pas publiés sans approbation formelle de la sécurité et des propriétaires de données."
- "Les mises à jour majeures nécessitent une nouvelle soumission et une nouvelle réévaluation."

15) Prochaines étapes (recommandées)
- 1) Créer le Microsoft Forms prototype selon le schéma (je peux générer le contenu du formulaire).
- 2) Créer la liste et bibliothèque SharePoint (schéma proposé).
- 3) Développer Power Automate flow basique pour ingestion + notification.
- 4) Rédiger le playbook Admin + checklist sécurité.
- 5) Piloter avec un périmètre restreint (1-2 équipes) sur 2 mois et affiner processus.
- 6) Intégrer CoE / PowerCAT kits pour version 2 (agents Full & lifecycle centralisé).

---

Si vous voulez, je peux :
- Générer directement le contenu prêt à coller dans Microsoft Forms (champ par champ).
- Générer le JSON de la SharePoint list + library pour import / PnP deploy.
- Créer un Power Automate flow détaillé (description d'étapes) ou un runbook d'administration.
Dites-moi ce que vous voulez automatiser en premier — je peux produire les modèles et scripts nécessaires.