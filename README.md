# Projet 7 OpenClassrooms : Kasa - Application de location immobilière

Kasa est une application de location de logements entre particuliers, développée en React. Ce projet a été réalisé dans le cadre de ma formation d'Intégrateur Web avec OpenClassrooms.

## 📌 Fonctionnalités

- **Page d'accueil :** Galerie de logements générée dynamiquement à partir d'un fichier JSON.
- **Page À Propos :** Sections d'information utilisant des composants accordéons (Collapses) réutilisables.
- **Page Logement :** - Carrousel d'images (Slideshow) avec navigation par flèches et indicateur de position.
  - Système de notation dynamique (Étoiles).
  - Gestion des tags et informations de l'hôte.
- **Gestion des erreurs :** Redirection automatique vers une page 404 personnalisée en cas d'URL inexistante ou d'ID de logement invalide.
- **Responsive Design :** Interface entièrement adaptée pour mobile, tablette et desktop via Sass.

## 🛠️ Technologies utilisées

- **Frontend :** React (Vite), JSX
- **Routing :** React Router Dom
- **Styles :** Sass (SCSS)
- **Gestion des états :** Hooks React (`useState`, `useParams`)

## 🚀 Installation et lancement du projet

### Prérequis

Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre machine.

### Étape 1 : Cloner le dépôt
```bash
git clone https://github.com/Sereta80/Projet7-Creez_une_appli_web_de_loc_immo_avc_React.git
cd kasa
```

### Étape 2 : Installer les dépendances
```bash
npm install
```

### Étape 3 : Lancer l'application en mode développement
```bash
npm run dev
```

L'application sera accessible localement à l'adresse indiquée dans votre terminal (généralement `http://localhost:5173/`).

## 📁 Structure du projet (Points clés)

- `/src/components` : Composants réutilisables (`Banner`, `Card`, `Collapse`, `Footer`, `Gallery`, `Header`, `Slideshow`)
    
- `/src/pages` : Pages de l'application (`Home`, `About`, `Logement`, `Error`)
    
- `/src/styles` : Fichiers SCSS pour l'architecture et les styles responsives
    
- `/src/datas` : Base de données locale (Fichier JSON)
