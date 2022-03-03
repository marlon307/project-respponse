// import clean image
import cleanImage1 from 'assets/img/brian-lawson-a-mtphgCGo8-unsplash_1-removebg-preview.png';
import cleanImage2 from 'assets/img/brian-lawson-e9o9sAy5PL4-unsplash_1-removebg-preview.png';
import cleanImage3 from 'assets/img/nojan-namdar-a3RhaDG_pNM-unsplash_1-removebg-preview.png';

const mockColort = [{
  idc: 'white001',
  colorName: 'Branco',
  color: '#fff',
  size: {
    P: 0,
    PP: 30,
    GG: 0,
    G: 40,
    M: 20,
  },
  imgs: [{
    imgid: 0,
    urlImg: cleanImage1,
  }, {
    imgid: 1,
    urlImg: cleanImage2,
  }, {
    imgid: 2,
    urlImg: cleanImage3,
  }, {
    imgid: 3,
    urlImg: cleanImage1,
  }, {
    imgid: 4,
    urlImg: cleanImage3,
  }],
}, {
  idc: 'grey002',
  colorName: 'Cinza Escuro',
  color: '#868686',
  size: {
    P: 28,
    PP: 30,
    GG: 50,
    G: 0,
    M: 20,
  },
  imgs: [{
    imgid: 0,
    urlImg: cleanImage1,
  }, {
    imgid: 1,
    urlImg: cleanImage2,
  }],
}, {
  idc: 'black003',
  colorName: 'Preto',
  color: '#000',
  size: {
    P: 0,
    PP: 30,
    GG: 50,
    G: 40,
    M: 20,
  },
  imgs: [{
    imgid: 0,
    urlImg: cleanImage1,
  }, {
    imgid: 1,
    urlImg: cleanImage2,
  }],
},
];

export default mockColort;
