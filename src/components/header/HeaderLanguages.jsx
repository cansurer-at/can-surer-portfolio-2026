import "./header.css";
import { useTranslation } from 'react-i18next';

// Import i18n directly from 'i18next'
import i18n from 'i18next';

// Define changeLanguage function at a higher level
const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

const HeaderSocials = () => {
  const { t } = useTranslation(); // Use useTranslation hook

  return (
    <div className="language-buttons">
      <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>
        EN
      </button>
      <button onClick={() => changeLanguage('de')} className={i18n.language === 'de' ? 'active' : ''}>
        DE
      </button>
     
    </div>
  );
};

export default HeaderSocials;
