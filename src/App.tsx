import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import BackToTop from "./components/BackToTop";
// pages
import LogInPage from "./pages/LogInPage";
import Profile from "./pages/Profile";
import Learn from "./pages/Learn";
import Error404 from "./pages/Error404";

// common functions
export function capitalise(text: string) {
  // capitalises first letter of a string
  return text[0].toUpperCase() + text.substring(1);
}

function App() {
  return (
    <Router>
      <div className="App bg-theme-cream">
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/translate" element={<Learn subpage="translate" />} />
          <Route path="/dictionary" element={<Learn subpage="dictionary" />} />
          <Route path="/grammar" element={<Learn subpage="grammar" />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
      <BackToTop />
    </Router>
  );
}

export default App;
