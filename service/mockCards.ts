import image0 from '../assets/img/etty-fidele-l5rez6X2m8k-unsplash 1.png';
import image1 from '../assets/img/nojan-namdar-a3RhaDG_pNM-unsplash 1.png';
import image3 from '../assets/img/kimiya-oveisi-7qis_qyDK4g-unsplash 1.png';
import image4 from '../assets/img/ian-dooley-iGh7qbW9kUM-unsplash 12.png';
import image5 from '../assets/img/jonas-jaeken-31upv631160-unsplash 4.png';
// import clean image
import cleanImage1 from '../assets/img/brian-lawson-a-mtphgCGo8-unsplash_1-removebg-preview.png';
import cleanImage2 from '../assets/img/brian-lawson-e9o9sAy5PL4-unsplash_1-removebg-preview.png';
import cleanImage3 from '../assets/img/nojan-namdar-a3RhaDG_pNM-unsplash_1-removebg-preview.png';

export const mockCards = [{
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
  options: [{
    colorName: 'Branco',
    color: '#fff',
    size: {
      P: 28,
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
    colorName: 'Cinza Escuro',
    color: '#333',
    size: {
      P: 28,
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
  }, {
    colorName: 'Preto',
    color: '#000',
    size: {
      P: 28,
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
  ],
}];

export const mockminObjectCards = [{
  id: 0,
  title: 'Jérsei de Algodão Pima',
  type: 'Jérsei',
  mainImg: image0,
  price: 'R$ 75,00',
  discount: 0,
  options: [{
    colorName: 'Branco',
    color: '#000',
  }, {
    colorName: 'Azul',
    color: '#74bcf7',
  }, {
    colorName: 'Rosa',
    color: '#f5a7ff',
  }],
},
{
  id: 1,
  title: 'Secrect state',
  type: 'Terno',
  mainImg: image1,
  price: 'R$ 150,90',
  options: [{
    colorName: 'Branco',
    color: '#fff',
  }, {
    colorName: 'Azul meia noite',
    color: '#2a4f6c',
  }, {
    colorName: 'Laranja',
    color: '#f5b04aef',
  }, {
    colorName: 'Rosa',
    color: '#f5a7ff',
  }],
},
{
  id: 2,
  title: 'Prisma time',
  type: 'Relogio',
  mainImg: image3,
  price: 'R$ 150,90',
  discount: 0,
  options: [{
    colorName: 'Dourado',
    color: '#e9b065',
  }, {
    colorName: 'Aço',
    color: '#c4c4c4',
  }, {
    colorName: 'Vermelho',
    color: '#f54a4aef',
  }],
}, {
  id: 3,
  title: 'Camisa femenina blackout',
  type: 'Camisa',
  mainImg: image4,
  price: 'R$ 36,00',
  discount: 0,
  options: [{
    colorName: 'Preto',
    color: '#000',
  }, {
    colorName: 'Branco',
    color: '#fff',
  }, {
    colorName: 'Azul Claro',
    color: '#00d9ff',
  }],
}, {
  id: 4,
  title: 'Next station',
  type: 'Jaqueta',
  mainImg: image5,
  price: 'R$ 36,00',
  discount: 10,
  options: [{
    colorName: 'Jeans',
    color: '#38516d',
  }, {
    colorName: 'Jeans Claro',
    color: '#8297af',
  }],
}];
