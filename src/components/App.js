import React, {useState} from "react";
import Nav from "./Nav";
import Hogs from "./Hogs";
import Sort from "./Sort";
import hogs from "../porkers_data";
import Filter from "./Filter";

function App() {
	const [hogsToDisplay, setHogsToDisplay] = useState(hogs);
	// create an array of only greased hogs
	const greasedHogs = hogs.filter((hog => {
		return hog.greased === true;
	}))

	// sort hogs by name
		// create copy of hogs so original does not get mutated
		// const hogArr = structuredClone(hogs);
		// console.log(hogArr);
	const sortedByName = [...hogs].sort((a,b) => {
		return a.name.localeCompare(b.name);
	});
	const sortedByWeight = [...hogs].sort((a,b) => {
		return a.weight - b.weight;
	});

	function sortHogsByName() {

		setHogsToDisplay(sortedByName);
		console.log(sortedByName);
	}

	function sortHogsByWeight() {
		setHogsToDisplay(sortedByWeight);
	}

	// filter hogs for ones that are greased
	function filterHogs(e) {
		if (e.target.value === "Greased Hogs") {
			setHogsToDisplay(greasedHogs);
		}
		else {
			setHogsToDisplay(hogs);
		}
	}

	return (
		<div className="App">
			<Nav />
			<Filter onFilter={filterHogs}/>
			<Sort onNameClick={sortHogsByName} onWeightClick={sortHogsByWeight}/>
			<Hogs hogs={hogsToDisplay} />
		</div>
	);
}

export default App;
