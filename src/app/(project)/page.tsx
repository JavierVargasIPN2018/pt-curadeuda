export const revalidate = 60; // 60 segundos


import { redirect } from 'next/navigation';

import { getPaginatedRecords } from '@/actions';
import { Pagination, Title } from '@/components';
import { auth } from '@/auth.config';
import { RecordsGrid } from '../../components/records/record-grid/RecordGrid';



interface Props {
  searchParams: {
    page?: string;
  }
}


export default async function Home({ searchParams }: Props) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const session = await auth();

  const { records, currentPage, totalPages } = await getPaginatedRecords({ page });


  if (records.length === 0) {
    redirect('/');
  }


  if (!session?.user) {
    redirect("/auth/login");
  }
  return (
    <>
      <Title
        title="Registros"
        subtitle="Todos los registros"
        className="mb-2"
      />

      <RecordsGrid
        records={records}
      />


      <Pagination totalPages={totalPages} />

    </>
  );
}
