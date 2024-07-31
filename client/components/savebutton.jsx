import React from 'react';
import { useState } from 'react';
import SavedQuotes from './savedquotes.jsx';

const checkList = new Set();

const SaveButton = (props) => {
  const { quote, author, category } = props;
  const [quoteList, setQuoteList] = useState([]);

  const handleClick = () => {
    if (quote && author && category) {
      if (!checkList.has(quote)) {
        checkList.add(quote);
        setQuoteList([...quoteList, [quote, author, category]]);
      }
    }
  };

  return (
    <div className="save-button-outer">
      <div className="save-button-inner">
        <button id="save-button" type="submit" onClick={(e) => handleClick()}>
          Click Here To Save Quote
        </button>
        <div className="save-quote-container">
          Saved Quotes:
          <section className="saved-quotes">
            {quoteList.map((quote) => {
              return (
                <SavedQuotes
                  id={quote[0]}
                  quote={quote[0]}
                  author={quote[1]}
                  category={quote[2]}
                  quoteList={quoteList}
                />
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default SaveButton;
