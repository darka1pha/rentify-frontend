'use client';
import { Icon } from '@iconify/react';
import { useColorScheme } from '@mui/material';
import { motion } from 'motion/react';

const ThemeSwitch = () => {
  const { mode, setMode } = useColorScheme();
  const isDark = mode === 'dark';
  return (
    <motion.button
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
      className={`h-11 w-11 flex items-center justify-center rounded-full ${
        isDark ? 'bg-gray-900' : 'bg-white'
      } shadow-md hover:shadow-xl transition-shadow`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      layout
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 360 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {isDark ? (
          <Icon
            icon={'solar:moon-bold'}
            className='w-6 h-6 text-yellow-400'
          />
        ) : (
          <Icon
            icon={'solar:sun-2-bold'}
            className='w-6 h-6 text-yellow-400'
          />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeSwitch;
