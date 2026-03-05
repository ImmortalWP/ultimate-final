import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Profile from "./pages/profile";
import SignIn from "./pages/signIn";
import SignUp from "./pages/SignUp";
import Listing from "./pages/listing";
import Home from "./pages/homePage";
import BuyPage from "./pages/BuyPage";
import SellPage from "./pages/SellPage";

const AUTH_ROUTES = ["/signin", "/signup"];

function Layout() {
  const location = useLocation();
  const isAuthPage = AUTH_ROUTES.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/listing/:id" element={<Listing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
