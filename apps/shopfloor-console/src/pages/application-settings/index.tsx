import { IxToggle, IxTypography, IxUpload } from '@siemens/ix-react';
import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';

export default function ApplicationSettings() {
  const { t } = useTranslation();
  return (
    <section className={styles.ApplicationSettings}>
      <section>
        <IxTypography format="h4" className={styles.Headline}>
          {t('settings.notification')}
        </IxTypography>
        <IxToggle
          textOn={t('settings.toggle-on')}
          textOff={t('settings.toggle-off')}
        ></IxToggle>
      </section>
      <section>
        <IxTypography format="h4" className={styles.Headline}>
          {t('settings.import-device')}
        </IxTypography>
        <IxUpload
          className={styles.Upload}
          i18nUploadFile={t('settings.upload-button')}
          selectFileText={t('settings.upload-text')}
        ></IxUpload>
      </section>
    </section>
  );
}
