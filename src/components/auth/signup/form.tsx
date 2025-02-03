'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { signupSchema, signUpSchemaType } from './schema';
import { Button, TextField } from '@mui/material';

const Form = () => {
  const t = useTranslations('auth');
  const {
    register,
    formState: { errors },
    trigger,
  } = useForm<signUpSchemaType>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
  });
  return (
    <form
      dir='rtl'
      className='w-full max-w-sm mt-5 flex flex-col gap-5'
      action={async (e) => {
        await trigger();
      }}
    >
      <div className='grid grid-cols-2 gap-5'>
        <TextField
          className='col-span-1'
          {...register('name')}
          label={t('signup.name')}
          variant='outlined'
          error={!!errors.name}
          helperText={errors.name?.message}
          fullWidth
          size='small'
        />

        <TextField
          className='col-span-1'
          {...register('lastname')}
          label={t('signup.lastname')}
          variant='outlined'
          error={!!errors.lastname}
          helperText={errors.lastname?.message}
          fullWidth
          size='small'
        />
      </div>

      <TextField
        {...register('email')}
        label={t('signup.email')}
        variant='outlined'
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
        size='small'
      />

      <TextField
        {...register('password')}
        label={t('signup.password')}
        variant='outlined'
        error={!!errors.password}
        helperText={errors.password?.message}
        fullWidth
        size='small'
      />

      <TextField
        {...register('username')}
        label={t('signup.username')}
        variant='outlined'
        error={!!errors.username}
        helperText={errors.username?.message}
        fullWidth
        size='small'
      />

      <TextField
        {...register('mobile')}
        label={t('signup.mobile')}
        variant='outlined'
        error={!!errors.mobile}
        helperText={errors.mobile?.message}
        fullWidth
        size='small'
      />

      <Button
        variant='outlined'
        type='submit'
        size='large'
      >
        {t('signup.title')}
      </Button>
    </form>
  );
};

export default Form;
