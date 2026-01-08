import './App.css';
import ProductMenu from "./component/productlist/ProductMenu"
//import Footer from './component/footer/Footer';
import ProductList from './component/productlist/ProductList';
import Temp from './component/productlist/Temp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Productdetail from "./component/productlist/Productdetail"
import Cartdetail from "./component/Addtocart/Cartdetail"
import Tempcart from "./component/Addtocart/Tempcart"
import Login from './component/Login/Login';
import Signup from './component/Login/Signuppage';

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/productdetail" element={<Productdetail />} />
        <Route path="/temp" element={<Temp />} />
        <Route path="/productmenu" element={<ProductMenu />} />
        <Route path="/cart" element={<Cartdetail />} />
        <Route path="/temoc" element={<Tempcart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </Router>
   
    {/* <ProductList/> */}
    {/* <Productdetail /> */}
    {/* <ProductMenu/> */}
    {/* <Temp/> */}
    {/* <Footer/> */}
    </>
  );
}

export default App;
