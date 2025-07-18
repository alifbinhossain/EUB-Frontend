import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { IGallery } from '@/types';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const GalleryCard: React.FC<{ data: IGallery }> = ({ data }) => {
  return (
    <Card>
      <CardHeader className='p-4'>
        <div className='relative aspect-video w-full'>
          <Image
            className='object-cover'
            fill
            src={'/placeholder.svg'}
            alt={data.title}
          />
        </div>
      </CardHeader>
      <CardContent className='space-y-2'>
        <CardTitle>
          <Link className='hover:underline' href={`/gallery/${data.title}`}>
            {data.title}
          </Link>
        </CardTitle>
        <CardDescription className='line-clamp-2'>
          {data.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;
