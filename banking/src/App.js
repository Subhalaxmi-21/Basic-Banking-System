import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Customer from './components/Customer';
import Transaction from './components/Transaction';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/customer' element={<Customer/>}/>
          <Route path='/transaction' element={<Transaction/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
