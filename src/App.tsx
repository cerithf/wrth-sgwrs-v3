import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
// pages
import LogInPage from "./pages/LogInPage";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="App bg-theme-cream">
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
