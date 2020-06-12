import React from 'react';
import './index.css'
import Header from './components/Header';
import Router from './routes';
import Editar from './pages/Editar';
function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Editar />
    </div>
  );
}

export default App;
