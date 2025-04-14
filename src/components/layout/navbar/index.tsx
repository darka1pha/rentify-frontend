'use client';

import { useScroll, useMotionValueEvent } from 'motion/react';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { Iconify, Logo, ThemeSwitch } from '@/components/ui';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { User } from '@/types/user';
import { APP_URLS } from '@/lib/urls';
import ProfileButton from './profileButton';

const Navbar = ({ user }: { user: User | null }) => {
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
          {user && <ProfileButton user={user} />}
          <Button
            LinkComponent={Link}
            href={user ? APP_URLS.NEW_PROPERTIY : APP_URLS.SIGNUP}
            endIcon={
              user && (
                <Iconify
                  sx={{ mr: 2 }}
                  icon='solar:add-square-line-duotone'
                  width={24}
                  height={24}
                />
              )
            }
            variant='contained'
          >
            {user ? t('addNew') : t('signin')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
