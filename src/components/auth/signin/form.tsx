'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { FormProvider, useForm } from 'react-hook-form';
import { signinSchema, signInSchemaType } from './schema';
import { Alert, InputAdornment, TextField, Typography } from '@mui/material';
import { Iconify } from '@/components/ui';
import { UserType } from '@/lib/constants';
import RHFSubmitButton from '@/components/ui/RHFSubmitButton';
import { signin, signup } from '@/lib/actions/auth';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { APP_URLS } from '@/lib/urls';

const Form = () => {
  const t = useTranslations('auth');
  const [error, setError] = useState('');
  const methods = useForm<signInSchemaType>({
    resolver: zodResolver(signinSchema),
    mode: 'onChange',
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = methods;

  const onSubmit = async (data: signInSchemaType) => {
    const response = await signin({ ...data });
    if (!response.success) {
      setError(response.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        dir='rtl'
        className='w-full max-w-sm mt-5 flex flex-col gap-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        {error && <Alert severity='error'>{error}</Alert>}

        <TextField
          {...register('username')}
          label={t('inputs.username')}
          variant='outlined'
          error={!!errors.username}
          helperText={errors.username?.message}
          fullWidth
          size='small'
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <Iconify icon='solar:mention-circle-line-duotone' />
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          {...register('password')}
          label={t('inputs.password')}
          type='password'
          variant='outlined'
          error={!!errors.password}
          helperText={errors.password?.message}
          fullWidth
          size='small'
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <Iconify icon='solar:key-line-duotone' />
                </InputAdornment>
              ),
            },
          }}
        />
        <div className='flex items-center gap-2'>
          <Typography>{t('signin.dontHaveAccount')}</Typography>
          <Typography
            color='primary'
            className='underline'
            component={Link}
            href={APP_URLS.SIGNUP}
          >
            {t('signup.title')}
          </Typography>
        </div>
        <RHFSubmitButton
          variant='outlined'
          size='large'
        >
          {t('signin.title')}
        </RHFSubmitButton>
      </form>
    </FormProvider>
  );
};

export default Form;
