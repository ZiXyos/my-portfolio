import { FunctionComponent, useEffect, useState } from "react";
import { TopBarComponent } from "./topbar.component";

type WindowProps = {

    name: string;
    status: boolean;
    children: React.ReactNode
}

export const WindowApp: FunctionComponent<WindowProps> = ({ name, status, children }: WindowProps) => {

    const [appStatus, setAppStatus] = useState();

    return (

        <div className="bg-gray-800 min-h-screen">
            <TopBarComponent name={name} description={'me.presentation.ts -- Portfolio'} element={ <div>Hello</div> } />
            { children }
        </div>
    )
}