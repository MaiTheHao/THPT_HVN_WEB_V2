import React from "react";
import Document from "./Document";

function ListDocuments() {
	const listDocuments = [
		{
			picture: null,
			title: "Tác động của phương pháp giảng dạy trải nghiệm đến kết quả học tập sinh viên",
			description:
				"Nghiên cứu này khảo sát tác động của phương pháp giảng dạy trải nghiệm đến kết quả học tập của sinh viên đại học. Kết quả cho thấy phương pháp này có hiệu quả cao trong việc cải thiện sự tham gia, ghi nhớ và hiểu biết của sinh viên.",
			author: "Nguyễn Thị Hoa",
			birth: "20/09/1997",
			type: "Bài báo khoa học",
		},
		{
			picture: null,
			title: "Phân tích sự tham gia của phụ nữ vào thị trường lao động Việt Nam",
			description:
				"Nghiên cứu này phân tích xu hướng tham gia thị trường lao động của phụ nữ Việt Nam trong những thập kỷ qua. Nghiên cứu chỉ ra rằng tỷ lệ tham gia lao động của phụ nữ đã tăng đáng kể, tuy nhiên vẫn còn nhiều thách thức cần được giải quyết.",
			author: "Trần Văn Nam",
			birth: "15/02/1995",
			type: "Sách",
		},
		{
			picture: null,
			title: "Ảnh hưởng của văn hóa gia đình đến thái độ học tập của học sinh",
			description:
				"Nghiên cứu này khảo sát ảnh hưởng của văn hóa gia đình đến thái độ học tập của học sinh tiểu học. Kết quả cho thấy văn hóa gia đình tích cực có tác động đáng kể đến thái độ học tập của học sinh.",
			author: "Lê Thị Mai",
			birth: "12/01/2000",
			type: "Luận văn thạc sĩ",
		},
		{
			picture: null,
			title: "Nghiên cứu về mức độ hài lòng của người dân đối với các dịch vụ công",
			description:
				"Nghiên cứu này khảo sát mức độ hài lòng của người dân đối với các dịch vụ công cung cấp bởi chính quyền địa phương. Kết quả cho thấy mức độ hài lòng nhìn chung ở mức trung bình, tuy nhiên vẫn còn một số dịch vụ cần được cải thiện.",
			author: "Phạm Văn Minh",
			birth: "08/03/1992",
			type: "Báo cáo",
		},
		{
			picture: null,
			title: "Đánh giá tác động của chương trình can thiệp giáo dục giới tính đối với học sinh thanh thiếu niên",
			description:
				"Nghiên cứu này đánh giá tác động của chương trình can thiệp giáo dục giới tính đối với kiến thức, thái độ và hành vi của học sinh thanh thiếu niên. Kết quả cho thấy chương trình có hiệu quả cao trong việc nâng cao kiến thức và thay đổi thái độ của học sinh.",
			author: "Đinh Thị Lan",
			birth: "24/11/2005",
			type: "Luận văn thạc sĩ",
		},
	];

	return (
		<div id="listDocument" className="scrollY">
			<ul>
                {listDocuments.map(document => <Document key={document.title} document={document}/>)}
            </ul>
		</div>
	);
}

export default ListDocuments;
