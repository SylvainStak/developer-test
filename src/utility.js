const utility = {
  appUri: '/developer-test',
  capitalizeName: name => name.charAt(0).toUpperCase() + name.slice(1),
  typeColors: {
    'normal': '#AAB09F',
    'fighting': '#CB5F48',
    'flying': '#7DA6DE',
    'poison': '#B468B7',
    'ground': '#CC9F4F',
    'rock': '#B2A061',
    'bug': '#94BC4A',
    'ghost': '#846AB6',
    'steel': '#89A1B0',
    'fire': '#EA7A3C',
    'water': '#539AE2',
    'grass': '#71C558',
    'electric': '#E5C531',
    'psychic': '#E5709B',
    'ice': '#70CBD4',
    'dragon': '#6A7BAF',
    'dark': '#736C75',
    'fairy': '#E397D1',
    'unknown': '#c8ccd1',
    'shadow': '#191a37',
  },
  reactQueryTimings: {
    pokemonList: {
      staleTime: 100000,
      cacheTime: 100000,
    },
    pokemonDetail: {
      staleTime: 100000,
      cacheTime: 100000,
    },
    berryList: {
      staleTime: 100000,
      cacheTime: 100000,
    },
    berryDetail: {
      staleTime: 100000,
      cacheTime: 100000,
    },
    generationList: {
      staleTime: 100000,
      cacheTime: 100000,
    },
    generationDetail: {
      staleTime: 100000,
      cacheTime: 100000,
    },
  },
};

export default utility;
