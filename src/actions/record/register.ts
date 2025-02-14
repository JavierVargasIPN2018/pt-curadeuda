'use server';

import prisma from '@/lib/prisma';

export const registerRecord = async (provider: string, accountNumber: string, amount: string) => {


    try {

        const record = await prisma.record.create({
            data: {
                provider,
                accountNumber,
                amount: parseFloat(amount),
            },
            select: {
                id: true,
                provider: true,
                accountNumber: true,
            }
        })

        return {
            ok: true,
            record,
            message: 'Registro creado'
        }

    } catch (error) {
        console.log(error);

        return {
            ok: false,
            message: 'No se pudo crear el registro'
        }
    }



}