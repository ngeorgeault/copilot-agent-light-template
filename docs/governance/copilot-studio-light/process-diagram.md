# Diagramme : Processus opérationnel — Agents Copilot Studio Light

Ce document contient un diagramme Mermaid qui illustre les étapes du processus opérationnel (point 3) et pointe vers des pages détaillées dans ce répertoire.

```mermaid
flowchart LR
  A[Étape 0\nCréation libre] --> B[Étape 1\nSoumission via Microsoft Forms]
  B --> C[Étape 2\nÉvaluation admin / sécurité]
  C --> D[Étape 3\nPublication (Applications Intégrées M365)]
  D --> E[Étape 4\nOpérations & maintenance]

  click A "https://github.com/ngeorgeault/copilot-agent-light-template/blob/main/docs/governance/copilot-studio-light/step-0-creation.md" "Étape 0 — Création libre"
  click B "https://github.com/ngeorgeault/copilot-agent-light-template/blob/main/docs/governance/copilot-studio-light/step-1-submission.md" "Étape 1 — Soumission via Microsoft Forms"
  click C "https://github.com/ngeorgeault/copilot-agent-light-template/blob/main/docs/governance/copilot-studio-light/step-2-evaluation.md" "Étape 2 — Évaluation admin / sécurité"
  click D "https://github.com/ngeorgeault/copilot-agent-light-template/blob/main/docs/governance/copilot-studio-light/step-3-publication.md" "Étape 3 — Publication"
  click E "https://github.com/ngeorgeault/copilot-agent-light-template/blob/main/docs/governance/copilot-studio-light/step-4-operations.md" "Étape 4 — Opérations & maintenance"
```