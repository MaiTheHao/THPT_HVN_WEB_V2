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
		// fetchUserStatus();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{/* {false ? (
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
