import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "../layouts/DefaultLayout/index";
import { Login } from "../pages/Auth/Login";
import { Player } from "../pages/Players";
import { Payment } from "../pages/Payment";
import { Casino } from "../pages/Casino";
import { SportsBooks } from "../pages/SportsBooks";
import { HistoricPlayer } from "../pages/Players/HistoricPlayers";
import { Home } from "../pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/jogadores" element={<Player />} />
        <Route path="/historico-jogador" element={<HistoricPlayer />} />
        <Route path="/pagamentos" element={<Payment />} />
        <Route path="/cassino" element={<Casino />} />
        <Route path="/livros-esportes" element={<SportsBooks />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}