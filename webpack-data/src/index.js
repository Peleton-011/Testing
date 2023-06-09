import _ from "lodash";
import "./style.css";
import Word from "./wordington.png";
import Data from "./data.xml";
import Notes from "./data.csv";
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';


console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`


console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`


console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

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

console.log(Data);
console.log(Notes);


document.body.appendChild(component());
