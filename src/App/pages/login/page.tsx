import Text from '@components/Text.tsx';
import useLanguage from '@hooks/useLanguage.tsx';

const LoginPage = () => {
  const { t } = useLanguage();
  return (
    <Text as={'h1'} className={'text-[var(--color-900)]'}>{t('login.TITLE')}</Text>
  );
};
export default LoginPage;
