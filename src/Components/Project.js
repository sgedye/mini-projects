import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  position: relative;
`
const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`
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
      -MS-animation: bounceInDown 0.8s;
      -o-animation: bounceInDown 0.8s;
      animation: bounceInDown 0.8s;
    }
    hr {
      opacity: 0.75;
      -webkit-animation: slideInLeft 1s;
      -moz-animation: slideInLeft 1s;
      -MS-animation: slideInLeft 1s;
      -o-animation: slideInLeft 1s;
      animation: slideInLeft 1s;
    }
    p {
      -webkit-animation: slideInRight 1s;
      -moz-animation: slideInRight 1s;
      -MS-animation: slideInRight 1s;
      -o-animation: slideInRight 1s;
      animation: slideInRight 1s;
    }
    button {
      -webkit-animation: zoomIn 1s;
      -moz-animation: zoomIn 1s;
      -MS-animation: zoomIn 1s;
      -o-animation: zoomIn 1s;
      animation: zoomIn 1s;  
    }
  }
`
const Title = styled.h3`
  text-shadow: 1px 1px 1px #fff;
  font-size: 1em;
  margin: 10px 0 0 0;
  @media screen and (min-width: 500px) {
    font-size: 1.5em;
    margin: 20px 0 0 0;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.8em;
    margin: 30px 0 0 0;
  }
  @media screen and (min-width: 1440px) {
    font-size: 2em;
    margin: 40px 0 0 0;
  }
  @media screen and (min-width: 2560px) {
    font-size: 4em;
    margin: 60px 0 0 0;
  }
`
const Hr = styled.hr`
  border-width: 1px;
  border-color: black;
  opacity: 0%;
  width: 80%;
`
const Desc = styled.p`
  text-shadow: 1px 1px 1px #fff;
  font-size: 0.8em;
  font-weight: 400;
  margin: 10px 0;
  @media screen and (min-width: 500px) {
    font-size: 1em;
    font-weight: 500;
    margin: 15px 0;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.1em;
    margin: 18px 0;
  }
  @media screen and (min-width: 1440px) {
    font-size: 1.2em;
    margin: 20px 0;
  }
  @media screen and (min-width: 2560px) {
    font-size: 2.8em;
    margin: 40px 0;
  }
`
const Button = styled.button`
  color: #ccc;
  font-weight: bold;
  background: ${props => props.demo ? 'blue' : 'green'};
  border: ${props => props.demo ? '1px solid darkblue' : '1px solid darkgreen'};
  border-radius: 4px;
  box-shadow: 1px 1px 3px #111;
  &:hover { 
    cursor: pointer;
    color: #fff;
    box-shadow: none;
    transform: translate(1px, 1px);
    -webkit-transform: translate(1px, 1px);
  }
  font-size: 0.8em;
  padding: 3px 8px;
  margin: 0px 5px;
  @media screen and (min-width: 500px) {
    font-size: 1em;
    padding: 5px 10px;
    margin: 10px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 1440px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 2560px) {
    font-size: 3em;
    margin: 0 20px;
  }
`

function Project(props) {  
  const PROJECT_ID = `project-${props.id}`  
  const CODE_ADDR = `https://github.com/sgedye/${props.address}`
  const DEMO_ADDR = `https://sgedye.github.io/${props.address}`
  return (
    <StyledDiv id={PROJECT_ID} >
      <Image src={props.img} alt={props.alt} />
      <Description>
        <Title>{props.title}</Title>
        <Hr />
        <Desc>{props.desc}</Desc>
        <span>
          <a href={CODE_ADDR} target="_blank" rel="noopener noreferrer">
            <Button>CODE</Button>
          </a>
          <a href={DEMO_ADDR} target="_blank" rel="noopener noreferrer">
            <Button demo>DEMO</Button>
          </a>
        </span>
      </Description>
    </StyledDiv>
  )
}

export default Project