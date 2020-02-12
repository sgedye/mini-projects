import styled from 'styled-components'

export default styled.div`
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