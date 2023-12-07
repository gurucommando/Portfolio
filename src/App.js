import './App.css';
import Navbar from './header/navbar';
import Portfolio from './component/portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <Navbar/>
      <Portfolio/>
    </>
  );
}

export default App;
