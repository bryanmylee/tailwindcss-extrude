module.exports = (flatColors, flatDepths) => {
  return Object.fromEntries([
    ...flatColors.map(([colorName, colorValue]) => [
      `.extrude-${colorName}`,
      {
        boxShadow: `var(--tw-extrude-x, 0) var(--tw-extrude-y, 0) 0px ${colorValue}`,
        transform: `translate(calc(var(--tw-extrude-x, 0) * -1), calc(var(--tw-extrude-y, 0) * -1))`
      }
    ]),
    ...flatDepths.map(([depthName, depthValue]) => [
      depthName === 'DEFAULT' ? '.extrude-x' : `.extrude-x-${depthName}`,
      { '--tw-extrude-x': `-${depthValue}` }
    ]),
    ...flatDepths.map(([depthName, depthValue]) => [
      depthName === 'DEFAULT' ? '.-extrude-x' : `.-extrude-x-${depthName}`,
      { '--tw-extrude-x': depthValue }
    ]),
    ...flatDepths.map(([depthName, depthValue]) => [
      depthName === 'DEFAULT' ? '.extrude-y' : `.extrude-y-${depthName}`,
      { '--tw-extrude-y': depthValue }
    ])
  ]);
};
