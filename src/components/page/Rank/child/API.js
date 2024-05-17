import axios from "axios";

// export const GetMember = async (setProp) => {
// 	const res = axios.get("");
// 	const data = res?.data;
//     setProp(data)
// };

// export const GetGroup = async (setProp) => {
// 	const res = axios.get("");
// 	const data = res?.data;
//     setProp(data)
// };

// export const GetClass = async (setProp) => {
// 	const res = axios.get("");
// 	const data = res?.data;
//     setProp(data)
// };

export const GetMember = async (setProp) => {
	setProp( [
		{class: "12.11",role: "Học sinh",type:"Cá nhân", name: "Nguyễn Văn An", id: "01", sex: "Nam", doanvien: true, birth: "20/05/2006", email: "userexampleemail@gmail.com", phone: "0192847261", fb: "userexamplefblink", ins: "userexampleinslink",},
		{class: "11.5",role: "Cán bộ",type:"Cá nhân", name: "Trần Thị Bình", id: "02", sex: "Nữ", doanvien: true, birth: "22/01/1994", email: "userexampleemail@gmail.com", phone: "0192847261", fb: "userexamplefblink", ins: "userexampleinslink",},
		{class: "12.4",role: "Giáo viên",type:"Cá nhân", name: "Lê Văn Cường", id: "03", sex: "Nam", doanvien: true, birth: "06/12/1990", email: "userexampleemail@gmail.com", phone: "0192847261", fb: "userexamplefblink", ins: "userexampleinslink",},
		{class: "10.7",role: "học sinh",type:"Cá nhân", name: "Phạm Thị Dũng", id: "04", sex: "Nữ", doanvien: false, birth: "10/11/2008", email: "userexampleemail@gmail.com", phone: "0192847261", fb: "userexamplefblink", ins: "userexampleinslink",},
	]);
};

export const GetGroup = async (setProp) => {
	setProp([
		{role: "Nhóm thuộc quyền quản lí của nhà trường",type:"Nhóm", name: "Tuổi Trẻ Huỳnh Văn Nghệ", score: 300, id: "05", birth: "07/05/2024", totalMember: 789, monitor: "Nguyễn Văn K", field: "Các lĩnh vực/ chuyên ngành", goal: "Mục tiêu/ mục đích thành lập" },
		{role: "Nhóm thuộc quyền quản lí của nhà trường",type:"Nhóm", name: "Học Bá Tứ Hùng", score: 245, id: "06", birth: "07/05/2024", totalMember: 670, monitor: "Nguyễn Văn K", field: "Các lĩnh vực/ chuyên ngành", goal: "Mục tiêu/ mục đích thành lập" },
		{role: "Nhóm thuộc quyền quản lí của học sinh",type:"Nhóm", name: "Dân Chơi Học Vần", score: 215, id: "07", birth: "07/05/2024", totalMember: 320, monitor: "Nguyễn Văn K", field: "Các lĩnh vực/ chuyên ngành", goal: "Mục tiêu/ mục đích thành lập" },
		{role: "Nhóm thuộc quyền quản lí của học sinh",type:"Nhóm", name: "Băng Hậu Chém Gió", score: 200, id: "63", birth: "07/05/2024", totalMember: 310, monitor: "Nguyễn Văn K", field: "Các lĩnh vực/ chuyên ngành", goal: "Mục tiêu/ mục đích thành lập" },
		{role: "Nhóm thuộc quyền quản lí của học sinh",type:"Nhóm", name: "F4 Học Đường", score: 189, id: "124", birth: "07/05/2024", totalMember: 302, monitor: "Nguyễn Văn K", field: "Các lĩnh vực/ chuyên ngành", goal: "Mục tiêu/ mục đích thành lập" },
		{role: "Nhóm thuộc quyền quản lí của học sinh",type:"Nhóm", name: "Thánh Nhây Hội", score: 188, id: "1231", birth: "07/05/2024", totalMember: 297, monitor: "Nguyễn Văn K", field: "Các lĩnh vực/ chuyên ngành", goal: "Mục tiêu/ mục đích thành lập" },
		{role: "Nhóm thuộc quyền quản lí của học sinh",type:"Nhóm", name: "Chuyên Gia Chém Gió", score: 165, id: "42", birth: "07/05/2024", totalMember: 120, monitor: "Nguyễn Văn K", field: "Các lĩnh vực/ chuyên ngành", goal: "Mục tiêu/ mục đích thành lập" },
		{role: "Nhóm thuộc quyền quản lí của học sinh",type:"Nhóm", name: "Bà Tám Học Đường", score: 155, id: "11", birth: "07/05/2024", totalMember: 60, monitor: "Nguyễn Văn K", field: "Các lĩnh vực/ chuyên ngành", goal: "Mục tiêu/ mục đích thành lập" },
		{role: "Nhóm thuộc quyền quản lí của học sinh",type:"Nhóm", name: "Hội Chị Em Cà Khịa", score: 143, id: "22", birth: "07/05/2024", totalMember: 56, monitor: "Nguyễn Văn K", field: "Các lĩnh vực/ chuyên ngành", goal: "Mục tiêu/ mục đích thành lập" },
		{role: "Nhóm thuộc quyền quản lí của học sinh",type:"Nhóm", name: "Bộ Ba Siêu Quậy", score: 133, id: "421", birth: "07/05/2024", totalMember: 33, monitor: "Nguyễn Văn K", field: "Các lĩnh vực/ chuyên ngành", goal: "Mục tiêu/ mục đích thành lập" },
	]);
};

