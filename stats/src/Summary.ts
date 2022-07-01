import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { MatchData } from "./MatchReader"
import { HtmlReport } from './reportTargets/HtmlReport'

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

    static winsAnalysisWithHtmlReport( team: string ): Summary {
        return new Summary(
            new WinsAnalysis( team ),
            new HtmlReport()
        )
    }

    buildAndPrintReport( matches: MatchData[] ): void {
        const output = this.analyzer.run( matches )
        this.outputTarget.print( output )
    }


}