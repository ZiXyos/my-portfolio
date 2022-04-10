import { FunctionComponent } from "react";

type TextEditorProps = {

    fileName?: string;
    style?: {fontSize?: number, bg?: string, fontFamily?: string};
    value: string;
}

export const TextEditor: FunctionComponent<TextEditorProps> = (props: TextEditorProps) => {

    return (
        <textarea className={`border-2 resize-none outline-0 w-4/5 min-h-screen ${props.style?.bg}`} value={props.value} onChange={() => {}}/>
    );
}