import { Feature, GeoJsonProperties, Geometry } from 'geojson'

export const sortByProbabilityAsc = (
    a: Feature<Geometry, GeoJsonProperties>,
    b: Feature<Geometry, GeoJsonProperties>
) => {
    return a.properties?.probability - b.properties?.probability
}

export const sortByProbabilityDesc = (
    a: Feature<Geometry, GeoJsonProperties>,
    b: Feature<Geometry, GeoJsonProperties>
) => {
    return b.properties?.probability - a.properties?.probability
}
