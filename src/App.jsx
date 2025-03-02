import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<><h1>Welcome to Dashboard</h1></>} />
        <Route path="/" element={<Login />} /> {/* Default to Login */}
      </Routes>
    </Router>
  );
}

export default App;