import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { createContext, useState } from "react";

import { score_all } from "../fakeData";
import ScoreType1 from "./ScoreType1";
import ScoreType2 from "./ScoreType2";

export const ScoreBoardContext = createContext();

function ScoreBoard() {
	const [hk, setHK] = useState("HK1"); // Initial state

	const handleSelectChange = (event) => {
		setHK(event.target.value);
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
					<div id="choseTable">
						<select className="selectR" name="field" value={hk} onChange={handleSelectChange}>
							<option value="HK1">Học kỳ 1</option>
							<option value="HK2">Học kỳ 2</option>
							<option value="ALL">Cả năm</option>
						</select>
						<FontAwesomeIcon icon={faBars} />
					</div>
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
						<ScoreType2/>
						</tbody>
					</table>
				)}
			</ScoreBoardContext.Provider>
		</div>
	);
}

export default ScoreBoard;
