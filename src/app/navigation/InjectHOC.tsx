import React from 'react';
import useConfigTheme from '@hooks/useConfigTheme';
import useResetNavigation from '@hooks/useResetNavigation';

function InjectHOC<Props, F>(WrappedComponent: React.FC<Props & F>, slices: F) {
  const { configTheme } = useConfigTheme();
  const { navigateWithReset } = useResetNavigation();
  const ComponentWithExtraInfo = (props: Props) => {
    return <WrappedComponent { ...props } { ...slices } configTheme={configTheme} navigateWithReset={navigateWithReset} />;
  };
  return ComponentWithExtraInfo;
}

export default InjectHOC;
