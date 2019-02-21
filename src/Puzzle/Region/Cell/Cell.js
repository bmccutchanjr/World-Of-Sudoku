import React from "react";
import "./Cell.css";

// import CellNote from "./CellNote/CellNote.js";

const Cell = (props) =>
{
    return (
        <div className="Cell">{ props.value }</div>
    )
}

export default Cell;