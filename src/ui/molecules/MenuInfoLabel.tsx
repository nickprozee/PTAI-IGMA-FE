import { Box, Typography } from '@mui/material'

type Props = {
    title: string
    value: string
}

export function MenuInfoLabel(props: Props) {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
            }}>
            <Typography>{props.title}:</Typography>
            <Typography>{props.value}</Typography>
        </Box>
    )
}
