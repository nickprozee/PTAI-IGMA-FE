import { FeatureCollection } from 'geojson'
import { SourceProps } from 'react-map-gl'

export class SourcesFactory {
    static create = (id: string, f: FeatureCollection): SourceProps => ({
        id: id,
        type: 'geojson',
        data: f,
    })
}
