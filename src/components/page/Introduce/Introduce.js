import React from "react";
import "./Introduce.scss";
import Container from "./child/Container";

// Render Container: [{title, listContext}]

function Introduce() {
	const data = [
		{
			title: `TRƯỜNG THPT HUỲNH VĂN NGHỆ`,
			listContext: [
				{
					type: "para",
					icon: "star",
					dataStruct: {
						title: `Những dấu ấn và cột mốc lịch sử quan trọng`,
						listPara: [
							{
								title: "Năm ra đời (1959)",
								description: [
									"Trên vùng đất Chiến khu “Đ” bom cày đạn xới, ngôi trường trung học đầu tiên của tỉnh Phước Thành cũ ra đời trong sự đùm bọc của nhân dân Tân Uyên.",
									"Lúc đó ngôi trường có tên khai sinh là Trần Quốc Tuấn.",
								],
							},
							{
								title: "Nguồn gốc tên trường hiện nay",
								description: [
									"Từ năm 1992 - 1993 đến nay trường mang tên người con ưu tú của vùng đất cách mạng chiến khu Đ, trường THPT Huỳnh Văn Nghệ.",
								],
							},
						],
					},
				},{
					type: "para",
					icon: "star",
					dataStruct: {
						title: "Thành tựu nổi bật",
						listPara: [
							{
								title: "Năm 1997 -2003",
								description: [
									"Trường được Thủ tướng Chính phủ tặng Bằng khen cho tập thể trường.",
								],
							},
							{
								title: "Năm 1999",
								description: [
									"Trường đã vinh dự được Chủ tịch nước Trần Đức Lương tặng Huân chương lao động hạng ba vào năm 1999.",
								]
							},
							{
								title: "Năm 2010",
								description: [
									"Năm 2010, trường THPT Huỳnh Văn Nghệ vinh dự được UBND tỉnh Bình Dương công nhận là trường đạt chuẩn quốc gia cùng nhiều thành tích đáng ghi nhận khác.",
								],
							},
							{
								title: " ",
								description: [
									"Trường đã từng bước đặt cho mình những cột mốc lịch sử quan trọng trong sự nghiệp bách niên là thụ nhân.",
								]
							}
						],
					},
				},
			],
		},
		{
			title: "THI TƯỚNG HUỲNH VĂN NGHỆ",
			listContext: [
				{
					type: "para",
					icon: "heart",
					dataStruct: {
						title: `Vài nét về Thi tướng Huỳnh Văn Nghệ`,
						listPara: [
							{
								title: "Năm sinh, quê quán",
								description: [
									"Sinh ngày 12 tháng 2 năm 1914.",
									"Làng Tân Tịch, Tân Uyên, tỉnh Biên Hòa (nay thuộc xã Thường Tân, huyện Bắc Tân Uyên, tỉnh Bình Dương), trong một gia đình nghèo.",
								],
							},
							{
								title: " ",
								description: [
									"Nhà cách mạng, nhà thơ, Anh hùng LLVT, Giải thưởng Nhà nước về nghệ thuật (1914-1977).",
									"Không chỉ là một chỉ huy quân sự tài ba, ông còn là một nhà thơ nổi tiếng.",
									'Đồng đội và nhân dân miền Nam gọi ông là "Thi tướng rừng xanh"',
								],
							},
						],
					},
				},
				{
					type: "para",
					icon: "fire",
					dataStruct: {
						title: `Sự nghiệp cách mạng`,
						listPara: [
							{
								title: "Tư tưởng cách mạng",
								description: [
									"Từ nhỏ Huỳnh Văn Nghệ đã chứng kiến cảnh áp bức, bóc lột bất công của bọn thực dân, quan lại nên đã hun đúc trong tâm hồn của nhà yêu nước ý chí, nghị lực đấu tranh và sớm giác ngộ lý tưởng cách mạng.",
								],
							},
							{
								title: "Đóng góp",
								description: [
									"Trải qua nhiều trọng trách trong Đảng, Nhà nước, quân đội với những thành tích đặc biệt xuất sắc.",
									"Kinh qua nhiều chức vụ khác nhau, từ Chi đội trưởng, Trung đoàn trưởng, Tư lệnh Khu 7, Phó Tư lệnh khu Sài Gòn - Chợ Lớn, ở cương vị nào ông cũng hoàn thành xuất sắc nhiệm vụ, tập hợp được lực lượng tạo thành sức mạnh cho phong trào cách mạng dân tộc.",
								],
							},
							{
								title: "Các trận đánh có sự tham gia của ông",
								description: [
									"1 tháng 3 năm 1948",
									"Khởi nghĩa Nam kỳ 1940" ,"Trận đánh giao thông đường sắt 14-7-1947", "Trận đánh La Ngà Quốc lộ 20",
									"Ông đã chỉ huy nhiều trận đánh lớn tại miền Đông, đặc biệt với trận La Ngà ngày 1 tháng 3 năm 1948, đây là trận giao thông chiến lớn nhất Nam bộ kể từ ngày Pháp tái chiếm Nam Bộ",
									"Đây chỉ là một số trận đánh tiêu biểu, có nhiều chiến công khác của ông đã góp phần quan trọng vào cuộc kháng chiến chống thực dân Pháp và đế quốc Nhật."
								]
							},
						],
					},
				},
				{
					type: "para",
					icon: "star",
					dataStruct: {
						title: `Cuộc đời thi sĩ`,
						listPara: [
							{
								title: "Thi tướng tài ba",
								description: [
									"Nhìn trên phương diện văn học sử, có thể nói Huỳnh Văn Nghệ là một trường hợp đặc biệt của thi ca Việt Nam hiện đại nói chung và phong trào Thơ mới nói riêng.",
									"Huỳnh Văn Nghệ không chỉ là một nhà chỉ huy quân sự tài năng, kiên cường, oanh liệt mà còn là một cây bút tràn đầy nhiệt huyết trong lĩnh vực thơ ca.",
									"Qua các tác phẩm của ông, người đọc có thể hiểu thêm về quê hương, gia đình, cuộc đời binh nghiệp, văn nghiệp của ông, của cuộc kháng chiến gian khổ, trường kỳ, oanh liệt của dân tộc và nhân dân miền Đông Nam bộ.",
									"Đặc biệt bài thơ  “Nhớ Bắc” đã trở thành thi phẩm kinh điển trong đời sống tinh thần của hàng triệu người dân Việt Nam.",
								],
							},
						],
					},
				},
			],
		},
	];
	return (
		<div id="comp_Introduce" className="web_Component">
			{data?.map((obj, index) => (
				<Container key={`IntroduceContainer_${index}`} title={obj?.title} listContext={obj?.listContext} />
			))}
		</div>
	);
}

export default Introduce;
