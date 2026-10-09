import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
// pages
import LogInPage from "./pages/LogInPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
