import React from 'react'

function FilterButtons() {
  return (
    <div id="filter-buttons" className="row">
      <div id="btn-filters" className="">
        <a id="all" href=" " className="filter-btn active" data-filter="all">All</a>
        <a id="react" href=" " className="filter-btn" data-filter="reactjs">React</a>
        <a id="javascript" href=" " className="filter-btn" data-filter="javascript">JavaScript</a>
        <a id="typescript" href=" " className="filter-btn" data-filter="typescript">TypeScript</a>
        <a id="html+css" href=" " className="filter-btn" data-filter="html css">HTML+CSS</a>
        <a id="api" href=" " className="filter-btn" data-filter="api">API</a>
        <a id="jquery" href=" " className="filter-btn" data-filter="jquery">jQuery</a>
        <a id="bootstrap" href=" " className="filter-btn" data-filter="bootstrap">Bootstrap</a>
        <a id="scss" href=" " className="filter-btn" data-filter="scss">SASS/SCSS</a>
        <a id="styled" href=" " className="filter-btn" data-filter="styled components">Styled Components</a>
      </div>
    </div>
  )
}

export default FilterButtons
