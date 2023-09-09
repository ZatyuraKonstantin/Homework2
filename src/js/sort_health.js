export const characters = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];
  
  characters.sort((a, b) => a.health - b.health);
  characters.reverse();


  
