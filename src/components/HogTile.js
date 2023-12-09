import React, { useState } from "react";
import hogs from "../porkers_data";
import { getNodeText } from "@testing-library/react";

function HogTile({hog}) {
    const [showDetails, setShowDetails] = useState("none");

    // display hog details when user clicks on hog tile
    function handleClick() {
        return showDetails === "none" ? setShowDetails("") : setShowDetails("none");
    }

    return (
        <div className="pigTile" onClick={handleClick}>
            <h3>{hog.name}</h3>
            <img width={250} src={hog.image} alt="hog image"></img>
            <div className="hog-details" style={{display: showDetails}} >
                <p>Specialty: {hog.specialty}</p>
                <p>Weight: {hog.weight}</p>
                <p>Greased: {hog.greased === true ? "Yes!" : "Not slippery."}</p>
                <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
            </div>
        </div>
    )
}

export default HogTile;