import { MatchData } from "./MatchReader"

export interface Analyzer {
    run( matches: MatchData[] ): string
}

export interface OutputTarget {
    print( report: string ): void
}


export class Summary {
    analyzer: Analyzer
    outputTarget: OutputTarget

    constructor ( analyzer: Analyzer, outputTarget: OutputTarget ) {
        this.analyzer = analyzer
        this.outputTarget = outputTarget
    }

    buildAndPrintReport( matches: MatchData[] ): void {
        const output = this.analyzer.run( matches )
        this.outputTarget.print( output )
    }


}