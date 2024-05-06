import React from "react";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import ICON from "./pic/HVN_banner-trs.jpg";
import AuthUser from "./components/AuthUser";
import Login from "./components/page/login/Login";
import { routes } from "./Routes";
import store from "./store.json";

function App() {
	return (
		<BrowserRouter basename={store.routeBaseName}>
			<Routes>
				<Route path="/" element={<Navigate to="/home" ></Navigate>}></Route>
				<Route path="/login/*" element={<Login baseUrl={"/login/"} ICON={ICON} />}></Route>
				<Route element={<AuthUser />}>
					{routes.map(({ path, Component, Layout }) => (
						<Route
							key={path}
							path={path}
							element={
								<Layout>
									<Component></Component>
								</Layout>
							}
						></Route>
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
