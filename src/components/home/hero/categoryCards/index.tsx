'use client';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import { CategoryCard } from '@/components/ui';

const categories = [
  { title: 'ویلا', imageSrc: '/test.png', propertyCount: 12 },
  { title: 'آپارتمان', imageSrc: '/test.png', propertyCount: 20 },
  { title: 'باغ', imageSrc: '/test.png', propertyCount: 8 },
];

const CategoryCards = () => {
  return (
    <div className='w-full'>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className='w-full'
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <CategoryCard {...category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryCards;
