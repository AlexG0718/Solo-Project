import React from 'react';
import { useState } from 'react';

const MessageInput = (props) => {
  const [message, setMessage] = useState('');

  return (
    <div className="chatbox-outer">
      <div className="chatbox-inner">
        <input
          id="messageinput"
          type="text"
          placeholder="Provide input here to send messages"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default MessageInput;
