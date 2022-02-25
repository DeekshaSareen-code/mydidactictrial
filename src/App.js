import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Header from './bars/header';


function App() {
  const[navbar, setnavbar] = useState([]);
  return (
    <div className="App" >
      <div >
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
