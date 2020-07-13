import React from 'react';
// import { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../styles/animate.css';
import Project from './Project';
import ProjectData from '../data/project-data';

// import FilterButtons from './FilterButtons';


function Projects() {

  // let [selection, setSelection] = useState("all")
  // const [refresh, setRefresh] = useState(false)
  
  // useEffect(() => {
  //   setSelection("react")
  // }, [selection])

  // function changeSelection(e) {
  //   e.preventDefault()
  //   console.log(e.target.value)
  //   console.log('hi')
  //   console.log(selection)
  //   setSelection('javascript')
  // }
  return (
    <>
      {/* <button onClick={(e) => changeSelection(e)}>hi</button>
      <FilterButtons /> */}
      <StyledGrid>
        {
          ProjectData
            // .filter(project => project.desc.toLowerCase().split(', ').includes(selection) || selection === 'all')
            .map(project => <Project key={project.id} title={project.title} img={project.img} alt={project.alt} desc={project.desc} onGitHub={project.onGitHub} address={project.address} />)
        }
      </StyledGrid>
    </>
  );
};

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (min-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default Projects;