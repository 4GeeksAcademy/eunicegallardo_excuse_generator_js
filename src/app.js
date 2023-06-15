/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let generateExcuse = () => {
    let who = ["The dog", "My sister", "His turtle", "My bird"];
    let action = ["bite", "took", "ate", "ran on"];
    let what = ["my homework", "my smartphone", "my hat"];
    let when = ["this morning.", "yesterday.", "before class."];

    let who2 = Math.floor(Math.random() * who.length);
    let action2 = Math.floor(Math.random() * action.length);
    let what2 = Math.floor(Math.random() * what.length);
    let when2 = Math.floor(Math.random() * when.length);
    return (
      who[who2] + " " + action[action2] + " " + what[what2] + " " + when[when2]
    );
  };
  document.getElementById("excuse").innerHTML = generateExcuse();

  console.log("Excuse Generator");
};
