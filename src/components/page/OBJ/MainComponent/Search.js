import React, { createContext, useContext, useState } from "react";
import { FilterChoice, FilterChoiceOption } from "./Filter";
import Form from "./Form";
import { Link } from "react-router-dom";
import HVNBANNER from "../../../../pic/HVN_banner-trs.jpg";
import "./MainComponent.scss";
export const SearchObjContext = createContext();

const ContainerResult = ({ results }) => {
	return (
		<div className="container-result scrollY">
			{results.map((obj, index) => (
				<SearchResult key={index} obj={obj} />
			))}
		</div>
	);
};

const SearchResult = ({ avatar, obj }) => {
	const { handleData } = useContext(SearchObjContext);
	return (
		<Link onClick={() => handleData(obj)} className="searchResult">
			<div className="box-img">
				<img src={avatar || HVNBANNER} alt="OBJ AVATAR"></img>
			</div>
			<div className="box-text">
				<h5 className="Name-Type">
					{obj?.name} - {obj?.type}
				</h5>
				<ul className="OtherProps">
					{obj?.role ? <li className="obj-role">{obj.role}</li> : null}
					{obj?.class ? <li className="obj-class">{obj.class}</li> : null}
				</ul>
			</div>
		</Link>
	);
};

const ConfirmFilter = () => {
	const listBtn = [
		{
			className: "unacceptFilter",
			text: "Hủy",
		},
		{
			className: "acceptFilter",
			text: "Lọc",
		},
	];

	const confirmBtnClassName = "confirmFilter";

	return (
		<div className="contain_acceptFilter">
			{listBtn.map((btn) => (
				<button key={btn.className} className={`${btn.className} ${confirmBtnClassName}`}>
					{btn.text}
				</button>
			))}
		</div>
	);
};

const FilterPannel = ({ isFil }) => {
	const { filter_children, listYearAcceptable } = useContext(SearchObjContext);
	return (
		<div id="filterPannel" style={{ display: isFil ? "flex" : "none" }}>
			<FilterChoice title="Năm học">
				<FilterChoiceOption title="Năm học">
					<select className="scrollY">
						{listYearAcceptable.reverse().map((year) => (
							<option key={year} value={year}>
								{year}
							</option>
						))}
					</select>
				</FilterChoiceOption>
			</FilterChoice>
			{filter_children}
			<ConfirmFilter />
		</div>
	);
};

function Search({ apiData, handleData, filter_children }) {
	const [isFil, setIsFil] = useState(false);
	const [results, setResults] = useState([]);
	const listYearAcceptable = Array.from({ length: new Date().getFullYear() - 2000 + 1 }, (_, i) => 2000 + i);

	return (
		<SearchObjContext.Provider
			value={{ results, setResults, handleData, filter_children, listYearAcceptable }}
		>
			<div id="searchObjForm">
				<div className="header">
					<Form apiData={apiData} />
					<button className="filter" onClick={() => setIsFil(!isFil)}>
						Lọc Tìm Kiếm
					</button>
					<FilterPannel isFil={isFil} />
				</div>
				<div className="body">{results.length > 0 ? <ContainerResult results={results} /> : null}</div>
			</div>
		</SearchObjContext.Provider>
	);
}

export default React.memo(Search);
