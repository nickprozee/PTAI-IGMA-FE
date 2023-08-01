import { FullscreenLayout } from './ui/layouts'
import { MapOrganism, SidebarOrganism } from './ui/organisms'
import { Provider } from 'react-redux'
import store from './store'

function App() {
    return (
        <Provider store={store}>
            <FullscreenLayout>
                <SidebarOrganism />
                <MapOrganism />
            </FullscreenLayout>
        </Provider>
    )
}

export default App
