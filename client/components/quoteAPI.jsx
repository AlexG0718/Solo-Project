import React from 'react';
import Categories from '../components/Categories.jsx';
import { useState } from 'react';
import QuoteDisplay from '../components/quotedisplay.jsx';

const QuoteAPI = (props) => {
  const [quote, setQuote] = useState('');
  const [category, setCategory] = useState('');
  const [quoteList, setQuoteList] = useState([]);

  const handleSelect = async (e) => {
    setCategory(e);
    try {
      //   const fetchedQuote = await fetch(
      //     'https://api.api-ninjas.com/v1/quotes?category=' + category,
      //     {
      //       method: 'GET',
      //       headers: { 'X-Api-Key': 'RW2z72sDh5rhcuMRGN/DMQ==rITkXYIbLpquXurI' },
      //       contentType: 'application/json',
      //     }
      //   );
      const fetchedQuote = await fetch('http://localhost:8080/api', {
        method: 'POST',
        body: category,
        'Content-Type': 'application/json',
      });
      const newQuote = await fetchedQuote.json();
      setQuote(newQuote);
      setQuoteList([...quoteList, quote]);
      props.quote = quote.quote;
      props.author = quote.author;
      props.category = quote.category;
      setQuote('');
    } catch {
      throw new Error('Your request was not able to be fulfilled at this time');
    }
  };

  return (
    <div className="quote-outer">
      <div className="quote-inner">
        <form id="cat-form" type="text">
          <label className="cat-form-label">Select Category: </label>
          <select
            id="catmenu"
            onChange={(e) => {
              handleSelect(e.target.value);
            }}
          >
            <option value="age">Age</option>
            <option value="alone">Alone</option>
            <option value="amazing">Amazing</option>
            <option value="anger">Anger</option>
            <option value="architecture">Architecture</option>
            <option value="art">Art</option>
            <option value="attitude">Attitude</option>
            <option value="beauty">Beauty</option>
            <option value="best">Best</option>
            <option value="birthday">Birthday</option>
            <option value="business">Business</option>
            <option value="car">Car</option>
            <option value="change">Change</option>
            <option value="communication">Communication</option>
            <option value="computers">Computers</option>
            <option value="cool">Cool</option>
            <option value="courage">Courage</option>
            <option value="dad">Dad</option>
            <option value="dating">Dating</option>
            <option value="death">Death</option>
            <option value="design">Design</option>
            <option value="dreams">Dreams</option>
            <option value="education">Education</option>
            <option value="environmental">Environmental</option>
            <option value="equality">Equality</option>
            <option value="experience">Experience</option>
            <option value="failure">Failure</option>
            <option value="faith">Faith</option>
            <option value="family">Family</option>
            <option value="famous">Famous</option>
            <option value="fear">Fear</option>
            <option value="fitness">Fitness</option>
            <option value="food">Food</option>
            <option value="forgiveness">Forgiveness</option>
            <option value="freedom">Freedom</option>
            <option value="friendship">Friendship</option>
            <option value="funny">Funny</option>
            <option value="future">Future</option>
            <option value="good">Good</option>
            <option value="government">Government</option>
            <option value="graduation">Graduation</option>
            <option value="great">Great</option>
            <option value="happiness">Happiness</option>
            <option value="health">Health</option>
            <option value="history">History</option>
            <option value="home">Home</option>
            <option value="hope">Hope</option>
            <option value="humor">Humor</option>
            <option value="imagination">Imagination</option>
            <option value="inspirational">Inspirational</option>
            <option value="intelligence">Intelligence</option>
            <option value="jealousy">Jealousy</option>
            <option value="knowledge">Knowledge</option>
            <option value="leadership">Leadership</option>
            <option value="learning">Learning</option>
            <option value="legal">Legal</option>
            <option value="life">Life</option>
            <option value="love">Love</option>
            <option value="marriage">Marriage</option>
            <option value="medical">Medical</option>
            <option value="mom">Mom</option>
            <option value="money">Money</option>
            <option value="morning">Morning</option>
            <option value="movies">Movies</option>
            <option value="success">Success</option>
          </select>
        </form>
        <QuoteDisplay quote={quote} />
        <div className="cat-list-container">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default QuoteAPI;
