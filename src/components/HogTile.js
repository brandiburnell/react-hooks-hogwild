import React from "react";
import hogs from "../porkers_data";
import { getNodeText } from "@testing-library/react";

function HogTile({hog}) {
    return (
        <div className="pigTile">
            <h3>{hog.name}</h3>
            <img width={250} src={hog.image} alt="hog image"></img>
            <div>
                <p>Specialty: {hog.specialty}</p>
                <p>Weight: {hog.weight}</p>
                <p>Greased: {hog.greased}</p>
                <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
            </div>
        </div>
    )
}

export default HogTile;