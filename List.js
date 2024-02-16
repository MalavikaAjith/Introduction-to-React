function Car(props) {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <div>
      <h1>Who lives in my garage?</h1>
      <ul>{cars.map((car) => <Car brand={car} />)}</ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage/>);
