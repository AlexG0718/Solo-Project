import React from 'react';
import SaveButton from './savebutton.jsx';

const QuoteDisplay = (props) => {
  const { quote, author, category } = props;
  return (
    <div className="quote-display-outer">
      <div className="quote-display-inner">
        <section className="quote-display">
          <div className="quote-render">
            <span className="label-render">Quote: </span>
            {quote}
          </div>
          <div className="author-render">
            <span className="label-render">Author:</span> {author}
          </div>
          <div className="category-render">
            <span className="label-render">Category:</span> {category}
          </div>
        </section>
        <SaveButton
          id="saveButton"
          quote={quote}
          author={author}
          category={category}
        />
      </div>
    </div>
  );
};

export default QuoteDisplay;
