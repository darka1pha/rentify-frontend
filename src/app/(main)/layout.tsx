import { Navbar } from '@/components/layout';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative min-h-screen'>
      <Navbar />
      <div className='pb-10 min-h-screen flex flex-col gap-10'>{children}</div>
    </div>
  );
};

export default MainLayout;
