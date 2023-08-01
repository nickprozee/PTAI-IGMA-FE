import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { LayerProps, SourceProps } from 'react-map-gl'
import { LatLngFactory, LayersFactory } from '../../factories'
import { fetchAddress, fetchEscapeNodes } from '../../api'
import { LatLng, LatLngDetails, PopupProps } from '../../types'
import { sortByProbabilityDesc } from '../../sorting'
import type { RootState } from '../'

interface MapInfoState {
    sources: SourceProps[]
    layers: LayerProps[]
    popup?: PopupProps
    poi: LatLngDetails[]
    position: LatLng
}

const initialState: MapInfoState = {
    sources: [],
    layers: [],
    poi: [],
    position: {
        lng: 5.0777,
        lat: 52.04169,
    },
}

export const loadMapEscapeNodes = createAsyncThunk(
    'mapInfo/loadEscapeNodes',
    async (_, thunkApi) => {
        const nodes = await fetchEscapeNodes()

        nodes.data?.features
            .sort(sortByProbabilityDesc)
            .slice(0, 6)
            .map((f) => {
                const poi = LatLngFactory.createFromFeature(f)
                void thunkApi.dispatch(resolvePointOfInterest(poi))
            })

        return nodes
    }
)

export const resolvePointOfInterest = createAsyncThunk(
    'mapInfo/addPointOfInterest',
    async (args: { lat: number; lng: number; probability: number }) => {
        const { lat, lng, probability } = args
        const name = await fetchAddress(lat, lng)

        return {
            lat,
            lng,
            probability,
            name,
        } as LatLngDetails
    }
)

export const mapInfoSlice = createSlice({
    name: 'mapInfo',
    initialState,
    extraReducers(builder) {
        builder.addCase(resolvePointOfInterest.fulfilled, (state, action) => {
            state.poi.push(action.payload)
        })

        builder.addCase(loadMapEscapeNodes.fulfilled, (state, action) => {
            const source = action.payload

            //@ts-expect-error WriteableDraft object
            state.sources.push(source)
            //@ts-expect-error WriteableDraft object
            state.layers.push(LayersFactory.createEscapeDots(source))
        })
    },
    reducers: {
        setPosition: (state, action: PayloadAction<LatLng>) => {
            state.position = action.payload
        },
        setPopup: (state, action: PayloadAction<PopupProps>) => {
            state.popup = action.payload
        },
    },
})

export const { setPosition, setPopup } = mapInfoSlice.actions
export const selectMapInfo = (state: RootState) => state.mapInfo
export default mapInfoSlice.reducer
