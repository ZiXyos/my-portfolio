import * as React from 'react';

enum ButtonVariant {
    'primary',
    'outline',
    'ghost',
    'light',
    'dark',
}

type ButtonProps = {
    isLoading?: boolean;
    isDarkBg?: boolean;
    variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithRef<'button'>;


const Button = (props: ButtonProps) => (

    <button type='button' {...props}>
        {props.children}
    </button>

);

export default Button;