'use client';
import { Chip, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Iconify from '../iconify';
import Link from 'next/link';
import { Property } from '@/types/property';
import { PropertLabel } from '@/constants/properties';

const PropertyCard = ({
  id,
  description,
  media,
  price,
  securityDeposit,
  address,
  propertyType,
}: Property) => {
  console.log(media);
  return (
    <Link href={`/properties/${1}`}>
      <Paper className='aspect-[288/355] w-full flex flex-col justify-end overflow-hidden group'>
        <div className='relative flex-1 group-hover:scale-105 transition-all'>
          <Image
            src={media.length > 0 ? media[0] : '/test.png'}
            fill
            alt='image'
            className='object-cover'
          />
        </div>
        <div className='p-4 flex flex-col gap-5'>
          <div className='flex items-center gap-3'>
            <Chip
              label={PropertLabel[propertyType].label}
              color={PropertLabel[propertyType].color}
            />
            <div className='flex items-center gap-1'>
              <Iconify icon='solar:point-on-map-bold-duotone' />
              <Typography
                variant='caption'
                color='textSecondary'
              >
                {address}
              </Typography>
            </div>
          </div>
          <Typography
            fontSize={14}
            variant='body2'
            color='textGray'
            className='line-clamp-1'
            sx={{
              px: 2,
            }}
          >
            {description}
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
                  {securityDeposit.toLocaleString()} تومان
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
                  {price.toLocaleString()} تومان
                </Typography>
              </Paper>
            </div>
          </Paper>
        </div>
      </Paper>
    </Link>
  );
};

export default PropertyCard;
