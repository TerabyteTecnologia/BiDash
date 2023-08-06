import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "../layouts/DefaultLayout/index";
import { Login } from "../pages/Auth/Login";
import { Home } from "../pages/Players";
import { Payment } from "../pages/Payment";
import { Casino } from "../pages/Casino";
import { SportsBooks } from "../pages/SportsBooks";
import { HistoricPlayer } from "../pages/Players/HistoricPlayers";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/jogadores" element={<Home />} />
        <Route path="/historico-jogador" element={<HistoricPlayer />} />
        <Route path="/pagamentos" element={<Payment />} />
        <Route path="/cassino" element={<Casino />} />
        <Route path="/livros-esportes" element={<SportsBooks />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}