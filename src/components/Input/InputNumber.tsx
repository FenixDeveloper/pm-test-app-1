import { ReactElement } from "react";
import { InputProps } from "./Input";

export function InputString({ value, onChange, ...props }: InputProps<number>): ReactElement {
    return <input
        {...props}
        type="text"
        value={String(value)}
        onChange={e => onChange(Number(e.target.value))}
    />;
}