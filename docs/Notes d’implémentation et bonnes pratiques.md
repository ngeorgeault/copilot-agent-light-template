# Notes d’implémentation et bonnes pratiques

## 1. Nom, description, instructions (longueurs)
- **Lite (Expérience dans M365 Copilot)** :
  - **Nom** : 30 caractères max.
  - **Instructions** : 8 000 caractères max (limite documentée).
- **Full (Portail Copilot Studio)** :
  - Instructions : jusqu’à 8 000 caractères recommandé par Microsoft.
- **Teams** :
  - Attention aux dépassements runtime si l’ensemble **instructions + prompt + contexte** est trop volumineux.
- **Références** :
  - Quotas/limites, guide « best practices », builder Lite.

---

## 2. Instructions
- Soyez **spécifique**, orienté **actions** (verbes : chercher, résumer, créer, envoyer).
- Structurez en **workflows** avec transitions claires.
- Fournissez **exemples** (« few-shot »).
- Définissez le **ton** et les **restrictions** (outils autorisés uniquement).
- Définissez les **termes métier**.
- **Références** :
  - *Write agent instructions* et *Write effective instructions for declarative agents*.

---

## 3. Connaissances (RAG)
- Réduire la portée aux **bibliothèques ciblées**.
- Limiter les **types** et **l’âge** des documents.
- Activer **Enhanced Search** si vous disposez de M365 Copilot pour améliorer SharePoint.
- **Références** :
  - Quotas/limites + pratiques d’ancrage Microsoft.

---

## 4. Actions & Permissions
- Enumérez seulement les **outils nécessaires** (principe du moindre privilège).
- Demandez **confirmation** avant action à impact.
- **Références** :
  - Guides d’extension Copilot Studio & sécurité.

---

## 5. Gouvernance & partage
- Utilisez les **Managed Environments** et contrôles de partage (rôles **Editor/Viewer**) pour encadrer la diffusion.
- Côté coûts, définissez des **caps** par agent (pratique d’admin) et des **alertes**.
- **Références** :
  - *Control how agents are shared*.

---

## 6. Tests, KPIs, observabilité
- Appuyez-vous sur **Copilot Studio Kit** pour :
  - **Test Automation**
  - **Conversation KPIs**
- Associez des **quality gates** avant promotion.
- **Références** :
  - *Configure agents in Copilot Studio Kit*.

---

## 7. Points clés pour Lite
- Packaging minimal : `manifest.json` + `declarativeAgent.json` + icônes.
- Nom ≤ 30 caractères, Description ~1 000, Instructions ≤ 8 000.
