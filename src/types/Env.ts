export const Env = {
    API: {
        ESCAPE_NODES: import.meta.env['VITE_API_ESCAPE_NODES'] as string,
        REVERSE_GEOCODE: import.meta.env['VITE_API_REVERSE_GEOCODE'] as string,
    },
    MAP: {
        TOKEN: import.meta.env['VITE_MAPBOX_API_KEY'] as string,
    },
}
