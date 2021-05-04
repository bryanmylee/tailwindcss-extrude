const plugin = require('tailwindcss/plugin');
const flattenColors = require('./flattenColors');
const getExtrudeUtility = require('./extrude');

const defaultDepths = {
  DEFAULT: '2px',
  0: '0',
  2: '4px',
  3: '6px',
  4: '8px',
  6: '12px',
  8: '16px'
};

module.exports = plugin(
  function ({ addUtilities, theme, variants }) {
    const colors = theme('colors');
    const flatColors = flattenColors(colors);
    const depths = theme('extrude');
    const flatDepths = Object.entries(depths);
    addUtilities(getExtrudeUtility(flatColors, flatDepths), {});
  },
  {
    theme: {
      extrude: defaultDepths
    }
  }
);
