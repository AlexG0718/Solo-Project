import React from 'react';
import ShareQuote from './sharequote.jsx';

const SavedQuotes = (props) => {
  const { quote, author, category, quoteList } = props;
  return (
    <div className="saved-quote-outer">
      <div className="saved-quote-inner">
        <section className="saved-quote">
          <div className="saved-quote-quote">
            <span className="label-render">Quote: </span>
            {quote}
          </div>
          <div className="saved-quote-author">
            <span className="label-render">Author: </span>
            {author}
          </div>
          <div className="saved-quote-category">
            <span className="label-render">Category: </span>
            {category}
          </div>
        </section>
        <ShareQuote quote={quote} author={author} quoteList={quoteList} />
      </div>
    </div>
  );
};

export default SavedQuotes;
