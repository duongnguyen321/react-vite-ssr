import Text from '@components/Text.tsx';
import { HOST_URL, SERVER_URL } from '@config/site.config.ts';
import useLanguage from '@hooks/useLanguage.tsx';

const HomePage = () => {
  const { t } = useLanguage();
  return (
    <>
      <Text as={'h1'} className={'text-[var(--color-900)]'}>{t('home.TITLE')}</Text>
      <h1>{SERVER_URL}</h1>
      <h2>{HOST_URL}</h2>
    </>

  );
};
export default HomePage;
