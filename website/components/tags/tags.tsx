import * as React from 'react';

type TagsProps = {

    color?: string;
    size?: string;
    type?: string;
    children: React.ReactNode;
}

const Tags = (TagsProps: TagsProps) => (

    <div className={`tags ${TagsProps.color} ${TagsProps.size} ${TagsProps.type}`}>
        {TagsProps.children}
    </div>
);

export default Tags;