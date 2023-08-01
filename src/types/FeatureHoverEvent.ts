import { MapMouseEvent } from 'mapbox-gl'

export type LayerHoverEvent = {
    layerId: string
    hover: (e: FeatureHoverEvent) => void
}

export type FeatureHoverEvent = MapMouseEvent & {
    features?: mapboxgl.MapboxGeoJSONFeature[]
} & mapboxgl.EventData
