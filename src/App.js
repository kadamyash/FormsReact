 import './App.css';
import './forms-react/forms-react.css'
import Input from './forms-react/input.js'
import Button from './forms-react/button.js'

function App() {

  return (
    <div className="App">
      <div className="container">
        <form className="form">
        <h1> Fill a form?</h1>
          <Input type="email" validation="email" placeholder="E Mail"></Input>
          <Input type="text" placeholder="Name"></Input>
          <Input id="message" type="text" placeholder="Message"></Input>
          <br></br>
          <span style={{margin: '1em auto'}}>
            <Button type="submit" text="Submit" variant="pri-animated"/>
            <Button type="reset" text="Clear" variant="danger-animated"/>
          </span>
        </form>
      </div>
    </div>
  );
}

export default App;
