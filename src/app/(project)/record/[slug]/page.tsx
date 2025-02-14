export const revalidate = 604800; //7 días

import { notFound } from "next/navigation";

import { titleFont } from "@/config/fonts";
import {
  ProductMobileSlideshow,
  ProductSlideshow,
} from "@/components";
import { getRecordBySlug } from "@/actions";

interface Props {
  params: {
    slug: string;
  };
}



export default async function ProductBySlugPage({ params }: Props) {
  const { slug } = params;
  const record = await getRecordBySlug(slug);
  console.log(record);

  if (!record) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2 ">
        {/* Mobile Slideshow */}
        <ProductMobileSlideshow
          title={record.accountNumber}
          images={['bank.png']}
          className="block md:hidden"
        />

        {/* Desktop Slideshow */}
        <ProductSlideshow
          title={record.accountNumber}
          images={['bank.png']}
          className="hidden md:block"
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5">

        <h1 className={` ${titleFont.className} antialiased font-bold text-xl`}>
          {record.accountNumber}
        </h1>

        <p className="text-lg mb-5">${record.amount}</p>


        {/* Descripción */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{record.provider}</p>
      </div>
    </div>
  );
}
