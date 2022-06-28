import { faker } from '@faker-js/faker'
import { Location, Mappable } from './interfaces'


export class User implements Mappable {

    name: string
    location: Location

    constructor() {
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
        this.name = faker.name.firstName()
    }

    markerContent(): string {
        return `User Name: ${this.name}`
    }
}

