import React from 'react';
import './ShowPhoto.css';

const ShowPhoto = ({ photogra }) => {
  if (!photogra) return null; // para evitar erros caso não tenha foto

  const { nome, photo } = photogra;

  return (
    <div className="photo">
      <div
        className="imagem"
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
    </div>
  );
};

export default ShowPhoto;
