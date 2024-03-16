import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import InventoryManagement from "./pages/InventoryManagement";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/inventory-management":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>

      <Route path="/" element={<Login/>} />
      {/* <Route path="/" element={<Dashboard />} /> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inventory-management" element={<InventoryManagement />} />

    </Routes>
  );
}
export default App;
