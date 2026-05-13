import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Cadastro from "./Cadastro";
import Listagem from "./Listagem";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/listagem" element={<Listagem />} />
    </Routes>
  );
}
