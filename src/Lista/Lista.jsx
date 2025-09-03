import React from 'react';
import './Lista.css';

const Lista = ({
  id,
  nome,
  imagem,
  data,
  hora,
  tamanho,
  formato,
  ativo,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="lista">
        <div className="descrição">{id}</div>
        <div className="descrição">{nome}</div>
        <div className="descrição">{data}</div>
        <div className="descrição">{hora}</div>
        <div className="descrição">{tamanho}</div>
        <div className="descrição">{formato}</div>
      </div>
    </div>
  );
};

export default Lista;
