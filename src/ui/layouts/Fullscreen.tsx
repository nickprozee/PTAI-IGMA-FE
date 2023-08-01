import { Box } from '@mui/material'

export function FullscreenLayout(props: { children: React.ReactNode }) {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                m: 0,
                p: 0,
            }}>
            {props.children}
        </Box>
    )
}
