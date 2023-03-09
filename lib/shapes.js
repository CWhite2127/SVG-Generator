class Shapes {
    constructor(color, text, textColor) {
        this.color = color
        this.text = text
        this.textColor = textColor
    }
    setColor(color) {
        this.color = (color);
    }
}

class Circle extends Shapes {
    constructor(color, text, textColor) {
        super(color, text, textColor)
    }
    render() {
        return `<circle cx="100" cy="100" r="80" stroke="black" stroke-width="3" fill="${this.color}" />`
    }
}

class Triangle extends Shapes {
    constructor(color, text, textColor) {
        super(color, text, textColor)
    }
    render() {
        return `<polygon points="100,10 10,200 220,280" fill="${this.color}" />`
    }
}

class Square extends Shapes {
    constructor(color, text, textColor) {
        super(color, text, textColor)
    }
    render() {
        return `<rect width="200" height="200" fill="${this.color}"/>`
    }
}

module.exports = {Circle, Triangle, Square};