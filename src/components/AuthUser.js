import React, { useState, useLayoutEffect } from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import axios from "axios";
import useAppContext from "../Context/UseAppContext";

function AuthUser() {
	const { auth, setAuth } = useAppContext();
	const authLoginStatus = auth?.loginsuccess;
	const [isLoad, setIsLoad] = useState(authLoginStatus === undefined ? true : false);
	const location = useLocation();

	useLayoutEffect(() => {
		const fetchUserStatus = async () => {
			const response = await axios.get("/userstatus");
			const loginstatus = response?.data?.loginsuccess;
			const userData = {
				userName: response?.data?.userName,
				userSex: response?.data?.sex,
				userBirth: response?.data?.birth,
				userDoanVien: response?.data?.doanvien,
				userEmail: response?.data?.email,
				userFb: response?.data?.fb,
				userIns: response?.data?.ins,
				userPhone: response?.data?.phone,
				userRole: response?.data?.role,
				userAvt: response?.data?.avt,
			};

			if (authLoginStatus !== loginstatus) {
				setAuth({ ...userData, loginsuccess: loginstatus });
			}
			setIsLoad(false);
		};
		setAuth({
			...{
				userName: "Nguyễn Minh Tào", // More descriptive username
				userSex: Math.random() < 0.5 ? "Nam" : "Nữ", // Random gender (Nam/Nữ)
				userBirth: new Date(1990, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1)
					.toISOString()
					.slice(0, 10), // Random birthdate within 1990-present range
				userDoanVien: Math.random() < 0.5 ? true : false, // Random boolean for Đoàn viên
				userEmail: "sample@example.com", // Placeholder email
				userFb: "https://www.facebook.com/sampleuser", // Placeholder Facebook URL with validation (check for valid URL format)
				userIns: "https://www.instagram.com/sampleuser", // Placeholder Instagram URL with validation
				userPhone: "0912345678", // Placeholder phone number (consider phone number format restrictions)
				userRole: "Giáo viên", // Default role
				userAvt: "https://via.placeholder.com/150", // Placeholder avatar URL
			},
			loginsuccess: true,
		});
		// fetchUserStatus();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{/* {isLoad ? (
				<h1>Loading</h1>
			) : auth?.loginsuccess ? (
				<Outlet />
			) : (
				<Navigate to="/login" state={{ from: location.pathname }} replace></Navigate>
			)} */}
			<Outlet />
		</>
	);
}

export default AuthUser;
