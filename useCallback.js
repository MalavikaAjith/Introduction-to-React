import React, {useState, useCallback} from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback(() => {
    setCounter(prevCounter => prevCounter + 1);
  }, []);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <ChildComponent onIncrement={incrementCounter} />
    </div>
  );
};

const ChildComponent = ({onIncrement}) => {
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
