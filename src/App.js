import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      {
        <Dashboard>
        </Dashboard>
      }
    </React.Fragment>
  );
}

export default App;
