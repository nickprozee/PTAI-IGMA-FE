import { Box, Divider, Drawer, List, Typography } from '@mui/material'
import { AddressListItem, MenuInfoLabel } from '../molecules'
import { useSelector } from 'react-redux'
import {
    selectMapInfo,
    setPopup,
    setPosition,
} from '../../store/slices/mapInfo'
import { useAppDispatch } from '../../store'
import { LatLngDetails } from '../../types'

const MenuDivider = () => <Divider sx={{ my: 3 }} />
const MenuSectionTitle = (props: { children: string }) => (
    <Typography fontWeight={'bold'} variant="overline">
        {props.children}
    </Typography>
)

type Props = {
    open: boolean
}

export function SidebarRightOrganism(props: Props) {
    const state = useSelector(selectMapInfo)
    const dispatch = useAppDispatch()

    const onClick = (poi: LatLngDetails) => {
        dispatch(setPosition({ ...poi }))
        dispatch(
            setPopup({
                ...poi,
                probability: poi.probability * 100,
                message: poi.name.replace(', Nederland', ''),
            })
        )
    }

    return (
        <Drawer variant="persistent" anchor="right" open={props.open}>
            <Box sx={{ p: 4, minWidth: 600 }}>
                <Typography variant="h5" sx={{ pb: 4 }}>
                    IGMA
                </Typography>

                <MenuSectionTitle>Incident</MenuSectionTitle>
                <MenuInfoLabel title="Tijdstip" value="16:04" />
                <MenuInfoLabel title="Plaats" value="Utrecht" />
                <MenuDivider />

                <MenuSectionTitle>Routes</MenuSectionTitle>
                <List dense>
                    {state.poi.map((poi) => (
                        <AddressListItem
                            key={poi.lat + poi.lng}
                            {...poi}
                            onClick={() => onClick(poi)}
                        />
                    ))}
                </List>
                <MenuDivider />

                <MenuSectionTitle>Eenheden</MenuSectionTitle>
                <MenuDivider />
            </Box>
        </Drawer>
    )
}
