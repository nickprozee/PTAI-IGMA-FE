import { Box, ListItemButton, ListItemText } from '@mui/material'
import { GpsFixedTwoTone, MapTwoTone } from '@mui/icons-material'
import { LatLngDetails } from '../../types'
import { useState } from 'react'

type Props = {
    onClick: () => void
}

export function AddressListItem(props: Props & LatLngDetails) {
    const [isHovering, setHover] = useState(false)

    return (
        <ListItemButton
            onClick={props.onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <Box sx={{ mr: 2 }}>
                {isHovering ? (
                    <GpsFixedTwoTone htmlColor="#004682" fontSize={'large'} />
                ) : (
                    <MapTwoTone htmlColor="#004682" fontSize="large" />
                )}
            </Box>
            <ListItemText
                primary={props.name}
                secondary={`${props.probability * 100}% kans op deze route`}
            />
        </ListItemButton>
    )
}
