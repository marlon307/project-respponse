import image0 from 'assets/img/etty-fidele-l5rez6X2m8k-unsplash 1.png';
import image1 from 'assets/img/nojan-namdar-a3RhaDG_pNM-unsplash 1.png';
import image3 from 'assets/img/jonas-jaeken-31upv631160-unsplash 4.png';

const mockBag = [{
  id: 0,
  title: 'Algodão Pima',
  type: 'Jérsei',
  mainImg: image0,
  price: 71.25,
  oldPrice: 75.00,
  colorName: 'Azul',
  color: '#74bcf7',
  size: 'M',
  quantity: 2,
  discount: 5,
  identifyBag: '0#74bcf7M',
}, {
  id: 1,
  title: 'Secrect state',
  type: 'Terno',
  mainImg: image1,
  price: 150.00,
  oldPrice: 150.00,
  colorName: 'Azul meia noite',
  color: '#2a4f6c',
  size: 'P',
  quantity: 1,
  discount: 0,
  identifyBag: '1#2a4f6cP',
}, {
  id: 2,
  title: 'Next station',
  type: 'Jaqueta',
  mainImg: image3,
  price: 33.12,
  colorName: 'Jeans Claro',
  color: '#8297af',
  size: 'G',
  oldPrice: 36,
  quantity: 1,
  discount: 8,
  identifyBag: '2#8297afG',
}];

export default mockBag;
