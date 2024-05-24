import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import AppContextProvider from "./Context/AppContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AppContextProvider>
			<App></App>
		</AppContextProvider>
	</React.StrictMode>
);

// Quy ước đặt tên id cho thẻ định danh một component: comp_[name] (name viết hoa chữ cái đầu mỗi từ), VD: comp_Login, comp_ShowSubject.
// "homepage": "http://MaiTheHao.github.io/THPT_HVN",
