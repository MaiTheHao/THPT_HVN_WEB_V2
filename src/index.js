import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.scss";
import AppContextProvider from './Context/AppContextProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AppContextProvider>
				<App></App>
			</AppContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// Quy ước đặt tên id cho thẻ định danh một component: comp_[name] (name viết hoa chữ cái đầu mỗi từ), VD: comp_Login, comp_ShowSubject