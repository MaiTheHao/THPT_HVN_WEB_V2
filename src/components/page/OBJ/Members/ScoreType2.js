import React, { useContext } from "react";
import { ScoreBoardContext } from "./ScoreBoard";
import { score_all } from "./fakeData";

function ScoreType2() {
	const { subjects, checkScore } = useContext(ScoreBoardContext);
	return (
		<>
			{Object.entries(subjects).map((sub, index) => (
				<tr key={`scoreBoard_row_${index}`}>
					<td className="subject">{sub[1]}</td>
					<td className="HK1-score" style={{backgroundColor: checkScore(score_all[sub[0]][0])}}>{score_all[sub[0]][0]}</td>
					<td className="HK2-score" style={{backgroundColor: checkScore(score_all[sub[0]][1])}}>{score_all[sub[0]][1]}</td>
					<td className="CN-score" style={{backgroundColor: checkScore(score_all[sub[0]][2])}}>{score_all[sub[0]][2]}</td>
				</tr>
			))}
		</>
	);
}

export default ScoreType2;
