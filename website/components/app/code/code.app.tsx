import { ReactNode, useEffect, useState } from "react";
import { TextEditor } from "./components/editor.component";
import { ExplorerComponent } from "./components/explorer.component";

type CodeAppProps = {

    children: ReactNode;
}

export const CodeApp: Function = ({children}: CodeAppProps) => {

    const [code, setCode] = useState<string>('');
    useEffect( () => {

        setCode('const firstName = \'Killian\';\nconst scndName = \'Moudery\';\n\nfunction test(a, b) {\n\treturn(a+b);\n}')
    })

    return (
        <div className="flex bg-gray-700">
            <TextEditor value={code} style={{bg: 'bg-gray-600'}}/>
            <ExplorerComponent />
            <div className="border-2">
                navBar
            </div>
        </div>
    )
}