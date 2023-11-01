import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HistoricCampanhaProps } from "../interface";
import { getCampanha, storeCampanha, updateCampanha } from "../../../services/global/endPoints";
import { Button, ConterinerInputs, FormContainer, Input, TextArea } from "./styles";
import { useNavigate } from 'react-router-dom';
import { useToast } from "../../../hooks/useToast";


export  function  EditCampanha() {
  const navigate = useNavigate();
     const { toast } = useToast();
    const { id } = useParams();
    const [campanha,setCampanha] = useState<HistoricCampanhaProps>()
    const [campanhaData,setCampanhaData] = useState<any>()
    const buscaCampanha = async(id:string) => {
        const idInt = parseInt(id)
        const campanhaStatic = await getCampanha(idInt);
        console.log(campanhaStatic.data.campanha)
        setCampanha(campanhaStatic.data.campanha)
    }
    useEffect(()=>{
      if(id){
        buscaCampanha(id).catch(err => {console.log(err)})
      }
    },[])

    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCampanha({ ...campanha, [name]: value });
    };
    const handleInputChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCampanha({ ...campanha, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(campanha){
         const campanhaError = await storeCampanha(campanha).catch(err => {console.log(err)})
         
         console.log(campanhaError?.data?.error)
         //@ts-ignore
         if(campanhaError?.data.error){
           setCampanhaData(campanhaError?.data.error)
          }
          if(campanhaError?.data.success){
            toast.success("Camanha Cadastrada");
            navigate(`/campanhas`);
          }
         }
    }

    const handleSubmitUpdate = async (id:string) => {
      
      if(campanha){
        const idNumber = parseInt(id);
       const campanhaError = await updateCampanha(campanha,idNumber).catch(err => {console.log(err)})
       
       console.log(campanhaError?.data?.error)
       //@ts-ignore
       if(campanhaError?.data.error){
         setCampanhaData(campanhaError?.data.error)
        }
        if(campanhaError?.data.success){
          toast.success("Camanha Atualizada");
          navigate(`/campanhas`);
        }
       }
  }
    console.log(id)
    return ( 
      <FormContainer>
        <ConterinerInputs>
            <h1>Nome da campanha</h1>
            <Input
              type="text"
              name="nomecampanha"
              value={campanha?.nomecampanha || ''}
              onChange={handleInputChange}
            />
          <span>{campanhaData?.nomecampanha[0] &&  campanhaData?.nomecampanha[0] }</span>
        </ConterinerInputs>

        <ConterinerInputs>
            <h1>Mensagem </h1>
            <TextArea
              name="mensagem"
              value={campanha?.mensagem || ''}
              onChange={handleInputChangeTextarea}
            />
          <span>{campanhaData?.mensagem[0] &&  campanhaData?.mensagem[0] }</span>
        </ConterinerInputs>


        <ConterinerInputs>
            <h1>From</h1>
            <Input
              type="text"
              name="from"
              value={campanha?.from || ''}
              onChange={handleInputChange}
            />
          <span>{campanhaData?.from[0] &&  campanhaData?.from[0] }</span>
        </ConterinerInputs>

        <ConterinerInputs>
            <h1>Titulo</h1>
            <Input
              type="text"
              name="titulo"
              value={campanha?.titulo || ''}
              onChange={handleInputChange}
            />
        <span>{campanhaData?.titulo[0] &&  campanhaData?.titulo[0] }</span>
        </ConterinerInputs>
        {id ?
        <Button type="button" onClick={()=>handleSubmitUpdate(id)}>Atualizar</Button>
        :  
        <Button type="button" onClick={handleSubmit}>Inserir</Button>
        }
      </FormContainer>
     );
}

