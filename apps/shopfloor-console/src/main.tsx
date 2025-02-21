import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import App from './app';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import OverviewPage from './pages/overview';
import DevicesPage from './pages/devices';
import { IxApplicationContext } from '@siemens/ix-react';
import './i18n';
import { provideGlobalGridOptions } from 'ag-grid-community';

provideGlobalGridOptions({
  theme: 'legacy',
});

ModuleRegistry.registerModules([AllCommunityModule]);

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <OverviewPage />,
      },
      {
        path: '/devices',
        element: <DevicesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IxApplicationContext>
      <RouterProvider router={router}></RouterProvider>
    </IxApplicationContext>
  </StrictMode>
);
