import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import GridCard from './componens/GridCard/GridCard';
import ToastEx from './componens/Toast/Toast';
import NavbarEx from './componens/NavbarEx/NavbarEx';

function App() {
  return (
    <div className="App">
      <NavbarEx></NavbarEx>
      <button>Plain Button</button>
      <br /><br /> <br /> <br />
      <Button variant="success">Success</Button>
      <Spinner animation="grow" variant="danger" />
      <GridCard></GridCard>
      <ToastEx></ToastEx>
    </div>
  );
}

export default App;
