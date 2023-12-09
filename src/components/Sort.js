import React from "react";

function Sort({onNameClick, onWeightClick}) {
    return (
        <div className="sortWrapper">
            <button onClick={onNameClick}>Sort by Name</button>
            <button onClick={onWeightClick}>Sort by Weight</button>
        </div>

    )
}

export default Sort;