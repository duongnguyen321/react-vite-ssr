import Text from '@components/Text.tsx';
import useLanguage from '@hooks/useLanguage.tsx';

const AboutPage = () => {
  const { t } = useLanguage();
  return (
    <Text as={'h1'} className={'text-[var(--color-900)]'}>{t('about.TITLE')}</Text>
  );
};
export default AboutPage;
