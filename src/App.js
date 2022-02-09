import './App.css';
import Cred from './components/JavaScript/Cred';
import { Route, Link, Routes } from 'react-router-dom'
import IncomeTracker from './components/JavaScript/IncomeTracker';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/Home' element={<IncomeTracker />}></Route>
  
  <Route path='/' element={<Cred />}></Route>
</Routes>

    </div>

  );
}

export default App;
