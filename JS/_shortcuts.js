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
    <pre><code>préférences/terminal/defaultTerminalPosition</code></pre>puis clic droit sur bouton <code>terminal</code> au niveau de l'output VSC et sélectionner <code>déplacer à droite (move panel right)</code>`,
    category: "vsc",
  },
  {
    action: "Faire de prettier le formatter par défaut",
    shortcut: `Une fois Prettier installé aller dans <pre><code>file/preferences/settings     (ctrl ,)</code></pre> puis chercher <code>default formatter</code>, enfin sélectionner <code>"esbnp.prettier-vscode"</code>`,
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
    shortcut: "<code>ctrl maj B</code>",
    category: "navigateur",
  },
  {
    action: "nettoyer local storage",
    shortcut: "<pre><code>localStorage.clear()</code></pre>",
    category: "navigateur",
  },
  {
    action: "recharger la page sans utiliser le cache",
    shortcut: "<code>maj ctrl R</code>",
    category: "navigateur",
  },
  {
    action: "effacer le cache",
    shortcut: "<code>ctrl maj suppr</code>",
    category: "navigateur",
  },
  {
    action: "ouvrir les dev tools",
    shortcut: "<code>ctrl maj I</code> / <code>F12</code>",
    category: "navigateur",
  },
  {
    action: "ouvrir l’inspecteur",
    shortcut: "<code>ctrl maj C</code>",
    category: "navigateur",
  },
  {
    action: "afficher code source",
    shortcut: "<code>ctrl U</code>",
    category: "navigateur",
  },
  {
    action: "aller à l’onglet …",
    shortcut: "<code>ctrl 1/2/3 …</code>",
    category: "navigateur",
  },
  {
    action: "changer position onglet",
    shortcut: "<code>ctrl maj top/down</code>",
    category: "navigateur",
  },
  {
    action: "aller en haut/bas de page",
    shortcut:
      "<code>ctrl ↖</code> / <code>ctrl fin</code> (tout en sélectionnant : ajouter <code>maj</code>)",
    category: "navigateur",
  },
  {
    action: "page précédente/page suivante",
    shortcut: "<code>alt ←</code> / <code>alt →</code>",
    category: "navigateur",
  },
  {
    action:
      "console : augmenter ou diminuer la valeur numérique d’une propriété CSS",
    shortcut:
      "<code>↑/↓</code><br/>de 10 en 10 : <code>maj ↑/↓</code><br/>de 100 en 100 : <code>ctrl ↑/↓</code>",
    category: "navigateur",
  },
  {
    action: "réduire la fenêtre, laisser au premier plan ...",
    shortcut: "<code>alt space</code>",
    category: "navigateur",
  },
  {
    action: "aller à la barre de recherche",
    shortcut: "<code>alt d</code> / <code>ctrl l</code>",
    category: "navigateur",
  },
  {
    action: "console: afficher sous forme de tableau",
    shortcut: "<pre><code>console.table()</pre></code>",
    category: "navigateur",
  },
  {
    action: "console: afficher tous les héritages d’une variable",
    shortcut: "<pre><code>console.trace()</pre></code>",
    category: "navigateur",
  },
  {
    action: "console: afficher sous forme d'erreur",
    shortcut: "<pre><code>console.error()</pre></code>",
    category: "navigateur",
  },
  {
    action: "console: afficher sous forme de warning",
    shortcut: "<pre><code>console.warn()</pre></code>",
    category: "navigateur",
  },
  {
    action: "console: afficher sous forme d'info",
    shortcut: "<pre><code>console.info()</pre></code>",
    category: "navigateur",
  },
  {
    action: "console: afficher les propriétés de l'objet",
    shortcut: "<pre><code>console.dir()</pre></code>",
    category: "navigateur",
  },
  {
    action: "afficher la page d'accueil",
    shortcut: "<code>alt ↖</code>",
    category: "navigateur",
  },
  // GIT
  {
    action: "supprimer un dossier dans un repo distant",
    shortcut: `<pre><code>git rm -r --cached $folderName
git commit -m "Removed folder from repository"
git push origin $branch</pre></code>`,
    category: "git",
  },
  {
    action: "voir url origin",
    shortcut: "<pre><code>git remote -v</pre></code>",
    category: "git",
  },
  {
    action: "voir username et email de git configurés globalement",
    shortcut: "<pre><code>git config --list</pre></code>",
    category: "git",
  },
  {
    action: "modifier username et email git du repo actuel",
    shortcut: `
    <pre><code>git config user.name "%username"
git config user.email "%email"
</pre></code>
    Peut aussi être fait en ajoutant le champ <code>user</code> puis les lignes <code>email = "$email"</code> et <code>name = "$username"</code> au fichier <code>repository/.git/config</code> (<code>ls -a</code> pour l'afficher)`,
    category: "git",
  },
  {
    action: "changer url origin",
    shortcut: "<pre><code>git remote set-url origin $url</pre></code>",
    category: "git",
  },
  {
    action: "ajouter url origin",
    shortcut: `<pre><code>git remote add origin $url
git remote -v</pre></code>`,
    category: "git",
  },
  {
    action:
      "récupérer les modifs (pull) depuis un repo distant différent du repo actuel",
    shortcut: `Renseigner l'url du repo distant dans lequel il faut tirer puis :
    <pre><code>git remote add upstream $urlRepo</pre></code>
     On peut alors faire le pull avec <code>git pull upstream</code><br/>
     Pour se prémunir de push nos modif dans ce repo on peut faire 
     <pre><code>git config remote.upstream.pushurl "$fakeRepoUrl"</pre></code>
     Ainsi avec cet url inexistant git retournera une erreur si par mégarde on fait un <code>git push upstream</code>`,
    category: "git",
  },
  {
    action: "revenir à un précédent commit",
    shortcut: `<pre><code>git checkout $identifiantDuCommit</pre></code>
    (le trouver sur github ou 	en faisant <code>git 	log</code>). Cela nous replace sur le commit sélectionné.
	Pour push il faudra l’envoyer sur une nouvelle branche : 
  <pre><code>$ git checkout -b $nomNouvelleBranche $identifiantDuCommit</pre></code>`,
    category: "git",
  },
  {
    action: "push une branche locale en remote",
    shortcut: `se placer sur la branche à pousser avec <code>git checkout</code> puis :
    <pre><code>git push --set-upstream origin $branche
git branch</pre></code>`,
    category: "git",
  },
  {
    action: "supprimer une branche locale",
    shortcut: "<pre><code>git branch -d $branche</pre></code>",
    category: "git",
  },
  {
    action: "supprimer une branche distante",
    shortcut: "<pre><code>git push origin --delete $branche</pre></code>",
    category: "git",
  },
  {
    action: "changer url origin",
    shortcut: "<pre><code>git remote set-url origin $urlRemote</pre></code>",
    category: "git",
  },
  // BASH
  {
    action: "Run un audit Lighthouse",
    shortcut: `<pre><code>lighthouse $url --view</code></pre>Le paquet <code>lighthouse</code> doit être installé ainsi que Chrome (?)<br/><code>--view</code> permet d'ouvrir le rapport généré dans la foulée.`,
    category: "bash",
  },
  {
    action: "créer un alias",
    shortcut: `<pre><code>alias $nomAlias="$commande/chemin"</pre></code>Attention pour ZSH les alias devraient se trouver dans le fichier : <pre><code>/home/$user/.oh-my-zsh/custom/aliases.zsh</pre></code>`,
    category: "bash",
  },
  {
    action: "interrompre processus en cours",
    shortcut: "<code>ctrl C</code>",
    category: "bash",
  },
  {
    action: "visualiser T°C CPU",
    shortcut:
      "<pre><code>watch sensors</code></pre><code>lm-sensors</code> doit être installé)",
    category: "bash",
  },
  {
    action: "copier/coller dans le terminal",
    shortcut: "<code>ctrl maj C</code> / <code>ctrl maj V</code>",
    category: "bash",
  },
  {
    action: "renommer un dossier",
    shortcut: `<pre><code>mv $dirName1 $dirName2</pre></code> (renseigner les chemins complets si vous êtes à l'extérieur du dossier où les dossiers doivent être supprimés)`,
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
