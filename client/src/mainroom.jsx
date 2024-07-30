import React from 'react';
import MessageBox from './messagebox.jsx';

const MainRoom = (props) => {
  return (
    <div className="mainroom-container">
      <div className="mainroom-inner-container">
        <MessageBox />
      </div>
    </div>
  );
};

export default MainRoom;
