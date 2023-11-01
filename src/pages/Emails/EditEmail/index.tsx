import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HistoricEmailProps } from "../interface";
import { getEmail, storeEmail, updateEmail } from "../../../services/global/endPoints";
import { Button, ConterinerInputs, FormContainer, Input } from "./styles";
import { useNavigate } from 'react-router-dom';
import { useToast } from "../../../hooks/useToast";


export  function  Email() {
  const navigate = useNavigate();
     const { toast } = useToast();
    const { id } = useParams();
    const { idcampanha } = useParams();
    const [emailSate,setEmailSate] = useState<HistoricEmailProps>()
    const [emailData,setEmailData] = useState<any>()
    const buscaEmail = async(id:string) => {
        const idInt = parseInt(id)
        const emailStatic = await getEmail(idInt);
        console.log("emailStatic",emailStatic)
        setEmailSate(emailStatic.data.email)
    }
    useEffect(()=>{
   
      if(id){
        console.log("idNoraml################################",id)
        buscaEmail(id).catch(err => {console.log(err)})
      }else{
        console.log("idcampanha################################",idcampanha)
        setEmailSate({...emailData,campanha_id:idcampanha})
      }
    },[])

    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEmailSate({ ...emailSate, [name]: value });
    };
 

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(emailSate){
         console.log(emailSate)
         const emailError = await storeEmail(emailSate).catch(err => {console.log(err)})
         
         console.log(emailError?.data?.error)
         //@ts-ignore
         if(emailError?.data.error){
           setEmailData(emailError?.data.error)
          }
          if(emailError?.data.success){
            toast.success("Camanha Cadastrada");
    
            navigate(`/emails/${emailSate?.campanha_id}`);
          }
         }
    }

    const handleSubmitUpdate = async (id:string) => {
      
      if(emailSate){
        const idNumber = parseInt(id);
       const emailError = await updateEmail(emailSate,idNumber).catch(err => {console.log(err)})
       
       console.log(emailError?.data?.error)
       //@ts-ignore
       if(emailError?.data.error){
         setEmailData(emailError?.data.error)
        }
        if(emailError?.data.success){
          toast.success("Camanha Atualizada");
          navigate(`/emails/${emailSate?.campanha_id}`);
        }
       }
  }
   
    return ( 
      <FormContainer>
        <ConterinerInputs>
            <h1>Nome</h1>
            <Input
              type="text"
              name="nome"
              value={emailSate?.nome || ''}
              onChange={handleInputChange}
            />
          <span>{emailData?.nome[0] &&  emailData?.nome[0] }</span>
        </ConterinerInputs>

        


        <ConterinerInputs>
            <h1>Email</h1>
            <Input
              type="email"
              name="email"
              value={emailSate?.email || ''}
              onChange={handleInputChange}
            />
          <span>{emailData?.email[0] &&  emailData?.email[0] }</span>
        </ConterinerInputs>

      
        {id ?
        <Button type="button" onClick={()=>handleSubmitUpdate(id)}>Atualizar</Button>
        :  
        <Button type="button" onClick={handleSubmit}>Inserir</Button>
        }
      </FormContainer>
     );
}

