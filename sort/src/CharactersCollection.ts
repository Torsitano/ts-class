import { Sortable } from './interfaces';



export class CharactersCollection implements Sortable {
    data: string
    length: number

    constructor( data: string ) {
        this.data = data
        this.length = this.data.length
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        
    }

    swap(leftIndex: number, rightIndex: number): void {
        
    }
}