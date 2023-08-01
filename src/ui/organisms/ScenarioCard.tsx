import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    MenuItem,
    TextField,
    Typography,
} from '@mui/material'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'
import { useAppDispatch } from '../../store'
import { useSelector } from 'react-redux'
import { loadMapEscapeNodes, selectMapInfo } from '../../store/slices/mapInfo'
import { useEffect, useState } from 'react'
import { fetchAddress } from '../../api'

export function ScenarioCardOrganism() {
    const state = useSelector(selectMapInfo)
    const dispatch = useAppDispatch()
    const [address, setAddress] = useState('')

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * coords.length)
        const randomCoord = coords[randomIndex]
        void fetchAddress(randomCoord.lat, randomCoord.long).then((data) =>
            setAddress(data)
        )
    }, [])

    const coords = [
        { lat: 52.345025, long: 4.9096312 },
        { lat: 52.3913562, long: 4.8036365 },
        { lat: 52.387434, long: 4.8335134 },
        { lat: 52.3259583, long: 4.8989182 },
        { lat: 52.0116151, long: 4.54794 },
    ]

    return (
        <Card
            sx={{
                width: 300,
                position: 'absolute',
                zIndex: 1,
                top: '2rem',
                left: '8rem',
                p: 2,
            }}>
            <CardContent>
                <Box display="flex" gap={1} pb={3} alignItems="center">
                    <DirectionsRunIcon />
                    <Typography variant="h6" fontWeight={600} color="#004682">
                        Scenario
                    </Typography>
                </Box>
                <TextField
                    sx={{ width: '100%' }}
                    select
                    label="Start incident"
                    defaultValue={address}>
                    <MenuItem value={address}>{address}</MenuItem>
                </TextField>
            </CardContent>
            <CardActions sx={{ justifyContent: 'end', p: 2 }}>
                <Button
                    onClick={() => void dispatch(loadMapEscapeNodes())}
                    variant="contained"
                    sx={{
                        textTransform: 'capitalize',
                        backgroundColor: '#00325c',
                    }}>
                    Bereken
                </Button>
            </CardActions>
        </Card>
    )
}
