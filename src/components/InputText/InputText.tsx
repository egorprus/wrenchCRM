import React from "react";
import './style.scss';
import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from "react-hook-form";

interface InputTextProps {
    register: UseFormRegisterReturn<string>,
    errors: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

export const InputText = ({register, errors}: InputTextProps) => {
    return (
        <div className="input-wrapper">
            <input
                className={`input ${errors ? 'input__error' : '' }`}
                {...register}
                type="text"
                placeholder="Введите интересующий вас адрес"
            />
        </div>
    )
};