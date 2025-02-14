'use client';


import Image from 'next/image';
import Link from 'next/link';

import { Record } from '@/interfaces';
import { useState } from 'react';

interface Props {
  record: Record;
}


export const RecordGridItem = ({ record }: Props) => {

  return (
    <div className="rounded-xl overflow-hidden shadow-lg flex items-center p-6 border border-gray-300 hover:shadow-xl transition-all duration-200 ease-in-out">
    {/* Información a la izquierda */}
    <div className="flex-1">
      <Link
        className="hover:text-blue-600 font-bold mb-3 block text-xl"
        href={`/record/${record.id}`}
      >
        {record.provider}
      </Link>
      <span className="text-lg">Deuda vigente: <span className="font-semibold">${record.amount}</span></span>
    </div>
  
    {/* Imagen a la derecha */}
    <div className="flex-shrink-0 ml-6">
      <Link href={`/record/${record.id}`}>
        <Image
          width="200"
          height="200"
          src="/imgs/bank.png"
          alt={record.provider}
          className="rounded-lg"
        />
      </Link>
    </div>
  </div>
  
  
  );
};