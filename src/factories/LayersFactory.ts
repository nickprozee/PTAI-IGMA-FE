import { LayerProps, SourceProps } from 'react-map-gl'

export class LayersFactory {
    static criticalRoutesLayerId = 'critical_routes'
    static mediumRoutesLayerId = 'medium_routes'
    static escapeNodesLayerId = 'escape_nodes'

    private static createLines = (
        s: SourceProps,
        probabilityFrom: number,
        probabilityTo: number,
        color: string,
        opacity: number,
        width: number,
        id: string
    ): LayerProps => ({
        type: 'line',
        source: s.id,
        id: id,

        paint: {
            'line-color': color,
            'line-width': width,
            'line-opacity': opacity,
            'line-blur': 3,
        },
        filter: [
            'all',
            ['>', 'probability', probabilityFrom],
            ['<=', 'probability', probabilityTo],
        ],
    })

    private static createDots = (
        s: SourceProps,
        id: string,
        color: string,
        probabilityFrom: number,
        probabilityTo: number
    ): LayerProps => ({
        type: 'circle',
        source: s.id,
        id: id,
        paint: {
            'circle-color': color,
            'circle-radius': ['*', 10, ['get', 'probability']],
            'circle-opacity': ['*', 1, ['get', 'probability']],
            'circle-blur': 0.5,
        },
        filter: [
            'all',
            ['>', 'probability', probabilityFrom],
            ['<=', 'probability', probabilityTo],
        ],
    })

    static createEscapeDots = (s: SourceProps) =>
        this.createDots(s, LayersFactory.escapeNodesLayerId, '#2980b9', 0, 100)

    static createCriticalLines = (s: SourceProps) =>
        this.createLines(
            s,
            80,
            100,
            '#e74c3c',
            0.7,
            10,
            LayersFactory.criticalRoutesLayerId
        )

    static createMediumLines = (s: SourceProps) =>
        this.createLines(
            s,
            0,
            80,
            '#7f8c8d',
            0.7,
            9,
            LayersFactory.mediumRoutesLayerId
        )
}
