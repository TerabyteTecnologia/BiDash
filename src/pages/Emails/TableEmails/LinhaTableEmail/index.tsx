// src/components/LinhaTabela.tsx

import React from 'react';
import { HistoricEmailProps } from '../../interface';
import { ButtonTable } from '../../styles';


interface Props {
  dados: HistoricEmailProps; // Tipo dos dados que você irá exibir
  onEditar: () => void; // Função a ser chamada quando o botão de editar for clicado
  onDeletar: () => void; // Função a ser chamada quando o botão de editar for clicado
}

const LinhaTabela: React.FC<Props> = ({ dados, onEditar,onDeletar }) => {
  return (
    <tr>
      <td>{dados.nome}</td>
      <td>{dados.email}</td>
      <td>
        <ButtonTable onClick={onEditar}>Editar</ButtonTable>
      </td>
     
      <td>
        <ButtonTable onClick={onDeletar}>Delete</ButtonTable>
      </td>
    </tr>
  );
}

export default LinhaTabela;
