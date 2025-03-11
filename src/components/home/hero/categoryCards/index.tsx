import { CategoryCard } from '@/components/ui';

const CategoryCards = () => {
  return (
    <div className='flex items-center gap-10 justify-center overflow-auto px-24 w-full'>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  );
};

export default CategoryCards;
