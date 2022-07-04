import { User } from './models/User'

const user = User.buildUser( { id: 1 } )


console.log( user.get( 'id' ) )

user.on( 'change', () => {
    console.log( user )
} )

user.fetch()