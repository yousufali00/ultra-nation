import logo from './logo.svg';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Country from './components/Country/Country';
import Container from 'react-bootstrap/Container'
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Container className="App">
        <Country></Country>
    </Container>
  );
}

export default App;
