import { FeatureCollectionFactory, SourcesFactory } from '../factories'
import { AddressInfoResponse, Env, EscapeNodesResponse } from '../types'

export const fetchEscapeNodes = async () => {
    const raw = await fetch(Env.API.ESCAPE_NODES)
    const response: EscapeNodesResponse = await raw.json()

    const feature = FeatureCollectionFactory.create(response)
    const source = SourcesFactory.create('escape_nodes', feature)

    return source
}

export const fetchAddress = async (
    lat: number,
    lng: number
): Promise<string> => {
    const uri = `${Env.API.REVERSE_GEOCODE}${lng},${lat}.json?country=nl&types=address&language=nl&access_token=${Env.MAP.TOKEN}`

    const raw = await fetch(uri)
    const addressInfo: AddressInfoResponse = await raw.json()

    return addressInfo.features.length
        ? addressInfo.features[0].place_name_nl
        : 'Onbekend'
}
