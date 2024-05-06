import { Layout1, Layout2 } from "./components/layouts/Layouts";
import Home from "./components/page/Home/Home";
import Introduce from "./components/page/Introduce/Introduce";
import Member from "./components/page/Member/Member";

export const routes = [
    { id: "pageHome" ,path: "/home", title: "TRANG CHỦ", Component: Home, Layout: Layout2 },
    { id: "pageMember" ,path: "/member", title: "THÀNH VIÊN", Component: Member, Layout: Layout2},
    { id: "pageClass" ,path: "/", title: "LỚP", Component: Home, Layout: Layout1},
    { id: "pageGroup" ,path: "/", title: "NHÓM", Component: Home, Layout: Layout1},
    { id: "pageLibary" ,path: "/", title: "THƯ VIỆN", Component: Home, Layout: Layout1},
	{ id: "pageIntroduce" ,path: "/introduce", title: "GIỚI THIỆU", Component: Introduce, Layout: Layout2 },
    { id: "pageUpdate" ,path: "/", title: "CẬP NHẬT THÔNG TIN", Component: Home, Layout: Layout1},
    { id: "pageRank" ,path: "/", title: "THI ĐUA", Component: Home, Layout: Layout1},
    { id: "pageELearning" ,path: "/", title: "E-LEARNING", Component: Home, Layout: Layout1},
    { id: "pageAction" ,path: "/", title: "HOẠT ĐỘNG ĐOÀN", Component: Home, Layout: Layout1},
];
