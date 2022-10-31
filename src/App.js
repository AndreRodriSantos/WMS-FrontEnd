import './App.css';
import PopUp from './Components/PopUp/PopUp';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Routes />
      <p title='sabe ler não?' style={{color: "red", position: "fixed",bottom: "0", fontWeight: 'bolder', fontSize: "20px", marginLeft: "10px"}}>Em Desenvolvimento...</p>
    </div>
  );
}

export default App;




