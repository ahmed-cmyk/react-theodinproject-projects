import React, { useState } from 'react';
import './App.css';

import General from './components/General';
import Educational from './components/Educational';
import Practical from './components/Practical'

function App() {
  const [ appState, setAppState ] = useState(false);

  const setState = () => {
    setAppState(true);
  }

  const editHandler = () => {
    setAppState(false);
  }

  return (
    <div className="col-8 mx-auto mt-3">
      <h1 className="text-primary text-center">CV Application</h1>
      <h2 className="text-secondary">General Information</h2>
      <General appState={appState} />
      <h2 className="text-secondary">Educational Information</h2>
      <Educational appState={appState} />
      <h2 className="text-secondary">Practical Information</h2>
      <Practical appState={appState} />
      <br />
      <div className="text-center">
        <button className="btn btn-primary" onClick={setState}>Save Changes</button>
        {appState ? <button className="btn btn-primary" onClick={editHandler}>Edit Form</button>: null}
      </div>
    </div>
  );
}

export default App;
