import NavBar from './components/NavBar'
import ItemsListContainer from './components/ItemsListContainer'
import './App.css'

function App() {
  return (
    <div>
  <NavBar/>
  <ItemsListContainer greeting={'Esto es'}/>
  <ItemsListContainer greeting={'Glaciar.ar'}/>

   </div>
  );
}

export default App;
