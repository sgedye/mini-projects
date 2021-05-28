export const FilterButtons: React.FC<{}> = (props: any) => {
  // const setSelector = e => {
  //   e.preventDefault()
  //   console.log(e.target)
  //   props.setSelector('id')
  // }

  // const buttons = document.querySelectorAll("#btn-filters")
  // console.log(buttons)
  // buttons.forEach(button => {
  //   button.addEventListener('click', e => setSelector)
  // })
  // console.log('buttons', buttons)

  return (
    <div id="filter-buttons" className="row">
      <div id="btn-filters" className="">
        <a
          id="all"
          href=" "
          className="filter-btn active"
          onClick={(e) => props.handleClick}
          data-filter="all"
        >
          All
        </a>
        <a
          id="react"
          href=" "
          className="filter-btn"
          onClick={(e) => props.handleClick}
          data-filter="reactjs"
        >
          React
        </a>
        {/* <a id="javascript" href=" " className="filter-btn" onClick={e => setSelector} data-filter="javascript">JavaScript</a>
        <a id="typescript" href=" " className="filter-btn" onClick={e => setSelector} data-filter="typescript">TypeScript</a>
        <a id="html+css" href=" " className="filter-btn" onClick={e => setSelector} data-filter="html css">HTML+CSS</a>
        <a id="api" href=" " className="filter-btn" onClick={e => setSelector} data-filter="api">API</a>
        <a id="jquery" href=" " className="filter-btn" onClick={e => setSelector} data-filter="jquery">jQuery</a>
        <a id="bootstrap" href=" " className="filter-btn" onClick={e => setSelector} data-filter="bootstrap">Bootstrap</a>
        <a id="scss" href=" " className="filter-btn" onClick={e => setSelector} data-filter="scss">SASS/SCSS</a>
        <a id="styled" href=" " className="filter-btn" onClick={e => setSelector} data-filter="styled components">Styled Components</a> */}
      </div>
    </div>
  );
};
