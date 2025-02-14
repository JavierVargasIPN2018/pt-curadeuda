'use server';

import prisma from '@/lib/prisma';


export const getRecordBySlug = async (slug: string) => {


  try {

    const record = await prisma.record.findFirst({
      where: {
        id: slug,
      }
    })


    if (!record) return null;

    return {
      ...record,
    };


  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener registro por slug');
  }



}