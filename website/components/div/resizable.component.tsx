import { useState } from "react"

type ResizableProps = {

    children: React.ReactNode;
}

export const ResizableDiv = ({ children }: ResizableProps) => {

    const [initialPos, setInitialPos] = useState<number | null>(null);
    const [initialSize, setInitialSize] = useState<number | undefined>(undefined);

    const init = (e: any ) => {

        let resizable = document.getElementById('Resizable');

        setInitialPos(e.clientX);
        setInitialSize(resizable!.offsetWidth);
    }

    const resize = (e: any) => {

        let resizable = document.getElementById('Resizable');

        resizable!.style.width = `${initialSize! + e.clientX - initialPos!}px`;
    }

    return (
        <div>
            <div id="Resizable" />
            <div id='Draggable' onDragStart={init} onDrag={resize}>
                {children}
            </div>
        </div>
    )
}