import React from 'react';

import { Program } from '@/types/enum';

// import { generateMetaData } from '@/lib/utils';

import NewsAndEvents from '@/app/(programs)/_components/news-and-events';

// export const metadata = generateMetaData({});

const Page = () => {
  return <NewsAndEvents department={Program['BSC-TEXTILE']} />;
};

export default Page;
