
interface UserLocation {
    country?: string,
    state?: string,
    city?: string
}

interface User {
    firstName?: string,
    lastName?: string,
    fullName?: string,
    location: UserLocation,
    birthday?: string,
}

const userMap = new Map<number, User>( [
    [ 1, {
        fullName: 'Bob Smith',
        location: {}
    } ],
    [ 2, {
        firstName: 'Frank',
        location: {
            country: 'USA'
        }
    } ]
] )

console.log( userMap.get( 1 ) ) // { fullName: 'Bob Smith', location: {} }





// const userList: User[] = [
//     {
//         id: 1,
//         fullName: 'Bob Smith',
//         location: {
//             state: 'USA'
//         }
//     },
//     {
//         id: 2,
//         firstName: 'Frank',
//         lastName: 'Sinatra',
//         location: {}
//     },
//     {
//         id: 3,
//         birthday: '1/5/1976',
//         location: {
//             country: 'France',
//             city: 'Some City In France',
//             state: 'Does France Have States?'
//         }
//     }
// ]

