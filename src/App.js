import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Cart from './components/Cart'

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
