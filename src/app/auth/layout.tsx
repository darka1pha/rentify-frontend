import { Box, Paper } from '@mui/material';
import Image from 'next/image';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-12 w-full h-screen p-4'>
      <div className='col-span-7 flex justify-center items-center'>
        <Image
          src={'/assets/images/auth.svg'}
          height={392}
          width={636}
          alt='auth'
        />
      </div>
      <Paper
        className='col-span-5'
        sx={{
          borderRadius: '16px',
          boxShadow: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div className='mb-10'>
          <Image
            src={'/assets/images/logo.svg'}
            height={80}
            width={200}
            alt='logo'
          />
        </div>
        {children}
      </Paper>
    </div>
  );
};

export default AuthLayout;
