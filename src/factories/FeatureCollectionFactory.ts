import { FeatureCollection } from 'geojson'
import { EscapeNodesResponse } from '../types'

export class FeatureCollectionFactory {
    static create = (response: EscapeNodesResponse): FeatureCollection => {
        return {
            type: 'FeatureCollection',
            features: response.accessibility_cloud.map((node) => ({
                id: node.jte_id,
                type: 'Feature',
                geometry: {
                    coordinates: [node.latlon[1], node.latlon[0]],
                    type: 'Point',
                },
                properties: {
                    probability: node.probability,
                },
            })),
        }
    }
}
