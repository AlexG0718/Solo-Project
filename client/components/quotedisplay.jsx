import React from 'react';

const QuoteDisplay = (props) => {
  const { quote } = props;
  return (
    <div className="quote-display-outer">
      <div className="quote-display-inner">
        <section className="quote-display">{quote}</section>
      </div>
    </div>
  );
};

export default QuoteDisplay;
