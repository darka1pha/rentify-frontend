import { Chip, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Iconify from '../iconify';

const PropertyCard = () => {
  return (
    <Paper className='aspect-[288/355] w-full flex flex-col justify-end overflow-hidden'>
      <div className='relative flex-1'>
        <Image
          src={'/test.png'}
          fill
          alt='image'
          className='object-cover'
        />
      </div>
      <div className='p-4 flex flex-col gap-5'>
        <div className='flex items-center gap-3'>
          <Chip
            label={'آپارتمان'}
            color={'secondary'}
          />
          <div className='flex items-center gap-1'>
            <Iconify icon='solar:point-on-map-bold-duotone' />
            <Typography
              variant='caption'
              color='textSecondary'
            >
              تهران
            </Typography>
          </div>
        </div>
        <Typography
          fontSize={14}
          variant='body2'
          color='textGray'
          sx={{ px: 2 }}
        >
          ایپسوم لورم ایپسوم لورم ایپسوم لورم
        </Typography>
        <Paper
          sx={{
            p: 1,
            borderRadius: 3,
            backgroundColor: 'background.item',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div className='flex gap-2 items-center'>
            <Typography
              color='textGray'
              variant='caption'
            >
              رهن
            </Typography>
            <Paper
              sx={{
                boxShadow: 'none',
                px: 1,
                py: 0.5,
                borderRadius: 2,
              }}
            >
              <Typography variant='caption'>
                {(400000).toLocaleString()} تومان
              </Typography>
            </Paper>
          </div>
          <div className='flex gap-2 items-center'>
            <Typography
              color='textGray'
              variant='caption'
            >
              اجاره
            </Typography>
            <Paper
              sx={{
                boxShadow: 'none',
                px: 1,
                py: 0.5,
                borderRadius: 2,
              }}
            >
              <Typography variant='caption'>
                {(400000).toLocaleString()} تومان
              </Typography>
            </Paper>
          </div>
        </Paper>
      </div>
    </Paper>
  );
};

export default PropertyCard;
