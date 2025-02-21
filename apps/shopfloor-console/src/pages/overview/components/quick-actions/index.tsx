import useShowDemoMessage from '../../../../hooks/demoMessage';
import { IxActionCard } from '@siemens/ix-react';
import { useTranslation } from 'react-i18next';

function QuickActions() {
  const { t } = useTranslation();
  const showDemoMessage = useShowDemoMessage();

  return (
    <>
      <IxActionCard
        onClick={showDemoMessage}
        variant="filled"
        icon="add-circle"
        heading={t('quick-actions.add-device')}
      ></IxActionCard>
      <IxActionCard
        onClick={showDemoMessage}
        icon="list"
        heading={t('quick-actions.add-devices')}
      ></IxActionCard>
      <IxActionCard
        onClick={showDemoMessage}
        icon="piechart"
        heading={t('analytics')}
      ></IxActionCard>
      <IxActionCard
        onClick={showDemoMessage}
        icon="maintenance"
        heading={t('quick-actions.schedule-maintenance')}
      ></IxActionCard>
    </>
  );
}

export default QuickActions;
