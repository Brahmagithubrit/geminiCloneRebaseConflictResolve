import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTools,
  faMicrophone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "../styles/searchBar.css";

export default function SearchBar() {
  const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const [searchQuery, setSearchQuery] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [contentList, setContentList] = useState([]);

  const handleSend = async () => {
    if (!searchQuery.trim()) return;
    setContentList((prev) => [
      ...prev,
      { message: searchQuery, isUser: true },
    ]);
    setSearchQuery("");
    setContentList((prev) => [
      ...prev,
      { message: "Gemini is typing...", isUser: false, isLoading: true },
    ]);
    try {
      const data = await getResponse(searchQuery);
      const cleaned = data.replace(/\n{2,}/g, "\n\n").trim();
      setContentList((prev) => {
        const newList = [...prev];
        newList[newList.length - 1] = { message: cleaned, isUser: false };
        return newList;
      });
    } catch (e) {
      setContentList((prev) => {
        const newList = [...prev];
        newList[newList.length - 1] = { message: "Error: " + e.message, isUser: false };
        return newList;
      });
    }
  };

  async function getResponse(searchQuery) {
    try {
      const data = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        { contents: [{ parts: [{ text: searchQuery }] }] },
        { headers: { "Content-Type": "application/json", "X-goog-api-key": geminiApiKey } }
      );
      return data.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini";
    } catch (e) {
      return "Error: " + e.message;
    }
  }

  return (
    <div className="search-container">
      {searchActive && (
        <div className="Content">
          <ul>
            {contentList.map((val, ind) => (
              <li key={ind} className={val.isUser ? "isUserTurn" : "isBotTurn"}>
                {val.isUser ? val.message : <ReactMarkdown>{val.message}</ReactMarkdown>}
              </li>
            ))}
          </ul>
        </div>
      )}
      {!searchActive && <h1 id="heading">Meet Gemini, Your Personal AI Assistant</h1>}
      <div className={`FullSearchBar ${searchActive ? "active" : ""}`}>
        <input
          placeholder="Search"
          value={searchQuery}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setSearchActive(true)}
        />
        <div className="underSearch">
          <div className="underSearch-left">
            <button><FontAwesomeIcon icon={faPlus} /></button>
            <button>
              <div className="Tools">
                <FontAwesomeIcon icon={faTools} />
                <p id="tool-name">Tools</p>
              </div>
            </button>
          </div>
          <div className="underSearch-right">
            <button>
              {searchActive ? (
                <FontAwesomeIcon onClick={handleSend} icon={faPaperPlane} />
              ) : (
                <FontAwesomeIcon icon={faMicrophone} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
