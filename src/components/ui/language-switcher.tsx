
'use client';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.refresh();
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ar')}>AR</button>
      <button onClick={() => changeLanguage('es')}>ES</button>
      <button onClick={() => changeLanguage('de')}>DE</button>
      <button onClick={() => changeLanguage('zh')}>ZH</button>
    </div>
  );
};

export default LanguageSwitcher;
