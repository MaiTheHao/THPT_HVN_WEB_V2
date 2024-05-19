import { Layout1, Layout2 } from "./components/layouts/Layouts";
import Exam from "./components/page/Exam/Exam";
import Home from "./components/page/Home/Home";
import Introduce from "./components/page/Introduce/Introduce";
import Library from "./components/page/Library/Library";
import Class from "./components/page/OBJ/Classes/Class";
import Group from "./components/page/OBJ/Groups/Group";
import Member from "./components/page/OBJ/Members/Member";
import Rank from "./components/page/Rank/Rank";
import Update from "./components/page/Update/Update";

export const routes = [
	{ id: "pageHome", path: "/home", title: "TRANG CHỦ", Component: Home, Layout: Layout2 },
	{ id: "pageMember", path: "/member", title: "THÀNH VIÊN", Component: Member, Layout: Layout2 },
	{ id: "pageClass", path: "/class", title: "LỚP", Component: Class, Layout: Layout2 },
	{ id: "pageGroup", path: "/group", title: "NHÓM", Component: Group, Layout: Layout2 },
	{ id: "pageLibary", path: "/library", title: "THƯ VIỆN", Component: Library, Layout: Layout2 },
	{ id: "pageExam", path: "/exam", title: "BÀI KIỂM TRA", Component: Exam, Layout: Layout2 },
	{ id: "pageRank", path: "/rank/*", title: "BẢNG XẾP HẠNG", Component: Rank, Layout: Layout2 },
	{ id: "pageIntroduce", path: "/introduce", title: "GIỚI THIỆU", Component: Introduce, Layout: Layout2 },
	{ id: "pageUpdate", path: "/update", title: "CẬP NHẬT THÔNG TIN", Component: Update, Layout: Layout2 },
	{ id: "pageAction", path: "/", title: "HOẠT ĐỘNG ĐOÀN", Component: Home, Layout: Layout1 },
];
