import CategoryCards from './categoryCards';
import SearchSection from './searchSection';

const Hero = () => {
  return (
    <div className='w-full flex min-h-screen flex-col relative pb-24 bg-[url(/assets/images/herobg.webp)] bg-cover bg-no-repeat'>
      <div className='absolute w-full h-full bg-black/80 z-0'></div>
      <div className='relative w-full flex flex-col gap-16 items-center pt-56 px-5 md:px-10 xl:px-24'>
        <SearchSection />
        <CategoryCards />
      </div>
    </div>
  );
};

export default Hero;
