# Diagramme : Processus opérationnel — Agents Copilot Studio Light

Ce document contient un diagramme Mermaid qui illustre les étapes du processus opérationnel (point 3) et référence les pages détaillées dans ce répertoire.

```mermaid
flowchart LR
   A["Étape 0<br>Création libre"] --> B["Étape 1<br>Soumission via Microsoft Forms"]
   B --> C["Étape 2<br>Évaluation admin / sécurité"]
   C --> D["Étape 3<br>Publication\n(Applications Intégrées M365)"]
   D --> E["Étape 4<br>Opérations &amp; maintenance"]
```
# Diagramme détaillé

```mermaid
flowchart LR

    %% ================================
    %% Phase 1 - Conception de l’agent
    %% ================================

    subgraph PH1["Phase 1 - Conception dans Microsoft 365 Copilot"]
        U1["1. Utilisateur Microsoft 365
(créer un agent depuis Copilot Chat)"]
        A2["2. Agent Copilot Studio Light
(modèle d’agent déclaratif)"]
    end

    %% Boucle d’amélioration continue entre l’utilisateur et l’agent
    U1 -->|"Création et test de l’agent"| A2
    A2 -->|"Feedback et amélioration continue
des instructions"| U1

    %% Commentaires sur les paramètres de l’agent déclaratif :
    %% Paramètres :
    %% - Icône : PNG, fond transparent recommandé, taille max ~1 Mo, résolution raisonnable (ex. 128x128 ou 192x192 px).
    %% - Nom : clair, unique dans le tenant, longueur courte (typiquement <= 30–40 caractères).
    %% - Description : expliquer le but de l’agent, contexte, public cible, longueur recommandée <= 1 000 caractères.
    %% - Instructions : décrire le comportement attendu, le ton, les limites et les tâches de l’agent, longueur max ~8 000 caractères.
    %% - Sources de connaissance : documents et sites validés (SharePoint, web, etc.), nombre et taille à limiter pour garder la pertinence.
    %% - Requêtes de démarrage : quelques exemples de prompts guidés, pas obligatoire, mais fortement recommandé pour cadrer l’usage.

    %% ================================
    %% Étape 3 - Export de l’agent
    %% ================================

    E3["3. Export de l’agent au format ZIP
(depuis l’interface Copilot / Studio Light)"]
    A2 --> E3

    %% ================================
    %% Étape 4 - Soumission via Microsoft Forms
    %% ================================

    F4["4. Soumission du fichier ZIP
par l’utilisateur via Microsoft Forms
(formulaire de déclaration d’agent)"]
    E3 --> F4

    %% ================================
    %% Étape 5 - Power Automate + SharePoint
    %% ================================

    P5["5. Flux Power Automate
(création/maj dans SharePoint
+ courriels à l’utilisateur et aux admins)"]
    SP5["Liste SharePoint
(Catalogue des agents)"]

    F4 --> P5
    P5 --> SP5

    %% ================================
    %% Étape 6 - Révision admin
    %% ================================

    ADM6["6. Administrateurs M365 / CoE
révisent et complètent les informations
(métadonnées, conformité, gouvernance)"]
    SP5 --> ADM6
    ADM6 --> SP5

    %% ================================
    %% Étape 7 - Repo GitHub
    %% ================================

    G7["7. Repo GitHub (modèle d’agent)
création ou mise à jour :
README, fiche agent, instructions,
CHANGELOG, fichiers de configuration"]
    ADM6 --> G7

    %% ================================
    %% Étape 8 - Bloc d’instructions entreprise
    %% ================================

    I8["8. Ajout du bloc d’instructions
standard de l’entreprise
(aux instructions initiales)"]
    G7 --> I8

    %% ================================
    %% Étape 9 - Publication depuis M365
    %% ================================

    PUB9["9. Publication de l’agent
depuis le Centre d’administration M365
(menu Applications intégrées)"]
    I8 --> PUB9

    %% ================================
    %% Étape 10 - Mise à jour finale
    %% ================================

    P10["10. Mise à jour de la liste SharePoint
avec les détails de l’agent publié
+ Power Automate : courriel à l’utilisateur"]
    PUB9 --> P10
    P10 --> SP5
```

Pages détaillées (liens relatifs dans le dépôt)
- Étape 0 — Création libre  
  docs/governance/copilot-studio-light/step-0-creation.md  
  https://github.com/ngeorgeault/copilot-agent-light-template/blob/main/docs/governance/copilot-studio-light/step-0-creation.md

- Étape 1 — Soumission via Microsoft Forms  
  docs/governance/copilot-studio-light/step-1-submission.md  
  https://github.com/ngeorgeault/copilot-agent-light-template/blob/main/docs/governance/copilot-studio-light/step-1-submission.md

- Étape 2 — Évaluation admin / sécurité  
  docs/governance/copilot-studio-light/step-2-evaluation.md  
  https://github.com/ngeorgeault/copilot-agent-light-template/blob/main/docs/governance/copilot-studio-light/step-2-evaluation.md

- Étape 3 — Publication (Integrated App)  
  docs/governance/copilot-studio-light/step-3-publication.md  
  https://github.com/ngeorgeault/copilot-agent-light-template/blob/main/docs/governance/copilot-studio-light/step-3-publication.md

- Étape 4 — Opérations & maintenance  
  docs/governance/copilot-studio-light/step-4-operations.md  
  https://github.com/ngeorgeault/copilot-agent-light-template/blob/main/docs/governance/copilot-studio-light/step-4-operations.md
