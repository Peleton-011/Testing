import _ from "lodash";

function component() {
    const element = document.createElement("div");
    const btn = document.createElement("button");

    // Lodash, now imported by this script
    element.innerHTML = _.join(["Hello", "webpack"], " ");

    btn.innerHTML = "Click me and check the console";
    btn.onclick = () => console.log("Cum");

    element.appendChild(btn);


    return element;
}

document.body.appendChild(component());