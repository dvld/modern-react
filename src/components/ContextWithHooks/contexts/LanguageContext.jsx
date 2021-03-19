import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('english');

  const changeLanguage = (e) => setLanguage(e.target.value);

  return (
    <LanguageProvider value={{ language, changeLanguage }}>
      {children}
    </LanguageProvider>
  );
}
