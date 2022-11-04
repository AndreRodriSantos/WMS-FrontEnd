import './App.css';
import { Alert } from './Components/Avisos/Alert';
import Rotas from './routes';

function App() {
  return (
    <div className="App">
      <Alert/>
      <Rotas />
      <p title='sabe ler não?' style={{color: "red", position: "fixed",bottom: "0", fontWeight: 'bolder', fontSize: "20px", marginLeft: "10px"}}>Em Desenvolvimento...</p>
    </div>
  );
}

export default App;




