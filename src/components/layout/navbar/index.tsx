'use client';

import { useScroll, useMotionValueEvent } from 'motion/react';
import { Box, Button, Paper } from '@mui/material';
import { useState } from 'react';
import { Iconify, Logo, ThemeSwitch } from '@/components/ui';
import { useTranslations } from 'next-intl';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations('home');

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 36);
  });

  return (
    <Box className='px-24 pt-10 fixed w-full z-50 flex items-center justify-between'>
      <Box
        sx={{
          p: 3,
          backgroundColor: scrolled ? 'background.item' : 'transparent',
          boxShadow: scrolled ? 'auto' : 'none',
          transition: 'all 0.3s ease-in-out',
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          borderRadius: '12px',
        }}
      >
        <Logo />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <ThemeSwitch />
          <Button
            endIcon={
              <Iconify
                sx={{ mr: 2 }}
                icon='solar:add-square-line-duotone'
                width={24}
                height={24}
              />
            }
            variant='contained'
          >
            {t('addNew')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
