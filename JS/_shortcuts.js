export const shortcuts = [
  // VSC
  {
    action: "recherche dans page en cours",
    shortcut: "ctrl F",
    category: "vsc",
  },

  {
    action: "recherche globale",
    shortcut: "ctrl maj F",
    category: "vsc",
  },
  {
    action: "changer occurrence en cours et suivante",
    shortcut: "ctrl D",
    category: "vsc",
  },
  {
    action: "changer toutes les occurrences",
    shortcut: "ctrl F2",
    category: "vsc",
  },
  { action: "supprimer ligne", shortcut: "maj suppr", category: "vsc" },

  {
    action: "commenter le code (ligne unique)",
    shortcut: "sélectionner puis ctrl maj  /",
    category: "vsc",
  },
  {
    action: "commenter le code (multi-ligne)",
    shortcut: "sélectionner puis ctrl maj A",
    category: "vsc",
  },
  {
    action: "voir où une fonction/variable est définie",
    shortcut: "ctrl maj clic",
    category: "vsc",
  },
  {
    action: "supprimer une erreur",
    shortcut: "problems/clic droit/ignorer",
    category: "vsc",
  },
  { action: "curseur multiple", shortcut: "alt clic", category: "vsc" },
  {
    action: "faire monter/descende sélection",
    shortcut: "alt ↑/↓",
    category: "vsc",
  },
  { action: "afficher/masquer terminal", shortcut: "ctrl J", category: "vsc" },
  { action: "chercher et remplacer", shortcut: "ctrl H", category: "vsc" },
  { action: "zen mode", shortcut: "ctrl k z", category: "vsc" },
  {
    action: "positionner terminal à droite",
    shortcut: `pour rendre ce paramètre définitif, régler d’abord dans préférences/terminal/defaultTerminalPosition puis	effectuer l’opération suivante : clic droit sur bouton terminal au niveau de l'output/console VSC et sélectionner "déplacer à droite" / "move panel right"`,
    category: "vsc",
  },
  {
    action: "faire de prettier le formatter par défaut",
    shortcut: `une fois Prettier installé aller dans file/preferences/settings (ctrl + ,) puis chercher "default formatter", enfin sélectionner "esbenp.prettier-vscode"`,
    category: "vsc",
  },
  {
    action: `désactiver les "tips" au survol de la souris`,
    shortcut: `aller dans file/preferences/settings/textEditor/suggestions/quickSuggestions et cliquer sur "edit in settings.json". Si une ligne est rajoutée automatiquement, 
  la supprimer et	ajouter la ligne suivante :	"editor.hover.enabled: false"`,
    category: "vsc",
  },
  {
    action: "paramétrer un affichge combiné du terminal et des problems",
    shortcut: `cliquer sur le bouton "terminal" et le glisser déposer dans la fenêtre "problems", ou inversement`,
    category: "vsc",
  },
  { action: "chercher un fichier", shortcut: "ctrl P", category: "vsc" },
  {
    action: "renommer dans tous les fichiers",
    shortcut: "F2 sur le mot",
    category: "vsc",
  },
  // CHROME
  {
    action: "nettoyer local storage",
    shortcut: "localStorage.clear()",
    category: "chrome",
  },
  {
    action: "recharger la page sans utiliser le cache",
    shortcut: "maj ctrl R",
    category: "chrome",
  },
  {
    action: "effacer le cache",
    shortcut: "ctrl maj suppr",
    category: "chrome",
  },
  {
    action: "ouvrir les dev tools",
    shortcut: "ctrl maj I",
    category: "chrome",
  },
  { action: "ouvrir l’inspecteur", shortcut: "ctrl maj C", category: "chrome" },
  { action: "afficher code source", shortcut: "ctrl U", category: "chrome" },
  {
    action: "aller à l’onglet …",
    shortcut: "ctrl 1/2/3 …",
    category: "chrome",
  },
  {
    action: "changer position onglet",
    shortcut: "ctrl maj top/down",
    category: "chrome",
  },
  {
    action: "aller en haut/bas de page",
    shortcut: "ctrl ↖/fin (tout en sélectionnant : maj)",
    category: "chrome",
  },
  {
    action: "page précédente/page suivante",
    shortcut: "alt ← / alt →",
    category: "chrome",
  },
  {
    action:
      "console : augmenter ou baisser la valeur numériqué d’une propriété CSS",
    shortcut: "↑/↓ de 10 en 10 : maj ↑/↓ - de 100 en 100 : ctrl ↑/↓",
    category: "chrome",
  },
  {
    action: "afficher les favoris (extension Barre latérale de 	favoris)",
    shortcut: "ctrl b",
    category: "chrome",
  },
  {
    action: "réduire la fenêtre, laisser au premier plan ...",
    shortcut: "alt space",
    category: "chrome",
  },
  {
    action: "aller à la barre de recherche",
    shortcut: "alt d / ctrl l",
    category: "chrome",
  },
  {
    action: "console: afficher sous forme de tableau",
    shortcut: "console.table()",
    category: "chrome",
  },
  {
    action: "console: afficher tous les héritages d’une variable",
    shortcut: "console.trace()",
    category: "chrome",
  },
  {
    action: "console: afficher sous forme d'erreur",
    shortcut: "console.error()",
    category: "chrome",
  },
  {
    action: "console: afficher sous forme de warning",
    shortcut: "console.warn()",
    category: "chrome",
  },
  {
    action: "console: afficher sous forme d'info",
    shortcut: "console.info()",
    category: "chrome",
  },
  // GIT
  { action: "voir url origin", shortcut: "$ git remote -v", category: "git" },
  {
    action: "changer url origin",
    shortcut: "$ git remote set-url origin %url",
    category: "git",
  },
  {
    action: "revenir à un précédent commit",
    shortcut: `$ git checkout %identifiantDuCommit (le trouver sur github ou 	en faisant $ git 	log). Cela nous replace sur le commit sélectionné.
	Pour push il faudra l’envoyer sur une nouvelle branche : $ git checkout -b %nomNouvelleBranche %identifiantDuCommit`,
    category: "git",
  },
  {
    action: "push une branche locale en remote",
    shortcut: `se placer sur la branche à pousser avec git checkout, puis
	$ git push --set-upstream origin %branche ;	$ git branch`,
    category: "git",
  },
  {
    action: "supprimer une branche locale",
    shortcut: "$ git branch -d %branche",
    category: "git",
  },
  {
    action: "supprimer une branche distante",
    shortcut: "$ git push origin --delete %branche",
    category: "git",
  },
  {
    action: "changer url origin",
    shortcut: "$ git remote set-url origin %urlRemote",
    category: "git",
  },
  // BASH
  {
    action: "dépaqueter un paquet",
    shortcut: "$ sudo dpkg -i %cheminFichier",
    category: "bash",
  },
  {
    action: "intérrompre processus en cours",
    shortcut: "ctrl C",
    category: "bash",
  },
  {
    action: "visualiser T°C CPU",
    shortcut: "$ watch sensors (lm-sensors doit être installé)",
    category: "bash",
  },
  {
    action: "copier/coller dans le terminal",
    shortcut: "ctrl maj C / ctrl maj V",
    category: "bash",
  },
  {
    action: "installer dernière version de node",
    shortcut: `$ npm install -g n ;
	$ sudo n latest`,
    category: "bash",
  },
  {
    action: "installer une version précise de node",
    shortcut: `nvm install v12.19.0
	(pour l'utiliser : $ nvm use 12.19.0 -)`,
    category: "bash",
  },
  {
    action: "renommer un dossier",
    shortcut: "$ mv %dirName1 %dirName2",
    category: "bash",
  },
  {
    action: "supprimer un dossier dans un repo distant",
    shortcut: `$ git rm -r --cached %folderName ;
	$ git commit -m "Removed folder from repository" ;
	$ git push origin main`,
    category: "bash",
  },
  // YARN
  {
    action: `accéder au dossier "cache"`,
    shortcut: "$ yarn cache list",
    category: "yarn",
  },
  {
    action: `installer les dépendances depuis "package.json"`,
    shortcut: "$ yarn",
    category: "yarn",
  },
  {
    action: `installer un package`,
    shortcut: `$ yarn add %package ;
	ou $ yarn add %package@version ; ou en tant que "dev dependency" $ yarn add %package –D ; ou installation globale $ yarnglobal add %package`,
    category: "yarn",
  },
  // POSTGRESQL
  {
    action: "se connecter au service",
    shortcut: "$ psql -d postgres -U %username",
    category: "postgreSQL",
  },
  {
    action: "lister les users postgres",
    shortcut: `\\\du`,
    category: "postgreSQL",
  },
  {
    action: "quitter le prompt postgresql / quitter la connexion à psql",
    shortcut: `\\\q`,
    category: "postgreSQL",
  },
  {
    action: "afficher les infos de connexion",
    shortcut: `\\\conninfo`,
    category: "postgreSQL",
  },
  {
    action: "se connecter à une DB",
    shortcut: `\\\c %dataBase`,
    category: "postgreSQL",
  },
  {
    action: "lister toutes les tables",
    shortcut: `\\\dt`,
    category: "postgreSQL",
  },
  { action: "lister les rôles", shortcut: `\\\du`, category: "postgreSQL" },
  {
    action: "lister toutes les DB",
    shortcut: `\\\list`,
    category: "postgreSQL",
  },
];
