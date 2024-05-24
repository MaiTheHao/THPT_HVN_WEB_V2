const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

const apiKey = "AIzaSyAI53Zp_po4UxkhSh4qbr08uA1Ph6gjcfY";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
	model: "gemini-1.5-flash",
});

const generationConfig = {
	temperature: 1,
	topP: 0.95,
	topK: 64,
	maxOutputTokens: 8192,
	responseMimeType: "text/plain",
};

const safetySettings = [
	{
		category: HarmCategory.HARM_CATEGORY_HARASSMENT,
		threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
	},
	{
		category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
		threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
	},
	{
		category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
		threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
	},
	{
		category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
		threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
	},
];

var chatSession = model.startChat({
	generationConfig,
	safetySettings,
	history: [],
});

async function ChatGemini(message, setState) {
	try {
		const response = await chatSession.sendMessage(`${message}. SỬ DỤNG TIẾNG VIỆT`);
		let text = response.response.text();
		// Enhanced response handling: Check for empty response and network errors
		if (!response || !response.response || !response.response.text()) {
			throw new Error("Empty response received from the model. Network issue?");
		}

		if (chatSession._history.length > 15) {
			chatSession._history = [];
			text = `${text} - ĐÃ RESET CUỘC TRÒ CHUYỆN VỚI GEMINI`;
		}

		setState((prevChatHistory) => [...prevChatHistory, { message: text, objectType: false, objectName: AiName }]); // Assuming DB.updateDB handles errors
	} catch (error) {
		console.error(`Request: ${message} ___ Error occurred: ${error.message}`); // Log the error for debugging
		let errorMessage = "Xin lỗi vì sự bất tiện, chức năng này hiện chưa hoàn thiện nên đã gặp lỗi.";

		// Improved error handling: Categorize errors for more specific messages
		if (error.message.includes("Network")) {
			errorMessage += " Do mạng lag.";
		} else if (error.message.includes("Empty")) {
			errorMessage += " Hệ thống đang gặp vấn đề xử lý.";
		} else {
			errorMessage += " Vui lòng thử lại sau.";
		}

		setState((prevChatHistory) => [...prevChatHistory, { message: errorMessage, objectType: false, objectName: AiName }]); // Update database with a more informative message
	}
}
const AiName = "Trợ lí ảo (mô hình thử nghiệm)";

module.exports = {ChatGemini, AiName};