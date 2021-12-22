import React, { ReactNode } from 'react';
import { Label } from './styles';

type Props = {
    children: ReactNode;
    size?: string;
};

export default function FormInput({ children, size }: Props) {
    return <Label size={size}>{children}</Label>;
}
