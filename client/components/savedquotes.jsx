import React from 'react';

const SavedQuotes = (props) => {
  const { quote, author, category } = props;
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
      </div>
    </div>
  );
};

export default SavedQuotes;
