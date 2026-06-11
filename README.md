# Projet 7 OpenClassrooms : Kasa - Application de location immobilière

Kasa est une application de location de logements entre particuliers, développée en React. Ce projet a été réalisé dans le cadre de ma formation d'Intégrateur Web avec OpenClassrooms.

<img height="600" alt="screenshot1_accueil" src="https://github.com/user-attachments/assets/53681e27-5f5e-44eb-99f6-c3b744922fab" />
<img width="500" alt="screenshot4_fiche_logement" src="https://github.com/user-attachments/assets/9207a534-200f-46a4-aae2-96749e4a5021" />
<img width="400" alt="screenshot2_a_propos" src="https://github.com/user-attachments/assets/57b71859-1b6a-4615-b079-fc767a739bfd" />
<img width="400" alt="screenshot3_erreur" src="https://github.com/user-attachments/assets/745e5506-e14f-4649-ba92-49ac17e1d139" />

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
cd Projet7-Creez_une_appli_web_de_loc_immo_avc_React
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

---

_Séréta THAI - Étudiante Intégratrice Web chez OpenClassrooms 2026_
