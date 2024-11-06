import { ReactElement } from "react";
import { InputProps } from "./Input";

export function InputString({ value, onChange, ...props }: InputProps<string>): ReactElement {
    return <input
        {...props}
        type="text"
        value={String(value)}
        onChange={e => onChange(e.target.value)}
    />;
}