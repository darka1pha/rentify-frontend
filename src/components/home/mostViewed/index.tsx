import { PropertyCard } from '@/components/ui';
import { Button, Typography } from '@mui/material';

const MostViewed = () => {
  return (
    <div className='px-5 md:px-10 xl:px-24'>
      <div className='flex justify-between items-center mb-8'>
        <Typography
          variant='h3'
          fontSize={32}
          fontWeight={'bold'}
        >
          پر بازدید ترین‌های هفته‌ی گذشته
        </Typography>
        <Button>مشاهده همه</Button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5'>
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
};

export default MostViewed;
