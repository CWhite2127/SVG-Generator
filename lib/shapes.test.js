const {Circle, Triangle, Square} = require('./shapes');
const Svg = require('./svg');


describe("shapes", () => {
    describe("the size of the created svg", () => {
        it("should render a 300x200 svg", () => {
        const generatedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"></svg>`
        const shape = new Svg();
        expect(shape.render()).toEqual(generatedSVG);
        })
    })
})

describe("shapes", () => {
    describe("circle", () => {
        it("should render a circle in svg", () => {
        const generatedCircle = `<circle cx="100" cy="100" r="80" stroke="black" stroke-width="3" fill="blue" />`
        const shape = new Circle();
        shape.setColor("blue")
        expect(shape.render()).toEqual(generatedCircle);
        })
    })
})

describe("shapes", () => {
    describe("triangle", () => {
        it("should render a triangle in svg", () => {
        const generatedTriangle = `<polygon points="100,10 10,200 220,280" fill="red" />`
        const shape = new Triangle();
        shape.setColor("red")
        expect(shape.render()).toEqual(generatedTriangle);
        })
    })
})

describe("shapes", () => {
    describe("square", () => {
        it("should render a square in svg", () => {
        const generatedSquare = `<rect width="200" height="200" fill="green"/>`
        const shape = new Square();
        shape.setColor("green")
        expect(shape.render()).toEqual(generatedSquare);
        })
    })
})

