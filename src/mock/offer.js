import {
  ELEMENTS_MAX,
  ELEMENTS_MIN,
  LOREM_STRINGS,
  PRICE_MAX, PRICE_MIN,
  TYPES } from './const.js';
import { getRandomElement, getRandomNumber } from './utils.js';

const getRandomOffer = () => ({
  title: getRandomElement(LOREM_STRINGS),
  price: getRandomNumber(PRICE_MIN, PRICE_MAX),
});

export const generateOffer = () => {
  const offers = new Array(ELEMENTS_MIN, ELEMENTS_MAX)
    .fill()
    .map(getRandomOffer);

  return {
    type: getRandomElement(TYPES),
    offers,
  };
};
