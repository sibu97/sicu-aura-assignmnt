import React from 'react';
import Navbar from './components/Nvbar.jsx'
import Fotter from './components/Fotter.jsx'
import Header from './components/Header.jsx'
import Jobsearch from './components/Jobsearch.jsx'

import './app.css'

function App() {
  return (
    <div >
      <Navbar />
      <Header />
      <Jobsearch/>
      <Fotter/>
    </div>
  );
}

export default App;
