/* @flow */

const addTransparency = (
  color: string,
  transparency: string | number,
): string => {
  if (typeof color !== 'string') return '#000';
  if (color.indexOf('rgb') === -1) return color;

  const a = (
    transparency
    && (typeof transparency === 'string' || typeof transparency === 'number')
    && !Number.isNaN(+transparency)
      ? transparency
      : 1
  );

  // ['rgb(', '255,255,255)'] or ['rgba(', '255,255,255,1)']
  let rgb = color.split('(');

  // ['255,255,255'] or ['255,255,255,1']
  rgb = rgb[1].split(')');

  // ['255','255','255'] or ['255','255','255','1']
  rgb = rgb[0].split(',');

  // remove previous transparency
  if (rgb.length > 3) rgb.pop();

  return `rgba(${rgb.join(',')},${a})`;
};

export default addTransparency;
