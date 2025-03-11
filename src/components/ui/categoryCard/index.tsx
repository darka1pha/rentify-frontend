import { IconButton, Paper, Typography } from '@mui/material';
import Iconify from '../iconify';

const CategoryCard = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/test.png)',
      }}
      className='flex flex-col justify-end aspect-[392/376] w-full bg-violet-300 max-h-[376px] p-2 rounded-xl bg-cover bg-no-repeat'
    >
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          borderRadius: '12px',
          px: 2,
          py: 1,
        }}
      >
        <div>
          <Typography
            variant='h6'
            fontSize={16}
          >
            ویلا
          </Typography>
          <Typography variant='body2'>+12 ملک</Typography>
        </div>
        <IconButton color='primary'>
          <Iconify
            width={32}
            icon={'solar:round-alt-arrow-left-line-duotone'}
          />
        </IconButton>
      </Paper>
    </div>
  );
};

export default CategoryCard;
