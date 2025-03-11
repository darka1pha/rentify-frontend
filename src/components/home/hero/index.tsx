import Image from 'next/image';
import CategoryCards from './categoryCards';
import SearchSection from './searchSection';

const Hero = () => {
  return (
    <div className='w-full flex flex-col relative'>
      <div className='fixed w-full h-[60vh] sm:h-[675px] rounded-b-2xl overflow-hidden bg-[url(/assets/images/herobg.webp)] bg-cover bg-no-repeat'>
        <div className='w-full h-full bg-black/80 z-0'></div>
      </div>
      <div className='relative w-full flex flex-col gap-10 items-center pt-56'>
        <SearchSection />
        <CategoryCards />
      </div>
    </div>
  );
};

export default Hero;
