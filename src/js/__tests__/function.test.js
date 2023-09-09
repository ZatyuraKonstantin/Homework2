import { characters } from '../sort_health.js';

test ('check sort', () => {
 expect(characters).toEqual([
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ])
});