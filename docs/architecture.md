# Architecture – Agent FAQ Interne (Lite)

## Vue d’ensemble
L’agent s’exécute dans **Microsoft 365 Copilot** / **Teams** (expérience Lite). Les réponses sont **génératives** et **ancrées** sur des sources M365 approuvées. Les actions sont exécutées via outils (Graph/Flows).

## Schéma (Mermaid)

``mermaid
flowchart LR
    U[Utilisateur M365/Teams] -->|Prompt| A[Agent FAQ Interne (Lite)]
    subgraph M365 Copilot Runtime
      A --> I[Instructions<br/>(≤ 8k, concises)]
      A --> K[Connaissances (RAG)]
      K --> SP[(SharePoint ciblé)]
      K --> WEB[(Intranet allowlist)]
      A --> T[Outils]
      T --> PA[Power Automate<br/>Ticketing_Flow]
      T --> GRAPH[Microsoft Graph<br/>Recherche_SP]
    end
    A -->|Réponse + citations| U
    A -->|KPIs agrégés| OBS[Observabilité/Analytics]
