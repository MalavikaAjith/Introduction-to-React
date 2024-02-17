function MyForm() {
  return(
    <form>
      <h1>HTML form</h1>
      <label for='fname'>First name: <input type='text' id='fname'></input></label><br></br><br></br>
      <label for='lname'>Last name: <input type='text' id='lname'></input></label><br></br><br></br>
      <label for='email'>E-mail: <input type='email' id='email'></input></label><br></br><br></br>
      <input type="submit"/>
    </form>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
