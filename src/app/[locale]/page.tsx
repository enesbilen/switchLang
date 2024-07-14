import {useTranslations} from 'next-intl';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className='container mx-auto h-screen'>
      <h1 className='text-2xl font-bold mb-5'>{t('title')}</h1>
      <h3 className='text-lg font-semibold mb-3'>{t('subtitle')}</h3>
      <p className='text-zinc-500 font-semibold'>{t('description')}</p>
      <p className='mt-4 text-red-700 font-bold'>{t('smile')}</p>
    </div>
  );
}