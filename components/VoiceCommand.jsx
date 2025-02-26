import React, { useState } from "react";
import axios from "axios";
import { Mic, Loader2, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

const VoiceCommand = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [response, setResponse] = useState("");

  const recognition = new window.webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  recognition.onstart = () => {
    setIsListening(true);
    console.log("Listening...");
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase().trim();
    setText(transcript);
    console.log("Recognized:", transcript);
    handleNavigation(transcript);
    sendVoiceCommand(transcript);
  };

  recognition.onend = () => {
    setIsListening(false);
    console.log("Stopped listening.");
  };

  recognition.onerror = (event) => {
    console.error("Error:", event.error);
    setIsListening(false);
  };

  const startListening = () => {
    recognition.start();
  };

  const sendVoiceCommand = async (command) => {
    try {
      const { data } = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/voice-command",
        { command }
      );
      setResponse(data.response);
    } catch (error) {
      console.error("Error sending command:", error);
    }
  };

  // ✅ Function to handle redirection to external platforms
  const handleNavigation = (command) => {
    const sites = {
      "youtube": "https://www.youtube.com",
      "chat gpt": "https://chat.openai.com",
      "teams": "https://teams.microsoft.com",
      "google classroom": "https://classroom.google.com",
      "program": "https://www.programiz.com",
      "google meet": "https://meet.google.com",
      "black box ai": "https://www.blackbox.ai",
      "outlook": "https://outlook.office.com",
      "neopat": "https://mcet848.examly.io/login",
      "ms word": "https://www.office.com/launch/word",
      "ms excel": "https://www.office.com/launch/excel"
    };

    let found = false;
    for (const [key, url] of Object.entries(sites)) {
      if (command.includes(key)) {
        window.open(url, "_blank"); // ✅ Open in a new tab
        found = true;
        break;
      }
    }

    if (!found) {
      setResponse("Sorry, I didn't understand. Try saying 'Open YouTube' or 'Go to ChatGPT'.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      <motion.div 
        className="bg-gray-800 p-8 rounded-2xl shadow-xl max-w-lg w-full text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6">🎙️ Voice Assistant</h2>

        {/* 🟢 AVATAR LISTENING ANIMATION */}
        <motion.div 
          className="w-28 h-28 rounded-full bg-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-lg"
          animate={{ scale: isListening ? 1.2 : 1 }}
          transition={{ duration: 0.3, repeat: isListening ? Infinity : 0, repeatType: "reverse" }}
        >
          {isListening ? <Loader2 className="animate-spin text-white w-12 h-12" /> : <Volume2 className="text-white w-12 h-12" />}
        </motion.div>

        {/* Voice Button */}
        <button
          onClick={startListening}
          disabled={isListening}
          className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-lg transition duration-300 ${
            isListening
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-500 shadow-md"
          }`}
        >
          {isListening ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Mic className="w-6 h-6" />
          )}
          {isListening ? "Listening..." : "Start Listening"}
        </button>

        {/* Recognized Text */}
        <div className="mt-6 p-4 bg-gray-700 rounded-lg text-gray-300 shadow-md">
          <p className="font-medium">
            <span className="font-bold text-indigo-400">Recognized:</span> {text || "No input yet"}
          </p>
        </div>

        {/* AI Response */}
        <div className="mt-4 p-4 bg-indigo-700 rounded-lg text-white shadow-md">
          <p className="font-medium">
            <span className="font-bold"> Response:</span> {response || "Awaiting response..."}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default VoiceCommand;
