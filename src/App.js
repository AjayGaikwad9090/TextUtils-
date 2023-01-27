import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <TextFrom />
      <About />
    </>
  );
}

export default App;
