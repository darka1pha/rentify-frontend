import { Navbar } from '@/components/layout';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative min-h-screen'>
      <Navbar />
      <div className='pt-[180px] px-24 pb-10'>{children}</div>
    </div>
  );
};

export default MainLayout;
