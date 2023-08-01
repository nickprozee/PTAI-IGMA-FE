import { LayerProps, SourceProps, Layer, Popup, Source } from 'react-map-gl'
import { MapBoxAtom } from '../atoms'
import { ProbabilityInfoMolecule } from '.'
import { LatLng, LayerHoverEvent, PopupProps } from '../../types'

type Props = {
    popup?: PopupProps
    layers: LayerProps[]
    sources: SourceProps[]
    onHover: LayerHoverEvent[]
    position: LatLng
}

export function MapMolecule(props: Props) {
    const { sources, layers, popup, position } = props

    return (
        <MapBoxAtom
            onHover={props.onHover}
            map="mapbox://styles/mapbox/streets-v12"
            position={position}>
            {popup && (
                <Popup
                    key={popup.lat + popup.lng}
                    latitude={popup.lat}
                    longitude={popup.lng}>
                    <ProbabilityInfoMolecule
                        msg={popup.message}
                        probability={popup.probability}
                    />
                </Popup>
            )}
            {sources?.map((source) => (
                <Source {...source} key={source.id + '-source'} />
            ))}
            {layers?.map((layer) => (
                <Layer {...layer} key={layer.id + '-layer'} />
            ))}
        </MapBoxAtom>
    )
}
