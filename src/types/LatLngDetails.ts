export type LatLng = {
    lat: number
    lng: number
}

export type LatLngProb = {
    probability: number
} & LatLng

export type LatLngDetails = {
    name: string
} & LatLngProb
