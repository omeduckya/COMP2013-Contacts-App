import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import PrivatePage from "./Components/PrivatePage";
import NotAuthorized from "./Components/NotAuthorized";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacts" element={<PrivatePage />} />
        <Route path="/not-authorized" element={<NotAuthorized />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
