import React, { Component } from 'react';
import PieChart from './PieChart';
import './App.css';

class App extends Component {
  state = {
    data: [
      { label: '<5', value: 2704659 },
      { label: '5-13', value: 4499890 },
      { label: '14-17', value: 2159981 },
      { label: '18-24', value: 3853788 },
      { label: '25-44', value: 14106543 },
      { label: '45-64', value: 8819342 },
      { label: '≥65', value: 612463 },
    ],
  };

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <PieChart data={data} />
      </div>
    );
  }
}

export default App;
