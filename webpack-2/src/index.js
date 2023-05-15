import _ from "lodash";
import "./style.css";
import Word from "./wordington.png";

function component() {
    const element = document.createElement("div");

    // Lodash, now imported by this script
    element.innerHTML = _.join(["Hello", "webpack"], " ");

    element.classList.add("hello");

    const myWordington = new Image();
    myWordington.src = Word;

    element.appendChild(myWordington);

    return element;
}

document.body.appendChild(component());
