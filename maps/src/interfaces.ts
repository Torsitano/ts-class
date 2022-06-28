export interface Location {
    lat: number,
    lng: number
}

export interface Mappable {
    location: Location,
    markerContent(): string
}