import { useSelector } from 'react-redux'
import { selectMapInfo } from '../../store/slices/mapInfo'
import { SidebarLeftOrganism, SidebarRightOrganism } from '.'

export function SidebarOrganism() {
    const state = useSelector(selectMapInfo)

    return (
        <>
            <SidebarLeftOrganism />
            <SidebarRightOrganism open={state.poi.length > 0} />
        </>
    )
}
