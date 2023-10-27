import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register";
import BookingCar from "./pages/BookingCar"
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path ="/"  exact element={<Home/>}/>
            <Route path ="/login" exact element={<Login/>}/>
            <Route path = "/register" exact element={<Register/>}/>
            <Route path = "/bookingCar" exact element={<BookingCar/>}/>
        </Routes>
            
        </BrowserRouter>
    </div>
  );
}

export default App;
