import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import BoshSahifa from "./pages/BoshSahifa/BoshSahifa";
import Mahsulotlar from "./pages/Mahsulotlar/Mahsulotlar";
import "@fontsource/poppins"
import Favourites from "./pages/Favourites/Favourites";
import Cart from "./pages/Cart/Cart";


function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<BoshSahifa/>}/>
        <Route path="/mahsulotlar" element={<Mahsulotlar/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Layout>
    </>
  );
}

export default App;
