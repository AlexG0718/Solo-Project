import React from 'react';
import QuoteAPI from '../components/quoteAPI.jsx';
import ThemeMenu from '../components/thememenu.jsx';

const App = (props) => {
  return (
    <div className="app-container">
      <h4>To gain inspiration, simply provide a category below</h4>
      <ThemeMenu />
      <QuoteAPI />
    </div>
  );
};

export default App;
