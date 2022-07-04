import { AxiosResponse } from 'axios'
import { Attributes } from './Attributes'
import { Eventing } from './Eventing'
import { Sync } from './Sync'

export interface UserProps {
    id?: number
    name?: string,
    age?: number
}

const rootUrl = 'http://localhost:3000/users'


export class User {
    public events: Eventing = new Eventing()
    public sync: Sync<UserProps> = new Sync<UserProps>( rootUrl )
    public attributes: Attributes<UserProps>

    constructor ( attrs: UserProps ) {
        this.attributes = new Attributes<UserProps>( attrs )
    }

    get get() {
        return this.attributes.get
    }

    set( update: UserProps ) {
        this.attributes.set( update )
        this.events.trigger( 'change' )
    }

    get on() {
        return this.events.on
    }

    get trigger() {
        return this.events.trigger
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
