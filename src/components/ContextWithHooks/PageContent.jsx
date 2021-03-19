import React, { useContext } from 'react';

import { ThemeContext } from './contexts/ThemeContext';

const PageContent = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? '#111' : '#eee',
    height: '100vh',
    width: '100vw',
  };
  return <div style={styles}>{children}</div>;
};

export default PageContent;
