import {
  DESTINATION_NAMES,
  HOURS_GAP,
  TYPES,
  PRICE_MAX,
  PRICE_MIN } from './const.js';
import {
  getRandomBoolean,
  getRandomDate,
  getRandomElement,
  getRandomId,
  getRandomNumber } from './utils.js';

export const generatePoint = () => {
  let dateFrom;
  let dateTo;

  const randomDateFirst = getRandomDate(HOURS_GAP);
  const randomDateSecond = getRandomDate(HOURS_GAP);

  if (randomDateFirst > randomDateSecond) {
    dateFrom = randomDateSecond;
    dateTo = randomDateFirst;
  } else {
    dateFrom = randomDateFirst;
    dateTo = randomDateSecond;
  }

  return {
    basePrice: getRandomNumber(PRICE_MIN, PRICE_MAX),
    dateFrom,
    dateTo,
    destination: getRandomElement(DESTINATION_NAMES),
    id: getRandomId(),
    isFavorite: getRandomBoolean(),
    type: getRandomElement(TYPES),
  };
};
