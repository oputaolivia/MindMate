import React, { useState } from "react";
import axios from "axios";

export default function Chat() {
  const [chat, setChat] = useState("");
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const endPoint = "https://mindmate-m3ak.onrender.com/bot/chat";

  const postToEndpoint = (chat) => {
    if (chat.trim() === "") return;
    setIsLoading(true);
    axios
      .post(endPoint, {
        prompt: chat,
      })
      .then((x) => {
        setHistory([...history, x.data?.data]);
        setIsLoading(false);
        setChat("");
      })
      .catch((x1) => {
        setIsLoading(false);
        console.log(x1);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div
      style={{
        background: "#fff",
        width: "100vw",
        height: "100vh",
        padding: "40px",
      }}
    >
      <div>
        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h3>Have a Chat with Bot</h3>
          <h5>
            Hello, I am here to speak with you, what will you like to talk about
            ?
          </h5>
        </div>

        {history?.map((x) => (
          <div style={{}}>
            <div
              style={{
                backgroundColor: "#5F1E7E",
                color: "white",
                padding: "20px",
              }}
            >
              {x.userMessage}
            </div>
            <div
              style={{
                backgroundColor: "",
                padding: "20px",
              }}
            >
              {x?.MindMate}
            </div>
          </div>
        ))}

        <div
          style={{
            marginTop: "100px",
          }}
        >
          <input
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            style={{
              padding: "10px",
              width: "100%",
              outlineColor: "#5F1E7E",
            }}
            placeholder='Type a message.......'
          />

          <button
            style={{
              backgroundColor: "#5F1E7E",
              marginTop: "10px",
              color: "white",
              padding: "15px 90px",
            }}
            onClick={() => postToEndpoint(chat)}
          >
            {isLoading ? "Loading..." : "Go"}
          </button>
        </div>
      </div>
    </div>
  );
}
