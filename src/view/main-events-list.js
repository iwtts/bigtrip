import { createMainEventsListItemTemplate } from './main-events-list-item.js';

export const createMainEventsListTemplate = () =>
  `<ul class="trip-events__list">
    ${ createMainEventsListItemTemplate() }
  <ul>`;
