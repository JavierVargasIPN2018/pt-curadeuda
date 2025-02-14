import { Record } from '@/interfaces';
import { RecordGridItem } from './RecordGridItem';

interface Props {
  records: Record[];
}


export const RecordsGrid = ({ records }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {
        records.map(record => (
          <RecordGridItem
            key={record.id}
            record={record}
          />
        ))
      }

    </div>
  );
};