import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./MainComponent.scss";

function Search({moreFilter}) {
	const years = Array.from({ length: new Date().getFullYear() - 2000 + 1 }, (_, i) => 2000 + i);

	const handleSubmit = (e) => {};
	return (
		<div id="searchObjForm">
			<div className="header">
				<form onSubmit={handleSubmit}>
					<div>
						<input type="text" placeholder="Tìm kiếm"></input>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</div>
				</form>
				<button className="filter">Lọc Tìm Kiếm</button>
				<div className="filterPannel">
					<span>Năm học</span>
					<div className="filterChoice">
						<select className="scrollY">
							{years.reverse().map((year) => (
								<option value={year}>{year}</option>
							))}
						</select>
					</div>
					{moreFilter}
				</div>
			</div>
			<div className="body">
				<Link className="searchResult"></Link>
			</div>
		</div>
	);
}

function Info() {
	return <div id="infoObjForm">DOCUMENT</div>;
}

export { Search, Info };
