import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faFire, faGraduationCap, faNewspaper, faRankingStar, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import HVNBANNER from "../../../../pic/HVN_banner-trs.jpg";
import ACT from "../../../../pic/ACT_1.jpg";
import ACT2 from "../../../../pic/ACT_2.jpg";
import React from "react";

export const ContainerElementColumn = React.memo(({ type, id, inputIcon, title, children }) => {
	return (
		<div className="container-child--Column" id={id}>
			<div className="child__header">
				<FontAwesomeIcon className={`${type}Icon`} icon={inputIcon} />
				<h3>{title}</h3>
			</div>
			<div className="child__body scrollY">{children}</div>
		</div>
	);
});

export const ContainerElementRow = React.memo(({ id, headerTitle, icon, sourceData }) => {
	const Header = ({ headerTitle, icon }) => (
		<div className="child__header">
			<FontAwesomeIcon icon={icon} />
			<h3>{headerTitle}</h3>
		</div>
	);

	const Body = ({ children }) => <div className="child__body">{children}</div>;

	return (
		<div className="container-child--Row" id={id}>
			<Header headerTitle={headerTitle} icon={icon}></Header>
			<Body>
				{sourceData?.map((obj, index) => (
					<ContainerElementRowChild key={`ContainerElementRowChild_${index}`} {...obj} />
				))}
			</Body>
		</div>
	);
});

export const ContainerNoticeElement = React.memo(() => {
	const listNoticeContainer = [
		{
			id: "hoat_dong_noi_bat",
			headerTitle: "CÁC HOẠT ĐỘNG NỔI BẬT",
			icon: faFire,
			sourceData: [
				{
					id: "hdnb1",
					finalPath: null,
					title: "CHUYẾN ĐI CỦA THANH XUÂN K11 - 2024",
					description:
						"Nhằm giáo dục truyền thống yêu nước, tự hào dân tộc, trường THPT Huỳnh Văn Nghệ đã tổ chức hoạt động về nguồn cho học sinh khối 11 tại khu di tích địa đạo Bến Cát vào ngày 25 tháng 11 năm 2024. Hoạt động thu hút 200 học sinh khối 11 tham gia theo hình thức toàn khối. Đến với khu di tích, học sinh được tham quan, tìm hiểu về lịch sử hào hùng của dân tộc, những chiến công oanh liệt của các thế hệ cha ông trong công cuộc đấu tranh giành độc lập, tự do. Sau đó, các em đã dâng hương tưởng nhớ các anh hùng liệt sĩ đã hy sinh vì Tổ quốc. Tiếp theo, học sinh được giao lưu với cán bộ ветеран, lắng nghe những câu chuyện về chiến tranh, về những hy sinh thầm lặng của các anh hùng liệt sĩ. Ngoài ra, học sinh còn tham gia thi viết cảm nhận về khu di tích và tham gia các trò chơi dân gian. Kết thúc hoạt động, học sinh đã có những bài viết cảm nhận sâu sắc về lịch sử, về những hy sinh của các anh hùng liệt sĩ. Các em cũng bày tỏ lòng biết ơn đối với các thế hệ cha ông đã dành trọn cuộc đời cho sự nghiệp giải phóng dân tộc và hứa sẽ cố gắng học tập và rèn luyện tốt để góp phần xây dựng và bảo vệ Tổ quốc. Hoạt động về nguồn đã diễn ra thành công tốt đẹp, góp phần giáo dục cho học sinh lòng yêu nước, tự hào dân tộc, ý thức trách nhiệm đối với cộng đồng. Đây là một hoạt động truyền thống cần được duy trì và phát huy trong nhà trường.",
					picSrc: ACT,
					alt: null,
				},
				{
					id: "hdnb2",
					finalPath: null,
					title: "TIẾN HÀNH ĐĂNG KÍ THI THPTQT 2024",
					description:
						"Thí sinh đăng ký thi tốt nghiệp THPT từ ngày 2/5 Học sinh lớp 12 đăng ký thi tốt nghiệp từ ngày 2/5 đến 17h ngày 10/5, theo kế hoạch của Bộ Giáo dục và Đào tạo. Theo đó, thí sinh truy cập hệ thống quản lý thi của Bộ tại địa chỉ: http://thisinh.thitotnghiepthpt.edu.vn để điền thông tin theo yêu cầu. Kỳ thi tốt nghiệp THPT 2024 diễn ra vào ngày 26-28/6. Thí sinh làm thủ tục dự thi ngày 26/6, làm bài thi Ngữ văn và Toán hôm 27/6. Ngày 28/6, thí sinh thi Ngoại ngữ và một trong hai bài thi tổ hợp là Khoa học tự nhiên (Vật lý, Hóa học, Sinh học) và Khoa học xã hội (Lịch sử, Địa lý, Giáo dục công dân với giáo dục phổ thông; hoặc Lịch sử, Địa lý với giáo dục thường xuyên).",
					picSrc: "https://th.bing.com/th/id/OIP.lL0jBFMkxoV98cgUmvUMswHaEc?w=304&h=182&c=7&r=0&o=5&dpr=2.5&pid=1.7",
					alt: null,
				},
			],
		},
		{
			id: "tin_tuc_moi",
			headerTitle: "TIN TỨC MỚI",
			icon: faNewspaper,
			sourceData: [
				{
					id: "ttm1",
					finalPath: null,
					title: "HỘI TRẠI TRUYỀN THỐNG 'KHI TÔI 18' TRƯỜNG THPT HUỲNH VĂN NGHỆ NGÀY 12 - 13/5/2024",
					description: "",
					picSrc: ACT2,
					alt: null,
				},
			],
		},
		{
			id: "tin_tuc_tuyen_sinh",
			headerTitle: "TIN TỨC TUYỂN SINH 2024-2025",
			icon: faGraduationCap,
			sourceData: [
				{
					id: "ttts1",
					finalPath: null,
					title: "THÔNG TIN KỲ THI TUYỂN SINH LỚP 10 NĂM 2024-2025",
					description: `
                        Đăng ký dự thi trực tuyến (Từ ngày 13/5-18/5/2024), Tham gia dự thi (Từ ngày 22/5-03/6/2024), Xem kết quả thi và phúc khảo bài thi (Từ ngày 20/6), Nộp hồ sơ xét tuyển và rút hồ sơ (Từ ngày 15/7-20/7/2024), Xem kết quả trúng tuyển và đăng ký nhập học (Từ ngày 26/7/2024) 
                        `,
					picSrc: null,
					alt: null,
				},
			],
		},
	];

	return (
		<>
			{listNoticeContainer.map((obj, index) => (
				<ContainerElementRow key={`ContainerElementRow_${index}`} {...obj}></ContainerElementRow>
			))}
		</>
	);
});

