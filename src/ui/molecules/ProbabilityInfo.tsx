import { Box, Typography } from '@mui/material'

interface Props {
    msg: string
    probability: number
}

export function ProbabilityInfoMolecule(props: Props) {
    const { msg, probability } = props

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 100,
            }}>
            <Typography variant="caption" sx={{ fontSize: '1.5em', p: 2 }}>
                {msg}
            </Typography>
            <Typography
                variant="overline"
                sx={{ fontWeight: 'bold', fontSize: '1.5em' }}>
                {probability}%
            </Typography>
        </Box>
    )
}
