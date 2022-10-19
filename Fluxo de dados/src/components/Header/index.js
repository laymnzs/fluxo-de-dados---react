import { TitleHeader } from "./styled";
import styled from "styled-components";
const DivLogin = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50px;
`;
export const Header = (props) => {
  console.log(props);
  return (
    <TitleHeader>
      <DivLogin>
        <Image src={props.login.foto} />
        <p>{props.login.nome}</p>
      </DivLogin>
      LabeGram ❤
    </TitleHeader>
  );
};
