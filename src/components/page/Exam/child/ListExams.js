import React from "react";
import YourExam from "./YourExam";

function ListExams() {
	const listExams = [
		{ title: "Bài kiểm tra nâng cao về Hóa học", birth: "17/05/2024", app: "azota", author: "Nguyễn Văn A" },
		{ title: "Thử thách Toán học nâng cao", birth: "17/05/2024", app: "azota", author: "Trần Thị B" },
		{ title: "Đánh giá năng lực Tiếng Anh nâng cao", birth: "17/05/2024", app: "azota", author: "Lê Văn C" },
		{ title: "Kiểm tra Vật lý nâng cao", birth: "17/05/2024", app: "azota", author: "Dương Thị D" },
		{ title: "ôn tập Lịch sử nâng cao", birth: "17/05/2024", app: "azota", author: "Phạm Văn E" },
		{ title: "Thử thách Địa lý nâng cao", birth: "17/05/2024", app: "azota", author: "Bùi Thị G" },
		{ title: "Đánh giá năng lực Sinh học nâng cao", birth: "17/05/2024", app: "azota", author: "Đặng Thị H" },
	];
	return (
		<div id="listExams" className="scrollY">
			<ul>
                {listExams.map((exam) => <YourExam key={exam.title} exam={exam}/>)}
            </ul>
		</div>
	);
}

export default React.memo(ListExams);