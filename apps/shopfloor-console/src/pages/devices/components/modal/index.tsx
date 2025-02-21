import { showModal } from '@siemens/ix-react';

import AddDeviceModal from './add-device-modal';

export default async function show() {
  await showModal({
    size: '600',
    content: <AddDeviceModal />,
  });
}
