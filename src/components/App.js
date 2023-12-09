import React, {useState} from "react";
import Nav from "./Nav";
import Hogs from "./Hogs";

import hogs from "../porkers_data";
import Filter from "./Filter";

function App() {
	const [filteredHogs, setFilteredHogs] = useState(hogs);

	// create an array of only greased hogs
	const greasedHogs = hogs.filter((hog => {
		return hog.greased === true;
	}))

	// filter hogs for ones that are greased
	function filterHogs(e) {
		if (e.target.value === "Greased Hogs") {
			setFilteredHogs(greasedHogs);
		}
		else {
			setFilteredHogs(hogs);
		}
	}

	return (
		<div className="App">
			<Nav />
			<Filter onFilter={filterHogs}/>
			<Hogs hogs={filteredHogs} />
		</div>
	);
}

export default App;
