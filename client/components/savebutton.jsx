import React from 'react';
import { useState } from 'react';
import SavedQuotes from './savedquotes.jsx';

const SaveButton = (props) => {
  const { quote, author, category } = props;
  const [quoteList, setQuoteList] = useState([]);

  const handleClick = () => {
    setQuoteList([...quoteList, [quote, author, category]]);
  };

  return (
    <div className="save-button-outer">
      <div className="save-button-inner">
        <button id="save-button" type="submit" onClick={(e) => handleClick()}>
          Click Here To Save Quote
        </button>
        <div className="save-quote-container">
          {quoteList.map((quote) => {
            return (
              <SavedQuotes
                quote={quote[0]}
                author={quote[1]}
                category={quote[2]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SaveButton;
