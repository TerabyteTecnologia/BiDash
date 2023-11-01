// src/components/Tabela.tsx

import React from 'react';
import LinhaTabela from './LinnhaTableHistoricCampanha';
import { HistoricCampanhaProps } from '../interface';
import { TransactionsTable } from '../styles';

interface Props {
  dados: HistoricCampanhaProps[]; // Array de dados a serem exibidos na tabela
  onEditar: (index: number) => void; // Função a ser chamada quando o botão de editar for clicado
  onEmail: (index: number) => void; // Função a ser chamada quando o botão de editar for clicado
}

const Tabela: React.FC<Props> = ({ dados, onEditar,onEmail }) => {
  return (
    <TransactionsTable>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Mensagem</th>
          <th>from</th>
          <th>titulo</th>
          <th>date</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item, index) => (
          <LinhaTabela
            key={index}
            dados={item}
            onEditar={() => onEditar(item?.id ? item.id : 0)}
            onEmail={() => onEmail(item?.id?item.id:0)}
          />
        ))}
      </tbody>
    </TransactionsTable>
  );
}

export default Tabela;
