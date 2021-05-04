module.exports = (flatColors, flatDepths) => {
  return Object.fromEntries([
    ...flatColors.map(([name, value]) => [
      `.extrude-${name}`,
      {
        boxShadow: `0px var(--tw-extrude-depth) 0px ${value}`
      }
    ]),
    ...flatDepths.map(([depth, value]) => [
      depth === 'DEFAULT' ? '.extrude' : `.extrude-${depth}`,
      {
        transform: `translateY(-${value})`,
        '--tw-extrude-depth': value
      }
    ])
  ])
};

