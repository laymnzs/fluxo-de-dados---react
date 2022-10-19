import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {
  console.log("postagem", props);
  return (
    <ContainerPostagem>
      <TitleHeader>{props.cadastro.titulo}</TitleHeader>
      <Image src={props.cadastro.imagem} />
      <Description>{props.cadastro.descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
