//This package has a list of colors and a method to get a random one

class Color {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}

const colors = [
    new Color("brightred", "#E74C3C"),
    new Color("soothingpurple", "#9B59B6"),
    new Color("skyblue", "#5DADE2"),
    new Color("leafygreen", "#48C9B0"),
    new Color("sunkissedyellow", "#F4D03F"),
    new Color("groovygray", "#D7DBDD"),
];

exports.getRandomColor = function () {
    return colors[Math.floor(Math.random() * colors.length)];
};

exports.colors = colors;
