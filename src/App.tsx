import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
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
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
