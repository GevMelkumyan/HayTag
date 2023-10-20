import "./App.css";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Rectangle from "./Components/Rectangle/Rectangle";
import Register from "./Components/Register/Register";
import Circle from "./Components/Circle/Circle";
import Reclam from "./Components/Reclam/Reclam";
import Footer from "./Components/Footer/Footer";
import End from "./Components/End/End";
import Nav from "./Components/Header/Nav/Nav";
import Curses from "./Components/Curses/Curses";

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="container">
        <Header />
        <Rectangle />
        <About />
        <Circle />
        <Curses />
        <Register />
        <Reclam />
        <Footer />
        <End />
      </main>
    </div>
  );
}

export default App;
