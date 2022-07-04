



export type Callback = () => void
export interface Events {
    [ key: string ]: Callback[]
}


export class Eventing {
    events: Events = {}

    on = ( eventName: string, callback: Callback ): void => {
        const handlers: Callback[] = this.events[ eventName ] || []

        handlers.push( callback )
        this.events[ eventName ] = handlers
    }

    trigger = ( eventName: string ): void => {
        const handlers: Callback[] = this.events[ eventName ]

        if ( !handlers || handlers.length === 0 ) {
            return
        }

        handlers.forEach( callback => {
            callback()
        } )

    }
}