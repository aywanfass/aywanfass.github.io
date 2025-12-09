# Portfolio d'Aywan FASS
#### objectifs :
1. Mettre en oeuvre les technologies web pour créer et héberger mon portfolio

[![Netbeans|](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Apache_NetBeans_Logo.svg/64px-Apache_NetBeans_Logo.svg.png)](https://fr.wikipedia.org/wiki/NetBeans) [![HTML|](https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/64px-HTML5_logo_and_wordmark.svg.png?uselang=fr)](https://fr.wikipedia.org/wiki/Hypertext_Markup_Language) [![CSS|](https://cdn-icons-png.flaticon.com/64/5968/5968242.png)](https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade) [![Bootstrap|](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/64px-Bootstrap_logo.svg.png?uselang=fr)](https://fr.wikipedia.org/wiki/Bootstrap_(framework))         [![Git|](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/120px-Git-logo.svg.png?uselang=fr)](https://fr.wikipedia.org/wiki/Git)                  [![GitHub|](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/64px-GitHub_Invertocat_Logo.svg.png?uselang=fr)](https://fr.wikipedia.org/wiki/GitHub)

- **NetBeans** : Environnement de développement intégré (IDE) utilisé pour ce projet
- **HTML** : Langage de description utilisé pour concevoir les pages web
- **CSS** : Langage de style utilisé pour mettre en forme les pages web
- **Bootstrap** : Framework graphique utilisé pour faciliter la création de pages web (utilisation d'une base de règles
CSS existantes) 
- **Git** : Logiciel de gestion de version
- **GitHub** : Forge logicielle en ligne utilisant Git

2. Pour l'épreuve E5

- Je me présente et présente mon parcours, j'affiche mon CV
- Je parle des projets que j'ai réalisé, je bascule sur les pages correspondantes
- Je parle des stages que j'ai effectué et des projets auxquels j'ai participé, je bascule sur les pages
correspondantes
- Je présente mes bonnes pratiques : 
     - Respect des normes et des standards
     - Auto-formation
     - Mise en oeuvre des tests (unitaires, d'integration, fonctionnels, ...)
     - Documentation
     - Gestion de version, développement collaboratif et gestion d'incidents
- Je présente la façon dont j'organise ma veille et la façon dont je m'en sert

3. Pour l'épreuve E6

- J'héberge les documents présentant le contexte de mes AP
- J'héberge le code source de mes AP
- J'héberge mes productions  (compte-rendus, documentations techniques, documentations utilisateurs, ...)
- J'ajoute des liens vers les applications téléchargeables ou testables en ligne

4. Pour mon identité numérique

- Cela fait un point d'entrée professionnel à donner lorsque je postule à un stage, à une poursuite d'étude ou à 
un emploi
- Cela permettra de me faire référencer par les moteurs de recherches (là aussi si on me recherche suite à ma 
rencontre ou à la reception de mon CV)

# Configuration du formulaire de contact

## EmailJS Setup

Vous avez déjà créé un service EmailJS ? Suivez ces étapes pour récupérer vos identifiants :

### 1. Récupérer votre Public Key

1. Connectez-vous à [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Cliquez sur **"Account"** dans le menu de gauche
3. Copiez votre **Public Key** (aussi appelé User ID)

### 2. Récupérer votre Service ID

1. Dans le dashboard, cliquez sur **"Email Services"**
2. Vous verrez votre service (Gmail, Outlook, etc.) déjà créé
3. Copiez le **Service ID** affiché à côté du nom du service

### 3. Créer et récupérer votre Template ID

1. Dans le dashboard, cliquez sur **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Configurez votre template avec ces variables :
   ```
   Subject: {{subject}}
   
   De: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
4. Sauvegardez et copiez le **Template ID**

### 4. Intégrer dans le code

Dans le fichier `frontend/src/pages/Contact.tsx`, ligne 22-24, remplacez :

```typescript
service_id: "YOUR_SERVICE_ID",     // Remplacez par votre Service ID
template_id: "YOUR_TEMPLATE_ID",   // Remplacez par votre Template ID
user_id: "YOUR_PUBLIC_KEY",        // Remplacez par votre Public Key
```

### Exemple de configuration complète

```typescript
service_id: "service_abc123",      // Exemple: service_xyz456
template_id: "template_def456",    // Exemple: template_abc789
user_id: "user_ghi789xyz",         // Exemple: user_def012abc
```

### Alternative : Utiliser mailto (recommandé pour GitHub Pages)

Si vous préférez ne pas utiliser EmailJS, le formulaire actuel utilise déjà la fonction `mailto:` qui ouvre directement le client email de l'utilisateur. Aucune configuration supplémentaire n'est nécessaire.

## CV en PDF

Pour que le téléchargement du CV fonctionne :

1. Créez un CV au format PDF (utilisez Word, Google Docs, Canva, etc.)
2. Nommez-le `cv-aywan-fass.pdf`
3. Placez-le dans le dossier `frontend/public/`
4. Vérifiez que le fichier est bien un PDF valide (ouvrez-le pour tester)

**Structure des fichiers :**
```
frontend/
├── public/
│   ├── cv-aywan-fass.pdf  ← Votre CV ici
│   └── images/
└── src/
```

**Important :** Le fichier doit être un vrai PDF, pas un fichier vide ou corrompu.
