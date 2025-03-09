'use client';
import { ThemeSwitch } from '@/components/ui';
import { Button, Typography, useColorScheme } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function Home() {
  const { mode, setMode } = useColorScheme();
  const t = useTranslations('home');
  console.log(mode);
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <Typography>تست</Typography>
      <ThemeSwitch />
    </div>
  );
}
