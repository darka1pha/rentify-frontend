'use client';
import { Tab, Tabs, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Form from './form';
import { UserType } from '@/lib/constants';
import { useState } from 'react';

const SignupView = () => {
  const t = useTranslations('auth');
  const [userType, setUserType] = useState<UserType>(UserType.CUSTOMER);
  return (
    <div className='flex flex-col gap-4 items-center w-full p-4'>
      <Typography variant='h4'>{t('signup.title')}</Typography>
      <Tabs
        value={userType}
        onChange={(_, newValue) => setUserType(newValue)}
        aria-label='user type tabs'
        variant='standard'
        className='w-full max-w-sm mt-5'
        centered
      >
        <Tab
          value={UserType.CUSTOMER}
          label='مشتری'
        />
        <Tab
          value={UserType.AGENCY}
          label='املاک'
        />
      </Tabs>
      <Form userType={userType} />
    </div>
  );
};

export default SignupView;
