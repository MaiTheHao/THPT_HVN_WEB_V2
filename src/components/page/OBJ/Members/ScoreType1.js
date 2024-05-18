import React, { useContext } from "react";
import { ScoreBoardContext } from "./ScoreBoard";
import { score } from "./fakeData";

function ScoreType1() {
    const {subjects, checkScore, hk} = useContext(ScoreBoardContext);
	return (
		<>
			{Object.entries(subjects).map((sub, index) => (
				<tr key={`scoreBoard_row_${index}`}>
					<td className="subject">{sub[1]}</td>
					<td className="TX-score" >{score[hk][sub[0]].TX.map((score, index) => <span key={`scoreBoard_row_inner_${index}`} style={{color: checkScore(score)}}>{score}</span>)}</td>
					<td className="GK-score" style={{backgroundColor: checkScore(score[hk][sub[0]].GK)}}>{score[hk][sub[0]].GK}</td>
					<td className="CK-score" style={{backgroundColor: checkScore(score[hk][sub[0]].CK)}}>{score[hk][sub[0]].CK}</td>
					<td className="DTBHK-score" style={{backgroundColor: checkScore(score[hk][sub[0]].DTBHK)}}>{score[hk][sub[0]].DTBHK}</td>
				</tr>
			))}
		</>
	);
}

export default ScoreType1;
