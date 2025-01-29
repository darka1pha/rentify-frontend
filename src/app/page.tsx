'use client';
import { Button, Typography, useColorScheme } from '@mui/material';

export default function Home() {
  const { mode, setMode } = useColorScheme();
  console.log(mode);
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <Typography>تست</Typography>
      <Button onClick={() => setMode('dark')}>DarkMode</Button>
      <Button onClick={() => setMode('light')}>LightMode</Button>
    </div>
  );
}
