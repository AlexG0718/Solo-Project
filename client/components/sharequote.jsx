import React from 'react';

const ShareQuote = (props) => {
  const { quote, author } = props;

  const shareLink = `mailto:?body=Quote: ${quote} %0D%0A %0D%0A Author: ${author}`;

  const handleClick = () => {
    const rmEle = document.getElementById(quote);
    document.remove(rmEle);
  };

  return (
    <div className="share-delete-container">
      <div className="delete-button-container">
        <button
          className="remove-button"
          type="submit"
          onClick={(e) => handleClick()}
        >
          Delete
        </button>
      </div>
      <div className="share-button-container">
        <a href={shareLink}>
          <button className="share-button" type="submit">
            Share
          </button>
        </a>
      </div>
    </div>
  );
};

export default ShareQuote;
