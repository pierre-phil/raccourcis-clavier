import { shortcuts } from "./_shortcuts.js";

// console.table(vsc);

const searchByAction = document.querySelector(".action");
const searchByShortcut = document.querySelector(".shortcut");
const resultsOutput = document.querySelector(".results");

function findActions(expr, array) {
  return array.filter((el) => {
    const regex = new RegExp(expr, "gi");
    // find matches with regex in vsc.action or vsc.shortcut
    return el.action.match(regex);
  });
}

function findShortcuts(expr, array) {
  return array.filter((el) => {
    const regex = new RegExp(expr, "gi");
    return el.shortcut.match(regex);
  });
}

function displayActions(event) {
  const results = findActions(event.target.value, shortcuts);
  // this = input
  // console.log("results :", results);
  const resultsHtml = results
    .map((el) => {
      const regex = new RegExp(this.value, "gi");
      /*
    The following lines are making the effect that the letters we type in the input
    become highlighted in the results.
    What happens :
    We search an expression matching with 'regex' (1st argument of replace()) in el.action
    -> el.action will see its text replaced with the expression which is the second argument of replace()
    -> if we search "cours", the expression "chercher occurence en cours"
    will become in the results "chercher occurence en <span class="highlight">cours</span>"
    -> as we are using map here, every expression in 'results' will have this treatment
    */
      const action = el.action.replace(
        regex,
        `<span class="highlight">${this.value}</span>`
      );
      const shortcut = el.shortcut.replace(
        regex,
        `<span class="highlight">${this.value}</span>`
      );
      const category = el.category;
      return `<li><span class="action">
    ${action}</span> : 
    <br /><span class="shortcut">
    ${shortcut}</span>
    <br/>
    <span class="category">${category}</span>
</li>
    `;
      /*
    In fact we will have as a result 2 <span>'s around our input expression :
    -> one entouring all the result expression
    -> one entouring only the characters that need to be highlighted
    <span class="action"><span class="highlight">comm</span>enter le code (ligne unique)</span>
    */
    })
    /*
    As results is an array of objects, this prevents to have commas ","
    between different results
    */
    .join("");
  resultsOutput.innerHTML = resultsHtml;
}

function displayShortcuts(event) {
  const results = findShortcuts(event.target.value, shortcuts);
  const resultsHtml = results
    .map((el) => {
      const regex = new RegExp(this.value, "gi");
      const action = el.action.replace(
        regex,
        `<span class="highlight">${this.value}</span>`
      );
      const shortcut = el.shortcut.replace(
        regex,
        `<span class="highlight">${this.value}</span>`
      );
      const category = el.category;
      //console.log(`%c${shortcut}`, `color:orange`);
      return `<li><span class="action">
    ${action}</span> : 
    <br /><span class="shortcut">
    ${shortcut}</span>
    <br/>
    <span class="category">${category}</span>
    </li>`;
      /*
    In fact we will have as a result 2 <span>'s around our input expression :
    -> one entouring all the result expression
    -> one entouring only the characters that need to be highlighted
    <span class="action"><span class="highlight">comm</span>enter le code (ligne unique)</span>
    */
    })
    .join("");
  resultsOutput.innerHTML = resultsHtml;
}

function displayAllResults(array) {
  console.log("shortcuts", shortcuts);
  const resultsHtml = array
    .map((el) => {
      return `<li><span class="action">
  ${el.action}</span> : 
  <br /><span class="shortcut">
  ${el.shortcut}</span>
  <br/>
  <span class="category">${el.category}</span>`;
    })
    .join("");
  resultsOutput.innerHTML = resultsHtml;
}

// this is for displaying all the shortcuts on first loading of the page
displayAllResults(shortcuts);

searchByAction.addEventListener("change", displayActions);
searchByAction.addEventListener("keyup", displayActions);

searchByShortcut.addEventListener("change", displayShortcuts);
searchByShortcut.addEventListener("keyup", displayShortcuts);

//todo : create sort by category

function selectedCategory(value) {
  switch (value) {
    case "vsc":
      console.log("Category: vsc");
    case "chrome":
      console.log("Category: chrome");
    case "git":
      console.log("Category: git");
    case "bash":
      console.log("Category: bash");
    default:
      console.log("Category: all");
  }
}