export const GetClass = async (setProp) => {
	setProp([
		{role: "Lớp học", type:"Lớp", name: "12.9", score: 300, id: "42", studyYear: "2023-2024", totalStudent: 37, boyOnGirl: "1/2", field: "KHTN", teacher: "Nguyễn Văn C", monitor: "Trần Văn K", viceMonitor: "Nguyễn Thị T"},
		{role: "Lớp học", type:"Lớp", name: "10.10", score: 299, id: "1", studyYear: "2023-2024", totalStudent: 34, boyOnGirl: "1/2", field: "Update later", teacher: "Nguyễn Văn C", monitor: "Trần Văn K", viceMonitor: "Nguyễn Thị T"},
		{role: "Lớp học", type:"Lớp", name: "12.11", score: 298, id: "52", studyYear: "2023-2024", totalStudent: 35, boyOnGirl: "1/2", field: "KHTN", teacher: "Nguyễn Văn C", monitor: "Trần Văn K", viceMonitor: "Nguyễn Thị T"},
		{role: "Lớp học", type:"Lớp", name: "11.8", score: 297, id: "12", studyYear: "2023-2024", totalStudent: 31, boyOnGirl: "1/2", field: "Update later", teacher: "Nguyễn Văn C", monitor: "Trần Văn K", viceMonitor: "Nguyễn Thị T"},
		{role: "Lớp học", type:"Lớp", name: "10.4", score: 296, id: "1124", studyYear: "2023-2024", totalStudent: 40, boyOnGirl: "1/2", field: "Update later", teacher: "Nguyễn Văn C", monitor: "Trần Văn K", viceMonitor: "Nguyễn Thị T"},
		{role: "Lớp học", type:"Lớp", name: "12.10", score: 295, id: "1242", studyYear: "2023-2024", totalStudent: 32, boyOnGirl: "1/2", field: "KHTN", teacher: "Nguyễn Văn C", monitor: "Trần Văn K", viceMonitor: "Nguyễn Thị T"},
		{role: "Lớp học", type:"Lớp", name: "10.8", score: 294, id: "112", studyYear: "2023-2024", totalStudent: 38, boyOnGirl: "1/2", field: "Update later", teacher: "Nguyễn Văn C", monitor: "Trần Văn K", viceMonitor: "Nguyễn Thị T"},
		{role: "Lớp học", type:"Lớp", name: "12.6", score: 293, id: "22", studyYear: "2023-2024", totalStudent: 30, boyOnGirl: "1/2", field: "KHXH", teacher: "Nguyễn Văn C", monitor: "Trần Văn K", viceMonitor: "Nguyễn Thị T"},
		{role: "Lớp học", type:"Lớp", name: "11.9", score: 291, id: "332", studyYear: "2023-2024", totalStudent: 37, boyOnGirl: "1/2", field: "Update later", teacher: "Nguyễn Văn C", monitor: "Trần Văn K", viceMonitor: "Nguyễn Thị T"},
		{role: "Lớp học", type:"Lớp", name: "10.3", score: 292, id: "11", studyYear: "2023-2024", totalStudent: 41, boyOnGirl: "1/2", field: "Update later", teacher: "Nguyễn Văn C", monitor: "Trần Văn K", viceMonitor: "Nguyễn Thị T"},
	]);
};
