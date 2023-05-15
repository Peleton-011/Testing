const { get } = require("lodash");

function getComponent() {
    return import("lodash")
        .then(({ default: _ }) => {
            const element = document.createElement("div");

            element.innerHTML = _.join(["Hello", "cum!"], " ");

            return element;
        })
        .catch( err => "An error occurred while loading the component");
}

getComponent().then((component) => {
    document.body.appendChild(component);
})