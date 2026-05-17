import { Routes, Route } from "react-router-dom";
import VanshikaCertificate from "./VanshikaCertificate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<VanshikaCertificate />} />
      <Route path="/verify/:id" element={<VanshikaCertificate />} />
    </Routes>
  );
}

export default App;