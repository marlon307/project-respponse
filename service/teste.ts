import cleanImage1 from '../assets/img/brian-lawson-a-mtphgCGo8-unsplash_1-removebg-preview.png';
import cleanImage2 from '../assets/img/brian-lawson-e9o9sAy5PL4-unsplash_1-removebg-preview.png';
import cleanImage3 from '../assets/img/nojan-namdar-a3RhaDG_pNM-unsplash_1-removebg-preview.png';

import image0 from '../assets/img/etty-fidele-l5rez6X2m8k-unsplash 1.png';

const testemockCards = [{
  id: 0,
  title: 'Nike F.C',
  type: 'Futebol',
  keyDesc: 'Nike Futebol',
  price: 68.98,
  categoryId: 0,
  descrtion: 'Do mesmo modo, a consulta aos diversos militantes desafia a capacidade de equalização de todos os recursos funcionais envolvidos.',
  branch: 'Nike',
  gender: 'Maculino',
  discount: 17,
  shipping: false,
  mainImg: image0,
  details: {
    model: 'Jaqueta',
    printPattern: 'Outras',
    mango: 'Longa',
    composition: '50% Algodão e 50% Poliéster',
    numbPocked: 2,
    length: 'Ombro: 17cm Ombro a Ombro: 58cm Manga: 70cm Tórax: 128cm Comprimento: 79cm',
    modelMeasures: 'Altura: 1,87m/ Tórax: 93cm/ Manequim 38',
    available: true,
    wash: 'Pode ser na maquina',
    kindfabric: 'Moletom não flanelado (Moletinho)',
    specialFeatures: 'Possui capuz com ajuste',
  },
  specification: {
    sku: 'NE224SRM17PRY',
    model: 'New Era NEI18MOL026',
    occasion: 'de uso Casual',
    typeshipping: 'Leve',
  },
  options: {
    P: [{
      quantity: 8,
      colorName: 'Preto',
      color: '#000',
    }, {
      quantity: 50,
      colorName: 'Azul',
      color: '#2e9cc3',
    }],
    PP: [{
      quantity: 8,
      colorName: 'Preto',
      color: '#000',
    }],
    GG: [{
      quantity: 8,
      colorName: 'Preto',
      color: '#000',
    }],
    G: [{
      quantity: 8,
      colorName: 'Branco',
      color: '#fff',
    }],
    M: [{
      quantity: 8,
      colorName: 'Azul',
      color: '#2e9cc3',
    }],
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
  },
}];

export default testemockCards;
