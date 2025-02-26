import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VoiceCommand from "./components/VoiceCommand";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VoiceCommand />} />
        <Route path="/presentations" element={<HomePage />} />
        <Route path="/notes" element={<ProfilePage />} />
        <Route path="/assignments" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;

