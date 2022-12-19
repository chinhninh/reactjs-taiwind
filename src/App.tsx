import "./App.css";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import Home from "./pages/Home/Home";
import './fonts/Martel_Sans/MartelSans-Bold.ttf'

function App() {
  return (
    <div className="relative antialiased tracking-tight text-gray-500 bg-black font-inter">
      <div className="absolute inset-0 bg-top bg-no-repeat bg-illustration-01"></div>
      <div className="absolute inset-0 bg-center bg-no-repeat bg-illustration-02"></div>
      <Header/>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
