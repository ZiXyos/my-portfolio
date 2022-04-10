import { FunctionComponent } from "react";
import { TopBarComponent } from "./topbar.component";


type WindowProps = {

    name: string;
    status: boolean;
    children: React.ReactNode
}

export const WindowApp: FunctionComponent<WindowProps> = ({ name, status, children }: WindowProps) => {

    return (

        <div className="bg-gray-800">
            <TopBarComponent name={name} description={'me.presentation.ts -- Portfolio'} element={ <div>Hello</div> } />
            { children }
        </div>
    )
}