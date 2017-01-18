import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PieChart from './PieChart';

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
    width: 960,
    height: 500,
  };

  render() {
    const { data, width, height } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <PieChart
          data={data}
          width={width}
          height={height}
        />
      </div>
    );
  }
}

export default App;
