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

  const handleState = (deleteQuote) => {
    let newQuoteList = quoteList.slice();
    newQuoteList.map((quoteArr, idx) => {
      if (quoteArr[0] === deleteQuote) {
        newQuoteList.splice(idx, 1);
      }
    });
    setQuoteList(newQuoteList);
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
                  key={quote[0]}
                  id={quote[0]}
                  quote={quote[0]}
                  author={quote[1]}
                  category={quote[2]}
                  quoteList={quoteList}
                  handleState={handleState}
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
