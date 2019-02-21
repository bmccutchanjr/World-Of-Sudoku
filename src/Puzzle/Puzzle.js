import React from "react";

import "./Puzzle.css";

import Region from "./Region/Region.js";

const makeRegion = (cells) =>
{   // Each region is a 3x3 arrangment of 9 cells.  There are nine such reions in the puzzle passed to
    // this component as a two dimensional array.  I need all of them to render Puzzle, but only one
    // for each Region.
// console.log ("makeRegion()");
// console.log ("cells: ", cells);
    const array = [];
    cells.forEach ((row, i) =>
    {  
// console.log ("Row ", i)
            array.push(<Region array={ row } index={ i }></Region>);
    })

// console.log ("array: ", array);
    return array;
}

const puzzle = (props) =>
{   
// console.log ("Puzzle");
// console.log (props.cells);
    return (
        <div className="Puzzle">
            { makeRegion (props.cells) }
        </div>
    )
}

export default puzzle;