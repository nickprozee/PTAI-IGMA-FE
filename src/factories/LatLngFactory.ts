import { Feature, GeoJsonProperties, Geometry, Point } from 'geojson'
import { LatLngProb } from '../types'

export class LatLngFactory {
    static createFromFeature = (
        f: Feature<Geometry, GeoJsonProperties>
    ): LatLngProb => {
        const coords = (f.geometry as Point).coordinates
        const probability = f.properties?.probability

        return {
            lng: coords[0],
            lat: coords[1],
            probability,
        }
    }
}