export const ContainerRankElement = React.memo(() => {
	const classRanks = [
		{ name: "12.9", score: 300 },
		{ name: "10.10", score: 299 },
		{ name: "12.11", score: 298 },
	];

	const groupRanks = [
		{ name: "Tuổi Trẻ Huỳnh Văn Nghệ", score: 300 },
		{ name: "Học Bá Tứ Hùng", score: 245 },
		{ name: "Dân Chơi Học Vần", score: 215 },
	];

	const studentRanks = [
		{ name: "Nguyễn Hoàng Nam - 11.6", score: 300 },
		{ name: "Trần Lê Tú Anh - 10.9", score: 245 },
		{ name: "Phạm Nguyễn Quỳnh Hoa - 10.4", score: 215 },
	];
	// Các đối tượng trên cần data từ server, và cần thiết lập api để trỏ tới đối tượng top

	const listRankContainer = [
		{
			type: "rank",
			id: "rank_classes",
			headName: "lớp",
			title: "LỚP XUẤT SẮC NHẤT",
			inputIcon: faRankingStar,
			listObj: classRanks,
		},
		{
			type: "rank",
			id: "rank_students",
			headName: null,
			title: "HỌC SINH XUẤT SẮC NHẤT",
			inputIcon: faRankingStar,
			listObj: studentRanks,
		},
		{
			type: "rank",
			id: "rank_groups",
			headName: null,
			title: "NHÓM NỔI TIẾNG NHẤT",
			inputIcon: faRankingStar,
			listObj: groupRanks,
		},
	];

	const CreateListRank = ({ headName, listObj }) => {
		return (
			<ul>
				{listObj ? (
					listObj.map(({ name, score }, index) => (
						<li key={index} className={`top ${index < 3 ? "top" + (index + 1) : "none"}`}>
							<div>
								<FontAwesomeIcon icon={index < 3 ? faCrown : faStar} />
								<h4>{`TOP ${index + 1}`}</h4>
								<FontAwesomeIcon icon={index < 3 ? faCrown : faStar} />
							</div>
							<Link to={null} className="rank__name">{`${headName ? headName.toUpperCase() + " " : ""}${name}`}</Link>
							<span className="rank__score">ĐIỂM: {score}</span>
						</li>
					))
				) : (
					<h4>...NO DATA...</h4>
				)}
			</ul>
		);
	};

	return (
		<>
			{listRankContainer.map(({ id, headName, inputIcon, title, listObj }) => (
				<ContainerElementColumn key={`ContainerElementColumn_${id}`} type="rank" id={id} inputIcon={inputIcon} title={title}>
					<CreateListRank headName={headName} listObj={listObj} />
				</ContainerElementColumn>
			))}
		</>
	);
});

export const ContainerElementRowChild = React.memo(({ id, finalPath, title, description, picSrc, addClass = "" }) => {
	const BoxImg = () => (
		<div className="box-img">
			<img alt={"Ảnh miêu tả"} src={picSrc || HVNBANNER}></img>
		</div>
	);

	const BoxText = () => {
		return (
			<div className="box-text">
				<InnerText {...{ title, description }} />
				{finalPath && (
					<Link className="box-text__more" to={finalPath}>
						Xem thêm
					</Link>
				)}
			</div>
		);
	};

	const InnerText = ({ title, description }) => (
		<div className="inner-text scrollY">
			<h5>{title || "Tiêu đề"}</h5>
			<div className="line"></div>
			<p className="description">{description || "Không có nội dung"}</p>
		</div>
	);
	return (
		<div className={`linkbox ${addClass}`} id={id}>
			<BoxImg></BoxImg>
			<BoxText></BoxText>
		</div>
	);
});