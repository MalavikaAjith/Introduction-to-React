function App() {
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
    
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <div>
      <h1>My {brand} </h1>
      <p>It is a {color} {model} from {year}.</p>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car/>);



function Car() {
  const [car, setCar] = useState ({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return {...previousState, color:"blue"}
    });
  }

  return (
    <div>
      <h1>My {car.brand} </h1>
      <p>It is a {car.color} {car.model} from {car.year}.</p>
      <button type='button' onClick={updateColor}>Blue</button>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car/>);





