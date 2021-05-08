import React, { useState } from 'react';
import {
  HashRouter,
  Switch,
  Route,
  // Link,
} from 'react-router-dom';
import styleConstants from './styleConstants.jsx'

const App = () => {
  return (
    <HashRouter>
      <styleConstants.GlobalStyle />
    </HashRouter>
  );
};

export default App;
