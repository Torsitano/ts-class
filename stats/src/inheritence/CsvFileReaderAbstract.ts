
import fs from 'fs'



export abstract class CsvFileReader<Type> {
    data: Type[] = []
    fileName: string

    constructor( fileName: string ) {
        this.fileName = fileName
    }

    abstract mapRow( row: string[] ): Type


    read(): void {
        this.data = fs.readFileSync(this.fileName, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map((row: string): string[] => {
            return row.split(',')
        })
        .map(this.mapRow)
    }

    

}