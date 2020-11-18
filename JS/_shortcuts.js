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
  // CHROME
  {
    action: "nettoyer local storage",
    shortcut: "localStorage.clear()",
    category: "chrome",
  },
  {
    action: "purger cache et rafraîchir",
    shortcut: "ctrl F5",
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
];
