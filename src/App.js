import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import Header from './Header'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    </BrowserRouter>
    </div>
  );
}

export default App;
