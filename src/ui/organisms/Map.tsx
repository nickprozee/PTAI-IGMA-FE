import { FeatureHoverEvent } from '../../types'
import { useSelector } from 'react-redux'
import { selectMapInfo, setPopup } from '../../store/slices/mapInfo'
import { useAppDispatch } from '../../store'
import { LayersFactory } from '../../factories'
import { MapMolecule } from '../molecules'

export function MapOrganism() {
    const state = useSelector(selectMapInfo)
    const dispatch = useAppDispatch()
    const { layers, sources } = state

    const onHoverLine = (e: FeatureHoverEvent) => {
        if (!e.features) return

        const probability = e.features[0]?.properties?.probability ?? 0

        dispatch(
            setPopup({
                ...e.lngLat,
                probability: probability * 100,
                message: 'Kans op deze route',
            })
        )
    }

    return (
        <MapMolecule
            position={state.position}
            popup={state.popup}
            sources={sources}
            layers={layers}
            onHover={[
                {
                    layerId: LayersFactory.escapeNodesLayerId,
                    hover: onHoverLine,
                },
                {
                    layerId: LayersFactory.criticalRoutesLayerId,
                    hover: onHoverLine,
                },
            ]}
        />
    )
}
