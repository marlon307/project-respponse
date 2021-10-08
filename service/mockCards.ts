import image0 from '../assets/img/etty-fidele-l5rez6X2m8k-unsplash 1.png';
import image1 from '../assets/img/nojan-namdar-a3RhaDG_pNM-unsplash 1.png';
import image3 from '../assets/img/kimiya-oveisi-7qis_qyDK4g-unsplash 1.png';

export const mockCards = [{
  id: 0,
  title: 'Nike F.C',
  type: 'Futebol',
  keyDesc: 'Nike Futebol',
  price: 'R$ 68,98',
  categoryId: 6,
  categoryName: 'Futebol',
  descrtion: '',
  branch: 'Nike',
  gender: 'Maculino',
  descount: 0,
  shipping: false,
  mainImg: image0,
  details: {
    mesh: 'Tactel + Algodão',
    model: 'Jaqueta',
    material: 'Algo',
    fabrictype: 'Nike',
    pokecket: '---',
    measures: '70*25*12',
    length: 'Medidas da peça: Ombro: 17cm Ombro a Ombro: 58cm Manga: 70cm Tórax: 128cm Comprimento: 79cm',
    available: true,
  },
  specification: {
    print: 'Silk',
    characteristics: 'Teste',
    wash: 'Pode se na maquina',
    occasion: 'Jogar Futebol',
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
},
{
  id: 1,
  title: 'Jérsei de Algodão Pima',
  type: 'Jérsei',
  keyDesc: '',
  price: 'R$ 150,90',
  categoryId: 5,
  categoryName: 'Casual',
  descrtion: '',
  branch: 'Lacoste',
  gender: 'Maculino',
  descount: 0,
  shipping: false,
  mainImg: image1,
  details: {
    mesh: 'Tactel + Algodão',
    model: 'Jaqueta',
    material: 'Algo',
    fabrictype: 'Lacoste',
    pokecket: '---',
    measures: '70*25*12',
    length: 'Medidas da peça: Ombro: 17cm Ombro a Ombro: 58cm Manga: 70cm Tórax: 128cm Comprimento: 79cm',
    available: true,
  },
  specification: {
    print: 'Tint',
    characteristics: 'Teste',
    wash: 'Pode se na maquina',
    occasion: 'Casual',
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
    img: ['url', 'url'],
  },
  {
    colorName: 'Rosa',
    color: '#f8a3f8',
    size: {
      P: 0,
      PP: 30,
      GG: 0,
      G: 40,
      M: 20,
    },
    img: ['url', 'url'],
  },
  {
    colorName: 'Preto',
    color: '#000',
    size: {
      P: 0,
      PP: 30,
      GG: 0,
      G: 40,
      M: 20,
    },
    img: ['url', 'url'],
  },
  ],
}];

export const mockminObjectCards = [{
  id: 0,
  title: 'Jérsei de Algodão Pima',
  type: 'Jérsei',
  mainImg: image0,
  price: 'R$ 75,00',
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
  title: 'Terno da meia noite',
  type: 'Terno',
  mainImg: image1,
  price: 'R$ 150,90',
  options: [{
    colorName: 'Branco',
    color: '#fff',
  }, {
    colorName: 'Azul',
    color: '#74bcf7',
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
}];
