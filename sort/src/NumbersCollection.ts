
import { Sorter } from "./Sorter"

export class NumbersCollection extends Sorter {
    data: number[]
    length: number

    constructor( data: number[] ) {
        super()
        this.data = data
        this.length = this.data.length
    }

    compare( leftIndex: number, rightIndex: number ): boolean {
        return this.data[leftIndex] > this.data[rightIndex]
    }

    swap( leftIndex: number, rightIndex: number ): void {
        const leftHand = this.data[leftIndex]
        this.data[leftIndex] = this.data[rightIndex]
        this.data[rightIndex] = leftHand
    }
}