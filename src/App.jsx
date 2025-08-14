import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCardList from "./components/ProductCardList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductCardList />
      <Footer />
    </div>
  );
}

export default App;
