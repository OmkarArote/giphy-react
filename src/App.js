import React from 'react';

// Global CSS (Boostrap and External CSS)
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// Self Defined Components
import INDEX_ENTRY_POINT from './components';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className=''>
          <INDEX_ENTRY_POINT />
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
