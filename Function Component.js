function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car brand="Ford"/>);



function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

function Garage() {
  const carName = "Ford";
  return (
    <div>
      <h1>Who lives in my garage?</h1>
      <Car brand={carName} />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage/>);


function Car(props) {
  return <h2>I am a {props.brand.model}!</h2>;
}

function Garage() {
  const carInfo = { name:"Ford", model: "Mustang" };
  return (
    <div>
      <h1>Who lives in my garage?</h1>
      <Car brand={carInfo} />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage/>);
