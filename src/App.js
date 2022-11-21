import React from 'react';

// Global CSS (Boostrap and External CSS)
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

// Self Defined Components
import INDEX_ENTRY_POINT from './components';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className=''>
          <INDEX_ENTRY_POINT />
        </div>
      </div>
    );
  }
}

export default App;
