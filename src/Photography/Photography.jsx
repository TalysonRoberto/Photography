import React, { useEffect } from 'react';
import './Photography.css';
import Lista from '../Lista/Lista';
import ShowPhoto from '../ShowPhoto/ShowPhoto';

const Photography = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [photogra, setPhoto] = React.useState([]);
  const [selecionado, setSelecionado] = React.useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}dataPhoto.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao carregar projetos');
        return res.json();
      })
      .then((data) => setPhoto(data))
      .catch((error) => console.error(error));
  }, []);

  const handleMouseEnter = (item) => {
    setSelecionado(item);
    setAtivo(true);
  };

  const handleMouseLeave = (item) => {
    setAtivo(false);
  };

  return (
    <div className="contentPhoto">
      <span className="title">PHOTOGRAPHY</span>
      {ativo && <ShowPhoto photogra={selecionado} />}
      {photogra.map((item) => (
        <Lista
          key={item.id}
          id={item.id}
          nome={item.nome}
          imagem={item.photo}
          data={item.data}
          hora={item.hora}
          tamanho={item.tamanho}
          formato={item.formato}
          ativar={setAtivo}
          ativo={ativo}
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={() => handleMouseLeave(item)}
        />
      ))}
    </div>
  );
};

export default Photography;
