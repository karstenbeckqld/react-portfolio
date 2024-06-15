import React from "react";

type TButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    id: string;
    text: string;
    onClick: () => void;
}

export default function Button({id, text, type, onClick, ...props}: TButtonProps) {

    return (
        <div>
            <button type={type} id={id} {...props} onClick={onClick}>{text}</button>
        </div>
    )
}