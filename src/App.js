import Routers from './router/Routers'
import './App.css';
import Header from "./pages/Header"
import Footer from "./pages/Footer"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className='contentWrapper'>
        <Routers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
