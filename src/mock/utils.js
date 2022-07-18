import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

export const getRandomNumber = (min, max) => Math.round((Math.random() * (max - min)) + min);

export const getRandomElement = (array) => array[getRandomNumber(0, array.length)];

export const getRandomDate = (hoursGap) => dayjs().add(getRandomNumber(-hoursGap, hoursGap), 'hour').toDate();

export const getRandomBoolean = () => Boolean(getRandomNumber(0, 1));

export const getRandomId = () => nanoid();
