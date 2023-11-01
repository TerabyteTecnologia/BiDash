import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "../layouts/DefaultLayout/index";
import { Login } from "../pages/Auth/Login";
import { Player } from "../pages/Players";
import { Payment } from "../pages/Payment";
import { Casino } from "../pages/Casino";
import { SportsBooks } from "../pages/SportsBooks";
import { HistoricPlayer } from "../pages/Players/HistoricPlayers";
import { Home } from "../pages/Home";
import { Campanhas } from "../pages/Campanhas";
import { EditCampanha } from "../pages/Campanhas/EditCampanha";

import { Emails } from "../pages/Emails";
import { Email } from "../pages/Emails/EditEmail";

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
        <Route path="/campanhas" element={<Campanhas />} />
        <Route path="/campanha/:id" element={<EditCampanha />} />
        <Route path="/campanha" element={<EditCampanha />} />

        <Route path="/emails/:id" element={<Emails />} />
        <Route path="/email/:id" element={<Email />} />
        <Route path="/createemail/:idcampanha" element={<Email />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}