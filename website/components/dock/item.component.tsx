import { FunctionComponent } from "react";
import Image from 'next/image'

type ItemProps = {

    name: string;
    img: string;
    status?: boolean;
    key: number;
    onClick?: () => void;
}

import logo from '../../public/MemojiDev.png';

export const DockItems: FunctionComponent<ItemProps> = (props: ItemProps) => (

    <div className="flex flex-col p-1 m-1 items-center hover:min-w-min hover:" onClick={props.onClick}>
        <Image src={ '/MemojiDev.png' } height={50} width={50} />
    </div>
)