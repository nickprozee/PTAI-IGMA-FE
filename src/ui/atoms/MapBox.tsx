import { ReactNode, useEffect, useRef } from 'react'
import Map, { MapRef } from 'react-map-gl'
import { MapTypes, LatLng, LayerHoverEvent, Env } from '../../types'

type Props = {
    children: ReactNode
    onHover: LayerHoverEvent[]
    map: MapTypes
    position: LatLng
}

export function MapBoxAtom(props: Props) {
    const mapRef = useRef<MapRef | null>(null)

    useEffect(() => {
        if (!mapRef.current || !props.onHover || !props.onHover.length) return

        props.onHover.forEach(
            (ev) => mapRef?.current?.on('mousemove', ev.layerId, ev.hover)
        )

        return () => {
            props.onHover.forEach(
                (ev) => mapRef.current?.off('mousemove', ev.layerId, ev.hover)
            )
        }
    }, [props.onHover])

    useEffect(() => {
        if (!mapRef.current) return

        mapRef.current.easeTo({
            animate: true,
            zoom: 15,
            center: {
                ...props.position,
            },
        })
    }, [props.position])

    return (
        <Map
            ref={(map) => (mapRef.current = map)}
            mapboxAccessToken={Env.MAP.TOKEN}
            initialViewState={{
                longitude: 5.0777,
                latitude: 52.04169,
                zoom: 12,
            }}
            mapStyle={props.map}>
            {props.children}
        </Map>
    )
}
