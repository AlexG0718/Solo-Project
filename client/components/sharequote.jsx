import React from 'react';

const ShareQuote = (props) => {
  const { quote, author, handleState } = props;

  const shareLink = `mailto:?body=Quote: ${quote} %0D%0A %0D%0A Author: ${author}`;

  return (
    <div className="share-delete-container">
      <div className="delete-button-container">
        <button
          className="remove-button"
          type="submit"
          onClick={(e) => handleState(quote)}
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
