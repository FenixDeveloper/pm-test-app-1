import { InputHTMLAttributes } from "react";

export type BaseInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>; 

export interface InputProps<T> extends BaseInputProps {
    value: T;
    onChange: (value: T) => void;
}