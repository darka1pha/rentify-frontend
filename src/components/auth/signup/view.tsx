'use client';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Form from './form';

const SignupView = () => {
  const t = useTranslations('auth');
  return (
    <div className='flex flex-col gap-4 items-center w-full p-4'>
      <Typography variant='h4'>{t('signup.title')}</Typography>
      <Form />
    </div>
  );
};

export default SignupView;
