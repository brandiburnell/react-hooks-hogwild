import React from "react";

function Filter({onFilter}) {
    return (
        <div className="filterWrapper">
            <select onChange={onFilter}>
                <option>All Hogs</option>
                <option>Greased Hogs</option>
            </select>
        </div>

    )
}

export default Filter;