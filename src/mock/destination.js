import {
  DESTINATION_NAMES,
  LOREM_STRINGS,
  ELEMENTS_MAX,
  ELEMENTS_MIN } from './const.js';
import { getRandomElement, getRandomNumber } from './utils.js';

const getRandomPhoto = () => ({
  src: `http://picsum.photos/248/152?r=${Math.random()}`,
  description: getRandomElement(LOREM_STRINGS),
});

export const generateDestination = () => {
  const description = new Array(getRandomNumber(ELEMENTS_MIN ,ELEMENTS_MAX))
    .fill()
    .map(() => getRandomElement(LOREM_STRINGS))
    .join(' ');

  const pictures = new Array(getRandomNumber(ELEMENTS_MIN ,ELEMENTS_MAX))
    .fill()
    .map(() => getRandomPhoto());

  return {
    description,
    name: getRandomElement(DESTINATION_NAMES),
    pictures,
  };
};
