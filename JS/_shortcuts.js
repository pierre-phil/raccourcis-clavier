export const shortcuts = [
  // VSC
  {
    action: "Recherche page en cours",
    shortcut: `<code>ctrl F</code>`,
    category: "vsc",
  },
  {
    action: "Masquer la barre latérale",
    shortcut: `<code>ctrl B</code>`,
    category: "vsc",
  },
  {
    action: "Recherche globale",
    shortcut: `<code>ctrl maj F</code>`,
    category: "vsc",
  },
  {
    action: "Changer occurrence en cours et suivante",
    shortcut: `<code>ctrl D</code>`,
    category: "vsc",
  },
  {
    action: "Changer toutes les occurrences",
    shortcut: `<code>ctrl F2</code>`,
    category: "vsc",
  },
  {
    action: "Supprimer ligne",
    shortcut: `<code>maj suppr</code>`,
    category: "vsc",
  },
  {
    action: "Supprimer mot précédent/suivant",
    shortcut: `<code>ctrl del</code> / <code>ctrl suppr</code>`,
    category: "vsc",
  },
  {
    action: "Commenter le code (ligne unique)",
    shortcut: `sélectionner puis <code>ctrl maj  /</code>`,
    category: "vsc",
  },
  {
    action: "Commenter le code (multi-ligne)",
    shortcut: `sélectionner puis <code>ctrl maj A</code>`,
    category: "vsc",
  },
  {
    action: "Voir où une fonction/variable est définie",
    shortcut: `<code>ctrl maj clic</code>`,
    category: "vsc",
  },
  {
    action: "Supprimer une erreur",
    shortcut: `<code>problems/clic droit/ignorer</code>`,
    category: "vsc",
  },
  {
    action: "Curseur multiple",
    shortcut: `<code>alt clic</code>`,
    category: "vsc",
  },
  {
    action: "Faire monter/descende sélection",
    shortcut: `<code>alt ↑/↓</code>`,
    category: "vsc",
  },
  {
    action: "Afficher/masquer terminal",
    shortcut: `<code>ctrl J</code>`,
    category: "vsc",
  },
  {
    action: "Chercher et remplacer",
    shortcut: `<code>ctrl H</code>`,
    category: "vsc",
  },
  {
    action: "Zen mode",
    shortcut: `<code>ctrl K Z</code>`,
    category: "vsc",
  },
  {
    action: "Positionner terminal à droite",
    shortcut: `Pour rendre ce paramètre définitif, régler d’abord dans 
    <code>préférences/terminal/defaultTerminalPosition</code><br/>puis effectuer l’opération suivante : clic droit sur bouton <code>terminal</code> au niveau de l'output VSC et sélectionner <code>déplacer à droite (move panel right)</code>`,
    category: "vsc",
  },
  {
    action: "Faire de prettier le formatter par défaut",
    shortcut: `Une fois Prettier installé aller dans <pre><code>file/preferences/settings</code></pre> raccourci : <code>ctrl ,</code> puis chercher <code>default formatter</code>, enfin sélectionner <code>"esbnp.prettier-vscode"</code>`,
    category: "vsc",
  },
  {
    action: `Désactiver les <i>tips</i> au survol de la souris`,
    shortcut: `Aller dans <pre><code>file/preferences/settings/textEditor/suggestions/quickSuggestions</code></pre> et cliquer sur <code>edit in settings.json</code>
    <br/>Si une ligne est rajoutée automatiquement, la supprimer, puis ajouter <code>"editor.hover.enabled": "false"</code>`,
    category: "vsc",
  },
  {
    action: "Paramétrer un affichge combiné du terminal et des problems",
    shortcut: `Cliquer sur le bouton <code>terminal</code> et le glisser-déposer dans la fenêtre <code>problems</code> (ou inversement)`,
    category: "vsc",
  },
  {
    action: "Chercher un fichier",
    shortcut: `<code>ctrl P</code>`,
    category: "vsc",
  },
  {
    action: `Insérer le symbole ×`,
    shortcut: `<code>altGr ;</code>`,
    category: "vsc",
  },
  {
    action: `Insérer le symbole ÷`,
    shortcut: `<code>altGr :</code>`,
    category: "vsc",
  },
  {
    action: `Insérer le symbole ±`,
    shortcut: `<code>altGr F</code>`,
    category: "vsc",
  },
  {
    action: `Insérer le symbole « »`,
    shortcut: `<code>altGr W</code> / <code>altGr X</code>`,
    category: "vsc",
  },
  {
    action: `Insérer le symbole © / ®`,
    shortcut: `<code>altGr C</code> / <code>altGr V</code>`,
    category: "vsc",
  },
  {
    action: `Changer la couleur du texte sélectionné`,
    shortcut: `Aller dans les préférences <code>ctrl ,</code> et chercher <code>Workbench: Color Customizations</code><br/>
    Modifier dans <code>settings.json</code> et ajouter : <pre><code>"workbench.colorCustomizations": {
      "editor.selectionBackground": "#135564",
    }</pre></code> en remplaçant par la couleur de votre choix.`,
    category: "vsc",
  },
  // NAVIGATEUR
  {
    action: "Masquer barre de favoris",
    shortcut: "ctrl maj B",
    category: "navigateur",
  },
  {
    action: "nettoyer local storage",
    shortcut: "localStorage.clear()",
    category: "navigateur",
  },
  {
    action: "recharger la page sans utiliser le cache",
    shortcut: "maj ctrl R",
    category: "navigateur",
  },
  {
    action: "effacer le cache",
    shortcut: "ctrl maj suppr",
    category: "navigateur",
  },
  {
    action: "ouvrir les dev tools",
    shortcut: "ctrl maj I / F12",
    category: "navigateur",
  },
  {
    action: "ouvrir l’inspecteur",
    shortcut: "ctrl maj C",
    category: "navigateur",
  },
  {
    action: "afficher code source",
    shortcut: "ctrl U",
    category: "navigateur",
  },
  {
    action: "aller à l’onglet …",
    shortcut: "ctrl 1/2/3 …",
    category: "navigateur",
  },
  {
    action: "changer position onglet",
    shortcut: "ctrl maj top/down",
    category: "navigateur",
  },
  {
    action: "aller en haut/bas de page",
    shortcut: "ctrl ↖/fin (tout en sélectionnant : maj)",
    category: "navigateur",
  },
  {
    action: "page précédente/page suivante",
    shortcut: "alt ← / alt →",
    category: "navigateur",
  },
  {
    action:
      "console : augmenter ou diminuer la valeur numérique d’une propriété CSS",
    shortcut: "↑/↓ / de 10 en 10 : maj ↑/↓ / de 100 en 100 : ctrl ↑/↓",
    category: "navigateur",
  },
  {
    action: "réduire la fenêtre, laisser au premier plan ...",
    shortcut: "alt space",
    category: "navigateur",
  },
  {
    action: "aller à la barre de recherche",
    shortcut: "alt d / ctrl l",
    category: "navigateur",
  },
  {
    action: "console: afficher sous forme de tableau",
    shortcut: "console.table()",
    category: "navigateur",
  },
  {
    action: "console: afficher tous les héritages d’une variable",
    shortcut: "console.trace()",
    category: "navigateur",
  },
  {
    action: "console: afficher sous forme d'erreur",
    shortcut: "console.error()",
    category: "navigateur",
  },
  {
    action: "console: afficher sous forme de warning",
    shortcut: "console.warn()",
    category: "navigateur",
  },
  {
    action: "console: afficher sous forme d'info",
    shortcut: "console.info()",
    category: "navigateur",
  },
  {
    action: "console: afficher les propriétés de l'objet",
    shortcut: "console.dir()",
    category: "navigateur",
  },
  {
    action: "afficher la page d'accueil",
    shortcut: "alt + ↖ (début)",
    category: "navigateur",
  },
  // GIT
  {
    action: "supprimer un dossier dans un repo distant",
    shortcut: `$ git rm -r --cached %folderName ;
	$ git commit -m "Removed folder from repository" ;
	$ git push origin %branch`,
    category: "git",
  },
  { action: "voir url origin", shortcut: "$ git remote -v", category: "git" },
  {
    action: "voir username et email de git configurés globalement",
    shortcut: "$ git config --list",
    category: "git",
  },
  {
    action: "modifier username et email git du repo actuel",
    shortcut: `$ git config user.name "%username" ; $ git config user.email "%email". 
    Peut aussi être fait en ajoutant le champ "[user]" puis les lignes "email = %email" et "name = %username" au fichier 'config' dans : repository/.git/config ($ ls -a pour l'afficher)`,
    category: "git",
  },
  {
    action: "changer url origin",
    shortcut: "$ git remote set-url origin %url",
    category: "git",
  },
  {
    action: "ajouter url origin",
    shortcut: "$ git remote add origin %url ; $ git remote -v",
    category: "git",
  },
  {
    action:
      "récupérer les modifs (pull) depuis un repo distant différent du repo actuel",
    shortcut: `Renseigner l'url du repo distant dans lequel il faut tirer $ git remote add upstream %urlRepo ; On peut alors faire le pull avec $ git pull upstream; pour se prémunir de push nos modif dans ce repo faire $ git config remote.upstream.pushurl "%FAKE ADDRESS" ; ainsi avec cet url inexistant git retournera une erreur si par mégarde on fait un $ git push upstream;`,
    category: "git",
  },
  {
    action: "revenir à un précédent commit",
    shortcut: `$ git checkout %identifiantDuCommit ; (le trouver sur github ou 	en faisant $ git 	log). Cela nous replace sur le commit sélectionné.
	Pour push il faudra l’envoyer sur une nouvelle branche : $ git checkout -b %nomNouvelleBranche %identifiantDuCommit`,
    category: "git",
  },
  {
    action: "push une branche locale en remote",
    shortcut: `se placer sur la branche à pousser avec $ git checkout ; puis
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
    action: "run un audit Lighthouse",
    shortcut:
      "$ lighthouse %url --view ; (le paquet lighthouse devrait être installé ainsi que Chrome (?)). $ --view permet d'ouvrir le rapport généré dans la foulée.",
    category: "bash",
  },
  {
    action: "créer un alias",
    shortcut: `$ alias %nomAlias="%commande/chemin" ; attention pour ZSH les alias devraient se trouver dans le fichier /home/%user/.oh-my-zsh/custom/aliases.zsh`,
    category: "bash",
  },
  {
    action: "interrompre processus en cours",
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
    action: "renommer un dossier",
    shortcut:
      "$ mv %dirName1 %dirName2 (ou chemin complet si on est à l'extérieur du dossier)",
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
	ou $ yarn add %package@%version ; ou en tant que "dev dependency" $ yarn add %package –D ; ou installation globale $ yarnglobal add %package`,
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
  // SIMPLE REACT SNIPETS
  { action: "import React", shortcut: "imr", category: "reactSnippets" },
  {
    action: "import React, { useState }",
    shortcut: "imrs",
    category: "reactSnippets",
  },
  {
    action: "import React, { useState, useEffect }",
    shortcut: "imrse",
    category: "reactSnippets",
  },
  {
    action: "insert stateless functional component",
    shortcut: "sfc",
    category: "reactSnippets",
  },
  { action: "useEffect()", shortcut: "uef", category: "reactSnippets" },
  { action: "useState()", shortcut: "usf", category: "reactSnippets" },

  // Node
  {
    action: "installer dernière version de node",
    shortcut: `$ npm install -g n ;
	$ sudo n latest`,
    category: "node",
  },
  {
    action: "installer une version précise de node",
    shortcut: `$ nvm install v%12.19.0 ;
	pour l'utiliser $ nvm use %12.19.0 ;`,
    category: "node",
  },
  {
    action: "créer un fichier de configuration de version de Node pour Netlify",
    shortcut: `être sur la bonne version de Node à utiliser puis dans la racine du projet, taper $ node -v > .nvmrc ; un fichier contenant la version de Node à utiliser est créé et le repo peut être poussé vers Netlify`,
    category: "node",
  },
  // UBUNTU
  {
    action: "afficher les fichiers cachés dans l'explorateur de fichiers",
    shortcut: "ctrl H",
    category: "ubuntu",
  },
];
