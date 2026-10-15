# Sudoku

Une application Sudoku statique, bilingue français/anglais, réalisée en HTML, CSS et JavaScript sans dépendance ni étape de compilation.

## Lancer en local

Depuis la racine du projet :

```sh
npx http-server . -p 8000
```

Ouvrez ensuite <http://localhost:8000>. Le serveur local permet aussi de tester le service worker et l’installation PWA.

## Fonctionnalités

- Quatre niveaux de difficulté : Tout doux, Équilibré, Corsé et Expert.
- Interface en français et en anglais, thèmes clair et sombre.
- Notes, vérification, chronomètre et choix de surligner ou non les erreurs.
- Indice sans révéler le chiffre : il sélectionne une case ayant peu de possibilités et met sa colonne en évidence.
- Sauvegarde automatique de la partie et des préférences dans le stockage local du navigateur.
- Installation PWA sur les navigateurs compatibles ; sur iPhone et iPad, utilisez le menu de partage puis « Sur l’écran d’accueil ».
- Cache hors ligne des fichiers de l’application via le service worker.

## Installation et hébergement

Pour l’installation PWA, servez le site sur `localhost` ou en HTTPS. Le navigateur peut afficher sa propre invite d’installation ; sa disponibilité dépend du navigateur et de ses critères. Sur iPhone et iPad, l’ajout à l’écran d’accueil se fait manuellement depuis le menu de partage.

Les grilles et préférences sont conservées sur l’appareil dans `localStorage`. Les fichiers statiques de l’application sont mis en cache par le service worker. Aucun compte ni serveur applicatif n’est utilisé.

## Fichiers principaux

- `index.html` : interface et fenêtres d’aide.
- `style.css` : styles responsives et thèmes.
- `app.js` : génération des grilles et logique du jeu.
- `manifest.webmanifest` : métadonnées PWA et icônes.
- `service-worker.js` : cache hors ligne de l’application.

## Vérification

```sh
node --check app.js
node --check service-worker.js
```
