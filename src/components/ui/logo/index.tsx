'use client';
import { useColorScheme } from '@mui/material';
import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const Logo = ({
  height = 52,
  width = 132,
  ...other
}: Omit<ImageProps, 'src' | 'alt'>) => {
  const { mode } = useColorScheme();
  const isDark = mode === 'dark';

  // To trigger the logo change
  const [logoSrc, setLogoSrc] = useState(
    `/assets/images/${isDark ? 'dark_logo' : 'logo'}.svg`
  );

  useEffect(() => {
    setLogoSrc(`/assets/images/${isDark ? 'dark_logo' : 'logo'}.svg`);
  }, [isDark]);

  return (
    <motion.div
      key={logoSrc} // Key ensures the logo fades when changing
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={logoSrc}
        height={height}
        width={width}
        alt='logo'
        {...other}
      />
    </motion.div>
  );
};

export default Logo;
