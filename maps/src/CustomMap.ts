import { Mappable } from "./interfaces"




export class CustomMap {
    private googleMap: google.maps.Map

    constructor(divId: string) {   
        
        const mapDiv = document.getElementById(divId)
        if(!mapDiv) {
            throw new Error('Map ID invalid')
        }
        
        this.googleMap = new google.maps.Map(mapDiv, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    addMarker(markerPrincipal: Mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: markerPrincipal.location.lat,
                lng: markerPrincipal.location.lng
            }
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: markerPrincipal.markerContent()
            })

            infoWindow.open(this.googleMap, marker)
        })
        
    }



}