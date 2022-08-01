import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';
import Input from './components/input/input';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <i>hsahkhsd</i>
        <b>dhsjhdsjhjkd</b>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <>ola</>
        <br></br>
        <>hello</>
        <br></br>
        <>teste</>
        <Input text={"testando input"} p={"0 0 0 10px"} bd_color={"gray"} />
        <Button p={"0px 2px"} m={"10px 0px 0px 0px"} text={"teste"} c={"#ffffff"} w={150} img_w={50} bg={"black"} radius={"5%"} mob_w={70}/>
      </header>
      <Footer />
    </div>
  );
}

export default App;
