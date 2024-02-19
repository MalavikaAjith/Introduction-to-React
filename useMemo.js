import React, {useState, useMemo} from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  // State to hold two input values
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  // Memoized result of a computation based on the inputs
  const result = useMemo(() => {
    console.log('Calculating result...'); // This log will only be printed when the inputs change
    return parseInt(input1, 10) + parseInt(input2, 10);
  }, [input1, input2]); // Dependencies are the inputs that affect the computation

  return (
    <div>
      <h1>Result: {result}</h1>
      <label>
        Input 1:
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Input 2:
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </label>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
