import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Test from './test.js';
import Testtwo from './testtwo';

function App() {
  return (
    <div className="App">
      <HashRouter>
              <Routes>
                <Route exact path="/" Component={ Test } />
                <Route exact path="/display" Component={ Testtwo }/>
              </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
