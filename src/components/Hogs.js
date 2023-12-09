import React from "react";
import HogTile from "./HogTile";

function HogTiles({hogs}) {

    const hogCards = hogs.map((hog) => {
        return <HogTile key={hog.name} hog={hog} />;
    })
    console.log(hogs);
    return (
        <div className="ui grid container">
            {hogCards}
        </div>  
    )
}

export default HogTiles;