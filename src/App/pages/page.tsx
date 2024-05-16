import Text from '@components/Text.tsx';
import useLanguage from '@hooks/useLanguage.tsx';

const HomePage = () => {
  const { t } = useLanguage();
  return (
    <Text as={'h1'} className={'text-[var(--color-900)]'}>{t('home.TITLE')}</Text>
  );
};
export default HomePage;
