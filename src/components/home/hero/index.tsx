import Image from 'next/image';

const Hero = () => {
  return (
    <div className='min-h-[675px] w-full'>
      <div className='relative w-full h-full top-0 right-0'>
        <Image
          height={675}
          width={1440}
          alt='hero'
          src='/assets/images/herobg.webp'
        />
      </div>
    </div>
  );
};

export default Hero;
