import styled from "styled-components";
import "../styles/animate.css";

export const Header: React.FC<{}> = () => {
  return (
    <StyledHeader>
      <h1>Mini Projects</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  h1 {
    text-shadow: 4px 5px 2px #000000;
    -webkit-animation: heartBeat 1200ms 200ms;
    -moz-animation: heartBeat 1200ms 200ms;
    -ms-animation: heartBeat 1200ms 200ms;
    -o-animation: heartBeat 1200ms 200ms;
    animation: heartBeat 1200ms 200ms;
  }
`;
