function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times! </h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer/>);



function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return <h1>I've rendered {count} times! </h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer/>);



function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2 );
  }, [count]);

  return (
    <div>
      <p>Count: {count} </p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter/>);

*/


function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
  }, 1000);

    return () => clearTimeout(timer)
    }, []);

  return <h1>I've rendered {count} times! </h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer/>);
