// src/components/LinhaTabela.tsx

import React from 'react';
import { HistoricCampanhaProps } from '../../interface';
import { ButtonTable } from '../../styles';
import { format } from 'date-fns';

interface Props {
  dados: HistoricCampanhaProps; // Tipo dos dados que você irá exibir
  onEditar: () => void; // Função a ser chamada quando o botão de editar for clicado
  onEmail: () => void; 
}

const LinhaTabela: React.FC<Props> = ({ dados, onEditar,onEmail }) => {
  return (
    <tr>
      <td>{dados.nomecampanha}</td>
      <td>{dados.mensagem}</td>
      <td>{dados.from}</td>
      <td>{dados.titulo}</td>
      <td>{format(new Date(dados.date? dados.date:'2023-10-30T18:38:38.000Z'), 'dd/MM/yyyy')}</td>
      <td>
        <ButtonTable onClick={onEditar}>Editar</ButtonTable>
      </td>
      <td>
        <ButtonTable onClick={onEmail}>Emails</ButtonTable>
      </td>
    </tr>
  );
}

export default LinhaTabela;
