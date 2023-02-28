import "../styles/chatBot.css"
import loginVec from "../assets/login-vec.svg";
import React from 'react'

function chatBot() {
  return (
    <div id="app">
      <div id="chat_container"></div>

      <form>
        <textarea name="prompt" rows="1" cols="1" placeholder="Talk to Mind Mate ...."></textarea>
        <button type="submit">
            <img src="../assets/send.svg" alt="send" />
        </button>
      </form>
    </div>
  );
}

export default chatBot