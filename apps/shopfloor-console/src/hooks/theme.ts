import { themeSwitcher } from '@siemens/ix';
import { convertThemeName } from '@siemens/ix-echarts';
import { useLayoutEffect, useState } from 'react';

export const useEChartsTheme = () => {
  const [echartsTheme, setEchartsTheme] = useState(
    convertThemeName(themeSwitcher.getCurrentTheme())
  );

  useLayoutEffect(() => {
    const { dispose } = themeSwitcher.themeChanged.on((theme) =>
      setEchartsTheme(convertThemeName(theme))
    );
    return dispose;
  }, []);

  return echartsTheme;
};
