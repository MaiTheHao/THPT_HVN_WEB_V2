import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function MemberDoc() {
	return (
		<div id="memberDoc" className="containerBox">
			DOCUMENT
		</div>
	);
}

function MemberSearch() {
    const years = Array.from({ length: new Date().getFullYear() - 2000 + 1 }, (_, i) => 2000 + i);

	function handleSubmit() {}
	return (
		<div id="memberSearch" className="containerBox">
			<div className="header">
				<form>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
					<input type="text" placeholder="Tìm kiếm thành viên/ học sinh"></input>
				</form>
				<div className="filter">
					<span>NĂM</span>
					<select>
						{years.reverse()    .map((year) => <option value={year}>{year}</option>)}
					</select>
				</div>
			</div>
			<div className="body"></div>
		</div>
	);
}

function Member() {
	const [isSearch, setIsSearch] = useState(true);
	return <div id="comp_Member">{isSearch ? <MemberSearch /> : <MemberDoc />}</div>;
}

export default Member;
