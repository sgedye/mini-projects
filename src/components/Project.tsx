import styled from "styled-components";

interface ProjectProps {
  id: number;
  address: string | string[];
  onGitHub: boolean;
  img: string;
  title: string;
  alt: string;
  desc: string;
}

export const Project: React.FC<ProjectProps> = ({
  id,
  address,
  alt,
  desc,
  img,
  onGitHub,
  title,
}) => {
  const PROJECT_ID = `project-${id}`;
  const CODE_ADDR = onGitHub
    ? `https://github.com/sgedye/${address}`
    : `https://github.com/sgedye/${address[0]}`;
  const DEMO_ADDR = onGitHub
    ? `https://sgedye.github.io/${address}`
    : address[1];

  return (
    <StyledDiv id={PROJECT_ID}>
      <Image src={img} alt={alt} />
      <Description>
        <Title>{title}</Title>
        <Hr />
        <Desc>{desc}</Desc>
        <span>
          <a href={CODE_ADDR} target="_blank" rel="noopener noreferrer">
            <Button isDemo={false}>CODE</Button>
          </a>
          <a href={DEMO_ADDR} target="_blank" rel="noopener noreferrer">
            <Button isDemo={true}>DEMO</Button>
          </a>
        </span>
      </Description>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  position: relative;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const Description = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 10;
  text-align: center;
  &:hover {
    opacity: 0.85;
    background-color: lightblue;
    -webkit-transition: background-color 700ms linear;
    -moz-transition: background-color 700ms linear;
    -ms-transition: background-color 700ms linear;
    -o-transition: background-color 700ms linear;
    transition: background-color 700ms linear;
    h3 {
      -webkit-animation: bounceInDown 0.8s;
      -moz-animation: bounceInDown 0.8s;
      -ms-animation: bounceInDown 0.8s;
      -o-animation: bounceInDown 0.8s;
      animation: bounceInDown 0.8s;
    }
    hr {
      opacity: 0.75;
      -webkit-animation: slideInLeft 1s;
      -moz-animation: slideInLeft 1s;
      -ms-animation: slideInLeft 1s;
      -o-animation: slideInLeft 1s;
      animation: slideInLeft 1s;
    }
    p {
      -webkit-animation: slideInRight 1s;
      -moz-animation: slideInRight 1s;
      -ms-animation: slideInRight 1s;
      -o-animation: slideInRight 1s;
      animation: slideInRight 1s;
    }
    button {
      -webkit-animation: zoomIn 1s;
      -moz-animation: zoomIn 1s;
      -ms-animation: zoomIn 1s;
      -o-animation: zoomIn 1s;
      animation: zoomIn 1s;
    }
  }
`;

const Title = styled.h3`
  text-shadow: 1px 1px 1px #fff;
  font-size: 1em;
  margin: 10px 0 0 0;
  @media screen and (min-width: 425px) {
    font-size: 1.25em;
    margin: 15px 0 0 0;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5em;
    margin: 20px 0 0 0;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.6em;
  }
  @media screen and (min-width: 1440px) {
    font-size: 2em;
    margin: 40px 0 0 0;
  }
  @media screen and (min-width: 2560px) {
    font-size: 4em;
    margin: 60px 0 0 0;
  }
`;

const Hr = styled.hr`
  border-width: 1px;
  border-color: black;
  opacity: 0%;
  width: 80%;
`;

const Desc = styled.p`
  text-shadow: 1px 1px 1px #fff;
  font-size: 0.7em;
  font-weight: 400;
  margin: 8px 0;
  @media screen and (min-width: 425px) {
    font-size: 0.85em;
    font-weight: 450;
    margin: 10px 0;
  }
  @media screen and (min-width: 768px) {
    font-size: 1em;
    font-weight: 500;
    margin: 15px 0;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 1440px) {
    font-size: 1.2em;
    margin: 20px 0;
  }
  @media screen and (min-width: 2560px) {
    font-size: 2.8em;
    margin: 40px 0;
  }
`;

const Button = styled.button<{ isDemo: boolean }>`
  color: #ccc;
  font-weight: bold;
  background: ${(p) => (p.isDemo ? "blue" : "green")};
  border: ${(p) => (p.isDemo ? "1px solid darkblue" : "1px solid darkgreen")};
  border-radius: 4px;
  box-shadow: 1px 1px 3px #111;
  &:hover {
    cursor: pointer;
    color: #fff;
    box-shadow: none;
    transform: translate(1px, 1px);
    -webkit-transform: translate(1px, 1px);
  }
  font-size: 0.7em;
  padding: 3px 8px;
  margin: 0px 5px;
  @media screen and (min-width: 768px) {
    font-size: 1em;
    padding: 5px 10px;
    margin: 10px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.1em;
    margin-top: 5px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 2560px) {
    font-size: 3em;
    margin: 0 20px;
  }
`;
