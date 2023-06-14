
import './App.css';
import ARcomponents from './components/ARcompoents';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold bg-blue-300 p-4 rounded-lg text-center">
        Progetto di Architetture multimediali <br />Realizzazione di un prototipo di visualizzazione di modelli 3D in AR<br /><span className='text-base'>Alberto Rizzi</span>
      </h1>

      <ARcomponents />
    </div>

  );
}

export default App;
