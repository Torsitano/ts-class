import { User } from './models/User'
import { UserForm } from './views/UserForm'


const rootElement = document.getElementById( 'root' )

if ( !rootElement ) {
    throw new Error( 'Root element missing' )
}

const user = User.buildUser( { name: 'Bob', age: 20 } )

const userForm = new UserForm( rootElement, user )

userForm.render()