


class Svg {
    constructor() {
        this.text = '';
        this.shape = '';
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"> 
        ${this.shape}
        ${this.text}
</svg>`
    }

    setText(text, textColor) {
        this.text = `<text x="35%" y="50%" text-anchor="middle" font-size="60" fill="${textColor}">${text}</text>`
    }
    
    setShape(shape) {
        this.shape = shape.render()
    }
}

module.exports = Svg;