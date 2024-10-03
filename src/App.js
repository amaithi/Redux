import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Component/Header/Header';
import { Footer } from './Component/Footer/Footer';
import { Body } from './Component/Body/Body';
import { ViewCustomer } from './Component/ViewCustomer/ViewCustomer';
import { AddCustomer } from './Component/AddCustomer/AddCustomer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { RouterConfig } from './RouterConfig';
function App() {
  return (
    <Router >
      <Header />
      <Body />
      <Footer />
    </Router>
  );
}

export default App;
