import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

 class Car extends React.Component {
  constructor() {
    super();
    this.state = {color : "red"};
  }
  render() {
    return (
      <div>
        <h2>I am a {this.state.color} Car!</h2>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Car/>
  </React.StrictMode>
);

