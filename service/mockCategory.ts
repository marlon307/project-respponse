import imgMasculino from '../assets/img/jonas-jaeken-31upv631160-unsplash_1-removebg-preview.png';
import imgCriança from '../assets/img/moses-vega-_YfoApRxd4I-unsplash-removebg-preview.png';
import imgBolsa from '../assets/img/ugluk-potroshitel-XwjrPFW7xw0-unsplash-removebg-preview.png';
import imgPerfumes from '../assets/img/parth-natani-uqJdOfHGb-w-unsplash-removebg-preview.png';
import imgRelogios from '../assets/img/jess-bailey-DXd6X3wuRA0-unsplash-removebg-preview.png';
import imgTenis from '../assets/img/revolt-164_6wVEHfI-unsplash-removebg-preview.png';
import imgFemenino from '../assets/img/ian-dooley-iGh7qbW9kUM-unsplash_1-removebg-preview.png';
import slide from '../assets/img/revolt-164_6wVEHfI-unsplash.jpg';

const categorys = [
  {
    ctgID: 0,
    imgCategory: imgTenis,
    categoryName: 'Tênis',
    subTitle: 'Tênis',
    path: 'Tênis',
    color: '#f3adad',
  }, {
    ctgID: 1,
    imgCategory: imgMasculino,
    categoryName: 'Masculino',
    subTitle: 'Masculino',
    path: 'masculino',
    color: '#48ece1',
  }, {
    ctgID: 2,
    imgCategory: imgCriança,
    categoryName: 'Criança',
    subTitle: 'Criança',
    path: 'crianca',
    color: '#a2fe11',
  }, {
    ctgID: 4,
    imgCategory: imgBolsa,
    categoryName: 'Bolsa',
    subTitle: 'Bolsa',
    path: 'bolsa',
    color: '#ff6100',
  }, {
    ctgID: 5,
    imgCategory: imgPerfumes,
    categoryName: 'Perfumes',
    subTitle: 'Perfumes',
    path: 'perfumes',
    color: '#121b38',
  }, {
    ctgID: 6,
    imgCategory: imgRelogios,
    categoryName: 'Relógios',
    subTitle: 'Relógios',
    path: 'relogios',
    color: '#5dada0',
  }, {
    ctgID: 7,
    imgCategory: imgFemenino,
    categoryName: 'Femenino',
    subTitle: 'Femenino',
    path: 'femenino',
    color: '#e724e1',
  },
];

const slides = [{
  id: 0,
  srcImg: slide,
  alt: 'Tênis Nike',
  priority: true,
}];

export {
  categorys,
  slides,
};
