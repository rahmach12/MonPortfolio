# Portfolio Rahma Chriha

> Portfolio professionnel moderne développé avec React et Vite

[![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3.0-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🌟 Aperçu

Portfolio professionnel présentant mes compétences, projets et expériences en tant qu'étudiante en Génie Logiciel. Le site utilise un design moderne avec des animations fluides, des effets glassmorphism et une architecture responsive.

**Fonctionnalités principales :**
- ✨ Design moderne avec gradients dynamiques et animations
- 📱 100% Responsive (Desktop, Tablette, Mobile)
- 🎨 Effets glassmorphism et micro-animations
- 🚀 Performance optimisée avec Vite
- 🌐 Interface entièrement en français
- 📊 Barres de compétences animées
- 💼 Cartes de projets interactives avec détails extensibles
- 📝 Formulaire de contact fonctionnel
- 📥 Téléchargement de CV

## 📂 Structure du Projet

```
portfolio-rahma/
├── public/                 # Assets statiques
├── src/
│   ├── components/         # Composants réutilisables
│   │   ├── Header.jsx      # Navigation sticky
│   │   ├── Footer.jsx      # Pied de page
│   │   ├── ProjectCard.jsx # Carte de projet
│   │   └── SkillBar.jsx    # Barre de compétence animée
│   ├── sections/           # Sections de la page
│   │   ├── Hero.jsx        # Section d'accueil
│   │   ├── About.jsx       # À propos
│   │   ├── Skills.jsx      # Compétences
│   │   ├── Projects.jsx    # Projets
│   │   ├── Education.jsx   # Formation & Expérience
│   │   └── Contact.jsx     # Contact
│   ├── data/               # Données centralisées
│   │   └── portfolioData.js # Toutes les données du portfolio
│   ├── assets/             # Images et médias
│   ├── App.jsx             # Composant principal
│   ├── main.jsx            # Point d'entrée
│   └── index.css           # Styles globaux et design system
├── index.html              # Template HTML
├── package.json            # Dépendances
└── vite.config.js          # Configuration Vite
```

## 🚀 Installation et Démarrage

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/rahmach12/MonPortfolio
cd MonPortfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build de Production

```bash
# Créer le build de production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 🎨 Technologies Utilisées

### Core
- **React 18.3** - Bibliothèque UI
- **Vite 7.3** - Build tool et dev server ultra-rapide
- **JavaScript (ES6+)** - Langage de programmation

### Styling
- **CSS3** - Styles avec variables CSS et animations
- **Flexbox & Grid** - Layouts responsives
- **Animations CSS** - Transitions et effets fluides

### Fonctionnalités Modernes
- **Intersection Observer API** - Animations au scroll
- **CSS Custom Properties** - Design tokens
- **Responsive Design** - Mobile-first approach
- **Glassmorphism Effects** - Effets visuels modernes

## 📱 Sections du Portfolio

1. **Hero** - Introduction avec animation de particules et gradient dynamique
2. **À Propos** - Présentation personnelle et informations clés
3. **Compétences** - Technologies maîtrisées avec barres de progression animées
4. **Projets** - Portfolio de projets avec détails et liens GitHub
5. **Formation & Expérience** - Parcours académique et professionnel en timeline
6. **Contact** - Formulaire de contact et informations de contact

## 🎯 Projets Présentés

- **Revive Hub** - Plateforme e-commerce santé (React + Spring Boot)
- **EduFlow** - Système de gestion scolaire (Laravel + PHP)
- **Spring Boot Microservices** - Architecture microservices
- **PFA Project** - Projet de fin d'année Full-Stack
- **Portfolio Personnel** - Ce portfolio (React + Vite)

## 🔧 Personnalisation

Pour personnaliser le portfolio avec vos propres informations :

1. **Modifier les données** : Éditez `src/data/portfolioData.js`
   - Informations personnelles
   - Projets
   - Compétences
   - Formation et expériences
   - Informations de contact

2. **Modifier les couleurs** : Éditez les variables CSS dans `src/index.css`
   ```css
   :root {
     --color-primary: #6366f1;
     --color-secondary: #8b5cf6;
     /* ... autres couleurs ... */
   }
   ```

3. **Ajouter des images** : Placez vos images dans `public/` ou `src/assets/images/`

## 🌐 Déploiement

### GitHub Pages

```bash
# Installer gh-pages
npm install --save-dev gh-pages

# Ajouter dans package.json
"homepage": "https://rahmachriha.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Déployer
npm run deploy
```

### Netlify

1. Connectez votre repository GitHub à Netlify
2. Configuration de build :
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Déployez !

### Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

## 📄 License

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et le modifier.

## 👤 Auteur

**Rahma Chriha**

- 📧 Email: rahma.chriha@example.com
- 💼 LinkedIn: [Rahma Chriha](https://www.linkedin.com/in/rahma-chriha)
- 📦 GitHub: [@rahmachriha](https://github.com/rahmachriha)
- 📍 Localisation: Sousse, Tunisie

## 🙏 Remerciements

- Design inspiré par les meilleures pratiques modernes de web design
- Icônes emoji pour une esthétique fun et accessible
- Google Fonts pour les polices (Inter, Roboto Mono)

---

⭐ Si vous aimez ce projet, n'hésitez pas à lui donner une étoile sur GitHub !
