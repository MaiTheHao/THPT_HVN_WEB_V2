import { useEffect, useRef, useState } from "react";
import useAppContext from "../../Context/UseAppContext";
import HVNBANNER from "../../pic/HVN_banner-icon.jpg";
import { ChatGemini, AiName } from "../Gemini";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SupportAI() {
	const { auth } = useAppContext();
	const [inputValue, setInputValue] = useState("");
	const [chatHistory, setChatHistory] = useState([{ message: "Xin chào, bạn có cần trợ giúp gì không?", objectType: false, objectName: AiName }]);
	const [mountPannel, setMountPannel] = useState(false);

	const handleUpdateChatHistory = (e, message = "Xin chào, bạn có cần trợ giúp gì không?", objectType = false, objectName = AiName) => {
		e.preventDefault();
		// objectType true => user, false => bot
		// Cập nhật lịch sử trò chuyện
		if (inputValue.length > 0) {
			ChatGemini(message, setChatHistory);
			setChatHistory((prevChatHistory) => [...prevChatHistory, { message: message, objectType, objectName }]);
			setInputValue("");
		}
	};

	const autoScrollChatContainer = useRef();

	const scrollToBottom = () => {
		autoScrollChatContainer.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [chatHistory]);

	const renderChatHistory = () =>
		chatHistory.map((chat, index) => (
			<div key={`SupportAiChat-${index}`} className={`chat-box ${chat.objectType ? "typeUser" : "typeBot"}`}>
				<span className="objectName">{chat.objectName}</span>
				<p className="message">{chat.message}</p>
			</div>
		));

	const inputForm = () => (
		<form onSubmit={(e) => handleUpdateChatHistory(e, inputValue, true, auth.userName || "Người dùng")} className="chat-input">
			<div>
				<input id="userInput" value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Nhập tin nhắn..." />
				<FontAwesomeIcon icon={faMagnifyingGlass} onClick={(e) => handleUpdateChatHistory(e, inputValue, true, auth.userName || "Người dùng")} />
			</div>
		</form>
	);

	return (
		<div id="comp_SupportAi">
			<div onClick={() => setMountPannel(!mountPannel)} className="chat-pupple" style={{ display: !mountPannel ? "block" : "none" }}>
				<img alt="none" src={HVNBANNER}></img>
			</div>
			<div className="chat-container" style={{ display: mountPannel ? "flex" : "none" }}>
				<div className="chat-exit">
					<FontAwesomeIcon icon={faXmark} onClick={() => setMountPannel(!mountPannel)} />
				</div>
				<div className="chat-list scrollY">
					{renderChatHistory()}
					<div ref={autoScrollChatContainer}></div>
				</div>
				{inputForm()}
			</div>
		</div>
	);
}

export default SupportAI;
