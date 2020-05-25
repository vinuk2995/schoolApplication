import React  from 'react';
import './App.css';
import { BrowserRouter,HashRouter  } from 'react-router-dom';
import FeatureRoutes from './Routes/Router.js'

function App() {
  return (
    <BrowserRouter>
            <FeatureRoutes />
    </BrowserRouter>
  );
}

export default App;
