import PropTypes from 'prop-types';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Card from './Card';
import SignUpForm from './Form';
import HelloWorld from './HelloWorld';

function Article(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <img src={props.image} alt={props.title} width={props.size}></img>
    </>
  );
}


function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloWorld />} />
        <Route path="about" element={<SignUpForm />} />
        <Route path="dashboard" element={<Card />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

function Navbar() {
  <nav>
    <Link to="/">Home</Link>
    <Link to="/register">Register</Link>
    <Link to="/login">Register</Link>
  </nav>
}
export default App
Article.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};