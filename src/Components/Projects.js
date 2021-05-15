import React from "react";
// import { useState, useEffect } from 'react';
import styled from "styled-components";
import "../styles/animate.css";
import Project from "./Project";
import ProjectData from "../data/project-data";

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
        {ProjectData
          // .filter(project => project.desc.toLowerCase().split(', ').includes(selection) || selection === 'all')
          .map(({ title, img, alt, desc, onGitHub, address }, idx) => (
            <Project
              key={idx}
              title={title}
              img={img}
              alt={alt}
              desc={desc}
              onGitHub={onGitHub}
              address={address}
            />
          ))}
      </StyledGrid>
    </>
  );
}

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
