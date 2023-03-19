import Header from "./components/Header";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/me" element={<ProfileScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/order/" element={<OrderScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/products/:id" element={<ProductScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
