import React from 'react';

const ThemeMenu = (props) => {
  const themes = {
    light: 'linear-gradient(to bottom right, aliceBlue, #519ce2)',
    dark: 'linear-gradient(to bottom right, lightGrey, #223a2c)',
    // colorful: 'linear-gradient(to bottom right, #e196e1, #8218af)',
  };
  const handleChange = (theme) => {
    document.body.style.background = themes[theme];
  };
  return (
    <div className="theme-menu-container">
      <label className="theme-label">
        <span className="label-render-theme">Choose Theme</span>
      </label>
      <br></br>
      <select
        id="theme"
        className="theme-menu"
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="colorful">Colorful</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default ThemeMenu;
