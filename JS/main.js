import { vsc } from "./_vsc.js";

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

function displayActions() {
  const results = findActions(this.value, vsc);
  // this = input
  const resultsHtml = results.map((el) => {
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

    return `<li class="resultEl"><span class="action">
    ${action}</span> : 
    <br /><span class="shortcut">
    ${shortcut}</span></li>`;
    /*
    In fact we will have as a result 2 <span>'s around our input expression :
    -> one entouring all the result expression
    -> one entouring only the characters that need to be highlighted
    <span class="action"><span class="highlight">comm</span>enter le code (ligne unique)</span>
    */
  });
  resultsOutput.innerHTML = resultsHtml;
}

function displayShortcuts() {
  const results = findShortcuts(this.value, vsc);
  console.log("results :", results);
  const resultsHtml = results.map((el) => {
    const regex = new RegExp(this.value, "gi");
    const action = el.action.replace(
      regex,
      `<span class="highlight">${this.value}</span>`
    );
    const shortcut = el.shortcut.replace(
      regex,
      `<span class="highlight">${this.value}</span>`
    );
    //console.log(`%c${shortcut}`, `color:orange`);
    return `<li class="resultEl"><span class="action">
    ${action}</span> : 
    <br /><span class="shortcut">
    ${shortcut}</span></li>`;
    /*
    In fact we will have as a result 2 <span>'s around our input expression :
    -> one entouring all the result expression
    -> one entouring only the characters that need to be highlighted
    <span class="action"><span class="highlight">comm</span>enter le code (ligne unique)</span>
    */
  });
  resultsOutput.innerHTML = resultsHtml;
}

searchByAction.addEventListener("change", displayActions);
searchByAction.addEventListener("keyup", displayActions);

searchByShortcut.addEventListener("change", displayShortcuts);
searchByShortcut.addEventListener("keyup", displayShortcuts);
