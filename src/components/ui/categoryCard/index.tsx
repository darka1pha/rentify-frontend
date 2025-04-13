import { Card, IconButton, Paper, Typography } from '@mui/material';
import Iconify from '../iconify';
import Image from 'next/image';

interface CategoryCardProps {
  title: string;
  imageSrc: string;
  propertyCount: number;
}

const CategoryCard = ({
  title,
  imageSrc,
  propertyCount,
}: CategoryCardProps) => {
  return (
    <Card className='p-0 aspect-[3/4] w-full max-h-[376px] relative overflow-hidden'>
      <div className='relative h-full w-full'>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className='object-cover'
          priority
        />
      </div>
      <div className='absolute inset-0 w-full h-full flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/10 to-transparent'>
        <Paper
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 2,
            px: 2,
            py: 1.5,
            m: 1,
          }}
        >
          <div>
            <Typography
              variant='h6'
              fontSize={16}
            >
              {title}
            </Typography>
            <Typography variant='body2'>+{propertyCount} ملک</Typography>
          </div>
          <IconButton color='primary'>
            <Iconify
              width={32}
              icon={'solar:round-alt-arrow-left-line-duotone'}
            />
          </IconButton>
        </Paper>
      </div>
    </Card>
  );
};

export default CategoryCard;
