'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { FormProvider, useForm } from 'react-hook-form';
import { signupSchema, signUpSchemaType } from './schema';
import { Alert, InputAdornment, TextField, Typography } from '@mui/material';
import { Iconify } from '@/components/ui';
import { UserType } from '@/lib/constants';
import RHFSubmitButton from '@/components/ui/RHFSubmitButton';
import { signup } from '@/lib/actions/auth';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { APP_URLS } from '@/lib/urls';

const Form = ({ userType }: { userType: UserType }) => {
  const t = useTranslations('auth');
  const [error, setError] = useState('');
  const methods = useForm<signUpSchemaType>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = methods;

  const onSubmit = async (data: signUpSchemaType) => {
    const response = await signup({ ...data, type: userType });
    if (!response.success) {
      setError(response.message);
    }
  };

  useEffect(() => {
    setValue('userType', userType);
  }, [userType]);

  return (
    <FormProvider {...methods}>
      <form
        dir='rtl'
        className='w-full max-w-sm mt-5 flex flex-col gap-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        {error && <Alert severity='error'>{error}</Alert>}
        <div className='grid grid-cols-2 gap-5'>
          <TextField
            className='col-span-1'
            {...register('name')}
            label={t('inputs.name')}
            variant='outlined'
            error={!!errors.name}
            helperText={errors.name?.message}
            fullWidth
            size='small'
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position='start'>
                    <Iconify icon='solar:user-line-duotone' />
                  </InputAdornment>
                ),
              },
            }}
          />

          <TextField
            className='col-span-1'
            {...register('lastname')}
            label={t('inputs.lastname')}
            variant='outlined'
            error={!!errors.lastname}
            helperText={errors.lastname?.message}
            fullWidth
            size='small'
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position='start'>
                    <Iconify icon='solar:user-line-duotone' />
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>

        <TextField
          {...register('email')}
          label={t('inputs.email')}
          variant='outlined'
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
          size='small'
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <Iconify icon='solar:letter-line-duotone' />
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
          {...register('mobile')}
          label={t('inputs.mobile')}
          variant='outlined'
          error={!!errors.mobile}
          helperText={errors.mobile?.message}
          fullWidth
          size='small'
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <Iconify icon='solar:iphone-line-duotone' />
                </InputAdornment>
              ),
            },
          }}
        />
        <AnimatePresence mode='wait'>
          {userType === UserType.AGENCY && (
            <motion.div
              key='agency-input'
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <TextField
                {...register('agency')}
                label={t('inputs.agency')}
                variant='outlined'
                error={!!errors.agency}
                helperText={errors.agency?.message}
                fullWidth
                size='small'
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Iconify icon='solar:iphone-line-duotone' />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div className='flex items-center gap-2'>
          <Typography>{t('signup.haveAccount')}</Typography>
          <Typography
            color='primary'
            className='underline'
            component={Link}
            href={APP_URLS.SIGNIN}
          >
            {t('signin.title')}
          </Typography>
        </div>
        <RHFSubmitButton
          variant='outlined'
          size='large'
        >
          {t('signup.title')}
        </RHFSubmitButton>
      </form>
    </FormProvider>
  );
};

export default Form;
