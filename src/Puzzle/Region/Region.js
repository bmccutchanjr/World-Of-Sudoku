import React from "react";

import "./Region.css";
import Cell from "./Cell/Cell.js";
import Row from "../Row/Row.js";

const assignClass = (index) =>
{   // This function applies a lightgray background to every other Region

    if (index % 2 === 0) return "Region";

    return "Region Region-gray";
}

const region = (props) =>
{   // A Region is a 3x3 arrangement of cells.  But to get it to display properly on the screen I need
    // an intermediary component, a row of 3 cells.
    
// console.log ("Region");
// console.log ("props: ", props);
    const rows = [];
    rows.push (props.array.filter((_, i) =>
    {   return i<3;
    }))
    rows.push (props.array.filter((_, i) =>
    {   return i>2 && i<6;
    }))
    rows.push (props.array.filter((_, i) =>
    {   return i>5;
    }))
// console.log (rows);

    const classList = assignClass (props.index);

    return (
        <div className={ classList } >
            <Row className="Row">
                { rows[0].map (value => ( <Cell value={ value } /> ) ) }
            </Row>
            <Row className="Row">
                { rows[1].map (value => ( <Cell value={ value } /> ) ) }
            </Row>
            <Row className="Row">
                { rows[2].map (value => ( <Cell value={ value } /> ) ) }
            </Row>
        </div>
    )
}

export default region;