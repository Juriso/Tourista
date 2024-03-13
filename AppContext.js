// AppContext.js

import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [splashShown, setSplashShown] = useState(false);

  return (
    <AppContext.Provider value={{ splashShown, setSplashShown }}>
      {children}
    </AppContext.Provider>
  );
};
