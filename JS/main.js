import { vsc } from "./_vsc.js";

// console.table(vsc);

const searchByAction = document.querySelector(".action");
const resultsOutput = document.querySelector(".results");

function findShortcuts(expr, array) {
  return array.filter((el) => {
    const regex = new RegExp(expr, "gi");
    return el.shortcut.match(regex) || el.action.match(regex);
  });
}

function displayResults() {
  const results = findShortcuts(this.value, vsc);
  console.log(results);
  const resultsHtml = results.map((el) => {
    const regex = new RegExp(this.value, "gi");
    const action = el.action.replace(regex, `<span>${this.value}</span>`);
    const shortcut = el.shortcut.replace(regex, `<span>${this.value}</span>`);
    return `<li><span class="action">
    ${action}</span> : 
    <br /><span class="shortcut">
    ${shortcut}</span></li>`;
  });
  resultsOutput.innerHTML = resultsHtml;
}

searchByAction.addEventListener("change", displayResults);
searchByAction.addEventListener("keyup", displayResults);
