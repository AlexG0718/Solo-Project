import React from 'react';
import MessageInput from './messageinput.jsx';
// import { useState } from 'react';

const MessageBox = (props) => {
  return (
    <div>
      <div className="messagebox-outer">
        <div className="messagebox-inner">
          <main id="messageBox">messages go here</main>
        </div>
      </div>
      <MessageInput />
      <button id="submitbutton" type="submit">
        Send
      </button>
    </div>
  );
};

export default MessageBox;
