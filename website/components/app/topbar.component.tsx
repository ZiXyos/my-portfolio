import { FunctionComponent } from "react";

type TopBarProps = {

    name: string;
    description: string;
    element?: React.ReactChild;
}

export const TopBarComponent: FunctionComponent<TopBarProps> = ({ name, description, element }: TopBarProps) => (

    <div className="flex bg-gray-900">
        <div className="flex items-center align-start">
            <ul className="flex">
                <li><div className="bg-red-700 mac-btn"></div></li>
                <li><div className="bg-yellow-400 mac-btn"></div></li>
                <li><div className="bg-green-500 mac-btn"></div></li>
            </ul>
        </div>

        {element}
    </div>
)