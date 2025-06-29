import React from 'react';

import { IAlumni } from '@/types';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import AlumniGallery from '@/app/programs/_components/alumni-gallery';

// export const metadata = generateMetaData({
//   pageUrl: 'https://eub.edu.bd/bba/alumni-industry',
//   title:
//     'Bachelor of Business Administration(BBA) Alumni & Industry Links | European University of Bangladesh',
//   description:
//     'Read testimonials from successful Bachelor of Business Administration(BBA) alumni of EUB and learn about our strong connections with the industry for internships and career opportunities.',
//   keywords: [
//     'EUB Bachelor of Business Administration(BBA) alumni',
//     'Bachelor of Business Administration(BBA) success stories',
//     'University industry partnership',
//     'Engineering career opportunities',
//     'Alumni testimonials EUB',
//     'Job placement for engineers',
//     'Student internship programs',
//     'Graduate success stories',
//   ],
// });
const Page = () => {
  const data: IAlumni[] = [
    {
      name: 'Abir Hasan',
      image: '/images/programs/thm/alumni/1. Abir.jpg',
      designation:
        'Sr. Executive Sales & Marketing (Corporates), Grand Palace Hotel & Resorts',
      description: `Abir Hasan, a proud graduate of the Tourism and Hospitality
            Management Department at the European University of Bangladesh, is
            making remarkable strides in the hospitality industry. He is
            currently serving as a Senior Executive in the Sales and Marketing
            Department at Grand Palace Hotel and Resorts. His success highlights
            the university’s dedication to nurturing skilled professionals who
            excel in the dynamic world of tourism and hospitality.`,
    },
    {
      name: 'Sahed Al Zubaer',
      image: '/images/programs/thm/alumni/2. Shaheed.jpg',
      designation: 'DCDP, Golden Tulip - The Grandmark Dhaka',
      description: `Sahed Al Zubaer is a passionate hospitality professional with a
            degree in Tourism and Hospitality Management from the European
            University of Bangladesh. Currently serving as a Demi Chef de Partie
            (DCDP) at Golden Tulip the Grandmark Dhaka, he brings expertise in
            culinary excellence and a dedication to delivering exceptional
            dining experiences.`,
    },
  ];

  return (
    <ContentWrapper title='Alumni and Industry' className='lg:p-8'>
      <AlumniGallery data={data} />
    </ContentWrapper>
  );
};

export default Page;
