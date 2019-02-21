import React from "react";
import "./CellNote.css";

const CellNote = () =>
{   return (
        <div className="CellNote">
            { props.value }
        </div>
    )
}

export default CellNote;