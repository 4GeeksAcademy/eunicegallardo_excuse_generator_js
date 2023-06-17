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

    let randomWho = Math.floor(Math.random() * who.length);
    let randomAction = Math.floor(Math.random() * action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random() * when.length);
    return (
      who[randomWho] +
      " " +
      action[randomAction] +
      " " +
      what[randomWhat] +
      " " +
      when[randomWhen]
    );
  };
  document.getElementById("excuse").innerHTML = generateExcuse();

  console.log("Excuse Generator");
};
