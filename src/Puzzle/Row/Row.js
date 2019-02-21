// <Row> is a simple component that displays 3 cells in a row inside the <Region> component.  I need
// it to use a flex box to arrange and size the cells.  Now that it's written I'm thinking I might need
// it to arrange and display <Region> inside the <Puzzle> and <CellNotes> inside a <Cell>.  <Row> is
// pretty simple and already generic, so I should be able to do that with little problem.

import React from "react";

import "./Row.css";

const row = (props) =>
{   return (
        <div className="Row">{ props.children }</div>
    )
}

export default row;