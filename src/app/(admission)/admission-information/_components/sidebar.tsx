'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import StickySidebar from '@/components/sticky-sidebar';
import { Button } from '@/components/ui/button';

const data = [
  {
    title: 'Minimum Requirement',
    id: 'minimum-requirement',
  },
  {
    title: 'Online Admission Process',
    id: 'online-admission-process',
  },

  {
    title: 'Payment Process',
    id: 'payment-process',
  },
  {
    title: 'Course Waiver',
    id: 'course-waiver',
  },
  {
    title: 'Required Documents and Forms',
    id: 'required-documents-and-forms',
  },
];

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <StickySidebar>
      <div className='space-y-2'>
        {data.map((item, index) => (
          <Link className='block' key={index} href={`${pathName}#${item.id}`}>
            <Button
              variant={'default'}
              className='w-full justify-start rounded-none'
            >
              {item.title}
            </Button>
          </Link>
        ))}
      </div>
    </StickySidebar>
  );
};

export default Sidebar;
