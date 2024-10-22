import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap styles, без него он не будет работать
import DataList from './components/DataList';


function App() {
  return (
    <div className='app'>
      <DataList />
    </div>
  );
}

export default App;
