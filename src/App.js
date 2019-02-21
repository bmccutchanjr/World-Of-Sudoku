import React, { Component } from 'react';

import './App.css';
import Puzzle from "./Puzzle/Puzzle.js";

const initCells = () =>
{   
    // console.log("initCells()");
    const regions = [];
    const cells = [];

    for (let i=0; i<9; i++)
    {   // Create an array of values from one to nine, representing each cell in a region    
        cells[i] = i+1;
    }

    for (let i=0; i<9; i++)
    {   // Now create another array representing each 3x3 region in the puzzle.  Each element
        // of this array is a COPY of the cells array.

        regions[i] = cells.slice();
    }

    return regions;
}

class App extends Component
{   state =
    {   cells:   []
    }

    componentDidMount = () =>
    {
        const array = initCells ();
        this.setState ( { cells: array } )
    }

    render()
    {
        // console.log (this.state.cells);
        return (
            <Puzzle
                cells={ this.state.cells }
            />
        );
    }
}

export default App;
