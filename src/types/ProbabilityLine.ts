import { FeatureHoverEvent } from '.'

export type ProbabilityLine = {
    id: string
    onHover?: (e: FeatureHoverEvent) => void
    opacity?: number
    color: string
    width: number
    fromProbability: number
    toProbability: number
}
