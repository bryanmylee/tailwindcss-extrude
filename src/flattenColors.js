module.exports = (colors) => {
  const colorArray = [];
  Object.entries(colors).forEach(([color, value]) => {
    if (typeof value === 'string') {
      colorArray.push([color, value]);
      return;
    }
    colorVariants = Object.entries(value);
    colorVariants.forEach(([variant, value]) => {
      if (variant === 'DEFAULT') {
        colorArray.push([color, value]);
        return;
      }
      colorArray.push([`${color}-${variant}`, value]);
    });
  });
  return colorArray;
};
