'use client';

import { useScroll, useMotionValueEvent, motion } from 'motion/react';
import { Box, Paper } from '@mui/material';
import { useState } from 'react';
import { Logo } from '@/components/ui';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 36); // Change state when scrolling past 100px
  });

  return (
    <Box className='px-24 pt-10 fixed w-full z-50'>
      <Paper
        sx={{
          p: 3,
          backgroundColor: scrolled ? 'auto' : 'transparent',
          boxShadow: scrolled ? 'auto' : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Logo />
      </Paper>
    </Box>
  );
};

export default Navbar;
