import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { createContext, useState } from "react";

import ScoreType1 from "./ScoreType1";
import ScoreType2 from "./ScoreType2";
import Tippy from "@tippyjs/react/headless";

export const ScoreBoardContext = createContext();

function ScoreBoard() {
	const [hk, setHK] = useState("HK1"); // Initial state
	const [filter, setFilter] = useState({visible: false, text: "Chọn học kì"});
	const handleFilter = (type, value, selectedHK) => {
		setFilter((prev) => ({...prev, [type]: value}));
		if(type === "text"){
			setHK(selectedHK);
			handleFilter("visible", false);
		}
	};

	const checkScore = (score) => {
		if (score < 5) {
			return "red";
		} else if (score === 10) {
			return "#00ff00";
		} else {
			return "";
		}
	};

	const subjects = {
		toan: "Toán học",
		li: "Vật lí",
		hoa: "Hóa học",
		sinh: "Sinh học",
		tin: "Tin học",
		van: "Ngữ văn",
		su: "Lịch sử",
		dia: "Địa lí",
		anh: "Ngoại ngữ",
		gdcd: "GDCD",
		cn: "Công nghệ",
		td: "Thể dục",
		gdqp: "GDQP và an ninh",
	};

	return (
		<div id="userScoreBoard" className="userAdvancedTable1 scrollY">
			<h5>BẢNG ĐIỂM CỦA HỌC SINH</h5>
			<ScoreBoardContext.Provider value={{ checkScore, subjects, hk }}>
				<div id="lableChoseTable">
					<Tippy
					interactive
						visible={filter.visible}
						render={(attrs) => (
							<div id="list_HK">
								<span onClick={(e) => handleFilter("text", e.currentTarget.innerText, "HK1")} value="HK1">Học kỳ 1</span>
								<span onClick={(e) => handleFilter("text", e.currentTarget.innerText, "HK2")} value="HK2">Học kỳ 2</span>
								<span onClick={(e) => handleFilter("text", e.currentTarget.innerText, "ALL")} value="ALL">Cả năm</span>
							</div>
						)}
					>
						<button id="choseTable" onClick={() => handleFilter("visible", true)}>
							{filter.text}
							<FontAwesomeIcon icon={faBars} />
						</button>
					</Tippy>
				</div>

				{hk !== "ALL" ? (
					<table>
						<thead>
							<tr>
								<th id="scoreBoard-subject">Môn học</th>

								<th id="TX">Thường xuyên</th>
								<th id="GK">Giữa kỳ</th>
								<th id="CK">Cuối kỳ</th>
								<th id="DTBHK">ĐTB học kỳ</th>
							</tr>
						</thead>

						<tbody>
							<ScoreType1 />
						</tbody>
					</table>
				) : (
					<table>
						<thead>
							<tr>
								<th id="scoreBoard-subject">Môn học</th>
								<th id="HK1">Học kỳ 1</th>
								<th id="HK2">Học kỳ 2</th>
								<th id="CN">Cả năm</th>
							</tr>
						</thead>
						<tbody>
							<ScoreType2 />
						</tbody>
					</table>
				)}
			</ScoreBoardContext.Provider>
		</div>
	);
}

export default ScoreBoard;
