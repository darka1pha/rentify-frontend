import { Navbar } from '@/components/layout';
import { getProfile } from '@/lib/api/auth';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getProfile();
  console.log({ user });
  return (
    <div className='relative min-h-screen'>
      <Navbar user={user} />
      <div className='pb-10 min-h-screen flex flex-col gap-10'>{children}</div>
    </div>
  );
};

export default MainLayout;
