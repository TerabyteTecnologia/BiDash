
import { useEffect, useState } from "react";
import { getCampanhas } from "../../services/global/endPoints";
import Tabela from "./TableHistoricCampanha";
import { HistoricCampanhaProps } from "./interface";
import { ContainerHistoricSearch, ContentHistoricSearch, ContentTableHistoricPlayer, FlexHistoricPlayer, Row } from "./styles";
import { useNavigate } from 'react-router-dom';
import { Button } from "./EditCampanha/styles";

export function Campanhas () {
  const navigate = useNavigate();
  const [camp,setCamp] = useState<HistoricCampanhaProps[]>([]);
  const listaCamapanha  = async () => {
    const campanhas = await getCampanhas();
  
    if(campanhas.data.campanhas.length > 0) {
     setCamp(campanhas.data.campanhas)
    }
  }

  useEffect(()  => {
     listaCamapanha().catch(error=>{
      console.log(error)
     });
  },[])
  const handleEditar = (index: number) => {
    navigate(`/campanha/${index}`);
   console.log('editar',index)
  }
  const handleEmail = (index: number) => {
    navigate(`/emails/${index}`);
   console.log('editar',index)
  }
  const handleNovaCampanha = () => {
    navigate(`/campanha`)
  }

    return (
      <ContainerHistoricSearch>
      <ContentHistoricSearch>
       <Row>
        <FlexHistoricPlayer>
         <ContentTableHistoricPlayer>
          <Button onClick={handleNovaCampanha}>Nova Campanha</Button>
           <p>Campanhas</p>
           <Tabela dados={camp} onEditar={handleEditar} onEmail={handleEmail} />
         </ContentTableHistoricPlayer>
        </FlexHistoricPlayer>
       </Row>
     </ContentHistoricSearch>
    </ContainerHistoricSearch>
   );
}


