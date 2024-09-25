import './App.css';
import Login from './components/Login';
import {Route, Routes} from 'react-router-dom' 
import AddressForm from './components/AddressForm'

function App() {
  return (
   <div className="container app">
    <h1>Address Manager</h1>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<AddressForm/>} />
    </Routes>
   </div>
  );
}

export default App;
