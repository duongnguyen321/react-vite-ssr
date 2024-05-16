import Text from '@components/Text.tsx';
import useLanguage from '@hooks/useLanguage.tsx';

const ProfilePage = () => {
  const { t } = useLanguage();
  return (
    <Text as={'h1'} className={'text-[var(--color-900)]'}>{t('profile.TITLE')}</Text>
  );
};
export default ProfilePage;
