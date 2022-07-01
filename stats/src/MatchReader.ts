import { dateStringToDate } from './utils'
import { MatchResult } from './MatchResult'
import { CsvFileReader } from './CsvFileReader'


export type MatchData = [ Date, string, string, number, number, MatchResult, string ]


interface DataReader {
    read(): void,
    data: string[][]
}


export class MatchReader {
    reader: DataReader
    matches: MatchData[] = []

    constructor ( reader: DataReader ) {
        this.reader = reader
    }

    static fromCsv( fileName: string ) {
        return new MatchReader( new CsvFileReader( fileName ) )
    }

    load(): void {
        this.reader.read()
        this.matches = this.reader.data.map( ( row: string[] ) => {
            return [
                dateStringToDate( row[ 0 ] ),
                row[ 1 ],
                row[ 2 ],
                parseInt( row[ 3 ] ),
                parseInt( row[ 4 ] ),
                row[ 5 ] as MatchResult,
                row[ 6 ]
            ]
        } )
    }






}