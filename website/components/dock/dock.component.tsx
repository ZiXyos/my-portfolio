import { FunctionComponent, ReactElement } from "react";

type DockProps = {
    DockItems?: FunctionComponent<ReactElement>[]
};

export const DockComponent: FunctionComponent<DockProps> = ({ DockItems }) => {

    return (
       <div className="flex justify-center left-1/4 right-1/4 bottom-0 fixed mb-1">
            <div className="inline-flex justify-center bg-blue-700 rounded-3xl">
                    { DockItems }
            </div>
        </div>
    )
}