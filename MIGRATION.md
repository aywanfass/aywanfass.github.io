# Migration Portfolio → React + TypeScript + Java (Spring Boot)

Ce dépôt ajoute deux dossiers:
- `frontend/` — Vite + React + TypeScript
- `backend/` — Spring Boot (Java 17)

## Démarrage local

1) Backend
```bash
cd backend
mvn spring-boot:run
```
Le backend écoute sur http://localhost:8080

2) Frontend
```bash
cd frontend
npm install
npm run dev
```
Le frontend écoute sur http://localhost:5173 et proxe `/api` → backend (voir `vite.config.ts`).

## Déploiement

- Frontend (GitHub Pages):
  - Pour un repo utilisateur `aywanfass.github.io`, `npm run build` produit `frontend/dist` à publier.
  - La `base` est `/` (déjà configurée).

- Backend:
  - GitHub Pages ne peut pas héberger du Java. Déploie sur un PaaS (Render, Fly.io, Railway, OVHcloud, etc.).
  - Configure `VITE_API_BASE_URL` côté frontend (ex: `https://ton-domaine/api`) à la place de `/api`.

## Configurer l’URL d’API en prod

Dans le frontend, crée un fichier `.env.production`:
```
VITE_API_BASE_URL=https://ton-backend.exemple.com/api
```

Ensuite:
```bash
cd frontend
npm run build
```
Le bundle utilisera cette URL.

## Arborescence

```
frontend/
  src/
    App.tsx
    main.tsx
    api/client.ts
  index.html
  vite.config.ts
  tsconfig.json
backend/
  src/main/java/com/aywan/portfolio/...
  src/main/resources/application.properties
  pom.xml
```

## Remarques

- Pour la migration des pages HTML/CSS existantes vers React, crée des composants dans `src/` et migre progressivement.
- Si tu veux une structure avec routes (React Router), je peux fournir les fichiers supplémentaires.