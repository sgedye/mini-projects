import styled from "styled-components";
import { Project, FilterButtons } from ".";
import ProjectData from "../data/project-data";

export const Projects: React.FC<{}> = () => {
  // const [selector, setSelector] = useState("all")

  // console.log(selector)
  // useEffect(() => {
  //   // effect
  //   console.log(selector)
  //   return () => {
  //     // cleanup
  //   }
  // }, [selector])

  // const handleSelector = e => {
  //   e.preventDefault()
  //   console.log(e.target, e.target.value)
  //   setSelector('hi')
  // }

  return (
    <>
      {/* <FilterButtons /> */}
      <StyledGrid>
        {ProjectData
          // .filter(project => project.desc.toLowerCase().split(', ').includes(selection) || selection === 'all')
          .map(({ title, img, alt, desc, onGitHub, address }, idx) => (
            <Project
              key={idx}
              id={idx}
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
