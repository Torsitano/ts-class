class Vector {
    static inverse: boolean = false
    x: number
    y: number

    constructor( x: number, y: number ) {
        this.x = x
        this.y = Vector.inverse ? -y : y
    }

    getPoint() {
        console.log(`(${this.x},${this.y})`)
    }
}


const vectorOne = new Vector(10,20)

vectorOne.getPoint() // (10,20)

Vector.inverse = true

const vectorTwo = new Vector(50,200)

vectorOne.getPoint() // Still (10,20)
vectorTwo.getPoint() // (50,-200)