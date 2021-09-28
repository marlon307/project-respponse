import TesteSlide1 from '../assets/img/mWYhrOiAgmA.png';
import TesteSlide2 from '../assets/img/SmIlY2uAHo8.png';
import TesteSlide3 from '../assets/img/atikh-bana-_KaMTEmJnxY-unsplash.jpg';

const mockCarousel = [
  {
    id: '0',
    urlImg: TesteSlide1,
    url: '/category/tenis',
    title: 'Tenis AllStars',
    priority: true,
  },
  {
    id: '2',
    urlImg: TesteSlide2,
    url: '/category/calcas',
    title: 'Calça e Moletons',
    priority: false,
  },
  {
    id: '3',
    urlImg: TesteSlide3,
    url: '/category/oculos',
    title: 'Oculos de sol',
    priority: false,
  },
];

export default mockCarousel;
