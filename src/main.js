import { createHeaderFiltersTemplate } from './view/header-filters';
import { createHeaderInfoTemplate } from './view/header-info';
import { createHeaderNavigationTemplate } from './view/header-navigation';
import { createMainEventsListTemplate } from './view/main-events-list';
import { createMainSortTemplate } from './view/main-sort';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const headerMenu = document.querySelector('.trip-main');
const headerNavigationContainer = headerMenu.querySelector('.trip-controls__navigation');
const headerFiltersContainer = headerMenu.querySelector('.trip-controls__filters');

const mainContainer = document.querySelector('.trip-events');

render(headerMenu, createHeaderInfoTemplate(), 'afterbegin');
render(headerNavigationContainer, createHeaderNavigationTemplate(), 'beforeend');
render(headerFiltersContainer, createHeaderFiltersTemplate(), 'beforeend');

render(mainContainer, createMainSortTemplate(), 'beforeend');
render(mainContainer, createMainEventsListTemplate(), 'beforeend');
