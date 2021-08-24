import imgFemenino from '../assets/img/ian-dooley-iGh7qbW9kUM-unsplash 1.png';
import imgMasculino from '../assets/img/jonas-jaeken-31upv631160-unsplash 2.png';
import imgCriança from '../assets/img/kiana-bosman-GvleXr4tIPk-unsplash 1.png';
import imgBolsa from '../assets/img/he-s-her-lobster-9b6UhV4nLZs-unsplash 1.png';
import imgPerfumes from '../assets/img/klim-musalimov-gizyWV5IV3g-unsplash 1.png';
import imgRelogios from '../assets/img/andrew-vincentio-6o2Zx7ytgwo-unsplash 1.png';

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
  categoryId: '',
  categoryName: '',
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

const mockApiCategory = [
  {
    categoryId: '0',
    imgCategory: imgFemenino,
    categoryName: 'Femenino',
  },
  {
    categoryId: '1',
    imgCategory: imgMasculino,
    categoryName: 'Masculino',
  },
  {
    categoryId: '2',
    imgCategory: imgCriança,
    categoryName: 'Criança',
  },
  {
    categoryId: '4',
    imgCategory: imgBolsa,
    categoryName: 'Bolsa',
  },
  {
    categoryId: '5',
    imgCategory: imgPerfumes,
    categoryName: 'Perfumes',
  },
  {
    categoryId: '6',
    imgCategory: imgRelogios,
    categoryName: 'Relogios',
  },
  {
    categoryId: '7',
    imgCategory: imgRelogios,
    categoryName: 'Relogios',
  },
  {
    categoryId: '8',
    imgCategory: imgRelogios,
    categoryName: 'Relogios',
  },
  {
    categoryId: '9',
    imgCategory: imgRelogios,
    categoryName: 'Relogios',
  },
  {
    categoryId: '10',
    imgCategory: imgRelogios,
    categoryName: 'Relogios',
  },
  {
    categoryId: '11',
    imgCategory: imgRelogios,
    categoryName: 'Relogios',
  },
  {
    categoryId: '12',
    imgCategory: imgRelogios,
    categoryName: 'Relogios',
  },
  {
    categoryId: '13',
    imgCategory: imgRelogios,
    categoryName: 'Relogios',
  },
  {
    categoryId: '14',
    imgCategory: imgRelogios,
    categoryName: 'Relogios',
  },
  {
    categoryId: '15',
    imgCategory: imgRelogios,
    categoryName: 'Relogios',
  },
  {
    categoryId: '16',
    imgCategory: imgRelogios,
    categoryName: 'Relogios',
  },
  {
    categoryId: '17',
    imgCategory: imgRelogios,
    categoryName: 'Relogios',
  },
  {
    categoryId: '18',
    imgCategory: imgRelogios,
    categoryName: 'Relogios',
  },
  {
    categoryId: '19',
    imgCategory: imgRelogios,
    categoryName: 'Relogios',
  },
  {
    categoryId: '20',
    imgCategory: imgRelogios,
    categoryName: 'Relogios',
  },
];

const mockApiCarousel = [{
  thumbnail: 'url',
}];

const mockApiFilterUsed = [
  { branch: 'Lacoste' },
  {
    color: '#5549ff',
    colorName: 'Azul',
  },
  { size: 'M' },
  { tecid: 'Moleton' },
  {
    color: '#e6b207',
    colorName: 'Laranja',
  },
  { tecid: 'Tactel' },
  { size: 'GG' },
  { branch: 'Nike' },
  {
    color: '#e00606',
    colorName: 'Vermelho',
  },
];

export {
  mockApiCarousel,
  options,
  mockApiCards,
  mockApiCategory,
  mockApiFilterUsed,
};
