import { create } from 'zustand';
import { initialData } from './seed';
import prisma from '../lib/prisma';

async function main() {
  // 1. Borrar registros previos
  await prisma.user.deleteMany();
  await prisma.record.deleteMany();

  const { records, users } = initialData;

  // Crear usuarios
  await prisma.user.createMany({
    data: users,
  });

  // Insertar los registros en la base de datos
  for (const record of records) {
    const { amount, provider, accountNumber } = record;

    // Crear el registro en la base de datos
    const dbRecord = await prisma.record.create({
      data: {
        provider,
        accountNumber,
        amount,
      },
    });

    console.log('Record inserted:', dbRecord);
  }

  console.log('Seed ejecutado correctamente');
}

(() => {
  if (process.env.NODE_ENV === 'production') return;
  main();
})();
