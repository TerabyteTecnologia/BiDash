
import { useEffect, useState } from "react";
import { deleteEmail, disparoEmail, getEmails } from "../../services/global/endPoints";
import Tabela from "./TableEmails";
import { BodyDisparoProps, HistoricEmailProps } from "./interface";
import { HistoricCampanhaProps } from "../Campanhas/interface";
import { ContainerHistoricSearch, ContentHistoricSearch, ContentTableHistoricPlayer, FlexHistoricPlayer, Row } from "./styles";
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from "../../hooks/useToast";
import { Button } from "./EditEmail/styles";
import Modal from "./Modal";

export function Emails () {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [emailSate,setEmailState] = useState<HistoricEmailProps[]>([]);
  const [campanha,setCampanha] = useState<HistoricCampanhaProps>()
  const [refresh,setRefresh] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState(false);


  const abrirModal = () => {
    setModalOpen(true);
  };

  const fecharModal = () => {
    setModalOpen(false);
  };
  const { id } = useParams();

  const listaEmails  = async (id?:string) => {

    const idInt = parseInt(id ? id:"1")
    
    const emails = await getEmails(idInt);

    if(emails.data.emails.length > 0) {
      setEmailState(emails.data.emails)
    }
    if(emails.data.campanha) {
      setCampanha(emails.data.campanha)
    }
  }

  useEffect(()  => {
    listaEmails(id).catch(error=>{
      console.log(error)
     });
  },[refresh])
  
  const handleEditar = (index: number) => {
    navigate(`/email/${index}`);
   console.log('editar',index)
  }

  const handleDeletar = async (index: number) => {
    const  deleteResponse = await deleteEmail(index);
    if(deleteResponse.data.error){
      toast.error(deleteResponse.data.error)
    }else if(deleteResponse.data.success){
      toast.success(deleteResponse.data.success)
    }
    setRefresh(!refresh)
  }
  const handleNovoEmail = (index:string) => {
    const idInt = parseInt(index);
    navigate(`/createemail/${idInt}`);
  }

  const handleDisparare = async (index:string) => {
    if(!index){
      toast.success("Campanha não existe")
    }else{
    const idInt = parseInt(index)
    const body:BodyDisparoProps ={
      campanha_id:idInt
    }
    const disparaoStatus = await disparoEmail(body)
    if(disparaoStatus.data.success){
      toast.success(disparaoStatus.data.success)
    }else{
      toast.error(disparaoStatus.data.error)
    }

    fecharModal()
   
  }
  }

    return (
      <ContainerHistoricSearch>
      <ContentHistoricSearch>
       <Row>
       {id ?
            <div>
            <Button onClick={abrirModal}>Disparar Emails</Button>
      
            <Modal isOpen={modalOpen} onClose={fecharModal}>
              <h2>Deseja Realmente Disparar?</h2>
               <Button type="button" onClick={() => handleDisparare(id)}>Sim</Button>
               <Button type="button" onClick={fecharModal}>Não</Button>
            </Modal>
          </div>
           :
           ""
          }
        <FlexHistoricPlayer>
         <ContentTableHistoricPlayer>
       
          
           <p>Emails da Campanha: {campanha?.nomecampanha} </p>
           {id ?
            <Button onClick={()=>handleNovoEmail(id)}>Novo Email</Button>
           :
           ""
          }
           <Tabela dados={emailSate} onEditar={handleEditar}  onDeletar={handleDeletar} />
         </ContentTableHistoricPlayer>
        </FlexHistoricPlayer>
       </Row>
     </ContentHistoricSearch>
    </ContainerHistoricSearch>
   );
}


