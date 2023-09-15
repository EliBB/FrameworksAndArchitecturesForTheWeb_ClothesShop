import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ProductOverview from "./pages/productOverview.js";
import Frontpage from "./pages/frontPage";
import Login from "./pages/login";
import Basket from "./pages/basket";
import ProductPage from "./pages/productPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Frontpage/>}/>
          <Route path="/productoverview" element={<ProductOverview/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/productpage" element={<ProductPage/>}/>
          <Route path="/basket" element={<Basket/>}/> 
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

