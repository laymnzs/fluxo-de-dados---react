import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");

  const onChangeTitulo = (event) => {
    console.log(event.target.value);
    setTitulo(event.target.value);
  };
  const onChangeImagem = (event) => {
    console.log(event.target.value);

    setImagem(event.target.value);
  };
  const onChangeDescricao = (event) => {
    console.log(event.target.value);

    setDescricao(event.target.value);
  };

  const enviarDados = () => {
    const novoCadastro = {
      titulo,
      imagem,
      descricao
    };
    console.log("cadastro", novoCadastro);
    props.setCadastro(novoCadastro);
    setTitulo("");
    setImagem("");
    setDescricao("");
  };

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={titulo} onChange={onChangeTitulo} />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={imagem} onChange={onChangeImagem} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input
            id="descricao"
            value={descricao}
            onChange={onChangeDescricao}
          />
        </StyledLabel>
        <SendButton onClick={enviarDados}>Enviar</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
