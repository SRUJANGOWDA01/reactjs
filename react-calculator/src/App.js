import React from 'react';
import './App.css';
import Calculator from './screens/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='container'>
         <Calculator/>
      </div>
    )
  }
}

export default App;
