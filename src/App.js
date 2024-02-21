import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import './App.css';

import Home from './pages/Home';
import Value from './pages/Value';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/value' exact element={<Value />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
