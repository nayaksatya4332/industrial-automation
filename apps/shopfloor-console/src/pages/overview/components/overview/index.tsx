import style from './styles.module.css';

import DeviceRange from '../device-range';
import StatusHistory from '../status-history';

function Overview() {
  return (
    <div className={style.CardContainer}>
      <DeviceRange></DeviceRange>
      <StatusHistory></StatusHistory>
    </div>
  );
}

export default Overview;
