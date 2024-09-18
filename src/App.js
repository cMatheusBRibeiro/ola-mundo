import './App.css';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';

const pagina = window.location.pathname === "/" ? <Inicio /> : <SobreMim />

function App() {
  return pagina;
}

export default App;
