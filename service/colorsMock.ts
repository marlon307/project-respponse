const options = [{
  colorName: 'Rosa',
  color: '#cf49cf',
  size: {
    P: 28,
    PP: 30,
    GG: 50,
    G: 40,
    M: 20,
  },
  img: ['url', 'url'],
},
{
  colorName: 'Laranja',
  color: '#cf9149',
  size: {
    P: 28,
    PP: 30,
    GG: 50,
    G: 40,
    M: 20,
  },
  img: ['url', 'url'],
},
{
  colorName: 'Azul',
  color: '#496dcf',
  size: {
    P: 28,
    PP: 30,
    GG: 50,
    G: 40,
    M: 20,
  },
  img: ['url', 'url'],
},
{
  colorName: 'Verde Claro',
  color: '#49cfbd',
  size: {
    P: 28,
    PP: 30,
    GG: 50,
    G: 40,
    M: 20,
  },
  img: ['url', 'url'],
},
];

const mockApiCards = [{
  id: 0,
  title: '',
  type: '',
  keyDesc: '',
  price: '',
  category_id: '',
  category_name: '',
  descrtion: '',
  branch: '',
  gender: 'Femenino',
  descount: 0,
  details: {
    mesh: '',
    model: '',
    material: '',
    fabrictype: '',
    pokecket: '',
    measures: '',
    length: '',
    available: true,
  },
  specification: {
    print: '',
    characteristics: '',
    wash: '',
    occasion: '',
  },
  options: [{
    colorName: '',
    color: '#fff',
    size: {
      P: 28,
      PP: 30,
      GG: 50,
      G: 40,
      M: 20,
    },
    img: ['url', 'url'],
  },
  {
    colorName: 'Cinza Escuro',
    color: '#333',
    size: {
      P: 28,
      PP: 30,
      GG: 50,
      G: 40,
      M: 20,
    },
    img: ['url', 'url'],
  },
  ],
  shipping: false,
}];

const mockApiCarousel = [{
  thumbnail: 'url',
}];

export {
  mockApiCarousel,
  options,
  mockApiCards,
};
