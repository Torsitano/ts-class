import { AxiosPromise, AxiosResponse } from 'axios'
import { Callback } from './Eventing'



interface ModelAttributes<T> {
    set( value: T ): void,
    getAll(): T,
    get<K extends keyof T>( key: K ): T[ K ]
}

interface Sync<T> {
    fetch( id: number ): AxiosPromise,
    save( data: T ): AxiosPromise
}

interface Events {
    on( eventName: string, callback: Callback ): void,
    trigger( eventName: string ): void
}

interface HasId {
    id?: number
}


export class Model<T extends HasId> {

    constructor (
        private attributes: ModelAttributes<T>,
        private events: Events,
        private sync: Sync<T>
    ) { }

    get = this.attributes.get
    on = this.events.on
    trigger = this.events.trigger

    set( update: T ) {
        this.attributes.set( update )
        this.events.trigger( 'change' )
    }

    fetch(): void {
        const id = this.attributes.get( 'id' )

        if ( !id ) {
            throw new Error( 'Cannot fetch without an ID' )
        }

        this.sync.fetch( id ).then( ( resonse: AxiosResponse ): void => {
            this.set( resonse.data )
        } )
    }

    save() {
        this.sync.save( this.attributes.getAll() ).then( (): void => {
            this.trigger( 'save' )
        } ).catch( () => {
            this.trigger( 'error' )
        } )
    }

}