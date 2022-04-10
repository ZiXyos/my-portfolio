import { ClockComponent } from "./components/clock.components"
import { PanelControlComponent } from "./components/panel.component"
import { SiriComponent } from "./components/siri.components"

export const UtilityBarComponent = () => {

    return (
        <div className="flex">
            Search
            Song
            Wifi
            Battery
            Profil
            Sound
            <PanelControlComponent />
            <SiriComponent />
            <ClockComponent />
        </div>
    )
}