
import './App.css';
import React from 'react';
import Converter from './components/Converter';

function App() {



  return (
    <div className="App">

      <nav class="navbar bg-dark">
        <div class="container-fluid">
          <span class="navbar-brand text-light mb-0 h1">Bin2Dec</span>
        </div>
      </nav>
      <br />

      <div className='container p-4'>
        <div className='row'>
          <div className='col-md-8 mx-auto'>
            <Converter />
          </div>
        </div>
      </div>

    </div>

  );
}

export default App;
