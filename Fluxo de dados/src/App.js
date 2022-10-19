import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaPostagem/TelaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0;
    box-sizing: border-box;
    
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [login, setLogin] = useState("");
  const [cadastro, setCadastro] = useState("");

  console.log(cadastro);

  const [pageFlow, setPageFlow] = useState(1);
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header login={login} />
          {pageFlow === 1 ? (
            <FormularioLogin
              setPageFlow={setPageFlow}
              login={login}
              setLogin={setLogin}
            />
          ) : (
            <FormularioPostagem setCadastro={setCadastro} />
          )}
        </aside>
        <TelaDaPostagem cadastro={cadastro} />
      </Container>
    </>
  );
}

export default App;
