'use client'

import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { registerRecord } from '@/actions';
import Swal from 'sweetalert2';
import clsx from 'clsx';

type FormInputs = {
    provider: string;
    accountNumber: string;
    amount: string;
};

export const RegisterForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        setErrorMessage('');
        const { provider, accountNumber, amount } = data;
        const resp = await registerRecord(provider, accountNumber, amount);

        if (!resp.ok) {
            await Swal.fire({
                title: 'Error!',
                text: resp.message,
                icon: 'error',
                confirmButtonText: 'ok'
            });
            return;
        }
        await Swal.fire({
            title: 'Éxito',
            text: 'resp.message',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            buttonsStyling: false, // Opcional, para quitar estilos por defecto
            customClass: {
                confirmButton: 'btn-primary text-white font-bold py-2 px-4 rounded' // Añade clases personalizadas
            }
        }).then(() => window.location.replace('/'));


    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[500px]">
            <label>Acreedor</label>
            <input
                className={
                    clsx(
                        "px-5 py-2 border bg-gray-200 rounded mb-5",
                        {
                            'border-red-500': errors.provider
                        }
                    )
                }
                type="text"
                autoFocus
                {...register('provider', { required: true })}
            />
            <label>Número de cuenta</label>
            <input
                className={
                    clsx(
                        "px-5 py-2 border bg-gray-200 rounded mb-5",
                        {
                            'border-red-500': errors.accountNumber
                        }
                    )
                }
                type="text"
                {...register('accountNumber', { required: true })}
            />
            <label>Monto</label>
            <input
                className={
                    clsx(
                        "px-5 py-2 border bg-gray-200 rounded mb-5",
                        {
                            'border-red-500': errors.amount
                        }
                    )
                }
                type="number"
                {...register('amount', { required: true })}
            />
            <span className="text-red-500">{errorMessage} </span>
            <button className="btn-primary">Crear cuenta</button>
        </form>
    );
};
