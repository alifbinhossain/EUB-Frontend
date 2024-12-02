import { format } from 'date-fns';
import { CalendarDays } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface INotice {
  title: string;
  description: string;
  date: string;
  href: string;
}

const NoticeCard: React.FC<{ data: INotice }> = ({ data }) => {
  return (
    <div className='pt-4 first:pt-0'>
      <Link
        href={data.href}
        className='text-lg font-semibold text-primary hover:underline'
      >
        {data.title}
      </Link>
      <p className='text-sm line-clamp-2'>{data.description}</p>
      <div className='mt-2 flex items-center gap-1'>
        <CalendarDays className='size-5 text-orange-500' />
        <span className='text-sm text-orange-500 font-medium'>
          {format(new Date(data.date), 'dd MMM, yyyy')}
        </span>
      </div>
    </div>
  );
};

export default NoticeCard;