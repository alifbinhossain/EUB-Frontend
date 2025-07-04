import React from 'react';

import Image from 'next/image';

import ContentWrapper from './content-wrapper';

const Message = () => {
  return (
    <ContentWrapper title='Message from the Director' className='py-4'>
      <div className='mb-4 flex justify-center'>
        <Image
          src={'/person-placeholder.jpg'}
          alt='Chairman'
          width={200}
          height={200}
        />
      </div>
      <p className='leading-relaxed'>
        I welcome you all to the Department of Accounting & Finance. It is one
        of the four departments under the School of Business and Economics at
        European University (EUB). The Department of Accounting & Finance at EUB
        is committed to provide the highest quality accounting and finance
        programs in Bangladesh. The department presently offers BBA, MBA, and
        EMBA degrees majoring in Accounting, and Finance.It has 37 full-time
        faculty members and 6 part-time faculty members. Several other faculty
        members are on study leave. Our faculty members are highly qualified,
        and possess doctoral and/or master’s degree from USA, UK, Canada, and
        Australia. The Department of Accounting & Finance is located in the 7th
        floor of North Academic Building at our beautiful campus. Our programs
        are ACBSP (Accreditation Council for Business Schools and Programs)
        accredited. Our graduates are well placed in the banks, NBFIs,
        accounting firms, and leading MNCs. Departmental student organization is
        working towards bridging the gap between academic knowledge and industry
        experience.
        <br />
        <br />
        Thank you for your interest in our department and programs.
        <br />
        <br />
        <br />
        FJ Mohaimen, Assistant Professor & Chair
      </p>
    </ContentWrapper>
  );
};

export default Message;
