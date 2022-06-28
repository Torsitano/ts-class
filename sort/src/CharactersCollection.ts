import { Sortable } from './interfaces';



export class CharactersCollection implements Sortable {
    data: string
    length: number

    constructor( data: string ) {
        this.data = data
        this.length = this.data.length
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()

    }

    swap(leftIndex: number, rightIndex: number): void {
        const characters = this.data.split('')
        const leftHand = characters[leftIndex]
        characters[leftIndex] = characters[rightIndex]
        characters[rightIndex] = leftHand

        this.data = characters.join('')
    }
}