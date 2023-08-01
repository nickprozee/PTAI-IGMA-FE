export type EscapeNode = {
    jte_id: number
    latlon: number[]
    probability: number
}

export type EscapeNodesResponse = {
    accessibility_cloud: EscapeNode[]
}

export type AddressInfoResponse = {
    features: { place_name_nl: string }[]
}
