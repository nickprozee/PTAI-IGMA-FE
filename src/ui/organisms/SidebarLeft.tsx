import {
    Avatar,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'
import { useState } from 'react'
import { ScenarioCardOrganism } from './ScenarioCard'

export function SidebarLeftOrganism() {
    const [selectedIndex, setSelectedIndex] = useState(1)

    return (
        <>
            <Drawer variant="persistent" anchor="left" open={true}>
                <Box
                    sx={{
                        py: 3,
                        width: '100%',
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#004682',
                    }}>
                    <Avatar src="" />
                    <nav aria-label="main mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        color: '#FFF',
                                        my: 2,
                                        py: 2,
                                        backgroundColor:
                                            selectedIndex === 1
                                                ? '#00325c !important'
                                                : '#004682',
                                    }}
                                    selected={selectedIndex === 1}>
                                    <DirectionsRunIcon />
                                    <ListItemText primary="Scenario" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                </Box>
            </Drawer>
            <ScenarioCardOrganism />
        </>
    )
}
