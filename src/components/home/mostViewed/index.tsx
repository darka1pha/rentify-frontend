import { PropertyCard, SectionHeader } from '@/components/ui';
import { getProprties } from '@/lib/services/properties';
import { getTranslations } from 'next-intl/server';

const MostViewed = async () => {
  const t = await getTranslations('home');
  const properties = await getProprties();

  console.log(properties);

  return (
    <div className='px-5 md:px-10 xl:px-24'>
      <SectionHeader title={t('mostViewed')} />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5'>
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            {...property}
          />
        ))}
      </div>
    </div>
  );
};

export default MostViewed;
