// src/components/Tabela.tsx

import React from 'react';
import LinhaTabela from './LinhaTableEmail';
import { HistoricEmailProps } from '../interface';
import { TransactionsTable } from '../styles';

interface Props {
  dados: HistoricEmailProps[]; // Array de dados a serem exibidos na tabela
  onEditar: (index: number) => void; // Função a ser chamada quando o botão de editar for clicado
  onDeletar: (index: number) => void; // Função a ser chamada quando o botão de editar for clicado
}

const Tabela: React.FC<Props> = ({ dados, onEditar,onDeletar }) => {
  return (
    <TransactionsTable>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Ações</th>
        </tr>

      </thead>
      <tbody>
        {dados.map((item, index) => (
          <LinhaTabela
            key={index}
            dados={item}
            onEditar={() => onEditar(item?.id ? item.id : 0)}
            onDeletar={() => onDeletar(item?.id?item.id:0)}
          />
        ))}
      </tbody>
    </TransactionsTable>
  );
}

export default Tabela;
