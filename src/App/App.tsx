import Text from '@components/Text.tsx';
import useLanguage from '@hooks/useLanguage.tsx';

const App = () => {
  const { t } = useLanguage();
  return (
    <Text as={'h1'} className={'text-[var(--color-900)]'}>{t('homepage.TITLE')}</Text>
  );
};
export default App;
