/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let indexWho = Math.floor(Math.random() * 3);
  let indexWhat = Math.floor(Math.random() * 3);
  let indexWhen = Math.floor(Math.random() * 4);
  let miExcusa =
    who[indexWho] + " " + what[indexWhat] + " my home work " + when[indexWhen];
  console.log(miExcusa);
  document.querySelector("#excusa").innerHTML = miExcusa;
};
